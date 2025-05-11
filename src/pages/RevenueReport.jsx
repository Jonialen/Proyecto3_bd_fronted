import NavBar from "../components/NavBar";
import filters from "../hooks/filters";
import RevenueCard from "../components/RevenueCard";
import revenuesByCourt from "../hooks/revenues";
import {  useEffect , useState } from "react";

export default function RevenueReport() {
  const { courtType, schedules, allFilters, setFilters } = filters();
  const { courts } = revenuesByCourt();
  const [revenues, setRevenues] = useState([]);

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
          <h2 className="text-xl font-semibold mb-4">Reporte de Ingresos</h2>
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
                  <option key={schedule.id_type} value={schedule.type_name}>
                  {schedule.type_name}
                  </option>
                ))}
            </select>
          </div>
          <button onClick={handleSearch}
            className="bg-[#34392d] text-white px-4 py-2 rounded">Buscar
          </button>
          {/* {Tabla de resultados} */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Resultados</h3>
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Tipo de cancha</th>
                  <th className="border p-2">Total Reservas</th>
                  <th className="border p-2">Total ganado</th>
                </tr>
              </thead>
              <tbody>
                {/* Cambiar aqui por los valores de la respuesta */}
                {revenues.map((revenue) => (
                <tr key={revenue.id_booking}>
                  <td className="border p-2">
                  {revenue.usuario_nombre} {revenue.usuario_apellido}
                  </td>
                  <td className="border p-2">{revenue.booking_date}</td>
                  <td className="border p-2">{revenue.status}</td>
                  <td className="border p-2">{revenue.tipo_cancha}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Seccion con info adicional */}
        <div className="w-1/4 bg-gray-100 p-6">
          <h2 className="text-center font-semibold mb-4">Ingresos por tipo de cancha</h2>
          {courts.map((court)=>(
            <RevenueCard
             key={court.type_name}
             type_name={court.type_name}
             total_facturado={court.total_facturado}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
