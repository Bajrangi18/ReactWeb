import Navbar from './Components/Navbar'
import About from './Components/About'
import Events from './Components/Events'
import Timer from './Components/Timer'
import Team from './Components/Team'
import Sponsors from './Components/Sponsors'
import Faq from './Components/Faq'
import Gallery from './Components/Gallery'
import './App.css';
import {useRef} from 'react';

function App() {

  return (
    <div className="App">
        <Navbar/>
        <br></br>
        <About /><br></br>
        <Timer/><br></br>
        <Events id="eventBar"/><br></br>
        <Team /><br></br>
        <Sponsors id="sponsors" /><br></br><br></br><br></br>
        <Gallery /><br></br>
        <Faq/><br></br>

    </div>
  );
}


export default App;
