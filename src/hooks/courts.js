import { useEffect, useState } from 'react';
import { getCourtsMostBookings } from '../services/Requests';

export default function courtsMostBookings() {
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