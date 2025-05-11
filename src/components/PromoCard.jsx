
function PromoCard({promocion, total_reservas }) {
    return (
      <div className="rounded p-4 mb-4 shadow-md bg-white">
          <h4 className="">{promocion}</h4>
          <p>Total reservas: {total_reservas}</p>
      </div>
    )
  }
  
  export default PromoCard