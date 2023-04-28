import { createRoot } from 'react-dom/client';
import App from './App'
import React from 'react';

console.log('popup script')

const container = document.querySelector('#root') as HTMLElement;


const root = createRoot(container);
root.render(<App />);
