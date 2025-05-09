import {  useEffect , useState } from "react";
import { getBookingReports, getCourtTypes } from "../services/Requests";
import NavBar from "../components/NavBar";

function BookingsReport() {
    const [tiposCancha, setTiposCancha] = useState([]);
    const [reservas, setReservas] = useState([]);

    const [filters, setFilters] = useState({
        fechaInicio: "",
        fechaFin: "",
        estado: "",
        tipoCancha: "",
      });

      useEffect(() => {
        const fetchCourtTypes = async () => {
          try {
            const data = await getCourtTypes();
            setTiposCancha(data);
          } catch (error) {
            console.error('Error al obtener tipos de cancha:', error);
          }
        };
    
        fetchCourtTypes();
      }, []);
    
      const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
      };
    
      const handleSearch = async () => {
        try {
          const data = await getBookingReports(filters);
          setReservas(data);
        } catch (error) {
          console.error("Error al buscar reservas:", error);
        }
      };
    
      return (
        <div className="m-[25px]">
            <NavBar/>
            <div className="flex mt-[25px] gap-4">
                <div className="w-3/5">
                    <h2 className="text-xl font-semibold">Reporte de Reservas</h2>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                        name="fechaInicio"
                        type="date"
                        value={filters.fechaInicio}
                        onChange={handleChange}
                        className="border p-2"
                        />
                        <input
                        name="fechaFin"
                        type="date"
                        value={filters.fechaFin}
                        onChange={handleChange}
                        className="border p-2"
                        />
            
                        <select
                        name="estado"
                        value={filters.estado}
                        onChange={handleChange}
                        className="border p-2"
                        >
                        <option value="">Estado</option>
                        <option value="pendiente">Pendiente</option>
                        <option value="confirmada">Confirmada</option>
                        <option value="cancelada">Cancelada</option>
                        </select>
            
                        <select
                        name="tipoCancha"
                        value={filters.tipoCancha}
                        onChange={handleChange}
                        className="border p-2"
                        >
                        <option value="">Tipo de cancha</option>
                        {tiposCancha.map((tipo) => (
                            <option key={tipo.id_type} value={tipo.type_name}>
                            {tipo.type_name}
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
                            <th className="border p-2">Fecha de reserva</th>
                            <th className="border p-2">Estado</th>
                            <th className="border p-2">Tipo de cancha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservas.map((reserva) => (
                            <tr key={reserva.id_booking}>
                                <td className="border p-2">
                                {reserva.usuario_nombre} {reserva.usuario_apellido}
                                </td>
                                <td className="border p-2">{reserva.booking_date}</td>
                                <td className="border p-2">{reserva.status}</td>
                                <td className="border p-2">{reserva.tipo_cancha}</td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                </div>
                <div className="w-2/5 bg-gray-100 flex justify-center">
                    <h1>Grafica</h1>
                </div>
            </div>
        </div>
    );
}

export default BookingsReport