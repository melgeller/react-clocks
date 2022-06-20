import './App.scss';
import Countdown from './components/Countdown';
import DigitalClock from './components/DigitalClock';
import { StopWatch } from './components/StopWatch';

function App() {
  return (
    <div className='todo'>
      <DigitalClock></DigitalClock>
      <Countdown></Countdown>
      <StopWatch></StopWatch>
    </div>    
  );
}

export default App;
