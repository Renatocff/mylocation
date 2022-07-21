import styled from 'styled-components';

interface Iprops {
    bg?: any;
    width?: string;
    height?: string;
}

export const Container = styled.div<Iprops>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${( { width }) => width || "100vw"};
    height: ${( { height }) => height || "100vh"};
    background-image: url(${({ bg }) => bg || "unset"});
    background-size: ${({ bg }) => bg ? 'cover' : 'unset'};
    border-radius: 0 0 7px 7px;
`;