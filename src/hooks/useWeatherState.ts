import { useReducer } from "react"
import type { AppAction, AppState } from "../type"
import { APP_ACTIONS } from "../type"

const initialState: AppState = {
  filter: "all",
  sort: {
    field: "temp",
    order: "asc"
  },
  selectedCity: null
}

const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case APP_ACTIONS.SET_FILTER:
      return { ...state, filter: action.payload }
    case APP_ACTIONS.TOGGLE_SORT_ORDER:
      return {
        ...state,
        sort: {
          ...state.sort,
          order: state.sort.order === "asc" ? "desc" : "asc"
        }
      }
    case APP_ACTIONS.SELECT_CITY:
      if (!action.payload) {
        return { ...state, selectedCity: null }
      }
      return {
        ...state,
        selectedCity:
          state.selectedCity?.id === action.payload.id ? null : action.payload
      }
    default:
      return state
  }
}

export const useWeatherState = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return { state, dispatch }
}
