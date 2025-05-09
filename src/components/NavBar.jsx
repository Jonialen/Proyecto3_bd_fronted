import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='bg-gray-100 py-6'>
        <h1 className="text-2xl font-bold mb-6 text-center">Reportes del Sistema</h1>
        <nav className="mb-4 flex justify-around items-center">
          <Link to="/bookings" className="bg-[#34392d] text-white px-4 py-2 rounded-md my-2 hover:bg-[#94a983]">Reservas</Link>
          <Link to="/revenues" className="bg-[#34392d] text-white px-4 py-2 rounded-md my-2 hover:bg-[#94a983]">Ingresos</Link>
          <Link to="/users" className="bg-[#34392d] text-white px-4 py-2 rounded-md my-2 hover:bg-[#94a983]">Usuarios Frecuentes</Link>
          <Link to="/promotions" className="bg-[#34392d] text-white px-4 py-2 rounded-md my-2 hover:bg-[#94a983]">Promociones</Link>
          <Link to="/availability" className="bg-[#34392d] text-white px-4 py-2 rounded-md my-2 hover:bg-[#94a983]">Disponibilidad</Link>
        </nav>
    </div>
  )
}

export default NavBar