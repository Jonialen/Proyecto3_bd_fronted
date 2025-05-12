import { useEffect, useState } from 'react';
import { getBookingsByCourt, getBookings } from '../services/Requests';


export function useBookingsByCourt() {
    const [courts, setCourts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getBookingsByCourt()
          .then(setCourts)
          .catch(setError)
          .finally(() => setLoading(false));
    }, []);
    
    return { courts, loading, error };
}

export async function getBookingReport(filters) {
    try {
      const data = await getBookings(filters);
      return data;
    } catch (error) {
      console.error("Error al buscar reservas:", error);
      return [];
    }
}
  


  
