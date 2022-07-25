import { IMesssage } from "../../interfaces/CustomErrorMessage/ICustomErrorMessage";
import { Message } from "./styles";

export const CustomErrorMessage = ({ message }: IMesssage) => {
  return <Message>{message}</Message>;
};
