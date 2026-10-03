import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { Car, Booking } from '../types/car'
import sampleImg from '../assets/hero.png'

interface CarContextValue {
  cars: Car[]
  addCar: (car: Car) => void
  bookings: Booking[]
  addBooking: (booking: Booking) => void
  cancelBooking: (bookingId: string) => void
}

const BOOKINGS_STORAGE_KEY = 'car-rental-bookings'

const CarContext = createContext<CarContextValue | undefined>(undefined)

export const CarProvider = ({ children }: { children: ReactNode }) => {
  const [cars, setCars] = useState<Car[]>(() => [
    {
      id: '1',
      name: 'Tesla Model 3',
      model: 'Model 3',
      year: 2022,
      seats: 5,
      fuel: 'Electric',
      transmission: 'Automatic',
      pricePerDay: 120,
      type: 'Electric',
      location: 'San Francisco',
      image:
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
      images: [sampleImg],
      ownerId: 'owner1',
    },
    {
      id: '2',
      name: 'Toyota Camry',
      model: 'Camry',
      year: 2020,
      seats: 5,
      fuel: 'Petrol',
      transmission: 'Automatic',
      pricePerDay: 55,
      type: 'Sedan',
      location: 'Los Angeles',
      image:
        'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80',
      images: [sampleImg],
      ownerId: 'owner2',
    },
    {
      id: '3',
      name: 'BMW X5',
      model: 'X5',
      year: 2021,
      seats: 5,
      fuel: 'Diesel',
      transmission: 'Automatic',
      pricePerDay: 180,
      type: 'Luxury',
      location: 'New York',
      image:
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80',
      images: [sampleImg],
      ownerId: 'owner3',
    },
  ])

  const [bookings, setBookings] = useState<Booking[]>(() => {
    if (typeof window === 'undefined') return []

    try {
      const raw = localStorage.getItem(BOOKINGS_STORAGE_KEY)
      return raw ? (JSON.parse(raw) as Booking[]) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(bookings))
    }
  }, [bookings])

  const addCar = (car: Car) => setCars((s) => [car, ...s])

  const addBooking = (newBooking: Booking) => {
    setBookings((current) => [newBooking, ...current])
  }

  const cancelBooking = (bookingId: string) => {
    setBookings((current) => current.filter((booking) => booking.id !== bookingId))
  }

  return (
    <CarContext.Provider value={{ cars, addCar, bookings, addBooking, cancelBooking }}>
      {children}
    </CarContext.Provider>
  )
}

export const useCarContext = () => {
  const ctx = useContext(CarContext)
  if (!ctx) throw new Error('useCarContext must be used within CarProvider')
  return ctx
}

export default CarProvider
