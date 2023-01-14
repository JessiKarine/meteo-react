import { WeatherCommonInfo } from "@domain/Weather";
import CardItem from "./CardItem";

const HumidityCard = (props : WeatherCommonInfo) => { 
    const cardProps = { 
        title : "Humidity",
        value : `${props.humidity}`,
        units : ""
    }

    return (
        <CardItem {...cardProps} />
    )

}

export default HumidityCard;