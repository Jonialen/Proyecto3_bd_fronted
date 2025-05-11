
export default function UserCard({id ,name, total_reservas}) {
  return (
    <div className="rounded p-4 mb-4 shadow-md bg-white">
        <h4 className="">{name}</h4>
        <p>Total reservas: {total_reservas}</p>
    </div>
  )
}
