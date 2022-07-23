import moment from "moment";
import { IWheatherProps } from "../../../../interfaces/Weather/IProps";
import WeatherIcon from "../../../WeatherIcon";
import {
  BoxDailys as Container,
  BoxDay,
  DayInfoForecast,
  DayOfWeek,
} from "./styles";

export function BoxDailys({ wheatherData }: IWheatherProps) {
  const daysOfWeek = wheatherData?.daily;

  return (
    <Container>
      {daysOfWeek?.map((day, index) => {
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
}
