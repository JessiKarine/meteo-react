import config from '../config.json';
import Country from '@domain/Country';

export async function getCountries() : Promise<Country[]> {
    const BASE_URL = config.cityAPI.url;
	const response = await fetch(
        `${BASE_URL}/states`
	).then((response) => {
		return response.json();
	}).then((res) => { 
        const {error} = res ;
        if(error) { 
            return [];
        }
        let countries = [];
        const {data} = res;
        data?.forEach(country => {
            const {name , iso3} = country;
            countries.push({
                name,
                iso3
            })
        });
        return countries;
    });
	return response;
}
