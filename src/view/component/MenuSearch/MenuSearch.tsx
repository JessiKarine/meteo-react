import { useState } from 'react';
import { allCities } from '../../../util/constant';

function MenuSearch(props) {
	const [citiesList, setCitiesList] = useState(allCities);
	const searchCity = (e) => {
		console.log('e.targetttt. valuee', e.target.value);
		setCitiesList(
			allCities.filter((city) =>
				city.name.toLowerCase().includes(e.target.value)
			)
		);
	};
	return (
		<div className='card card--dark card--small card--search'>
			<div className='card__header'>
				<input
					type='input'
					placeholder='Tape or Search City'
					onChange={searchCity}
				/>
			</div>
			<div className='card__body'>
				<div className='card--search__items'>
					{citiesList.map((city) => (
						<div className='card--search__item'>{city.name}</div>
					))}
				</div>
			</div>
		</div>
	);
}
export default MenuSearch;
