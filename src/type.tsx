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