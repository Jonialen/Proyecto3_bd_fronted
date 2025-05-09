import React from 'react'

export default function CourtCard({ id, description, onViewAvailability }) {
  return (
    <div className="flex justify-between items-center bg-gray-300 rounded-md p-6 mb-4 shadow-md">
      <div>
        <p className="text-lg font-semibold">id_cancha: {id}</p>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
      <button
        onClick={() => onViewAvailability(id) }
        className="bg-[#34392d] text-white px-6 py-3 rounded-3xl hover:bg-[#94a983] transition"
      >
        Ver disponibilidad
      </button>
    </div>
  )
}

