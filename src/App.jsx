import { useState } from 'react'
import './App.css'
import CurrentLocationData from './components/CurrentLocationData'
import Prayers from './components/Prayers'
import LocationProvider from './contexts/LocationProvider'
import RestTime from './components/RestTime'

function App() {
    const [times , setTimes] = useState([])

  return (
        <LocationProvider>
            <div className='flex  flex-col-reverse md:flex-row items-center justify-center gap-7 md:gap-48 py-12'>
              {times && <RestTime times={times}/>}
              <CurrentLocationData/>
            </div>
            <Prayers setPrayerTimes={setTimes} times={times}/>
        </LocationProvider>
    )
}

export default App
