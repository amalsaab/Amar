import './App.css'
import Landing from './Compnent/Landing'
import { Routes, Route } from 'react-router-dom'
import Qu from './Compnent/Qu'
import Signup from './Compnent/Signup'

function App() {
  return (
    <div>
    

      <Routes>
      <Route path="/" element={<Signup/>}/>

        <Route path="/landing" element={<Landing/>}/>
        <Route path="/Q" element={<Qu/>}/>

      </Routes>

      
    </div>
  )
}

export default App
