import React, { useEffect, useState } from 'react';
import { getWeather } from '../../../services/Weather.service';
import HumidityCard from '../../component/CardItem/HumdityCard';
import RainCard from '../../component/CardItem/WindCard';
import Header from '../../component/Header/Header';
import MenuSearch from '../../component/MenuSearch/MenuSearch';
import WeatherInfo from '../../component/WeatherInfo/WeatherInfo';
import './App.css';

function App() {
	const [citySelected, setCitySelected] = useState('London');
	const [weatherData, setWeatherData] = useState(null);
	
	useEffect(() => {
		getWeather(citySelected).then((data) => {
			setWeatherData(data);
			console.log("Data ",data);
		});
	}, [citySelected]);
	return (
		<div className='window'>
			<Header />
			<div className='window__body'>
				<MenuSearch
					citySelected={citySelected}
					onChangeCity={(e) => setCitySelected(e.target.value)}
				/>
				<div className='card card--custom card--full card--results'>
					<WeatherInfo {...weatherData} />
					<div className='card__body'>
						{weatherData?.wind && (<RainCard {...weatherData?.wind} />)}
						{weatherData?.main && (<HumidityCard {...weatherData?.main} />)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
