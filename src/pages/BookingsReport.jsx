import { useState } from "react";
import NavBar from "../components/NavBar";
import BookCard from "../components/BookCard";
import {useBookingsByCourt, getBookingReport} from "../hooks/bookings";
import useFilters from "../hooks/useFilters";

function BookingsReport() {
  const [bookings, setBookings] = useState([]);
  const { courts } = useBookingsByCourt();
  const {courtType, allFilters, setFilters } = useFilters();


  const handleChange = (e) => {
    setFilters({ ...allFilters, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    console.log("Filtros actuales:", allFilters);
    try {
      const data = await getBookingReport(allFilters);
      setBookings(data);
    } catch (error) {
      console.error("Error al buscar reservas:", error);
    }
  };
  
  return (
    <div className="m-[25px]">
      <NavBar/>
      <div className="flex mt-4 gap-4">
        <div className="mt-[25px] w-3/4">
          <h2 className="text-xl font-semibold mb-4">Reporte de Reservas</h2>
          <p>*Las fechas son desde: 05/10/2025 hasta: 22/10/2025</p>
          <div className="grid grid-cols-2 gap-4 my-4">
              <input
              name="startDate"
              type="date"
              value={allFilters.startDate}
              onChange={handleChange}
              className="border p-2"
              />
              <input
              name="endDate"
              type="date"
              value={allFilters.endDate}
              onChange={handleChange}
              className="border p-2"
              />
  
              <select
              name="status"
              value={allFilters.status}
              onChange={handleChange}
              className="border p-2"
              >
              <option value="">Estado</option>
              <option value="pending">Pendiente</option>
              <option value="confirmed">Confirmada</option>
              <option value="cancelled">Cancelada</option>
              </select>
  
              <select 
              name="courtTypes"
              value={allFilters.courtTypes}
              onChange={handleChange}
              className="border p-2"
              >
              <option value="">Tipo de cancha</option>
                {courtType.map((type) => (
                    <option key={type.id_type} value={type.id_type}>
                    {type.type_name}
                    </option>
                ))}
              </select>
          </div>
          <button onClick={handleSearch}
              className="bg-[#34392d] text-white px-4 py-2 rounded">Buscar
          </button>
          {/* Tabla de resultados */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Resultados</h3>
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Usuario</th>
                  <th className="border p-2">ID reserva</th>
                  <th className="border p-2">Estado</th>
                  <th className="border p-2">Tipo de cancha</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                <tr key={booking.id_reserva}>
                    <td className="border p-2">{booking.nombre_usuario}</td>
                    <td className="border p-2">{booking.id_reserva}</td>
                    <td className="border p-2">{booking.estado}</td>
                    <td className="border p-2">{booking.tipo_cancha}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Seccion con info adicional */}
        <div className="w-1/4 bg-gray-100 p-6">
          <h2 className="text-center font-semibold mb-4">Reservas por tipo de cancha</h2>
          {courts.map((court)=>(
            <BookCard 
              key={court.type_name}
              type_name={court.type_name}
              total_reservas = {court.total_reservas}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookingsReport