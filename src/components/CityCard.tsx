import type { Props } from "../type"

export const CityCard = ({ city, onClick }: Props) => {
  return (
    <div onClick={() => onClick(city)}>
      <h3>{city.name}</h3>
      <h4>Temp: {city.temp}°C</h4>
      <p>Condition: {city.condition}</p>
    </div>
  )
}