import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './contexts/ContextProvider.jsx'

import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1JEaF1cWmhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEBjUH5fcHFXQWVYVkR0W0leYw==');

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
)
