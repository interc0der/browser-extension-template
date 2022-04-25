import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('popup-root') as HTMLElement
);
root.render(
  <React.StrictMode>
        <div className="root-wrapper">
            This is the popup page
        </div>
  </React.StrictMode>
);
