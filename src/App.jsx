import './App.css';
import WetterData from './components/lon&lat/WetterData';
import Wetter from './components/methode2/Wetter';

function App() {
  return (
    <div className="App">
      <WetterData />
      <hr/>
      <Wetter/>
      
    </div>
  );
}

export default App;
