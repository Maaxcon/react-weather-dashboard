import type { Detail } from "../type"

const CityDetails = ({ city }: { city: Detail }) => {
    return (
        <div className="weather__details">
            <p>Humidity: {city.humidity}</p>
            <p>Wind: {city.wind}</p>
        </div>
    )
}

export default CityDetails