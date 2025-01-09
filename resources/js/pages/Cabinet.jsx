import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Cabinet from '../components/Cabinet';

const CabinetPage = () => {
  const [cabinets, setCabinets] = useState([]);
  const [selectedCabinets, setSelectedCabinets] = useState([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  useEffect(() => {
    axios.get('/cabinets').then(response => {
      setCabinets(response.data);
    });
  }, []);

  const addCabinet = async () => {
    let cabinet = await axios.post('/cabinet/create');
    setCabinets([...cabinets, cabinet.data]);
  };

  const deleteCabinet = () => {
    if (selectedCabinets.length > 0) {
      axios.post('/cabinets/delete', { ids: selectedCabinets }).then(() => {
        const newCabinets = cabinets.filter(cabinet => !selectedCabinets.includes(cabinet.id));
        setCabinets(newCabinets);
        setSelectedCabinets([]);
        setIsDeleteMode(false);
      });
    } else {
      setIsDeleteMode(!isDeleteMode);
    }
  };

  const toggleCabinetSelection = (cabinet_id) => {
    if (selectedCabinets.includes(cabinet_id)) {
      setSelectedCabinets(selectedCabinets.filter(i => i !== cabinet_id));
    } else {
      setSelectedCabinets([...selectedCabinets, cabinet_id]);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className="content">
        <h1 className="cabinet-title">Cabinet Page</h1>
        <button className="add-cabinet-button" onClick={addCabinet}>
          Add
        </button>
        <button className="delete-cabinet-button" onClick={deleteCabinet}>
          Delete
        </button>
        <div className="cabinet-container">
          {cabinets.map(cabinet => (
            <div key={cabinet.id} className="cabinet-wrapper">
              <Cabinet
                onSelect={() => toggleCabinetSelection(cabinet.id)}
                isSelected={selectedCabinets.includes(cabinet.id)}
                isDeleteMode={isDeleteMode}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CabinetPage;
