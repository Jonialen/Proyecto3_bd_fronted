import { useEffect, useState } from 'react';
import { getBookingsByCourt } from '../services/Requests';


export default function bookingsByCourt() {
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

export function getBookingReport(){

}
