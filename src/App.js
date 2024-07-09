// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home'; // Adjust path as per your project structure
import SignIn from './Pages/Auth/SignIn/SignIn'; // Adjust path as per your project structure
import SignUp from './Pages/Auth/SignUp/SignUp'; // Adjust path as per your project structure

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
