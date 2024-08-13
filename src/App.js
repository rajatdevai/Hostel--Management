import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccountSetup from './Pages/AccountSetUp/AccountSetUp';
import Dashboard from './Layout/Dashboard';

import Home from './Pages/Home'; // Adjust path as per your project structure

import SignIn from './Pages/Auth/SignIn/SignIn';
import SignUp from './Pages/Auth/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/accountsetup" element={<AccountSetup />} />
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
       
        
        
        <Route path="/Dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
