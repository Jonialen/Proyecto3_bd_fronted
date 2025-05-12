import {  useEffect , useState } from "react";
import NavBar from "../components/NavBar";
import useFilters from "../hooks/useFilters";
import courtsMostBookings from "../hooks/courts";
import CourtCard from "../components/CourtCard";

export default function CourtsReport() {
  const { courtType, schedules, allFilters, setFilters } = useFilters();
  const {bookingCourts} = courtsMostBookings();

  const handleChange = (e) => {
    setFilters({ ...allFilters, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    // try {
    //   const data = await getBookingReports(filters);
    //   setReservas(data);
    // } catch (error) {
    //   console.error("Error al buscar reservas:", error);
    // }
  };

  return (
    <div className="m-[25px]">
      <NavBar/>
      <div className="flex mt-4 gap-4">
        <div className="mt-[25px] w-3/4">
          <h2 className="text-xl font-semibold mb-4">Reporte de Canchas</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
            name="fechaInicio"
            type="date"
            value={allFilters.startDate}
            onChange={handleChange}
            className="border p-2"
            />
            <input
            name="fechaFin"
            type="date"
            value={allFilters.endDate}
            onChange={handleChange}
            className="border p-2"
            />
            <select
              name="tipoCancha"
              value={allFilters.courtTypes}
              onChange={handleChange}
              className="border p-2"
              >
              <option value="">Tipo de cancha</option>
                {courtType.map((type) => (
                    <option key={type.id_type} value={type.type_name}>
                    {type.type_name}
                    </option>
                ))}
            </select>
            <select
              name="horario"
              value={allFilters.schedule}
              onChange={handleChange}
              className="border p-2"
              >
              <option value="">Horarios</option>
                {schedules.map((schedule) => (
                  <option key={schedule.nombre} value={schedule.nombre}>
                  {schedule.nombre}
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
                  <th className="border p-2">ID cancha</th>
                  <th className="border p-2">Tipo de cancha</th>
                  <th className="border p-2">Veces reservada</th>
                </tr>
              </thead>
              <tbody>
                {/* {users.map((user) => (
                <tr key={user.id_booking}>
                    <td className="border p-2">
                    {user.usuario_nombre} {user.usuario_apellido}
                    </td>
                    <td className="border p-2">{user.booking_date}</td>
                    <td className="border p-2">{user.status}</td>
                </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        </div>
        {/* Seccion con info adicional */}
        <div className="w-1/4 bg-gray-100 p-6">
          <h2 className="text-center font-semibold mb-4">Canchas mas rentadas</h2>
          {bookingCourts.map((bookingCourt)=>(
            <CourtCard 
              key={bookingCourt.id}
              id_court={bookingCourt.id_court}
              description={bookingCourt.description}
              veces_rentada = {bookingCourt.veces_rentada}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
