import './App.css'
import Landing from './Compnent/Landing'
import { Routes, Route } from 'react-router-dom'
import Qu from './Compnent/Qu'
import BottomNavigation from './Compnent/navigation/BottomNavigation'

function App() {
  return (
    <div>
    

      <Routes>
        { /* For component testing */}
        <Route path="/" element={<BottomNavigation/>}/>

        <Route path="/" element={<Landing/>}/>
        <Route path="/Q" element={<Qu/>}/>
      </Routes>

      
    </div>
  )
}

export default App
