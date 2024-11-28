'use client';

import { useState, useEffect } from 'react';

const pages = {
  '/': <h1>Home Page</h1>,
  '/todos': <h1>About Page</h1>,
  '/photos': <h1>Contact Page</h1>,
};

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const handleNavigation = (url) => {
    window.history.pushState({}, '', url); // Update the URL
    setCurrentPath(url); // Update the current path to re-render the content
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname); // Update path on back/forward
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div>
      {pages[currentPath] || <h1>404 - Page Not Found</h1>}
      <button onClick={() => handleNavigation('/')}>Home</button>
      <button onClick={() => handleNavigation('/todos')}>About</button>
      <button onClick={() => handleNavigation('/photos')}>Contact</button>
    </div>
  );
}
