import './App.css'
import Landing from '../src/Pages/Landing'
import { Routes, Route } from 'react-router-dom'
import Qu from '../src/Pages/Qu'
import Signup from '../src/Pages/Signup'
import Card from  '../src/Compnent/sataDisplay/Card'
import Owner from '../src/Pages/Owner'
import OwnerApartment from '../src/Pages/OwnerApartment'
import BottomNavigation from './Compnent/navigation/BottomNavigation'
import Login from './Pages/Login'
import HistoryOwner from './Pages/HistoryOwner'

function App() {
  return (
    <div>
    

      <Routes>
      
        { /* For component testing */}
    
        <Route path="/" element={<Landing/>}/>
        <Route path="/Q" element={<Qu/>}/>
        <Route path="/Test" element={<Owner/>}/>
        <Route path="/Apartment" element={<OwnerApartment/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/historyOwner" element={<HistoryOwner/>}/>



      </Routes>

      
    </div>
  )
}

export default App
