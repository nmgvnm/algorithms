import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AlgorithmDetailPage from './pages/AlgorithmDetailPage'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/algorithm/:id" element={<AlgorithmDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
