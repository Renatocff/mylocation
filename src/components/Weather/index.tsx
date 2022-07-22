import { AiOutlineReload } from "react-icons/ai";
import { TiWeatherCloudy } from "react-icons/ti";
import { ButtonLoader, ContainerCountry, ContainerInfo, InfoHeader } from "./styles";
import { IWheatherProps } from "../../interfaces/Weather/IProps";

export function Weather({wheatherData, getWheatherData}: IWheatherProps) {

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