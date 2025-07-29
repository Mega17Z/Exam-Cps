import { useState } from 'react'
import './Car.css'

const nombrePlaces = 12 // par exemple
const placesDisponibles = [1, 2, 3, 4, 5, 6, 9, 10] // Les autres sont réservées

const CarSimulator = () => {
  const [selected, setSelected] = useState([])

  const allSeats = Array.from({ length: nombrePlaces }, (_, i) => i + 1)

  const toggleSelect = (place) => {
    if (!placesDisponibles.includes(place)) return
    setSelected((prev) =>
      prev.includes(place)
        ? prev.filter((p) => p !== place)
        : [...prev, place]
    )
  }

  const getSeatColor = (seat) => {
    if (!placesDisponibles.includes(seat)) return '#ff6b6b' // rouge
    if (selected.includes(seat)) return '#79f38b' // vert
    return '#f1f1f1' // gris clair
  }

  const seatRows = []
  for (let i = 0; i < allSeats.length; i += 4) {
    const row = allSeats.slice(i, i + 4)
    seatRows.push(row)
  }

  return (
    <div className="container mt-5">
      <h5 className="mb-4">🚌 Plan du Véhicule</h5>
      <div style={{ width: '300px', margin: 'auto' }}>
        {seatRows.map((row, idx) => (
          <div className="seat-row mb-3" key={idx}>
            <div className="seat-block">
              {row.slice(0, 2).map((seat) => (
                <div
                  key={seat}
                  className="seat"
                  onClick={() => toggleSelect(seat)}
                  style={{ backgroundColor: getSeatColor(seat), cursor: 'pointer' }}
                >
                  {seat}
                </div>
              ))}
            </div>
            <div className="seat-block">
              {row.slice(2, 4).map((seat) => (
                <div
                  key={seat}
                  className="seat"
                  onClick={() => toggleSelect(seat)}
                  style={{ backgroundColor: getSeatColor(seat), cursor: 'pointer' }}
                >
                  {seat}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CarSimulator
