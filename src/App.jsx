import './App.css'
import CurrentLocationData from './components/CurrentLocationData'
import Prayers from './components/Prayers'
import LocationProvider from './contexts/LocationProvider'

function App() {


  return (
        <LocationProvider>
            <div className='flex items-center justify-center gap-10 py-12'>
              <CurrentLocationData/>
            </div>
            <Prayers/>
        </LocationProvider>
    )
}

export default App
