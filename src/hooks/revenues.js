import { getRevenuesByCourtType } from "../services/Requests";
import { useEffect, useState } from 'react';

export default function revenuesByCourt() {
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


