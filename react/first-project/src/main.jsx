import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes, Route } from 'react-router'
import ProductsPage from './pages/products'
import MainContent from './components/main-content'
import Layout from './components/layout'
import Header from './components/header'
import Footer from './components/footer'
import AboutPage from './pages/about'
import ContactsPage from './pages/contact'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Layout>
      <Header />
      
      

    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactsPage />} />
    </Routes>
    <Footer />
    </Layout>
  </BrowserRouter>
)
