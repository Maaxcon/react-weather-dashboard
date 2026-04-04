import Button from "./Button"
import type { Filter } from "../type"

type WeatherFiltersProps = {
  filter: Filter
  onSetFilter: (filter: Filter) => void
  onToggleSort: () => void
}

const WeatherFilters = ({
  filter,
  onSetFilter,
  onToggleSort
}: WeatherFiltersProps) => {
  return (
    <div className="weather__filters" data-filter={filter}>
      <Button
        text="All"
        onClick={() => onSetFilter("all")}
        isActive={filter === "all"}
      />
      <Button
        text="Sunny"
        onClick={() => onSetFilter("sunny")}
        isActive={filter === "sunny"}
      />
      <Button
        text="Cloudy"
        onClick={() => onSetFilter("cloudy")}
        isActive={filter === "cloudy"}
      />
      <Button
        text="Rainy"
        onClick={() => onSetFilter("rainy")}
        isActive={filter === "rainy"}
      />
      <Button
        text="Windy"
        onClick={() => onSetFilter("windy")}
        isActive={filter === "windy"}
      />

      <Button
        text="Sort Temp"
        onClick={onToggleSort}
      />
    </div>
  )
}

export default WeatherFilters
