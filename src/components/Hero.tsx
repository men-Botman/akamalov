import React from 'react'
import { CalendarDays, MapPin, Search } from 'lucide-react'
import heroImg from '../assets/hero.png'

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700 px-6 py-8 shadow-[0_30px_80px_-30px_rgba(30,64,175,0.7)] md:px-10 lg:px-12">
      <div className="absolute -right-12 top-12 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -left-10 bottom-0 h-44 w-44 rounded-full bg-sky-400/20 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
            Premium mobility
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Luxury & everyday cars on your schedule.
          </h1>
          <p className="mt-4 max-w-xl text-base text-sky-100 md:text-lg">
            Discover a seamless rental experience with premium vehicles, flexible pickup plans,
            and transparent pricing designed around how you move.
          </p>

          <div className="mt-8 rounded-[28px] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
            <div className="grid gap-3 md:grid-cols-4">
              <label className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-slate-500 shadow-sm ring-1 ring-slate-200">
                <MapPin size={18} className="text-blue-600" />
                <input
                  className="w-full border-0 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                  placeholder="Location"
                />
              </label>

              <label className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-slate-500 shadow-sm ring-1 ring-slate-200">
                <CalendarDays size={18} className="text-blue-600" />
                <input
                  type="date"
                  className="w-full border-0 bg-transparent text-sm text-slate-700 focus:outline-none"
                />
              </label>

              <label className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-slate-500 shadow-sm ring-1 ring-slate-200">
                <CalendarDays size={18} className="text-blue-600" />
                <input
                  type="date"
                  className="w-full border-0 bg-transparent text-sm text-slate-700 focus:outline-none"
                />
              </label>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                <Search size={16} />
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-md flex-shrink-0">
          <div className="rounded-[28px] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
            <img
              src={heroImg}
              alt="featured car"
              className="h-[260px] w-full rounded-[22px] object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
