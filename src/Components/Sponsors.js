import aicte from './Helpers/aicte.png'
import ieee from './Helpers/ieee.png'
import unacademy from './Helpers/unac.svg'
import blac from './Helpers/bhst.jpg'
import spa_cha from './Helpers/chase.png'
import laika from './Helpers/laika.png'
import sserd from './Helpers/sserd.png'
const Sponsors = () => {
    return (
        <div id='sponsors' style={{"color":"white"}}>
        <h1 style={{"fontWeight":"700","fontFamily": "'Source Code Pro', monospace"}}>OUR SPONSORS</h1>
        <br></br>
        <h3 style={{"fontWeight":"700","fontFamily": "'Source Code Pro', monospace"}}>GOLD TIER</h3><br></br>
                <div className="container text-center" style={{"fontWeight":"700","fontFamily": "'Source Code Pro', monospace","fontSize":"1.5rem"}}>
                    <div className="row gy-5">
                        <div className="col">
                        <img src={ieee} height={300}/>
                        </div>
                        <div className="col">
                        <img src={aicte} height={300}/>
                        </div>

                    </div>
                </div>

        <br></br><br></br><br></br>

        <h3 style={{"fontWeight":"700","fontFamily": "'Source Code Pro', monospace"}}>EDUCATIONAL PARTNER</h3><br></br>
                <div className="container text-center" style={{"fontWeight":"700","fontFamily": "'Source Code Pro', monospace","fontSize":"1.5rem"}}>
                <div className="row gy-6">
                    <div className="col">
                    <img src={unacademy} height={'60vw'}/>
                    </div>
                </div>
                </div>
                <br></br><br></br><br></br>
                <h3 style={{"fontWeight":"700","fontFamily": "'Source Code Pro', monospace"}}>WORKSHOP COLLABORATORS</h3><br></br>
                <div className="container text-center" style={{"fontWeight":"700","fontFamily": "'Source Code Pro', monospace","fontSize":"1.5rem"}}>
                <div className="row gy-4">
                    <div className="col">
                    <img src={spa_cha} height={150}/>
                    </div>
                    <div className="col">
                    <img src={sserd} height={150}/>
                    </div>
                    <div className="col">
                    <img src={laika} height={150}/>
                    </div>
                    <div className="col">
                    <img src={blac} height={150}/>
                    </div>
                </div>
                </div>

        </div>
        
    );
}

export default Sponsors