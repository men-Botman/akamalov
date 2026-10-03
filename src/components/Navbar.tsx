import React from 'react'
import { Search } from 'lucide-react'

const navItems = ['Home', 'Cars', 'My Bookings']

const Navbar: React.FC<{ onListCar: () => void }> = ({ onListCar }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/20">
              CR
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight text-slate-900">CarRental</div>
              <div className="text-xs text-slate-500">Drive your way</div>
            </div>
          </div>

          <nav className="hidden md:flex flex-1 items-center justify-center">
            <ul className="flex items-center gap-8 text-sm font-medium text-slate-600">
              {navItems.map((item) => (
                <li key={item}>
                  <button type="button" className="transition hover:text-blue-600">
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onListCar}
                  className="transition hover:text-blue-600"
                >
                  List Your Car
                </button>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-500 shadow-sm transition focus-within:border-blue-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100">
              <Search size={16} className="text-slate-400" />
              <input
                className="w-56 border-0 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                placeholder="Search cars, models, locations"
              />
            </div>

            <div className="flex items-center gap-2">
              <button type="button" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                Login
              </button>
              <button type="button" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                Register
              </button>
              <button
                type="button"
                onClick={onListCar}
                className="hidden rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:inline-flex"
              >
                List Your Car
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
