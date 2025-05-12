import {  useEffect , useState } from "react";
import NavBar from "../components/NavBar";
import useFilters from "../hooks/useFilters";
import usersMostBookings from "../hooks/users";
import UserCard from "../components/UserCard";

export default function UsersReport() {
  const { schedules, allFilters, setFilters } = useFilters();
  const { usersBookings } = usersMostBookings();
  const [users, setUsers] = useState([]);

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
          <h2 className="text-xl font-semibold mb-4">Reporte de Usuarios</h2>
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
            name="Horario"
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
            <input
            name="cant"
            placeholder="Cantidad de reservas minimas"
            value={allFilters.cantBooking}
            onChange={handleChange}
            className="border p-2"
            />
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
                  <th className="border p-2">Cantidad de reservas</th>
                  <th className="border p-2">Cancha preferida</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                <tr key={user.id_booking}>
                    <td className="border p-2">
                    {user.usuario_nombre} {user.usuario_apellido}
                    </td>
                    <td className="border p-2">{user.booking_date}</td>
                    <td className="border p-2">{user.status}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Seccion con info adicional */}
        <div className="w-1/4 bg-gray-100 p-6">
          <h2 className="text-center font-semibold mb-4">Usuarios con mas reservas</h2>
          {usersBookings.map((userBooking)=>(
            <UserCard 
              key={userBooking.id}
              name={userBooking.name}
              total_reservas = {userBooking.total_reservas}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
