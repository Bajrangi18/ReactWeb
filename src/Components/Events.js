import Filler from "./Filler.js"
import {useState,} from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
const content = {
    "CRC": "A workshop designed specifically to provide a deep insight into the world of rocket science and propulsion technology",
    "I2F": "A contest where entrepreneurs present their business concept to a panel in the hope of winning a cash prize or investment capital",
    "IDE": "A Short, Intensive, Brainstorming event to help young talents generate fresh solutions to exisisting challenges in their communities",
    "DRC": "A High Speed race not for the Weak Hearts! Drone Race brings the best of technology to take part in a timed lap with obstacles",
    "FSV": "A Happy customer wishes speedy delivery and your team is here to help! Event specially for Auto-Heads to showcase their skills",
    "CBD": "A workshop targetted towards implementation of Deep Learning technology to develop a Chatbot. Strictly Hands-On!",
    "HCKS": "A Competitive Coding Event for the BraveHearts who wish to be the best among the best. You leave the rest, to be the best!",
    "RBS": "A redifinition of Soccer where the GOAT is a BOT! Siuu for the Number 7 as Robo Soccer boasts a Proper Stadium and Audience",
    "RBW": "A workshop for the geeks inspired by robotics and its subsystems, complete hands on session by the best in Indsutry!",
    "QHCK": "A 24-Hour Hackathon designed specifically to boost your Adrenaline drive with our very special Company specific tracks in Quantum Hours",
    "CANW": "A workshop designed to enlighten the minds of space enthusiasts with the development of a mini satellite. Compete against each other through a drop test!",
    "CPCT": "",
    "BMM": "Engage in Six grueling rounds to test your people-skills and emerge victorious",
    "WZDS": "A workshop designed to provide students hands-on experience of stock simulation and enable the participants to uplift their stockmarket skills",
    "RCR": "A brutal race amongst cars in a mud pit filled with obstacles. Sturdiest shall stand on top!",
    "ETHW": "A hands-on session devised to enlighten the minds about the roles and responsibilities of an Ethical hacker with a small peak into his profession",
    "ARDW": "A workshop designed to infuse the easy use of hardware along with some basic software",
    "ROBW": "A fierce battle ground designed to determine the last standing bot. Survival of the fittest!",
    "DRFS": "A workshop for the aspiring drone pilots. Kicks-off with beginners, ends with pros!",
}

