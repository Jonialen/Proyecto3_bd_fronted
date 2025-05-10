import React from 'react'

function BookCard({type_name, total_reservas }) {
  return (
    <div className="rounded p-4 mb-4 shadow-md bg-white">
          <h4 className="">Tipo: {type_name}</h4>
          <p>Total reservas: {total_reservas}</p>
    </div>
  )
}

export default BookCard

