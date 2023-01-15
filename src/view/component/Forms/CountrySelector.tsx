import Country from "@domain/Country";
import { useEffect, useState } from "react";
import { arrayBuffer } from "stream/consumers";
import { getCountries } from "../../../services/Country.service";

export interface CountrySelectorProps {
    onSelect? : (e : Country) => any;
}
const CountrySelector = (props : CountrySelectorProps) => { 
    const { onSelect } = props;
    const [countryList , setCountryList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selected , setSelected] = useState<Country>();
    const handleCountrySelect = (country : Country) => { 
        setSelected(country);
        onSelect && onSelect(country);
        setIsOpen(false);
    }
    const handleMainSelect = () => { 
        setIsOpen(!isOpen);
    }
    const handleCloseAutomatically = (e) => { 
        console.log("IS OPEN", isOpen);
        if(isOpen) {
            const element = (e.target as Element);
            const selector = document.querySelector('.selector');
            const classArray = Array.from(element.classList).map(cls => `.${cls}`).join('');
            const elems  = selector.querySelector(classArray);
            if(elems=== null) {
                setIsOpen(false);
            }
        }
    }
    useEffect(() => { 
        document.addEventListener('click' , handleCloseAutomatically);
        return () => { 
            document.removeEventListener('click',handleCloseAutomatically)
        }
    },[isOpen])
    useEffect(() => { 
        getCountries().then(countries => setCountryList(countries));
    },[]);
    return (
        <div className="selector country-selector">
            <select>
                {countryList && countryList.map((value,index) => (
                    <option key={`option-${index}`} value={String(value.name)}>{value.name}</option>
                ))}
            </select>
            <div className="selector_main" onClick={handleMainSelect}>
                {selected!=null ? (selected.name) : (
                    "No country has been selected"
                )}
            </div>
            <div className={["selector_list",isOpen? "open" : ""].join(" ")}>
                <div className="selector_list-container">
                {countryList && countryList.map((value,index) => (
                    <div key={index} className="selector_item" onClick={() => handleCountrySelect(value)}>
                        {value.name}
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}
export default CountrySelector;