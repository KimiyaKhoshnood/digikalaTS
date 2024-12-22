import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App/App.tsx'
import { Provider } from 'react-redux'
import store from './Redux/Store.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <App />
  </Provider>,
)
