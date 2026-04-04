import type { City } from "../type"
import { CityCard } from "./CityCard"

type CityListProps = {
  cities: City[]
  onSelect: (city: City) => void
}

const CityList = ({ cities, onSelect }: CityListProps) => {
  return (
    <div className="weather__list">
      {cities.map((city) => (
        <div key={city.id} className="weather__block">
          <CityCard city={city} onClick={onSelect} />
        </div>
      ))}
    </div>
  )
}

export default CityList
