import { useState, useEffect } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Works from './components/Works';
import Teams from './components/Teams';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Header />


        <Hero/>
        <About/>
        <Services/>
        <Works/>
        <Teams/>
        <Testimonials/>
        <Pricing/>
        <Blog/>
        <Contact/>
        <Footer/>
          

        
        
      </div>
       
    </>
  )
}

export default App
