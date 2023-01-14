import { Wind } from "@domain/Weather";
import CardItem from "./CardItem";

const RainCard = (props : Wind) => { 
    const cardProps = { 
        title : "Wind",
        value : `${props.speed}`,
        units : "km/h"
    }

    return (
        <CardItem {...cardProps} />
    )

}

export default RainCard;