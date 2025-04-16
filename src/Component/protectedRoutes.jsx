import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Check if token exists in localStorage

  // If there is no token, redirect to login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If token exists, render the child route/component
  return children;
};

export default ProtectedRoute;
