import aicte from './Helpers/aicte.png'
import ieee from './Helpers/ieee.png'
const Sponsors = () => {
    return (
        <div style={{"color":"white"}}>
        <h1 style={{"fontWeight":"700","fontFamily": "'Source Code Pro', monospace"}}>OUR SPONSORS</h1>
        <br></br>
        <h3 style={{"fontWeight":"700","fontFamily": "'Source Code Pro', monospace"}}>GOLD TIER</h3><br></br>
                <div className="container text-center" style={{"fontWeight":"700","fontFamily": "'Source Code Pro', monospace","fontSize":"1.5rem"}}>
                <div className="row gy-5">
                    <div className="col">
                    <img src={ieee} height={200}/>
                    </div>
                    <div className="col">
                    <img src={aicte} height={200}/>
                    </div>
                    <div className="col">
                    Coming<br></br>Soon!
                    </div>
                </div>
                </div><br></br><br></br><br></br>
        <h3 style={{"fontWeight":"700","fontFamily": "'Source Code Pro', monospace"}}>SILVER TIER</h3><br></br>
                <div className="container text-center" style={{"fontWeight":"700","fontFamily": "'Source Code Pro', monospace","fontSize":"1.5rem"}}>
                <div className="row gy-6">
                    <div className="col">
                    Coming<br></br>Soon!
                    </div>
                    <div className="col">
                    Coming<br></br>Soon!
                    </div>
                    <div className="col">
                    Coming<br></br>Soon!
                    </div>
                </div>
                </div>
        </div>
    );
}

export default Sponsors