export type WeatherCondition = | "windy" | "cloudy "| "rainy" | "sunny"

export type City = {
    id:number,
    name:string,
    temp:number,
    humidity:number,
    wind:number,
    condition: WeatherCondition,
}


export type Filter = | "all" | "sunny" | "cloudy" | "rainy" | "windy"



export type SortField = 'temp' | 'humidity' | 'wind'
export type SortOrder = 'asc' | 'desc'

export type Sort = {
    field: SortField
    order: SortOrder
}

export type SelectedCity = {
    name:City | null
}


export type Props = {
  city: City
  onClick: (city: City) => void
}


export type Button = {
    text:string
    onClick:() => void
}

export type ButtonT = Button

export const APP_ACTIONS = {
    SET_FILTER: "set-filter",
    TOGGLE_SORT_ORDER: "toggle-sort-order",
    SELECT_CITY: "select-city",
} as const

export type AppAction =
    | { type: typeof APP_ACTIONS.SET_FILTER, payload: Filter }
    | { type: typeof APP_ACTIONS.TOGGLE_SORT_ORDER }
    | { type: typeof APP_ACTIONS.SELECT_CITY, payload: City | null }

export type AppState = {
    filter: Filter,
    sort: Sort,
    selectedCity: City | null,
}
