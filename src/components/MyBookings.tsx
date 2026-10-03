import React from 'react'
import { CalendarDays, CarFront, CreditCard, Trash2 } from 'lucide-react'
import { useCarContext } from '../context/CarContext'

const MyBookings: React.FC = () => {
  const { bookings, cars, cancelBooking } = useCarContext()

  if (!bookings.length) {
    return (
      <section className="mt-10 rounded-[28px] border border-dashed border-slate-300 bg-white/80 p-8 text-center shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">My Bookings</h2>
        <p className="mt-3 text-slate-500">No reservations yet. Book a car to start your trip.</p>
      </section>
    )
  }

  return (
    <section className="mt-10">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-600">Trips</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">My Bookings</h2>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {bookings.map((booking) => {
          const car = cars.find((item) => item.id === booking.carId)

          return (
            <article key={booking.id} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Booking</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">{car?.name ?? 'Unknown car'}</h3>
                </div>
                <span className="inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  {booking.status}
                </span>
              </div>

              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <CarFront size={16} className="text-blue-600" />
                  <span>{car?.model ?? 'Model'} • {car?.year ?? '—'}</span>
                </div>

                <div className="flex items-center gap-3">
                  <CalendarDays size={16} className="text-blue-600" />
                  <span>
                    {new Date(booking.pickupDate).toLocaleDateString()} - {new Date(booking.returnDate).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CreditCard size={16} className="text-blue-600" />
                  <span>Total: ${booking.totalAmount}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => cancelBooking(booking.id)}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-100"
              >
                <Trash2 size={16} />
                Cancel Booking
              </button>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default MyBookings
