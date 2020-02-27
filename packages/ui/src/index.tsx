import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';

const domNode = document.getElementById('root') as HTMLElement;
createRoot(domNode).render(<App />);
