import { useEffect, useState } from 'react';
import { getCourtTypes, getSchedulesFilter, getPromosFilter } from "../services/Requests";

export default function useFilters() {
    const [courtType, setCourtType] = useState([]);
    const [schedules, setSchedules] = useState([]);
    const [promos, setPromos] = useState([]);
    const [error, setError] = useState(null);

    const [allFilters, setFilters] = useState({
        startDate: "",
        endDate: "",
        status: "",
        courtTypes: "",
        schedule: "",
        cantBooking: "",
        promoName: "",
        dateGroup: "",
    });
    
    useEffect(() => {
        getCourtTypes()
            .then(setCourtType)
            .catch(setError)
        
        getSchedulesFilter()
            .then(setSchedules)
            .catch(setError)
        
        getPromosFilter()
            .then(setPromos)
            .catch(setError)
    }, []);

    return { courtType, schedules, promos, error, allFilters, setFilters};
}

