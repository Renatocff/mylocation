import { IPropsContainer } from '../../interfaces/Container/IContainer';
import { Container as ContainerMain } from './styles';

export function Container({ children, bg }: IPropsContainer) {
    return(
        <ContainerMain bg={bg}>
            {children}
        </ContainerMain>
    );
 }