import Weather from "@domain/Weather";
import { useEffect, useState } from "react";
import { getWeather } from "../../../services/Weather.service";
import HumidityCard from "../CardItem/HumdityCard";
import RainCard from "../CardItem/WindCard";

export interface WeatherInfoProps { 
	city : string
}
const WeatherInfo = (props : WeatherInfoProps) =>  {
	const {city} = props;
	const [weatherData , setWeatherData] = useState<Weather>();
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => { 
		setIsLoading(true);
		setWeatherData(null);
		getWeather(city).then((data) => {
			setWeatherData(data);
			setIsLoading(false);
		});
	},[city]);
	return (
		
		<div className='card card--custom card--full card--results'>
			<div className='card__header'>
				<div className='result result__details '>
					<div className={["result__city", isLoading? "skeleton skeleton-text skeleton-text__body": ""].join(" ")}>{weatherData?.name}</div>
					<div className={["result__temperature", isLoading? "skeleton skeleton-text" : ""].join(" ")}>{weatherData?.main?.temp ? `${weatherData?.main?.temp}°`: ""}</div>
				</div>
				<div className='result result__infos'>
					<div className={["result__icon", isLoading? "skeleton skeleton-image": ""].join(" ")}>
						{weatherData?.weather?.[0]?.icon && ( <img src={`http://openweathermap.org/img/wn/${ weatherData?.weather?.[0]?.icon ?? "10d"}@4x.png`} alt="decorative - img" /> )}
					</div>
					<div className='result__label'>
						{weatherData?.weather?.[0]?.description}
					</div>
				</div>
			</div>
			<div className='card__body'>
				{weatherData?.wind && (<RainCard {...weatherData?.wind} />)}
				{weatherData?.main && (<HumidityCard {...weatherData?.main} />)}
			</div>
		</div>
	);
}

export default WeatherInfo;
