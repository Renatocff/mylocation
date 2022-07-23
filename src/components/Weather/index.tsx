import moment from "moment";
import "moment/locale/pt-br";
import { AiOutlineReload } from "react-icons/ai";
import { IWheatherProps } from "../../interfaces/Weather/IProps";
import WeatherIcon from "../WeatherIcon";
import { BoxDailys } from "./Components/BoxDailys";
import { GeneralInfos } from "./Components/GeneralInfos";
import { Box, BoxIcon, ButtonRefresh, Container } from "./styles";

moment.locale("pt-br");

export function Weather({ wheatherData, getWheatherData }: IWheatherProps) {
  const daysOfWeek = wheatherData?.daily;

  return (
    <Container>
      <Box>
        <GeneralInfos wheatherData={wheatherData} />

        <ButtonRefresh onClick={getWheatherData}>
          <AiOutlineReload size={25} color="#FFF" />
        </ButtonRefresh>

        <BoxIcon>
          <WeatherIcon
            path={String(daysOfWeek?.[0].weather[0].main.toLowerCase())}
            size={40}
            color="#FFF"
            title={daysOfWeek?.[0].weather[0].description}
          />
        </BoxIcon>
      </Box>

      <BoxDailys wheatherData={wheatherData} />
    </Container>
  );
}
