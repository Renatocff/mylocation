import { createContext, useContext, useState } from "react";
import { IChildren } from "../../interfaces/Children";
import { IWeatherContext } from "../../interfaces/Context";
import { Iwheather } from "../../interfaces/Weather/IWeather";

const DEFAULT_VALUE = {
  weather: {
    city: "",
    current: {
      dt: 0,
      temp: 0,
    },
    daily: [
      {
        dt: 0,
        temp: {
          min: 0,
          max: 0,
        },
        humidity: 0,
        wind_speed: 0,
        weather: [
          {
            main: "",
            description: "",
          },
        ],
      },
    ],
  },
  setWeather: () => {},
};

const WeatherContext = createContext<IWeatherContext>(DEFAULT_VALUE);

export const WeatherProvider = ({ children }: IChildren) => {
  const [weather, setWeather] = useState<Iwheather>(DEFAULT_VALUE.weather);

  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);

  return context;
};
