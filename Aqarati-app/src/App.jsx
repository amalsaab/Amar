import './App.css'
import Landing from './Compnent/Landing'
import { Routes, Route } from 'react-router-dom'
import Qu from './Compnent/Qu'

function App() {
  return (
    <div>
    

      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/Q" element={<Qu/>}/>
      </Routes>

      
    </div>
  )
}

export default App
