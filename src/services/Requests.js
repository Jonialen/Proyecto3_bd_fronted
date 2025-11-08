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
    const response = await axios.get('/promociones'); 
    return response.data.data;
  } catch (error) {
    console.error('Error fetching court types:', error);
    throw error;
  }
};

export const getSchedulesFilter = async () => {
  try {
    const response = await axios.get('/get_horarios'); 
    return response.data.data
  } catch (error) {
    console.error('Error al obtener horarios:', error);
    throw error;
  }
}

//Para la informacion adicional de reportes
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


//Para los resultados
export const getBookings = async (filters) => {
  try {
    const params = {};
    if (filters.startDate?.trim()) params.fecha_inicio = filters.startDate;
    if (filters.endDate?.trim()) params.fecha_fin = filters.endDate;
    if (filters.courtTypes?.trim()) params.canchas_tipo = parseInt(filters.courtTypes, 10);
    if (filters.status?.trim()) params.estado = filters.status;

    const response = await axios.get('/reservas', {params}); 
    return response.data.data
  } catch (error) {
    console.error('Error al obtener reservas:', error);
    throw error;
  }
}

export const getRevenues = async (filters) => {
  try {
    const params = {};
    if (filters.startDate?.trim()) params.fecha_inicio = filters.startDate;
    if (filters.endDate?.trim()) params.fecha_fin = filters.endDate;
    if (filters.dateGroup?.trim()) params.agrupar = filters.dateGroup;
    if (filters.courtTypes?.trim()) params.cancha_tipo = parseInt(filters.courtTypes, 10);

    const response = await axios.get('/ingresos', {params}); 
    return response.data.data
  } catch (error) {
    console.error('Error al obtener ingresos:', error);
    throw error;
  }
}

export const getUsers = async (filters) => {
  try {
    const params = {};
    if (filters.startDate?.trim()) params.fecha_inicio = filters.startDate;
    if (filters.endDate?.trim()) params.fecha_fin = filters.endDate;
    if (filters.schedule?.trim()) params.horario_dia = filters.schedule;
    if (filters.cantBooking?.trim()) params.min_reservas = parseInt(filters.cantBooking, 10);

    const response = await axios.get('/usuarios', {params}); 
    return response.data.data 
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error;
  }
}

export const getCantBooking = async (filters) => {
  try {
    const params = {};
    if (filters.promoName?.trim()) params.nombre_promocion = filters.promoName;

    const response = await axios.get('/cuantas-veces', {params}); 
    return response.data.data
  } catch (error) {
    console.error('Error al obtener cuantas veces:', error); 
    throw error;
  }
}

export const getPromosApplied = async (filters) => {
  try {
    const params = {};
    if (filters.startDate?.trim()) params.fecha_inicio = filters.startDate;
    if (filters.endDate?.trim()) params.fecha_fin = filters.endDate;
    if (filters.promoName?.trim()) params.nombre_promocion = filters.promoName;

    const response = await axios.get('/promociones-aplicadas', {params}); 
    return response.data.data
  } catch (error) {
    console.error('Error al obtener promos aplicadas:', error);
    throw error;
  }
}

export const getCourts = async (filters) => {
  try {
    const params = {};
    if (filters.startDate?.trim()) params.fecha_inicio = filters.startDate;
    if (filters.endDate?.trim()) params.fecha_fin = filters.endDate;
    if (filters.schedule?.trim()) params.horario_dia = filters.schedule;
    if (filters.courtTypes?.trim()) params.tipo_cancha = parseInt(filters.courtTypes, 10);

    const response = await axios.get('/disponibilidad-canchas', {params}); 
    return response.data.data
  } catch (error) {
    console.error('Error al obtener canchas:', error);
    throw error;
  }
}




