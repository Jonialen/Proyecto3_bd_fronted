import {useBookingsByPromotion, getCantPromoReport, getPromotionsReport} from "../hooks/promotions"
import { useState } from "react";
import PromoCard from "../components/PromoCard";
import useFilters from "../hooks/useFilters";
import NavBar from "../components/NavBar";

export default function PromotionsReport() {
  const {bookingPromotion} = useBookingsByPromotion();
  const {promos, allFilters, setFilters } = useFilters();
  const [promotions, setPromotions] = useState([]);
  const [cantPromos, setCantPromos] = useState([]);

  const handleChange = (e) => {
    setFilters({ ...allFilters, [e.target.name]: e.target.value });
  };
  
  const handleSearch1 = async () => {
    try {
      const data = await getCantPromoReport(allFilters);
      setCantPromos(data);
    } catch (error) {
      console.error("Error al buscar cant:", error);
    }
  };

  const handleSearch2 = async () => {
      try {
        const data = await getPromotionsReport(allFilters);
        setPromotions(data);
      } catch (error) {
        console.error("Error al buscar promos:", error);
      }
  };


  return (
    <div className="m-[25px]">
      <NavBar/>
      <div className="flex mt-4 gap-4">
        <div className="mt-[25px] w-3/4">
          <h2 className="text-xl font-semibold mb-4">Reporte de Promociones</h2>
          <p>Reporte para saber cuantas veces el usuario aplico promociones</p>
          <div className="flex gap-4 my-4">
            <select
              name="promoName"
              value={allFilters.promoName}
              onChange={handleChange}
              className="border p-2 w-1/3"
              >
              <option value="">Promocion</option>
                {promos.map((type) => (
                  <option key={type.name} value={type.name}>
                  {type.name}
                  </option>
                ))}
            </select>
            <button onClick={handleSearch1}
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
                {cantPromos.map((cant) => (
                <tr key={cant.id_user}>
                    <td className="border p-2">{cant.id_user}</td>
                    <td className="border p-2">{cant.promocion}</td>
                    <td className="border p-2">{cant.cant_usada}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Reporte para saber en que reservas se aplico y cuanto de descuento</p>
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
              name="promoName"
              value={allFilters.promoName}
              onChange={handleChange}
              className="border p-2"
              >
              <option value="">Promocion</option>
                {promos.map((type) => (
                    <option key={type.name} value={type.name}>
                    {type.name}
                    </option>
                ))}
              </select>
          </div>
          <button onClick={handleSearch2}
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
                {promotions.map((promo) => (
                <tr key={promo.id_reserva}>
                    <td className="border p-2">{promo.nombre_usuario}</td>
                    <td className="border p-2">{promo.id_reserva}</td>
                    <td className="border p-2">{promo.porcentaje_desc}</td>
                </tr>
                ))}
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
