import axios from 'axios'
import subh from '../assets/subh.jpg'
import Prayer from './Prayer'
import { useLocation } from '../contexts/LocationProvider'
import { useEffect, useState } from 'react'

function Prayers() {
    const {city , country} = useLocation()
    const [times , setTimes] = useState(null)
    useEffect(()=>{
          const date = new Date();
          console.log();
          
          axios.get(`http://api.aladhan.com/v1/calendarByCity/${date.getFullYear()}/${date.getMonth()+1}?city=${city}&country=${country}&method=2`)
          .then(data => setTimes(data.data.data[date.getDate() - 1 ]))
        }, [city])
    function setTime (time= ''){
      return time.slice(0 , time.indexOf(' '))
    }
        return (
          times && (
            <div className='flex justify-center gap-5 flex-wrap'>
              <Prayer source={subh} title='Subh' time={setTime(times.timings.Fajr)} />
              <Prayer source={subh} title='Duhr' time={setTime(times.timings.Dhuhr)}  />
              <Prayer source={subh} title='Asr' time={setTime(times.timings.Asr)}  />
              <Prayer source={subh} title='Maghreb' time={setTime(times.timings.Maghrib)}  />
              <Prayer source={subh} title='Isha' time={setTime(times.timings.Isha)}  />
            </div>
          )
        )
  }
export default Prayers;
