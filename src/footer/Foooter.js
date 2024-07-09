import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
// import FeeStructure from '../Components/feeStructure';


function Foooter() {
  return (
    
      <div className="App flex flex-col min-h-screen">
        {/* Other components */}
        <div className="flex-grow">
          <Routes>
            <Route path="/link1" element={<div>Content for Link 1</div>} />
            <Route path="/link2" element={<div>Content for Link 2</div>} />
            <Route path="/link3" element={<div>Content for Link 3</div>} />
            <Route path="/link5" element={<div>Content for Link 5</div>} />
            <Route path="/link6" element={<div>Content for Link 6</div>} />
            {/* <Route path="/" element={<FeeStructure/>} /> */}
            {/* <Route path="/" element={<div> Home </div>} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    
  );
}

export default Foooter;

