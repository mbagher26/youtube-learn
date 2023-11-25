import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import ProductItem from './pages/ProductItem'
import Home from './pages/Home'
import { Header } from './components'
import Login from './pages/login'
import Register from './pages/register'

function App() {
  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/home' element={<Navigate replace to="/" />} />
          <Route path="/posts" element={<Products />} />
          <Route path="/posts/:id" element={<ProductItem />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default App