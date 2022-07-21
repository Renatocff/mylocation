import { Message } from "./styles";

interface IMesssage {
    message: string;
}

export function CustomErrorMessage({ message }: IMesssage) {
    return(
        <Message>{message}</Message>
    );
}