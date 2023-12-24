import './App.css'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      

      <Routes>
        <Route path="/" element={<div className='text-3xl text-primary'>Home</div>} />
      </Routes>

      
    </div>
  )
}

export default App
