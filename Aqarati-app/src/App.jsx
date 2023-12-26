import './App.css'
import Landing from './Compnent/Landing'
import { Routes, Route } from 'react-router-dom'
import Qu from './Compnent/Qu'
import Signup from './Compnent/Signup'
import Card from  './Compnent/sataDisplay/Card'
import BottomNavigation from './Compnent/navigation/BottomNavigation'

function App() {
  return (
    <div>
    

      <Routes>
      
        { /* For component testing */}
    
        <Route path="/" element={<Landing/>}/>
        <Route path="/Q" element={<Qu/>}/>
        <Route path="/Test" element={<Card/>}/>


      </Routes>

      
    </div>
  )
}

export default App
