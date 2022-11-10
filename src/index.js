import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
import HookApp from './containers/HookApp'
import App from './containers/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    </React.StrictMode>
);


