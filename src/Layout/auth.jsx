import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../Pages/Auth/SignIn/SignIn';
import SignUp from '../Pages/Auth/SignUp/SignUp';
import VerifyEmail from '../Pages/Auth/SignUp/verifyEmail'; // Adjusted path

const routes = [
  {
    title: 'auth page',
    layout: 'auth',
    pages: [
      { name: 'sign in', path: '/auth/sign-in', element: <SignIn /> },
      { name: 'sign up', path: '/auth/sign-up', element: <SignUp /> },
      { name: 'verify email', path: '/auth/verify-email', element: <VerifyEmail /> }, // Added route
    ],
  },
];

const Auth = () => {
  return (
    <div className="relative min-h-screen w-full">
      <Routes>
        {routes.map(({ layout, pages }) =>
          layout === 'auth' &&
          pages.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))
        )}
      </Routes>
    </div>
  );
};

export default Auth;
