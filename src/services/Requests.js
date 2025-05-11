import axios from "./Axios"


export const getCourtTypes = async () => {
    try {
      const response = await axios.get('/court-types');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching court types:', error);
      throw error;
    }
};

export const getBookingsByCourt = async () =>  {
  try {
    const response = await axios.get('/reports/reservas-por-tipo-cancha');
    return response.data.data
  } catch (error) {
    console.error('Error al obtener las reservas por canchas:', error);
    throw error;
  }
}

export const getSchedulesFilter = async () => {
  try {
    const response = await axios.get('/reports/reservas-por-tipo-cancha'); //cambiar ruta
    return response.data.data
  } catch (error) {
    console.error('Error al obtener horarios:', error);
    throw error;
  }
}

export const getRevenuesByCourtType = async () => {
  try {
    const response = await axios.get('/reports/facturacion-por-tipo-cancha'); 
    return response.data.data
  } catch (error) {
    console.error('Error al obtener ingresos por cancha:', error);
    throw error;
  }
}





