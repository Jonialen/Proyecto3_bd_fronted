import { useEffect, useState } from 'react';
import { getUsersMostBookings } from '../services/Requests';

export default function usersMostBookings() {
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
