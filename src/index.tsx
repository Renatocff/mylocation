import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyles from "./styles/global";
import { Home } from "./pages/Home";
import { WeatherProvider } from "./Context/Wheather/useWeather";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <WeatherProvider>
      <Home />
    </WeatherProvider>
  </React.StrictMode>
);
