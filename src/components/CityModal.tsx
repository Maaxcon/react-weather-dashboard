import type { City } from "../type"
import CityDetails from "./CityDetails"

type CityModalProps = {
  city: City
  onClose: () => void
}

const CityModal = ({ city, onClose }: CityModalProps) => {
  return (
    <div className="weather__overlay" onClick={onClose}>
      <div
        className="weather__modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="weather__modal-header">
          <div>
            <p className="weather__modal-label">Details</p>
            <h2 className="weather__modal-title">{city.name}</h2>
          </div>
          <button className="weather__modal-close" onClick={onClose}>
            Close
          </button>
        </div>
        <CityDetails city={city} />
      </div>
    </div>
  )
}

export default CityModal
