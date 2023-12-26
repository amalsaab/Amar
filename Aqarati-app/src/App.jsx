import './App.css'
import Landing from './Compnent/Landing'
import { Routes, Route } from 'react-router-dom'
import Qu from './Compnent/Qu'
import Testing from  './Compnent/Testing'

function App() {
  return (
    <div>
    

      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/Q" element={<Qu/>}/>
        <Route path="/Test" element={<Testing/>}/>

      </Routes>

      
    </div>
  )
}

export default App
