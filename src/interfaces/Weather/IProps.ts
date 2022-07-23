import { Iwheather } from "./IWeather";

export interface IWheatherProps {
  wheatherData: Iwheather;
  getWheatherData?: () => void;
}
