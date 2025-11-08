import { useState } from "react";
import NavBar from "../components/NavBar";
import useFilters from "../hooks/useFilters";
import {useCourtsMostBookings, getCourtsReport }from "../hooks/courts";
import CourtCard from "../components/CourtCard";

export default function CourtsReport() {
  const { courtType, schedules, allFilters, setFilters } = useFilters();
  const {bookingCourts} = useCourtsMostBookings();
  const [courts, setCourts] = useState([]);

  const handleChange = (e) => {
    setFilters({ ...allFilters, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    try {
      const data = await getCourtsReport(allFilters);
      setCourts(data);
    } catch (error) {
      console.error("Error al buscar canchas:", error);
    }
  };

  return (
    <div className="m-[25px]">
      <NavBar/>
      <div className="flex mt-4 gap-4">
        <div className="mt-[25px] w-3/4">
          <h2 className="text-xl font-semibold mb-4">Reporte de Canchas</h2>
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
            <select
              name="schedule"
              value={allFilters.schedule}
              onChange={handleChange}
              className="border p-2" 
              >
              <option value="">Horarios</option>
                {schedules.map((schedule) => (
                  <option key={schedule.nombre} value={schedule.nombre}>
                  {schedule.nombre}: {schedule.inicio}-{schedule.fin}
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
                {courts.map((court) => (
                <tr key={court.id_court}>
                    <td className="border p-2">{court.id_court}</td>
                    <td className="border p-2">{court.tipo_cancha}</td>
                    <td className="border p-2">{court.veces_reservada}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Seccion con info adicional */}
        <div className="w-1/4 bg-gray-100 p-6">
          <h2 className="text-center font-semibold mb-4">Canchas mas rentadas</h2>
          {bookingCourts.map((bookingCourt)=>(
            <CourtCard 
              key={bookingCourt.id_court}
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
