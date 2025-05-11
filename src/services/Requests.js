import axios from "./Axios"

//Para los filtros
export const getCourtTypes = async () => {
    try {
      const response = await axios.get('/court-types');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching court types:', error);
      throw error;
    }
};

export const getPromosFilter = async () => {
  try {
    const response = await axios.get('/court-types'); //cambiar ruta
    return response.data.data;
  } catch (error) {
    console.error('Error fetching court types:', error);
    throw error;
  }
};

export const getSchedulesFilter = async () => {
  try {
    const response = await axios.get('/court-types'); //cambiar ruta
    return response.data.data
  } catch (error) {
    console.error('Error al obtener horarios:', error);
    throw error;
  }
}

export const getBookingsByCourt = async () =>  {
  try {
    const response = await axios.get('/reports/reservas-por-tipo-cancha');
    return response.data.data
  } catch (error) {
    console.error('Error al obtener las reservas por canchas:', error);
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

export const getUsersMostBookings  = async () => {
  try {
    const response = await axios.get('/reports/usuarios-con-mas-reservas'); 
    return response.data.data
  } catch (error) {
    console.error('Error al obtener usuarios con mas reservas:', error);
    throw error;
  }
}

export const getBookingsByPromotion  = async () => {
  try {
    const response = await axios.get('/reports/reservas-por-promocion'); 
    return response.data.data
  } catch (error) {
    console.error('Error al obtener reservas por promocion:', error);
    throw error;
  }
}

export const getCourtsMostBookings  = async () => {
  try {
    const response = await axios.get('/reports/canchas-mas-rentadas'); 
    return response.data.data
  } catch (error) {
    console.error('Error al obtener canchas mas rentadas:', error);
    throw error;
  }
}





