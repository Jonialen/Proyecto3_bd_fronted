import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookingsReport from './pages/BookingsReport'
import MainPage from './pages/MainPage'
import CourtsAvailabilityReport from './pages/CourtsAvailabilityReport'
import FrequentUsersReport from './pages/FrequentUsersReport'
import RevenueReport from './pages/RevenueReport'
import PromotionsReport from './pages/PromotionsReport'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/bookings' element={<BookingsReport />} />
            <Route path='/revenues' element={<RevenueReport />} />
            <Route path='/users' element={<FrequentUsersReport />} />
            <Route path='/promotions' element={<PromotionsReport />} />
            <Route path='/availability' element={<CourtsAvailabilityReport />} />            
        </Routes>
    </BrowserRouter>
  )
}

export default App
