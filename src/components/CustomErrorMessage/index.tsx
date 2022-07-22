import { IMesssage } from "../../interfaces/CustomErrorMessage/ICustomErrorMessage";
import { Message } from "./styles";

export function CustomErrorMessage({ message }: IMesssage) {
    return(
        <Message>{message}</Message>
    );
}