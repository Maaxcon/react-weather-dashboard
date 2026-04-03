import { CityCard } from "./components/CityCard"
import { cities } from "./data/cities"
import type { City } from "./type"
function App() {

  return (
    <div className="weather">
      <div className="weather__list">
        {cities.map((city: City) => (
          <div key={city.id} className="weather__block">
            <CityCard
              city={city}
              onClick={() => {}}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
