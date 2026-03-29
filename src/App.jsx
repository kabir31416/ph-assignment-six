import { Suspense, useState } from 'react'
import './App.css'
import HeroSection from './components/homepage/HeroSection'
import Statistics from './components/homepage/Statistics'
import Navbar from './components/navbar/Navbar'
import ProductList from './e-commerce/ProductList'
import { ToastContainer } from 'react-toastify'




const loadData = async()  => {
  const res = await fetch('data.json');
  return res.json();
} 


function App() {

  const dataPromise = loadData();

  const [cart, setCart] = useState(0);

  return (
    <>
    <div className='max-w-400 m-auto'>
      {/* <Navbar/>
      <HeroSection/>
      <Statistics/> */}

      <Suspense fallback={"Data is loading"}>
        <ProductList dataPromise={dataPromise} cart={cart} setCart={setCart} />
      </Suspense>

      <ToastContainer/> 
    </div>
    
    </>
  )
}

export default App
