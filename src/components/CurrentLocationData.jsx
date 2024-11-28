import moment from "moment";
import { useEffect, useState } from "react";
import { useLocation } from "../contexts/LocationProvider";
export default function CurrentLocationData() {
    const [time , setTime] = useState('')
    const {city} = useLocation()
    useEffect(()=>{
       setInterval(() => {
        setTime(moment().format("MMM Do YY")+  ` | `+ moment().format('LTS'))
       }, 1000);
    } , [])
  return (
    <div className="text-white flex flex-col gap-5">
       <h2>{time}</h2>
       <h1 className="font-bold text-3xl">{city} </h1>
    </div>
  )
}
