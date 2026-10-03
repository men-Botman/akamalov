import { useState } from 'react'
import { CarProvider, useCarContext } from './context/CarContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FilterBar from './components/FilterBar'
import CarCard from './components/CarCard'
import BookingModal from './components/BookingModal'
import ListCarForm from './components/ListCarForm'
import MyBookings from './components/MyBookings'
// `useCarContext` imported above

function AppContent() {
  const { cars } = useCarContext()
  const [selectedCarId, setSelectedCarId] = useState<string | null>(null)
  const [showListForm, setShowListForm] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar onListCar={() => setShowListForm(true)} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Hero />
        <div className="mt-6">
          <FilterBar />
        </div>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} onBook={() => setSelectedCarId(car.id)} />
          ))}
        </section>

        <MyBookings />
      </main>

      <BookingModal
        open={!!selectedCarId}
        carId={selectedCarId}
        onClose={() => setSelectedCarId(null)}
      />

      <ListCarForm open={showListForm} onClose={() => setShowListForm(false)} />
    </div>
  )
}

function App() {
  return (
    <CarProvider>
      <AppContent />
    </CarProvider>
  )
}

export default App
