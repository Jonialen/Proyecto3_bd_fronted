//Endpoints para sacar info para los filtros
import { useEffect, useState } from 'react';
import { getCourtTypes } from "../services/Requests";

export default function filters() {
    const [courtType, setCourtType] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
            getCourtTypes()
              .then(setCourtType)
              .catch(setError)
    }, []);

    return { courtType, error};
}