const eventNames = [ "CHEMICAL ROCKETRY", "IDEAS2FUND", "IDEASTORM", 
"DRONE RACE","FAST SERVICE","CHATBOT DEVELOPMENT WORKSHOP","HACKER SERIES",
"ROBO SOCCER","ROBOTICS WORKSHOP","QUANTUM HACK (24-HOUR HACKATHON)","CANSAT WORKSHOP",
"CHAI PE CHARCHA","BEST MANAGER","WIZARDS OF DALAL STREET","FULL THROTTLE (RC CAR RACE)","ETHICAL HACKING WORKSHOP",
"ARDUINO WORKSHOP","BATTLE BOTS (ROBO-WARS)","LIFT-OFF (DRONE FLIGHT SIMULATION)",
"EXHIBITION","DATA SCIENCE WORKSHOP"]
function Events(props) {
    const [show, setShow] = useState(false);

   const [isEvent,setIsEvent] = useState(0)
   const handleClick = num => {
    setIsEvent(num);
    console.log(isEvent)
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  
   
    return(
        <div style={{"color":"white",  "overflow": "hidden" }}>
                    <Offcanvas show={show} onHide={handleClose} placement="end" style={{"fontWeight":"700","fontFamily": "'Source Code Pro', monospace","fontSize":"1rem"}}>
                        <Offcanvas.Header closeButton>
                        <Offcanvas.Title style={{"fontWeight":"700","fontFamily": "'Source Code Pro', monospace","fontSize":"1.5rem"}}>{eventNames[isEvent-1]}</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                        {Object.values(content)[isEvent-1]}
                        </Offcanvas.Body>
                    </Offcanvas>
            <h1 style={{"fontWeight":"700"}}>OUR EVENTS</h1><br></br>
            <div className="container" style={{"width":"95%"}}>
                <div className="row">
                        <div className="col-md-2 col-12 " style={{"fontAlign":"left","fontSize":"1.2rem","fontWeight":"700","fontFamily": "'Source Code Pro', monospace"}}>
                        THUR, 8th Dec
                        </div>
                        <div className="col col-md-10 col-12">
                        <Filler time="10:30AM" content={content['CRC']} eventName="CHEMICAL ROCKETRY" handleClick={handleClick} handleShow={handleShow} eventNum={1} />
                        <br></br>
                        <Filler time="12:30PM" content={content['I2F']} eventName="IDEAS2FUND"  handleClick={handleClick} handleShow={handleShow} eventNum={2}  />
                        <br></br>
                        <Filler time="12:30PM" content={content['IDE']} eventName="IDEASTORM"  handleClick={handleClick} handleShow={handleShow} eventNum={3} />
                        <br></br>
                        <Filler time="12:30PM" content={content['DRC']} eventName="DRONE RACE"  handleClick={handleClick} handleShow={handleShow} eventNum={4}  />
                        <br></br>
                        <Filler time="12:30PM" content={content['FSV']} eventName="FAST SERVICE"   handleClick={handleClick} handleShow={handleShow} eventNum={5} />
                        <br></br>
                        <Filler time="12:30PM" content={content['CBD']} eventName="CHATBOT DEVELOPMENT WORKSHOP"  handleClick={handleClick} handleShow={handleShow} eventNum={6} />
                        <br></br>
                        <Filler time="2:30PM" content={content['HCKS']} eventName="HACKER SERIES" handleClick={handleClick} handleShow={handleShow} eventNum={7} />
                        <br></br>
                        <Filler time="2:30PM" content={content['RBS']} eventName="ROBO SOCCER" handleClick={handleClick} handleShow={handleShow} eventNum={8} />
                        <br></br>
                        <Filler time="2:30PM" content={content['RBW']} eventName="ROBOTICS WORKSHOP" handleClick={handleClick} handleShow={handleShow} eventNum={9} />
                        </div>
                    </div>
            </div><br></br><br></br>
            <div className="container" style={{"width":"95%"}}>
                <div className="row">
                        <div className="col-md-2 col-12" style={{"fontAlign":"left","fontSize":"1.2rem","fontWeight":"700","fontFamily": "'Source Code Pro', monospace"}}>
                        FRI, 9th Dec
                        </div>
                        <div className="col col-md-10 col-12">
                        <Filler time="9:00AM" content={content['QHCK']} eventName="QUANTUM HACK (24-HOUR HACKATHON)"handleClick={handleClick} handleShow={handleShow}  eventNum={10} />
                        <br></br>
                        <Filler time="9:30AM" content={content['CANW']} eventName="CANSAT WORKSHOP" handleClick={handleClick} handleShow={handleShow} eventNum={11} />
                        <br></br>
                        <Filler time="10:30AM" content={content['CRC']} eventName="CHAI PE CHARCHA" handleClick={handleClick} handleShow={handleShow} eventNum={12} />
                        <br></br>
                        <Filler time="10:30AM" content={content['BMM']} eventName="BEST MANAGER"handleClick={handleClick} handleShow={handleShow} eventNum={13}  />
                        <br></br>
                        <Filler time="10:30AM" content={content['WZDS']} eventName="WIZARDS OF DALAL STREET"handleClick={handleClick} handleShow={handleShow} eventNum={14}  />
                        <br></br>
                        <Filler time="12:30PM" content={content['RCR']} eventName="FULL THROTTLE (RC CAR RACE)" handleClick={handleClick} handleShow={handleShow} eventNum={15} />
                        <br></br>
                        <Filler time="12:30PM" content={content['ETHW']} eventName="ETHICAL HACKING WORKSHOP"handleClick={handleClick} handleShow={handleShow}  eventNum={16} />
                        <br></br>
                        <Filler time="12:30PM" content={content['ARDW']} eventName="ARDUINO WORKSHOP"handleClick={handleClick}  handleShow={handleShow} eventNum={17} />
                        <br></br>
                        <Filler time="2:30PM" content={content['ROBW']} eventName="BATTLE BOTS (ROBO-WARS)"handleClick={handleClick} handleShow={handleShow}  eventNum={18} />
                        <br></br>
                        <Filler time="2:00PM" content={content['DRFS']} eventName="LIFT-OFF (DRONE FLIGHT SIMULATION)"handleClick={handleClick} handleShow={handleShow}  eventNum={19} />
                        <br></br>
                        </div>
                    </div>
            </div><br></br><br></br>
            <div className="container" style={{"width":"95%"}}>
                <div className="row">
                        <div className="col-md-2 col-12" style={{"fontAlign":"left","fontSize":"1.2rem","fontWeight":"700","fontFamily": "'Source Code Pro', monospace"}}>
                        SAT, 10th Dec
                        </div>
                        <div className="col col-md-10 col-12">
                        <Filler time="9:00AM" content={content['CRC']} eventName="EXHIBITION"handleClick={handleClick} handleShow={handleShow} eventNum={20} />
                        <br></br>
                        <Filler time="2:00PM" content={content['CRC']} eventName="DATA SCIENCE WORKSHOP"handleClick={handleClick} handleShow={handleShow} eventNum={21}  />
                        <br></br>                    
                        </div>
                    </div>
            </div>
            <div>
        </div>

        </div>
    );
}

export default Events