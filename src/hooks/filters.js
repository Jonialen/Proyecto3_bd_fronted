//Endpoints para sacar info para los filtros
import { useEffect, useState } from 'react';
import { getCourtTypes, getSchedulesFilter } from "../services/Requests";

export default function filters() {
    const [courtType, setCourtType] = useState([]);
    const [schedules, setSchedules] = useState([]);
    const [error, setError] = useState(null);

    const [allFilters, setFilters] = useState({
        startDate: "",
        endDate: "",
        status: "",
        courtTypes: "",
        schedule: "",
        cantBooking: "",
        promoName: "",
    });
    
    useEffect(() => {
        getCourtTypes()
            .then(setCourtType)
            .catch(setError)
        
        getSchedulesFilter()
            .then(setSchedules)
            .catch(setError)
    }, []);

    return { courtType, schedules, error, allFilters, setFilters};
}

