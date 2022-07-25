import { Iwheather } from "../Weather/IWeather";

export interface IWeatherContext {
  weather: Iwheather;
  setWeather: (weather: Iwheather) => void;
}
