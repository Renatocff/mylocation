import { useCallback, useEffect, useMemo, useState } from "react";
import { TailSpin } from "react-loader-spinner";

import { Container } from "../../components/Container";
import imageBackground from "../../images/bg2.jpg";
import api from "../../services/api";
import { Weather } from "../../components/Weather";
import { CustomErrorMessage } from "../../components/CustomErrorMessage";
import { Iwheather } from "../../interfaces/Weather/IWeather";

export function Home() {
  const [loading, setLoading] = useState<Boolean>(false);
  const [wheatherData, setWheatherData] = useState<Iwheather>();

  const getWheatherData = useCallback(() => {
    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (location) => {
        const { latitude: lat, longitude: lon } = location.coords;

        try {
          const { data: wheatherCity } = await api.get(
            `/weather?lat=${lat}&lon=${lon}&lang=pt_br&&units=metric&appid=${process.env.REACT_APP_APISECRET}`
          );

          const { data: wheatherForecast } = await api.get(
            `/onecall?appid=${process.env.REACT_APP_APISECRET}&lang=pt_br&units=metric&lat=${lat}&lon=${lon}&exclude=hourly,minutely`
          );

          const wheather: Iwheather = {
            ...wheatherForecast,
            city: wheatherCity.name,
          };

          setWheatherData(wheather);

          setLoading(false);
        } catch (err) {
          setLoading(false);
        }
      },
      (err) => {
        if (err.code === 1) {
          setLoading(false);
          alert(
            "Você precisa permitir o acesso a sua localização no navegador. Este recurso é necessário para o bom funcionamento da aplicação..."
          );
        }
      }
    );
  }, []);

  const handleWeather = useMemo(() => {
    if (wheatherData)
      return (
        <Weather
          wheatherData={wheatherData}
          getWheatherData={getWheatherData}
        />
      );

    return (
      <CustomErrorMessage message="Estamos passando por um problema interno, volte em breve.." />
    );
  }, [getWheatherData, wheatherData]);

  useEffect(() => {
    getWheatherData();
  }, [getWheatherData]);

  return (
    <Container bg={imageBackground}>
      {loading ? (
        <TailSpin ariaLabel="loading-indicator" color="white" />
      ) : (
        handleWeather
      )}
    </Container>
  );
}
