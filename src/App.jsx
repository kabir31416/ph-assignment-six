import { Suspense, useState } from 'react'
import './App.css'
import HeroSection from './components/homepage/HeroSection'
import Statistics from './components/homepage/Statistics'
import Navbar from './components/navbar/Navbar'
import ProductList from './e-commerce/ProductList'
import { ToastContainer } from 'react-toastify'
import StepSection from './components/homepage/StepSection'
import SimplePricing from './components/homepage/SimplePricing'
import Workflow from './components/homepage/Workflow'
import Footer from './components/homepage/Footer'




const loadData = async()  => {
  const res = await fetch('data.json');
  return res.json();
} 

const dataPromise = loadData();


function App() {

  const [cart, setCart] = useState(0);
  const [navCart, setNavCart] = useState(0);

  return (
    <>
    <div >
      <Navbar navCart={navCart}/>
      {/* <HeroSection/>
      <Statistics/> */}

      <Footer></Footer>
      <Suspense fallback={"Data is loading"}>
        <ProductList dataPromise={dataPromise} cart={cart} setCart={setCart} setNavCart={setNavCart}/>
      </Suspense>
      <StepSection/>
      <SimplePricing/>
      <Workflow></Workflow>

      <ToastContainer/> 
    </div>
    
    </>
  )
}

export default App
