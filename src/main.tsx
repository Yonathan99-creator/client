import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Prevenir transiciones durante la carga inicial
document.documentElement.classList.add('no-transition');

// Remover la clase después de que la página se haya cargado
window.addEventListener('load', () => {
  setTimeout(() => {
    document.documentElement.classList.remove('no-transition');
  }, 100);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
