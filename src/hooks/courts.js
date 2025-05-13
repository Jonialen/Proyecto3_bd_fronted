import { useEffect, useState } from 'react';
import { getCourtsMostBookings, getCourts } from '../services/Requests';

export function useCourtsMostBookings() {
    const [bookingCourts, setBookingCourts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        getCourtsMostBookings()
            .then(setBookingCourts)
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);
    
    return { bookingCourts, loading, error };
}

export async function getCourtsReport(filters) {
    try {
      const data = await getCourts(filters);
      return data;
    } catch (error) {
      console.error("Error al buscar canchas:", error);
      return [];
    }
}