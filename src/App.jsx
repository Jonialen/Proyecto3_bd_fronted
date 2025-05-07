import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthPage from './pages/authPage'
import CourtsPage from './pages/CourtsPage'
import ReservePage from './pages/ReservePage'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<AuthPage />} />
            <Route path='/courts' element={<CourtsPage />} />
            <Route path='/reserves' element={<ReservePage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
