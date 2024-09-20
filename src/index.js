import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import service worker registration if you want to enable it
import * as serviceWorkerRegistration from './registerServiceWorker';


// Create the root of the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register the service worker
serviceWorkerRegistration.default();

