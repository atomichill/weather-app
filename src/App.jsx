


import './reset.scss'


import Body from './components/Body'
import { getWeather } from './services/getWeather'

function App() {
  console.log(getWeather())

  return (
    <div className="App">
        <Body/>
    </div>
  )
}

export default App
