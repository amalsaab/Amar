import './App.css'
import Landing from '../src/Pages/Landing'
import { Routes, Route } from 'react-router-dom'
import Qu from '../src/Pages/Qu'
import Signup from '../src/Pages/Signup'
import Card from  '../src/Compnent/sataDisplay/Card'
import Owner from '../src/Pages/Owner'
import OwnerApartment from '../src/Pages/OwnerApartment'
import BottomNavigation from './Compnent/navigation/BottomNavigation'

function App() {
  return (
    <div>
    

      <Routes>
      
        { /* For component testing */}
    
        <Route path="/" element={<Landing/>}/>
        <Route path="/Q" element={<Qu/>}/>
        <Route path="/Test" element={<Owner/>}/>
        <Route path="/Apartment" element={<OwnerApartment/>}/>



      </Routes>

      
    </div>
  )
}

export default App
