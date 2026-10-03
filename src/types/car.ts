export type CarType = 'Sedan' | 'SUV' | 'Luxury' | 'Electric' | 'Economy'

export interface Car {
  id: string
  name: string
  model: string
  year: number
  seats: number
  fuel: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid'
  transmission: 'Automatic' | 'Manual'
  pricePerDay: number
  type: CarType
  location: string
  image: string
  images: string[]
  ownerId?: string
}

export type BookingStatus = 'Confirmed' | 'Cancelled'

export interface Booking {
  id: string
  carId: string
  userId: string
  pickupDate: string // ISO
  returnDate: string // ISO
  totalAmount: number
  insurance: boolean
  driverRequired: boolean
  status: BookingStatus
  totalPrice?: number
}

export interface User {
  id: string
  name: string
  email: string
  phone?: string
}
