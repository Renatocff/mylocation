import { ReactNode } from 'react';
import { Container as ContainerMain } from './styles';

interface IProps {
    children: ReactNode;
    bg?: any;    
}

export function Container({ children, bg }: IProps) {
    return(
        <ContainerMain bg={bg}>
            {children}
        </ContainerMain>
    );
 }