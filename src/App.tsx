import { useState } from 'react'
import { CityCard } from "./components/CityCard"
import { cities } from "./data/cities"
import type { City } from "./type"
import type { Filter } from "./type"
import Button from './components/Button'
function App() {

  const [filter, setFilter] = useState<Filter>('all')

  const filteredCities = cities.filter((city) => {
    if (filter === 'all') return true
    return city.condition === filter
  })

  return (
    <div className="weather">
      
        <Button text="All" onClick={() => setFilter('all')} />
        <Button text="Sunny" onClick={() => setFilter('sunny')} />
        <Button text="Cloudy" onClick={() => setFilter('cloudy')} />
        <Button text="Rainy" onClick={() => setFilter('rainy')} />
        <Button text="Windy" onClick={() => setFilter('windy')} />

        <div className="weather__list">
          {filteredCities.map((city: City) => (
            <div key={city.id} className="weather__block">
              <CityCard city={city} onClick={() => {}} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default App
