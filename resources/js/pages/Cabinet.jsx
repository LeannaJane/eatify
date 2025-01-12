import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Cabinet from '../components/Cabinet';

const CabinetPage = () => {
  const [cabinets, setCabinets] = useState([]);
  const [selectedCabinets, setSelectedCabinets] = useState([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [newCabinetTitle, setNewCabinetTitle] = useState('');
  const [itemPopupCabinetId, setItemPopupCabinetId] = useState(null);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    axios.get('/cabinets').then(response => {
      const updatedCabinets = response.data.data.map(cabinet => ({
        ...cabinet,
        items: cabinet.items || []  // Ensure items is always an array
      }));
      setCabinets(updatedCabinets);
    });
  }, []);

  // Fetch specific cabinet with items
  /*const fetchCabinetItems = (cabinetId) => {
    axios.get(`/cabinet/${cabinetId}`).then(response => {
      const cabinet = response.data.data;

      // Update the specific cabinet with the fetched items
      const updatedCabinets = cabinets.map(cabinet => {
        if (cabinet.id === cabinetId) {
          return { ...cabinet, items: cabinet.items || [] };  // Add the fetched items here
        }
        return cabinet;
      });

      setCabinets(updatedCabinets);
    }).catch(error => {
      console.error('Error fetching cabinet items:', error);
    });
  };*/

  const handleCabinetClick = (cabinetId) => {
    //fetchCabinetItems(cabinetId);
  };

  // Create a new cabinet
  const addCabinet = async () => {
    if (newCabinetTitle.trim() === '') return;

    try {
      const cabinet = await axios.post('/cabinet/create', { title: newCabinetTitle });
      setCabinets([...cabinets, { ...cabinet.data.data, items: [] }]); // Ensure empty items initially
      setShowPopup(false);
      setNewCabinetTitle('');
    } catch (error) {
      console.error('Error creating cabinet:', error);
    }
  };

  // Delete selected cabinets
  const deleteCabinet = () => {
    if (selectedCabinets.length > 0) {
      axios.post('/cabinets/delete', { ids: selectedCabinets }).then(() => {
        const newCabinets = cabinets.filter(cabinet => !selectedCabinets.includes(cabinet.id));
        setCabinets(newCabinets);
        setSelectedCabinets([]);
        setIsDeleteMode(false);
      }).catch(error => {
        console.error('Error deleting cabinets:', error);
      });
    } else {
      setIsDeleteMode(!isDeleteMode);
    }
  };

  const toggleCabinetSelection = (cabinetId) => {
    if (selectedCabinets.includes(cabinetId)) {
      setSelectedCabinets(selectedCabinets.filter(id => id !== cabinetId));
    } else {
      setSelectedCabinets([...selectedCabinets, cabinetId]);
    }
  };

  const addItemToCabinet = (cabinetId) => {
    if (newItem.trim() === '') return;

    setNewItem('');  // Reset input field
    setItemPopupCabinetId(null); // Close the item add popup

    // Make the POST request to update the backend
    axios.post(`/cabinet/${cabinetId}/add-item`, { item: newItem })
      .then(response => {
        // Optionally, you can update the state with the response to ensure consistency with the backend
        const updatedCabinetsFromBackend = cabinets.map(cabinet => {
          if (cabinet.id === cabinetId) {
            // Replace the items with the response's updated items list (if necessary)
            return { ...cabinet, items: response.data.data || [...cabinet.items, newItem] };
          }
          return cabinet;
        });

        setCabinets(updatedCabinetsFromBackend); // Ensure the local state reflects backend data
      })
      .catch(error => {
        console.error('Error adding item:', error);
      });
  };


  const deleteItemToCabinet = (cabinetId, itemId) => {
    axios.post(`/cabinet/${cabinetId}/delete-item`, { itemId })
      .then(response => {
        if(!response.data.error) {
            setCabinets(prevCabinets =>
                prevCabinets.map(cabinet =>
                  cabinet.id === cabinetId
                    ? {
                        ...cabinet,
                        items: cabinet.items = response.data.data
                      }
                    : cabinet
                )
            );
        }
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  };



  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className="content">
        <h1 className="cabinet-title">Your Storage</h1>
        <button
          className="add-cabinet-button"
          onClick={() => setShowPopup(true)}
        >
          Add Cabinet
        </button>

        <button
          className="delete-cabinet-button"
          onClick={deleteCabinet}
        >
          Delete
        </button>

        <div className="cabinet-container">
          {cabinets.map(cabinet => (
            <div key={cabinet.id} className="cabinet-wrapper" onClick={() => handleCabinetClick(cabinet.id)}>
              <Cabinet
                title={cabinet.title}
                items={cabinet.items} // Pass items to the Cabinet component
                onSelect={() => toggleCabinetSelection(cabinet.id)}
                isSelected={selectedCabinets.includes(cabinet.id)}
                isDeleteMode={isDeleteMode}
              />
              <button
                onClick={() => setItemPopupCabinetId(cabinet.id)}
                className="add-item-button"
              >
                Add Items
              </button>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    const itemId = prompt('Enter the ID of the item to delete:');
                    if (itemId) {
                        deleteItemToCabinet(cabinet.id, itemId);
                    }
                }}
                className="delete-item-button"
            >
                Delete Item
            </button>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Add New Cabinet</h2>
            <input
              type="text"
              placeholder="Enter Cabinet Title"
              value={newCabinetTitle}
              onChange={(e) => setNewCabinetTitle(e.target.value)}
            />
            <button onClick={addCabinet}>Save</button>
            <button onClick={() => setShowPopup(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Popup for adding items to a cabinet */}
      {itemPopupCabinetId && (
        <div className="popup">
          <div className="popup-content">
            <h2>Add Item</h2>
            <input
              type="text"
              placeholder="Enter Item"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={() => addItemToCabinet(itemPopupCabinetId)}>Save</button>
            <button onClick={() => setItemPopupCabinetId(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CabinetPage;
