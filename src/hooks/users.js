import { useEffect, useState } from 'react';
import { getUsersMostBookings, getUsers } from '../services/Requests';

export function useUsersMostBookings() {
    const [usersBookings, setUsersBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        getUsersMostBookings()
            .then(setUsersBookings)
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);
    
      return { usersBookings, loading, error };
}


export async function getUsersReport(filters) {
    try {
      const data = await getUsers(filters);
      return data;
    } catch (error) {
      console.error("Error al buscar usuarios:", error);
      return [];
    }
}