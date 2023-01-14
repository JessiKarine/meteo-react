import Weather from "@domain/Weather";

const WeatherInfo = (weatherData : Weather) =>  {
	console.log('props.weatherData ', weatherData?.weather?.[0]?.main);
	return (
		<div className='card__header'>
			<div className='result result__details'>
				<div className='result__city'>{weatherData?.name}</div>
				<div className='result__temperature'>41°</div>
			</div>
			<div className='result result__infos'>
				<div className='result__icon'>
					<img src='http://openweathermap.org/img/wn/10d@4x.png' alt="decorative - img" />
				</div>
				<div className='result__label'>
					{weatherData?.weather?.[0]?.description}
				</div>
			</div>
		</div>
	);
}

export default WeatherInfo;
