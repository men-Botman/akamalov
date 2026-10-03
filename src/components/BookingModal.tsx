import React, { useMemo, useState } from 'react'
import { useCarContext } from '../context/CarContext'
import type { Booking } from '../types/car'

const BookingModal: React.FC<{ open: boolean; carId: string | null; onClose: () => void }> = ({ open, carId, onClose }) => {
  const { cars, addBooking } = useCarContext()
  const car = cars.find((c) => c.id === carId) || null

  const [pickup, setPickup] = useState<string>('')
  const [ret, setRet] = useState<string>('')
  const [insurance, setInsurance] = useState<boolean>(false)
  const [driver, setDriver] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const days = useMemo(() => {
    if (!pickup || !ret) return 0
    const d1 = new Date(pickup)
    const d2 = new Date(ret)
    const diff = Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24))
    return diff > 0 ? diff : 0
  }, [pickup, ret])

  const total = useMemo(() => {
    if (!car) return 0
    let t = car.pricePerDay * days
    if (insurance) t += 15 * days
    if (driver) t += 30 * days
    return t
  }, [car, days, insurance, driver])

  const handleConfirm = () => {
    if (!car) return

    if (!pickup || !ret) {
      setErrorMessage('Please choose valid pickup and return dates.')
      return
    }

    const pickupDate = new Date(pickup)
    const returnDate = new Date(ret)

    if (Number.isNaN(pickupDate.getTime()) || Number.isNaN(returnDate.getTime())) {
      setErrorMessage('Please choose valid pickup and return dates.')
      return
    }

    if (returnDate <= pickupDate) {
      setErrorMessage('Return date must be after the pickup date.')
      return
    }

    setErrorMessage(null)

    const booking: Booking = {
      id: String(Date.now()),
      carId: car.id,
      userId: 'user-mock',
      pickupDate: pickupDate.toISOString(),
      returnDate: returnDate.toISOString(),
      totalAmount: total,
      totalPrice: total,
      insurance,
      driverRequired: driver,
      status: 'Confirmed',
    }

    addBooking(booking)
    setPickup('')
    setRet('')
    setInsurance(false)
    setDriver(false)
    onClose()
  }

  if (!open || !car) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold">Book {car.name}</h3>
          <button onClick={onClose} className="text-gray-500">Close</button>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm">Pickup</label>
            <input
              type="date"
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value)
                setErrorMessage(null)
              }}
              className="p-2 border rounded-md w-full"
            />
          </div>
          <div>
            <label className="block text-sm">Return</label>
            <input
              type="date"
              value={ret}
              onChange={(e) => {
                setRet(e.target.value)
                setErrorMessage(null)
              }}
              className="p-2 border rounded-md w-full"
            />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <label className="flex items-center gap-2"><input type="checkbox" checked={insurance} onChange={(e) => setInsurance(e.target.checked)} />Insurance (+$15/day)</label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={driver} onChange={(e) => setDriver(e.target.checked)} />Driver (+$30/day)</label>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">Days: {days}</div>
          <div className="text-lg font-bold">Total: ${total}</div>
        </div>

        {errorMessage && (
          <div className="bg-red-50 text-red-600 p-3 rounded-xl border border-red-200 text-sm font-medium mb-4 mt-4">
            {errorMessage}
          </div>
        )}

        <div className="mt-6 flex justify-end space-x-3">
          <button onClick={onClose} className="px-4 py-2 border rounded-md">Cancel</button>
          <button onClick={handleConfirm} className="px-4 py-2 bg-indigo-600 text-white rounded-md">Confirm Booking</button>
        </div>
      </div>
    </div>
  )
}

export default BookingModal
