
function CourtCard({id_court, description, veces_rentada }) {
    return (
      <div className="rounded p-4 mb-4 shadow-md bg-white">
          <h4 className="">ID: {id_court}</h4>
          <p >{description}</p>
          <p>Total reservas: {veces_rentada}</p>
      </div>
    )
}
  
export default CourtCard