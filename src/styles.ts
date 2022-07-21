import styled from 'styled-components';
import imageHeader from "./images/time.jpg";

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #FFF;
    width: 300px;
    height: 183px;
    border-radius: 7px;
    -webkit-box-shadow: 0px 2px 10px 0px #725D60; 
    box-shadow: 0px 2px 10px 0px #725D60;
`;

export const InfoHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 150px;
    background-image: url(${imageHeader});
    background-size: cover;

    strong {
        margin-left: auto;
        padding-right: 5px;
        color: #FFF;
    }

    h1, h4 {
        opacity: 0.6;
    }

    svg {
        opacity: 0.6;
    }
`;

export const ContainerCountry = styled.div`
    background: #001a64;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    strong {
        color: #FFF;
    }
`;

export const ButtonLoader = styled.button`
    background: transparent;
    border: none;
    border-radius: 3px;
    padding: 3px;
    cursor: pointer;

    svg {
        margin-top: 2px;
        color: #FFF;
    }
`;