import type { City } from "../type"

const CityDetails = ({ city }: { city: City }) => {
  return (
    <div className="weather__details">
      <p>Humidity: {city.humidity}</p>
      <p>Wind: {city.wind}</p>
      <p>Condition: {city.condition}</p>
    </div>
  )
}

export default CityDetails
