import { CityCard } from "./components/CityCard"
import CityDetails from "./components/CityDetails"
import { cities } from "./data/cities"
import type { City } from "./type"
import { APP_ACTIONS } from "./type"
import { useWeatherState } from "./hooks/useWeatherState"
import WeatherFilters from "./components/WeatherFilters"

function App() {

  const { state, dispatch } = useWeatherState()

  const filteredCities = cities.filter((city) => {
    if (state.filter === 'all') return true
    return city.condition === state.filter
  })

  const sortedCities = [...filteredCities].sort((a,b) => {
    const aValue = a[state.sort.field]
    const bValue = b[state.sort.field]

    if(state.sort.order === "asc"){
      return aValue - bValue
    }
    else{
      return bValue - aValue
    }
  })



  

  return (
    <div className="weather">
      <WeatherFilters
        filter={state.filter}
        onSetFilter={(filter) =>
          dispatch({ type: APP_ACTIONS.SET_FILTER, payload: filter })
        }
        onToggleSort={() =>
          dispatch({ type: APP_ACTIONS.TOGGLE_SORT_ORDER })
        }
      />

      <div className="weather__list">
        {sortedCities.map((city: City) => (
          <div key={city.id} className="weather__block">
            <CityCard
              city={city}
              onClick={(clickedCity) =>
                dispatch({ type: APP_ACTIONS.SELECT_CITY, payload: clickedCity })
              }
            />
          </div>
        ))}
      </div>

      {state.selectedCity ? (
        <div
          className="weather__overlay"
          onClick={() => dispatch({ type: APP_ACTIONS.SELECT_CITY, payload: null })}
        >
          <div
            className="weather__modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="weather__modal-header">
              <div>
                <p className="weather__modal-label">Details</p>
                <h2 className="weather__modal-title">{state.selectedCity.name}</h2>
              </div>
              <button
                className="weather__modal-close"
                onClick={() =>
                  dispatch({ type: APP_ACTIONS.SELECT_CITY, payload: null })
                }
              >
                Close
              </button>
            </div>
            <CityDetails city={state.selectedCity} />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default App
