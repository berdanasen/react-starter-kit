import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './routestyle.css';
import { AuthProvider } from './context/PageAuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
    <AuthProvider>
        <App />
    </AuthProvider>
</BrowserRouter>);

