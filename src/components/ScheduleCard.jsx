export default function ScheduleCard({ schedule }) {
    return (
      <div className="border p-2 rounded bg-white mb-2 shadow">
        <p><strong>Fecha:</strong> {schedule.schedule_date}</p>
        <p><strong>Horario:</strong> {schedule.start_time} - {schedule.end_time}</p>
        <button className="bg-[#94a983] w-full rounded-md mt-2 p-1">Reservar</button>
      </div>
    );
}