import moment from "moment";
import { useWeather } from "../../../../Context/Wheather/useWeather";
import { BoxGeneralInfos, BoxInfos, InfoSecondary } from "./styles";

export const GeneralInfos = () => {
  const { weather } = useWeather();

  return (
    <BoxGeneralInfos>
      <BoxInfos>
        <h4>{weather.city}</h4>
        <InfoSecondary>
          {moment.unix(Number(weather.current.dt)).format("ddd, DD MMMM")}
        </InfoSecondary>
      </BoxInfos>
      <BoxInfos>
        <h2>{weather.current.temp.toFixed(0)} °C</h2>
        <InfoSecondary>
          {weather.daily[0].temp.min.toFixed(0)} /{" "}
          {weather.daily[0].temp.max.toFixed(0)} °C
        </InfoSecondary>
        <InfoSecondary>{weather.daily[0].weather[0].description}</InfoSecondary>
      </BoxInfos>
      <BoxInfos>
        <h4>Vento: {weather.daily[0].wind_speed.toFixed(0)}Km/h</h4>
        <InfoSecondary>Umidade: {weather.daily[0].humidity}%</InfoSecondary>
      </BoxInfos>
    </BoxGeneralInfos>
  );
};
