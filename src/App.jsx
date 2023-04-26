import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import * as tf from '@tensorflow/tfjs'

function App() {

  return (
    <>
      <div className='App'>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
