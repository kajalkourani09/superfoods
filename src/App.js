import Footer from './components/Footer';
import Product from './components/Product'
import Contact from './components/Contact';
import ProductCard from './components/ProductCard';
import AllProducts from './components/AllProducts';
import ProductAnim from './components/ProductAnim';
import Horizontal from './components/Horizontal';
// import Navbar from '../src/components/Navbar'
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
import Login from './components/Login';
import Create from './components/Create';
import Blog from './components/Blog';
import { useState } from 'react';
import Home from './components/Home';
import Crunchy from './components/Crunchy';
import Essential from './components/Essential';
import Popular from './components/Popular';
import Anim from './components/Anim';
import ScrollToTop from './components/GoToTop';
import Layered from './components/Layered';
function App() {


  return (
    <>
    <div className="App">
 
      <Router>
      {/* <Navbar></Navbar> */}
      <ScrollToTop>
        <Routes>
        {/* <Route exact path='/' element={<Layered></Layered>}></Route> */}

        <Route exact path='/anim' element={<Anim></Anim>}></Route>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path='/products' element={<ProductAnim></ProductAnim>}></Route>
          <Route exact path='/about' element={<About></About>}></Route>
          <Route exact path='/products/crunchy' element={<Crunchy></Crunchy>}></Route>
          <Route exact path='/products/popular' element={<Popular></Popular>}></Route>
          <Route exact path='/products/essential' element={<Essential></Essential>}></Route>
          <Route exact path='/contact' element={<Contact></Contact>}></Route>
          <Route exact path='/products/gourmet' element={<Product></Product>}></Route>

        </Routes>
        </ScrollToTop>
        </Router>
      </div>
      
    </>    
  );
}

export default App;
