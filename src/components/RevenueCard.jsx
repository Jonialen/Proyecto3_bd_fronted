import React from 'react'

function RevenueCard({type_name, total_facturado}) {
  return (
    <div className="rounded p-4 mb-4 shadow-md bg-white">
        <h4 className="">Tipo: {type_name}</h4>
        <p>Total ganado: {total_facturado}</p>
    </div>
  )
}

export default RevenueCard