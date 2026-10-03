import React, { useState } from 'react'
import type { Car } from '../types/car'
import { useCarContext } from '../context/CarContext'

const ListCarForm: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const { addCar } = useCarContext()
  const [name, setName] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState<number | ''>('')
  const [price, setPrice] = useState<number | ''>('')
  const [location, setLocation] = useState('')

  const handleSubmit = () => {
    if (!name || !model || !year || !price) return
    const car: Car = {
      id: String(Date.now()),
      name,
      model,
      year: Number(year),
      seats: 4,
      fuel: 'Petrol',
      transmission: 'Automatic',
      pricePerDay: Number(price),
      type: 'Economy',
      location: location || 'Unknown',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80',
      images: ['/assets/hero.png'],
      ownerId: 'owner-mock',
    }
    addCar(car)
    onClose()
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">List Your Car</h3>
          <button onClick={onClose} className="text-gray-500">Close</button>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Car name" className="p-2 border rounded-md" />
          <input value={model} onChange={(e) => setModel(e.target.value)} placeholder="Model" className="p-2 border rounded-md" />
          <input value={year === '' ? '' : year} onChange={(e) => setYear(Number(e.target.value))} placeholder="Year" type="number" className="p-2 border rounded-md" />
          <input value={price === '' ? '' : price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Daily price" type="number" className="p-2 border rounded-md" />
          <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" className="p-2 border rounded-md" />
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 border rounded-md">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-indigo-600 text-white rounded-md">List Car</button>
        </div>
      </div>
    </div>
  )
}

export default ListCarForm
