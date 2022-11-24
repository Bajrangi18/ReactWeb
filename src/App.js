import Navbar from './Components/Navbar'
import About from './Components/About'
import Events from './Components/Events'
import Timer from './Components/Timer'
import Team from './Components/Team'
import Sponsors from './Components/Sponsors'
import Faq from './Components/Faq'
import './App.css';
  

function App() {


  return (
    <div className="App">
        <Navbar/>
        <br></br>
        <About /><br></br>
        <Timer/><br></br>
        <Events/><br></br>
        <Team /><br></br>
        <Sponsors id="sponsors" /><br></br>
        <Faq/><br></br>
        {/* <MainView id="MainView"/> */}
    </div>
  );
}

// const MainView = () => {
//   return (
//     <div>
//         <About /><br></br>
//         <Timer/><br></br>
//         <Events/><br></br>
//         <Team /><br></br>
//         <Sponsors id="sponsors" /><br></br>
//         <Faq/><br></br>
//     </div>
//   );
// }
export default App;
