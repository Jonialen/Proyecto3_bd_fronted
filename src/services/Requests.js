import axios from "./axios"


export const getBookingReports = async (filters) => {
    try {
      const response = await axios.post("/reports/bookings", filters);
      return response.data;
    } catch (error) {
      console.error("Error al obtener reporte de reservas:", error);
      throw error;
    }
};

export const getCourtTypes = async () => {
    try {
      const response = await axios.get('/court-types');
      return response.data;
    } catch (error) {
      console.error('Error fetching court types:', error);
      throw error;
    }
};



