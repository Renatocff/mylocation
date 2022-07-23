import { Iwheather } from "./IWeather";

export interface IWheatherProps {
  wheatherData: Iwheather | undefined;
  getWheatherData?: () => void;
}
