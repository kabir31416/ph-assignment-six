import './App.css'
import HeroSection from './components/homepage/HeroSection'
import Statistics from './components/homepage/Statistics'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
    <div className='max-w-400 m-auto'>
      <Navbar/>
      <HeroSection/>
      <Statistics/>
    </div>
    
    </>
  )
}

export default App
