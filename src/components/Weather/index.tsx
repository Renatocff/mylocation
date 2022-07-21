import { AiOutlineReload } from "react-icons/ai";
import { TiWeatherCloudy } from "react-icons/ti";
import { ButtonLoader, ContainerCountry, ContainerInfo, InfoHeader } from "./styles";
import { IwheatherData } from '../../interfaces/WeatherData';

  interface IProps {
    wheatherData: IwheatherData | undefined;
    getWheatherData: () => void;
  }

export function Weather({wheatherData, getWheatherData}: IProps) {

    return (
        <ContainerInfo>
            <InfoHeader>
                <h1>{wheatherData?.name}</h1>
                <h4>{wheatherData?.weather[0]?.description}</h4>
                <TiWeatherCloudy size={50} />
                <strong>{wheatherData?.main.temp} °C</strong>
            </InfoHeader>

            <ContainerCountry>
                <strong>{wheatherData?.sys.country === "BR" && "Brasil"}</strong>
                <ButtonLoader onClick={getWheatherData}>
                    <AiOutlineReload />
                </ButtonLoader>
            </ContainerCountry>
        </ContainerInfo>
    );
}