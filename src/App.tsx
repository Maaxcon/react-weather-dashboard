import { useState } from 'react'
import { CityCard } from "./components/CityCard"
import { cities } from "./data/cities"
import type { Filter,Sort,City } from "./type"
import Button from './components/Button'
function App() {

  const [filter, setFilter] = useState<Filter>('all')
  const [sort,setSort] = useState<Sort>({
    field:"temp",
    order:"asc"
  })
  

  const filteredCities = cities.filter((city) => {
    if (filter === 'all') return true
    return city.condition === filter
  })

  const sortedCities = [...filteredCities].sort((a,b) => {
    const aValue = a[sort.field]
    const bValue = b[sort.field]

    if(sort.order === "asc"){
      return aValue - bValue
    }
    else{
      return bValue - aValue
    }
  })



  

  return (
    <div className="weather">
      <div className="weather__filters">
        <Button text="All" onClick={() => setFilter('all')} />
        <Button text="Sunny" onClick={() => setFilter('sunny')} />
        <Button text="Cloudy" onClick={() => setFilter('cloudy')} />
        <Button text="Rainy" onClick={() => setFilter('rainy')} />
        <Button text="Windy" onClick={() => setFilter('windy')} />

        <Button text="Sort Temp" onClick={() =>
            setSort((prev) => ({
              ...prev,
              order: prev.order === 'asc' ? 'desc' : 'asc'
            }))
        } />
      </div>

      <div className="weather__list">
        {sortedCities.map((city: City) => (
          <div key={city.id} className="weather__block">
            <CityCard city={city} onClick={() => {}} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
