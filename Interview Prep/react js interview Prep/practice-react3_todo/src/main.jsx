import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import TodoContext from './context/TodoContext.jsx'
import TodoContextReducer from './context/TodoReducer.jsx'

createRoot(document.getElementById('root')).render(
  <TodoContextReducer>
    <App />
  </TodoContextReducer>,
)
