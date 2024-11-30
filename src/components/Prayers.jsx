import axios from 'axios'
import subh from '../assets/subh.jpg'
import Prayer from './Prayer'
import { useLocation } from '../contexts/LocationProvider'
import { useEffect} from 'react'

function Prayers({setPrayerTimes , times}) {
    const {city , country} = useLocation()
    useEffect(()=>{
          const date = new Date();
          axios.get(`https://api.aladhan.com/v1/calendarByCity/${date.getFullYear()}/${date.getMonth()+1}?city=${city}&country=${country}&method=2`)
          .then(data =>{
            const response = data.data.data[date.getDate() - 1 ]
           
            setPrayerTimes([
              setTime(response.timings.Fajr),
              setTime(response.timings.Dhuhr),
              setTime(response.timings.Asr),
              setTime(response.timings.Maghrib),
              setTime(response.timings.Isha)
            ])
          } )
        }, [city])
    function setTime (time= ''){
      return time.slice(0 , time.indexOf(' '))
    }
    if (times)
        return (
          <div className='flex justify-center gap-5 flex-wrap'>
          <Prayer source={subh} title={'Fajr'} time={times[0]}/>
            <Prayer source={subh} title={'Dhuhr'} time={times[1]}/>
            <Prayer source={subh} title={'Asr'} time={times[2]}/>
            <Prayer source={subh} title={'Maghrib'} time={times[3]}/>
            <Prayer source={subh} title={'Isha'} time={times[4]}/>
        </div>
        )
      return null
  }
export default Prayers;
