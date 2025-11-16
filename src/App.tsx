import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DesignSelector from './pages/DesignSelector'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DesignSelector />} />
      </Routes>
    </Router>
  )
}

export default App
