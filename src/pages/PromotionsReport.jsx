import bookingsByPromotion from "../hooks/promotions"
import {  useEffect , useState } from "react";
import PromoCard from "../components/PromoCard";
import filters from "../hooks/filters";
import NavBar from "../components/NavBar";

export default function PromotionsReport() {
  const {bookingPromotion} = bookingsByPromotion();
  const {promos, allFilters, setFilters } = filters();

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
          <h2 className="text-xl font-semibold mb-4">Reporte de promociones</h2>
          <div className="flex gap-4 mb-4">
            <select
              name="tipoPromocion"
              value={allFilters.promoName}
              onChange={handleChange}
              className="border p-2 w-1/3"
              >
              <option value="">Promocion</option>
                {promos.map((type) => (
                  <option key={type.id_type} value={type.type_name}>
                  {type.type_name}
                  </option>
                ))}
            </select>
            <button onClick={handleSearch}
              className="bg-[#34392d] text-white px-4 py-2 rounded">Buscar
            </button>
          </div>
          {/* Tabla de resultados */}
          <div className="my-6">
            <h3 className="font-semibold mb-2">Resultados</h3>
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Usuario</th>
                  <th className="border p-2">Promocion</th>
                  <th className="border p-2">Cantidad usada</th>
                </tr>
              </thead>
              <tbody>
                {/* {bookings.map((booking) => (
                <tr key={booking.id_booking}>
                    <td className="border p-2">
                    {booking.usuario_nombre} {booking.usuario_apellido}
                    </td>
                    <td className="border p-2">{booking.booking_date}</td>
                    <td className="border p-2">{booking.status}</td>
                    <td className="border p-2">{booking.tipo_cancha}</td>
                </tr>
                ))} */}
              </tbody>
            </table>
          </div>
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
              name="tipoPromocion"
              value={allFilters.promoName}
              onChange={handleChange}
              className="border p-2"
              >
              <option value="">Promocion</option>
                {promos.map((type) => (
                    <option key={type.id_type} value={type.type_name}>
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
                  <th className="border p-2">Id de reserva</th>
                  <th className="border p-2">% descuento</th>
                </tr>
              </thead>
              <tbody>
                {/* {bookings.map((booking) => (
                <tr key={booking.id_booking}>
                    <td className="border p-2">
                    {booking.usuario_nombre} {booking.usuario_apellido}
                    </td>
                    <td className="border p-2">{booking.booking_date}</td>
                    <td className="border p-2">{booking.status}</td>
                    <td className="border p-2">{booking.tipo_cancha}</td>
                </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        </div>
        {/* Seccion con info adicional */}
        <div className="w-1/4 bg-gray-100 p-6">
          <h2 className="text-center font-semibold mb-4">Reservas por promocion</h2>
          {bookingPromotion.map((bookingPromo)=>(
            <PromoCard 
              key={bookingPromo.promocion}
              promocion={bookingPromo.promocion}
              total_reservas = {bookingPromo.total_reservas}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
