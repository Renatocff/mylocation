import moment from "moment";
import "moment/locale/pt-br";
import { AiOutlineReload } from "react-icons/ai";
import { useWeather } from "../../Context/Wheather/useWeather";
import { IWheatherProps } from "../../interfaces/Weather/IProps";
import WeatherIcon from "../WeatherIcon";
import { BoxDailys } from "./Components/BoxDailys";
import { GeneralInfos } from "./Components/GeneralInfos";
import { Box, BoxIcon, ButtonRefresh, Container } from "./styles";

moment.locale("pt-br");

export const Weather = ({ getWheatherData }: IWheatherProps) => {
  const { weather } = useWeather();

  return (
    <Container>
      <Box>
        <GeneralInfos />

        <ButtonRefresh onClick={getWheatherData}>
          <AiOutlineReload size={25} color="#FFF" />
        </ButtonRefresh>

        <BoxIcon>
          <WeatherIcon
            path={String(weather.daily?.[0].weather[0].main.toLowerCase())}
            size={40}
            color="#FFF"
            title={weather.daily?.[0].weather[0].description}
          />
        </BoxIcon>
      </Box>

      <BoxDailys />
    </Container>
  );
};
