import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccountSetup from './Pages/AccountSetUp/AccountSetUp';
import Dashboard from './Layout/Dashboard';
// import Auth from './Layout/auth'; // Correct import
import Home from './Pages/Home'; // Adjust path as per your project structure

import SignIn from './Pages/Auth/SignIn/SignIn';
import SignUp from './Pages/Auth/SignUp/SignUp';
// import VerifyEmail from './Pages/Auth/SignUp/verifyEmail'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        {/* <Route path="/accountsetup" element={<AccountSetup />} /> */}
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
        {/* <Route path="/auth/verify-email" element={<VerifyEmail />} /> */}
        
        {/* <Route path="/auth/*" element={<Auth />} /> Use /* to match nested routes */}
        <Route path="/Dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
