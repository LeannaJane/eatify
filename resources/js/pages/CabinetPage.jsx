import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Cabinet from '../components/Cabinet'; 

const CabinetPage = () => {
  const [cabinets, setCabinets] = useState([]);
  const [selectedCabinets, setSelectedCabinets] = useState([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const addCabinet = () => {
    setCabinets([...cabinets, {}]);
  };

  const deleteCabinet = () => {
    if (selectedCabinets.length > 0) {
      const newCabinets = cabinets.filter((_, i) => !selectedCabinets.includes(i));
      setCabinets(newCabinets);
      setSelectedCabinets([]);
      setIsDeleteMode(false);
    } else {
      if (isDeleteMode) {
        setIsDeleteMode(false);
      } else {
        setIsDeleteMode(true);
      }
    }
  };

  const toggleCabinetSelection = (index) => {
    if (selectedCabinets.includes(index)) {
      setSelectedCabinets(selectedCabinets.filter(i => i !== index));
    } else {
      setSelectedCabinets([...selectedCabinets, index]);
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
        <button 
          className="delete-cabinet-button"
          onClick={deleteCabinet}
        >
          Delete
        </button>
        <div className="cabinet-container">
          {cabinets.map((_, index) => (
            <div key={index} className="cabinet-wrapper">
              <Cabinet 
                index={index} 
                onSelect={() => toggleCabinetSelection(index)} 
                isSelected={selectedCabinets.includes(index)}
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
