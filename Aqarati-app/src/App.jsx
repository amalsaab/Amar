import './App.css'
import Landing from './Compnent/Landing'
import { Routes, Route } from 'react-router-dom'
import Qu from './Compnent/Qu'
<<<<<<< HEAD
import Signup from './Compnent/Signup'
=======
import Testing from  './Compnent/Testing'
import BottomNavigation from './Compnent/navigation/BottomNavigation'

>>>>>>> 4e80c5dc7e18afd42611b2d777cc42f4956b104f

function App() {
  return (
    <div>
    

      <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Signup/>}/>

        <Route path="/landing" element={<Landing/>}/>
        <Route path="/Q" element={<Qu/>}/>
=======
        { /* For component testing */}
        <Route path="/" element={<BottomNavigation/>}/>

        <Route path="/" element={<Landing/>}/>
        <Route path="/Q" element={<Qu/>}/>
        <Route path="/Test" element={<Testing/>}/>
>>>>>>> 4e80c5dc7e18afd42611b2d777cc42f4956b104f

      </Routes>

      
    </div>
  )
}

export default App
