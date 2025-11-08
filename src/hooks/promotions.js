import { useEffect, useState } from 'react';
import { getBookingsByPromotion, getCantBooking, getPromosApplied } from '../services/Requests';

export function useBookingsByPromotion() {
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

export async function getCantPromoReport(filters) {
    try {
      const data = await getCantBooking(filters);
      return data;
    } catch (error) {
      console.error("Error al buscar cant:", error);
      return [];
    }
}

export async function getPromotionsReport(filters) {
    try {
      const data = await getPromosApplied(filters);
      return data;
    } catch (error) {
      console.error("Error al buscar promos:", error);
      return [];
    }
} 