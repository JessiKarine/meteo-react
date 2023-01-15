import CountrySelector from '../Forms/CountrySelector';
import { useEffect, useState } from 'react';
import { getCitiesByCountry } from '../../../services/City.service';
import { getCountries } from '../../../services/Country.service';
import { allCities } from '../../../util/constant';
import Country from '@domain/Country';

export interface MenuSearchProps { 
	onChangeCity : (city : string) => any;
}
function MenuSearch(props : MenuSearchProps) {
	const {onChangeCity} = props;
	const [citiesList, setCitiesList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searched , setSearched] = useState("");
	const [selectedCity , setSelectedCity] = useState("");
	const [selectedCountry , setSelectedCountry] = useState<Country>();
	const searchCity = (e) => {
		console.log('e.targetttt. valuee', e.target.value);
		setSearched(e.target.value);
	};
	const searchCountry = (country : Country) => { 
		setSelectedCountry(country);
	}
	const handleClickCity = (city : string) => { 
		setSelectedCity(city);
		onChangeCity(city);
	}
	useEffect(() => {
		if(selectedCountry) {
			setIsLoading(true);
			setSelectedCity("");
			setCitiesList([]);
			getCitiesByCountry(selectedCountry).then((cities) => setCitiesList(cities));
			setIsLoading(false);
		}
	}, [selectedCountry]);
	return (
		<div className='card card--dark card--small card--search'>
			<div className='card__header'>
				<CountrySelector onSelect={searchCountry}/>
				<div className='custom-input'>
					<input
						type='input'
						placeholder='Tape or Search City'
						defaultValue={selectedCity}
						onChange={searchCity}
					/>
				</div>
			</div>
			<div className='card__body'>
				<div className='card--search__items'>
					{citiesList.filter((city) => city.toLowerCase().includes(searched.toLocaleLowerCase())).map((city) => (
						<div className={["card--search__item", selectedCity === city ? "selected": ""].join(" ")} onClick={() => handleClickCity(city)}>{city}</div>
					))}
				</div>
			</div>
		</div>
	);
}
export default MenuSearch;
