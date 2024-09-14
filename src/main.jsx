
import { createRoot } from 'react-dom/client'
import Root from './routes/index.jsx'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

createRoot(document.getElementById('root')).render(
  <Root />
)
