import { useNavigate} from "react-router-dom"
import { loadTypes, loadCourtsByType, loadSchedulesByCourt } from "../functions/Courts";
import { useState, useEffect } from "react";
import CourtCard from "../components/CourtCard";
import ScheduleCard from "../components/ScheduleCard";

export default function CourtsPage() {
    const navigate = useNavigate();
    const [types, setTypes] = useState([]);
    const [courts, setCourts] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const [schedules, setSchedules] = useState([]);
  
    useEffect(() => {
        const fetchTypes = async () => {
          const data = await loadTypes();
          setTypes(data);
        };
        fetchTypes();
    }, []);

    const handleTypeClick = async (id_type) => {
        setSelectedType(id_type);
        const data = await loadCourtsByType(id_type);
        setCourts(data);
        setSchedules([]); 
    };

    const handleAvailabilityClick = async (id_court) => {
        const data = await loadSchedulesByCourt(id_court);
        setSchedules(data);
    };

    return (
    <div className="m-[25px]">
        <nav className="flex justify-between w-full items-center">
            <h1 className="text-2xl font-bold mb-2 text-center">Nuestras Canchas</h1>
            <button 
                className="bg-[#34392d] text-white px-4 py-2 rounded-md my-2 hover:bg-[#94a983] transition-colors"
                onClick={()=>navigate('/reserves')}
            >Mis Reservas
            </button>
        </nav>
        <div className="flex my-[50px]">   
            <div className="w-3/5 bg-gray-100 p-[10px]">
                <h2 className="text-center mb-[10px]">Selecciona algun tipo de cancha</h2>
                <div className="flex justify-around flex-wrap mb-[25px]">
                    {types.map((type) => (
                    <button
                        key={type.id_type}
                        className={`basis-[18%] px-4 py-2 rounded border my-2 text-white' ${
                        selectedType === type.id_type ? 'bg-[#94a983]' : 'bg-[#34392d] text-white'
                        }`}
                        onClick={() => handleTypeClick(type.id_type)}
                    >
                        {type.type_name}
                    </button>   
                    ))}
                </div>
                <div>
                    {courts.map((court) => (
                        <CourtCard
                        key={court.id_court}
                        id={court.id_court}
                        description={court.description}
                        onViewAvailability={handleAvailabilityClick}
                        />
                    ))}
                </div>
            </div>
            <div className="w-2/5 bg-gray-100 ml-[10px] p-[10px] flex flex-col items-center">
                <h1 className="font-bold mb-[25px]">Horarios disponibles</h1>
                {schedules.length === 0 ? (
                    <p>No hay horarios cargados.</p>
                ) : (
                    <ul className="w-full flex justify-around flex-wrap">
                        {schedules.map((s) => (
                            <ScheduleCard key={s.id_schedule} schedule={s}/>  
                        ))}
                    </ul>
                )}
            </div>
        </div>
    </div>
    )
}
