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



