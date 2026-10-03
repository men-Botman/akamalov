import React from 'react'

const FilterBar: React.FC = () => {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
        <label className="flex min-w-0 flex-1 flex-col gap-2 text-sm font-medium text-slate-600">
          <span>Car type</span>
          <select className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100">
            <option>All Types</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Luxury</option>
            <option>Electric</option>
            <option>Economy</option>
          </select>
        </label>

        <label className="flex min-w-0 flex-1 flex-col gap-2 text-sm font-medium text-slate-600">
          <span>Budget</span>
          <div className="flex items-center gap-2">
            <input
              type="number"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
              placeholder="Min $"
            />
            <span className="text-slate-400">—</span>
            <input
              type="number"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
              placeholder="Max $"
            />
          </div>
        </label>

        <label className="flex min-w-0 flex-1 flex-col gap-2 text-sm font-medium text-slate-600">
          <span>Transmission</span>
          <select className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100">
            <option>Any Transmission</option>
            <option>Automatic</option>
            <option>Manual</option>
          </select>
        </label>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Apply filters
        </button>
      </div>
    </div>
  )
}

export default FilterBar
