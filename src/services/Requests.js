import axios from "./axios"

export const registerRequest = async (user) => {
    return await axios.post('/api/register', user);
};

export const loginRequest = async (user) => {
    return await axios.post('/api/login', user);
};

export const getTypes = async () => {
    // return await axios.get('/api/type');
    return [
        { id_type: 1, type_name: "Fútbol" },
        { id_type: 2, type_name: "Tenis" },
        { id_type: 3, type_name: "Basketball" },
    ];
};

export const getCourtByType = async (id_type) => {
    // const res = await axios.get(`/api/type/${id_type}/courts`);
    // return res.data;
    const dummyCourts = {
        1: [
          { id_court: 1, description: "Cancha Fútbol A" },
          { id_court: 2, description: "Cancha Fútbol B" },
        ],
        2: [
          { id_court: 3, description: "Cancha Tenis 1" },
          { id_court: 4, description: "Cancha Tenis 2" },
        ],
        3: [
          { id_court: 5, description: "Cancha Basket 1" },
        ],
      };
    
      return dummyCourts[id_type] || [];
};

export const getSchedulesByCourt = async (id_court) => {
    const dummySchedules = {
        1: [
          { id_schedule: 1, schedule_date: "2025-05-10", start_time: "08:00", end_time: "09:00" },
          { id_schedule: 2, schedule_date: "2025-05-10", start_time: "10:00", end_time: "11:00" },
        ],
        2: [
          { id_schedule: 3, schedule_date: "2025-05-11", start_time: "15:00", end_time: "16:00" },
        ],
        3: [],
      };
    
      return dummySchedules[id_court] || [];
};



