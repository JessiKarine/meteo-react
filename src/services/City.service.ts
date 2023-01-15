import config from '../config.json';
import Country from '@domain/Country';

export async function getCitiesByCountry(country : Country) : Promise<String[]> {
    const BASE_URL = config.cityAPI.url;
	const response = await fetch(
        `${BASE_URL}/cities`, { 
            method : "POST",
            body : JSON.stringify({ country : country.name}),
            headers : { 
                'Content-Type' : 'application/json'
            }
        }
	).then((response) => {
		return response.json();
	}).then((res) => { 
        const {error} = res ;
        if(error) { 
            return [];
        }
        let cities = [];
        const {data} = res;
        if(data) { 
            cities = [
                ...cities,
                ...data
            ];
        }
        return cities
    });
	return response;
}
