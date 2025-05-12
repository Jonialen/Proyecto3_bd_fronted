import { getRevenuesByCourtType, getRevenues } from "../services/Requests";
import { useEffect, useState } from 'react';

export function useRevenuesByCourt() {
    const [courts, setCourts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getRevenuesByCourtType()
          .then(setCourts)
          .catch(setError)
          .finally(() => setLoading(false));
    }, []);
  
    return { courts, loading, error };
}

export async function getRevenuesReport(filters) {
    try {
      const data = await getRevenues(filters);
      return data;
    } catch (error) {
      console.error("Error al buscar ingresos:", error);
      return [];
    }
}


