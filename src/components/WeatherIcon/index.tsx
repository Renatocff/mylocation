import { IWeatherIcon } from "../../interfaces/WeatherIcon/interface";
import { svgIcons } from "../../utils/svgIcons";
import { Icon } from "./styles";

const WeatherIcon = ({ title, path, size, viewBox, color }: IWeatherIcon) => {
  const renderIcon = (obj: any, key: string) => {
    return obj[key];
  };

  return (
    <Icon
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      color={color}
    >
      <title>{title}</title>
      <path d={renderIcon(svgIcons, path)} />
    </Icon>
  );
};

export default WeatherIcon;
