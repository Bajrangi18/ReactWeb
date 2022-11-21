import logo from "./Helpers/logo.png"
import Menu from "./Helpers/Menu.svg"

import "./Helpers/Navbar.css"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{"backgroundColor": "black","opacity": "0.8"}}>
                <div className="container-fluid" >
                <button className="navbar-toggler mb-6" style={{"color":"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img  src={Menu} height={30} style={{"filter":"invert(100%)"}}/>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-1">
                        <li className="nav-item" >
                        <button type="button" className="btn btn-link" style={{"filter": "drop-shadow(0 0 0.3rem white)","textDecoration":"none","color":"white","fontFamily": "'Source Code Pro', monospace","fontSize": "1.3rem"}}>HOME</button>                        </li>
                        <li className="nav-item">
                        <button type="button" className="btn btn-link" style={{"filter": "drop-shadow(0 0 0.3rem white)","textDecoration":"none","color":"white","fontFamily": "'Source Code Pro', monospace","fontSize": "1.3rem"}}>EVENTS</button>                        </li>
                        <li className="nav-item">
                        <button type="button" className="btn btn-link" style={{"filter": "drop-shadow(0 0 0.3rem white)","textDecoration":"none","color":"white","fontFamily": "'Source Code Pro', monospace","fontSize": "1.3rem"}}>ABOUT</button>                        </li>
                        <li className="nav-item">
                        <button type="button" className="btn btn-link" style={{"filter": "drop-shadow(0 0 0.3rem white)","textDecoration":"none","color":"white","fontFamily": "'Source Code Pro', monospace","fontSize": "1.3rem"}}>CONTACT US</button>                        </li>
                        
                </ul>
                </div>
                    <img src={logo} height={60} className="mx-auto" style={{"paddingRight": "1%", "filter": "drop-shadow(0 0 0.05rem white)"}}/>
                    
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-1">
                        <li className="nav-item" >
                        <button type="button" className="btn btn-link"  style={{"filter": "drop-shadow(0 0 0.3rem white)","textDecoration":"none","color":"white","fontFamily": "'Source Code Pro', monospace","fontSize": "1.3rem"}}>SPONSORS</button>                        </li>
                        <li className="nav-item">
                        <button type="button" className="btn btn-link" style={{"filter": "drop-shadow(0 0 0.3rem white)","textDecoration":"none","color":"white","fontFamily": "'Source Code Pro', monospace","fontSize": "1.3rem"}}>FAQ</button>                        </li>
                        <li className="nav-item">
                        <button type="button" className="btn btn-link" style={{"filter": "drop-shadow(0 0 0.3rem white)","textDecoration":"none","color":"white","fontFamily": "'Source Code Pro', monospace","fontSize": "1.3rem"}}>GALLERY</button>                        </li>
                        <li className="nav-item">
                        <button type="button" className="btn btn-link" style={{"filter": "drop-shadow(0 0 0.3rem white)","textDecoration":"none","color":"white","fontFamily": "'Source Code Pro', monospace","fontSize": "1.3rem"}}>BOOKING</button>                        </li>
                        
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
}

export default Navbar;