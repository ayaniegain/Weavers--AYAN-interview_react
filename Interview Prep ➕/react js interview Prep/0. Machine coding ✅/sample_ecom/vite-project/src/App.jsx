import { Route, Routes } from 'react-router'
import './App.css'
import Blog from './pages/Blog'
import Home from './pages/Home'
import NoPageFound from './pages/NoPageFound'
import Register from './pages/Register'
import Todo from './pages/Todo'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Ecomerse from './pages/Ecomerse'
import Protected from './pages/Protected'
import Login from './pages/Login'

function App() {

  return (
    <>
    <Navbar/>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route  element={<Protected />} >
      <Route path="/blog" element={<Blog />} />
      
      </Route>
      <Route path="/ecomerce" element={<Ecomerse />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="*" element={<NoPageFound />} />
    </Routes>
    </>
  )
}

export default App
