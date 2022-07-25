import moment from "moment";
import { useWeather } from "../../../../Context/Wheather/useWeather";
import WeatherIcon from "../../../WeatherIcon";
import {
  BoxDailys as Container,
  BoxDay,
  DayInfoForecast,
  DayOfWeek,
} from "./styles";

export const BoxDailys = () => {
  const { weather } = useWeather();

  return (
    <Container>
      {weather.daily.map((day, index) => {
        if (index > 0 && index < 5) {
          return (
            <BoxDay key={index}>
              <DayOfWeek>
                {moment.unix(Number(day.dt)).format("ddd, DD MMMM")}
              </DayOfWeek>
              <WeatherIcon
                path={String(day.weather[0].main.toLowerCase())}
                size={40}
                color="#000"
                title={day.weather[0].description}
              />
              <DayInfoForecast>{day.weather[0].description}</DayInfoForecast>
              <DayInfoForecast>
                {day.temp.min.toFixed(0)} / {day.temp.max.toFixed(0)} °C
              </DayInfoForecast>
            </BoxDay>
          );
        }
        return null;
      })}
    </Container>
  );
};
