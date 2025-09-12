import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [checkedItems, setCheckedItems] = useState({
    allPages: false,
    page1: false,
    page2: false,  
    page3: false,  
    page4: false
  });
  
  const [showPopup, setShowPopup] = useState(false);
  
  const handleCheckboxChange = (key) => {
    if (key === 'allPages') {
      const newValue = !checkedItems.allPages;
      setCheckedItems({
        allPages: newValue,
        page1: newValue,
        page2: newValue,
        page3: newValue,
        page4: newValue
      });
    } else {
      const newCheckedItems = {
        ...checkedItems,
        [key]: !checkedItems[key]
      };
      
      
      const allSelected = 
        newCheckedItems.page1 && 
        newCheckedItems.page2 && 
        newCheckedItems.page3 && 
        newCheckedItems.page4;
      
      setCheckedItems({
        ...newCheckedItems,
        allPages: allSelected
      });
    }
  };
  
  const handleDoneClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 5000); 
  };
  
 
  const getSelectedPages = () => {
    const selected = [];
    if (checkedItems.page1) selected.push("Page 1");
    if (checkedItems.page2) selected.push("Page 2");
    if (checkedItems.page3) selected.push("Page 3");
    if (checkedItems.page4) selected.push("Page 4");
    
    if (selected.length === 0) return "No pages selected";
    return selected.join(", ");
  };

  return (
    <div className="page-container">
      <div className="home-container">
        <div className="checkbox-list">
          <div className="checkbox-item">
            <span className="item-label">All pages</span>
            <label className="checkbox-wrapper">
              <input 
                type="checkbox" 
                checked={checkedItems.allPages}
                onChange={() => handleCheckboxChange('allPages')}
                className="checkbox-input"
              />
              <span className="custom-checkbox"></span>
            </label>
          </div>
          
          <div className="divider"></div>
          
          <div className="checkbox-item">
            <span className="item-label">Page 1</span>
            <label className="checkbox-wrapper">
              <input 
                type="checkbox" 
                checked={checkedItems.page1}
                onChange={() => handleCheckboxChange('page1')}
                className="checkbox-input"
              />
              <span className="custom-checkbox"></span>
            </label>
          </div>
          
          <div className="checkbox-item">
            <span className="item-label">Page 2</span>
            <label className="checkbox-wrapper">
              <input 
                type="checkbox" 
                checked={checkedItems.page2}
                onChange={() => handleCheckboxChange('page2')}
                className="checkbox-input"
              />
              <span className="custom-checkbox"></span>
            </label>
          </div>
          
          <div className="checkbox-item">
            <span className="item-label">Page 3</span>
            <label className="checkbox-wrapper">
              <input 
                type="checkbox" 
                checked={checkedItems.page3}
                onChange={() => handleCheckboxChange('page3')}
                className="checkbox-input"
              />
              <span className="custom-checkbox"></span>
            </label>
          </div>
          
          <div className="checkbox-item">
            <span className="item-label">Page 4</span>
            <label className="checkbox-wrapper">
              <input 
                type="checkbox" 
                checked={checkedItems.page4}
                onChange={() => handleCheckboxChange('page4')}
                className="checkbox-input"
              />
              <span className="custom-checkbox"></span>
            </label>
          </div>
        </div>
        
        <div className="divider"></div>
        
        <button className="done-button" onClick={handleDoneClick}>
          Done
        </button>
      </div>
      
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>You have selected: {getSelectedPages()}</p>
            <button className="close-button" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
