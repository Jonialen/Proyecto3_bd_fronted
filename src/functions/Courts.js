import { getCourtByType, getTypes, getSchedulesByCourt } from "../services/Requests";

export const loadTypes = async () => {
    try {
        return await getTypes();
    } catch (error) {
        console.error("Error loading types", error);
    return [];
    }
};

export const loadCourtsByType = async (id_type) => {
    try {
      return await getCourtByType(id_type);
    } catch (error) {
        console.error("Error loading courts by type", error);
    return [];
    }
};

export const loadSchedulesByCourt = async (id_court) => {
    try{
        return await getSchedulesByCourt(id_court);
    }catch (error) {
        console.error("Error loading schedules", error);
    return [];
    }
};
