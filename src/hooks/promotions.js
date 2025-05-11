import { useEffect, useState } from 'react';
import { getBookingsByPromotion } from '../services/Requests';

export default function bookingsByPromotion() {
    const [bookingPromotion, setBookingPromotion] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        getBookingsByPromotion()
            .then(setBookingPromotion)
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);
    
      return { bookingPromotion, loading, error };
}