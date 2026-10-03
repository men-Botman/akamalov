import React, { useEffect, useState } from 'react'
import type { Car } from '../types/car'
import { ArrowRight, Fuel, Gauge, MapPin, Users } from 'lucide-react'

const fallbackCarSvg = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#dbeafe"/>
      <stop offset="100%" stop-color="#eff6ff"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" rx="36" fill="url(#bg)"/>
  <circle cx="180" cy="160" r="110" fill="#93c5fd" opacity="0.35"/>
  <circle cx="1010" cy="580" r="190" fill="#bfdbfe" opacity="0.35"/>
  <rect x="180" y="250" width="840" height="300" rx="28" fill="#ffffff" opacity="0.6"/>
  <path d="M260 470 L430 470 L560 340 L740 340 C790 340 830 360 860 400 L940 470 L980 470 L990 520 L250 520 Z" fill="#2563eb" opacity="0.82"/>
  <circle cx="420" cy="520" r="56" fill="#0f172a"/>
  <circle cx="420" cy="520" r="20" fill="#e2e8f0"/>
  <circle cx="800" cy="520" r="56" fill="#0f172a"/>
  <circle cx="800" cy="520" r="20" fill="#e2e8f0"/>
  <rect x="320" y="250" width="150" height="80" rx="15" fill="#dbeafe" opacity="0.9"/>
  <text x="600" y="180" text-anchor="middle" font-size="54" font-family="Arial, sans-serif" font-weight="700" fill="#0f172a">Car Rental</text>
</svg>
`)}`

const CarCard: React.FC<{ car: Car; onBook: () => void }> = ({ car, onBook }) => {
  const [imageSrc, setImageSrc] = useState(car.image || fallbackCarSvg)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setImageSrc(car.image || fallbackCarSvg)
    setIsLoading(true)
  }, [car.image])

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden rounded-2xl p-2">
        {isLoading && (
          <div className="h-48 w-full animate-pulse rounded-2xl bg-slate-200" aria-label="Loading car image" />
        )}

        <img
          src={imageSrc}
          alt={car.name}
          onLoad={() => setIsLoading(false)}
          onError={(e) => {
            const fallback = `https://placehold.co/600x400/2563eb/ffffff?text=${encodeURIComponent(car.name)}`
            e.currentTarget.src = fallback
            setImageSrc(fallback)
            setIsLoading(false)
          }}
          className={`h-48 w-full rounded-2xl object-cover shadow-md transition duration-500 group-hover:scale-105 ${
            isLoading ? 'hidden' : 'block'
          }`}
        />

        <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm">
          {car.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-slate-900">{car.name}</h3>
            <p className="mt-1 text-sm text-slate-500">
              {car.model} • {car.year}
            </p>
          </div>
          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700">
            {car.transmission}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-600">
          <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-2.5 py-2">
            <Users size={16} className="text-blue-600" />
            {car.seats} seats
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-2.5 py-2">
            <Gauge size={16} className="text-blue-600" />
            {car.transmission}
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-2.5 py-2">
            <Fuel size={16} className="text-blue-600" />
            {car.fuel}
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-2.5 py-2">
            <MapPin size={16} className="text-blue-600" />
            {car.location}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Price / day</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">${car.pricePerDay}</p>
          </div>

          <button
            type="button"
            onClick={onBook}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Book Now
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </article>
  )
}

export default CarCard
