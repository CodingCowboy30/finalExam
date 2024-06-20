// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import LikedItems from './components/LikedItems'
import AnimatedBackground from './components/AnimatedBackground'


const App = () => {
  return (
    <div className="App">
      <AnimatedBackground />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/liked" element={<LikedItems />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
