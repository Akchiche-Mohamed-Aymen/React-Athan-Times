import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";

const locationContext = createContext()

export default function LocationProvider({children}) {
    const [contries , setContries] = useState([])
    const [currentCountry , setCountry] = useState('Afghanistan')
    const [currentCity , setCity] = useState('')

    useEffect(()=>{
        axios.get("https://countriesnow.space/api/v0.1/countries")
        .then(data =>{
            setContries(data.data.data);
        })
    } , [])
   function handleChangeCountry (e){
    setCountry(e.target.value)
   }
  
  const cities = useMemo(() => {
    const cities = contries.find(country => country.country === currentCountry)
    return cities?.cities
  }, [currentCountry])
  return (
    <locationContext.Provider value={{country : currentCountry , city : currentCity}}>
      {children}
      <div className="flex flex-col items-center gap-5 mt-10">
           <div>
            <label htmlFor="countries">Country : </label>
                <select name="countries" id="countries" className="" value={currentCountry} onChange={handleChangeCountry}>
                        {
                            contries.map(cnt=>{
                                return(
                                    <option value={cnt.country} key={cnt.country}>{cnt.country}</option>
                                )
                            })
                        }
                </select>
           </div>
               {cities &&<div>
                    <label htmlFor="cities">City : </label>
                    <select name="cities" id="cities" className="" value={currentCity} onChange={e => setCity(e.target.value)}>
                    {
                        cities.map(city=>{
                            return(
                                <option value={city} key={city}>{city}</option>
                            )
                        })
                    }
                    </select>
               </div>}
      </div>
    </locationContext.Provider>
  )
}

export const useLocation = ()=> useContext(locationContext)
