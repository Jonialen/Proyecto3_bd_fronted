import NavBar from "../components/NavBar";
import useFilters from "../hooks/useFilters";
import RevenueCard from "../components/RevenueCard";
import {useRevenuesByCourt, getRevenuesReport} from "../hooks/revenues";
import { useState } from "react";

export default function RevenueReport() {
  const { courtType, allFilters, setFilters } = useFilters();
  const { courts } = useRevenuesByCourt();
  const [revenues, setRevenues] = useState([]);

  const handleChange = (e) => {
    setFilters({ ...allFilters, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    try {
      const data = await getRevenuesReport(allFilters);
      setRevenues(data);
    } catch (error) {
      console.error("Error al buscar ingresos:", error);
    }
  };

  return (
    <div className="m-[25px]">
      <NavBar/>
      <div className="flex mt-4 gap-4">
        <div className="mt-[25px] w-3/4">
          <h2 className="text-xl font-semibold mb-4">Reporte de Ingresos</h2>
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
              name="dateGroup"
              value={allFilters.dateGroup}
              onChange={handleChange}
              className="border p-2"
              >
              <option value="">Periodo</option>
              <option value="dia">Por dia</option>
              <option value="mes">Por mes</option>
              <option value="anio">Por año</option>
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
                  <th className="border p-2">Periodo</th>
                  <th className="border p-2">Tipo de cancha</th>
                  <th className="border p-2">Total Reservas</th>
                  <th className="border p-2">Total ganado</th>
                </tr>
              </thead>
              <tbody>
                {/* Cambiar aqui por los valores de la respuesta */}
                {revenues.map((revenue, index) => (
                <tr key={`${revenue.cancha_tipo}-${index}`}>
                  <td className="border p-2">{new Date(revenue.periodo).toISOString().slice(0, 10)}</td>
                  <td className="border p-2">{revenue.cancha_tipo}</td>
                  <td className="border p-2">{revenue.cant_reservas}</td>
                  <td className="border p-2">{revenue.total_income}</td>
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
