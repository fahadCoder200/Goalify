import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "./components/ui/provider.jsx"
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <ToastContainer/>
      <App />
    </Provider>
  </StrictMode>
);