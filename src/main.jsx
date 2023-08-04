
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import StoreProvider from './app/StoreProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreProvider>
    <App />
  </StoreProvider>
    </BrowserRouter>,
)
