import { useCallback } from "react"
import { cities } from "./data/cities"
import { APP_ACTIONS } from "./type"
import type { City } from "./type"
import { useWeatherState } from "./hooks/useWeatherState"
import WeatherFilters from "./components/WeatherFilters"
import CityList from "./components/CityList"
import CityModal from "./components/CityModal"

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

  const handleSelectCity = useCallback((clickedCity: City) => {
    dispatch({ type: APP_ACTIONS.SELECT_CITY, payload: clickedCity })
  }, [dispatch])

  const handleCloseModal = useCallback(() => {
    dispatch({ type: APP_ACTIONS.SELECT_CITY, payload: null })
  }, [dispatch])

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

      <CityList
        cities={sortedCities}
        onSelect={handleSelectCity}
      />

      {state.selectedCity ? (
        <CityModal
          city={state.selectedCity}
          onClose={handleCloseModal}
        />
      ) : null}
    </div>
  )
}

export default App
