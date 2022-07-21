import { useCallback, useEffect, useMemo, useState } from "react";
import { TailSpin } from "react-loader-spinner";

import { Container } from "../components/Container";
import imageBackground from '../images/bg2.jpg';
import api from "../services/api";
import { Weather } from "../components/Weather";
import { CustomErrorMessage } from "../components/CustomErrorMessage/CustomErrorMessage";
import { IwheatherData } from '../interfaces/WeatherData';

export function Home() {

    const [loading, setLoading] = useState<Boolean>(false);
    const [wheatherData, setWheatherData] = useState<IwheatherData>();

    const getWheatherData = useCallback(() => {
        setLoading(true);

        navigator.geolocation.getCurrentPosition(async (location) => {
            const { latitude: lat, longitude: lon } = location.coords;

            try {
                const { data: wheatherResponse } = await api.get(`/weather?lat=${lat}&lon=${lon}&lang=pt_br&&units=metric&appid=${process.env.REACT_APP_APISECRET}`);

                setWheatherData(wheatherResponse);
                setLoading(false);
            } catch (err) {
                setLoading(false);
            }
        });
    }, [setLoading]);

    const handleWeather = useMemo(() => {
        if (wheatherData) {
            return <Weather wheatherData={wheatherData} getWheatherData={getWheatherData} />
        }

        return <CustomErrorMessage message="Estamos passando por um problema interno, volte em breve.." />
    }, [getWheatherData, wheatherData]);

    useEffect(() => {
        getWheatherData();
    }, [getWheatherData])

    return (
        <Container bg={imageBackground}>
            {
                loading ?
                    <TailSpin ariaLabel="loading-indicator" color='white' />
                    :
                    handleWeather
            }
        </Container>
    );
}