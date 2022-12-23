import Filler from "./Filler.js"
import {useState,} from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import drone from "./Helpers/drone.jpg"
import chat from "./Helpers/chat.jpg"
import comp from "./Helpers/comp.jpg"
import i2f from "./Helpers/I2F.jpg"
import ide from "./Helpers/IDE.png"
import stock from "./Helpers/stock.jpg"
import rocket from "./Helpers/rocket.jpg"
import fast from "./Helpers/fsv.jpg"
import cur from "./Helpers/cur.jpg"
import rbs from "./Helpers/RBS.jpg"
import fwg from "./Helpers/FWG.jpeg"
import qhck from "./Helpers/hack.jpg"
import canw from "./Helpers/can.jpg"
import bmm from "./Helpers/bmm.jpg"
import rcr from "./Helpers/rcr.jpg"
import ethw from "./Helpers/eth.jpg"
import ardw from "./Helpers/ard.jpg"
import robo from "./Helpers/robo.webp"
import drfs from "./Helpers/droneSim.jpg"
import exh from "./Helpers/exh.jpg"
import dsw from "./Helpers/data.png"
import cpct from "./Helpers/cpct.jpg"
const urlContent = {
    "CRC": rocket,
    "I2F": i2f ,
    "IDE": ide,
    "DRC":drone,
    "FSV": fast,
    "CBD": chat,
    "CUR": cur,
    "HCKS": comp,
    "RBS": rbs,
    "FWG": fwg,
    "QHCK": qhck,
    "CANW": canw ,
    "CPCT": cpct,
    "BMM": bmm,
    "WZDS": stock ,
    "RCR": rcr,
    "ETHW": ethw,
    "ARDW": ardw,
    "ROBW": robo,
    "DRFS": drfs,
    "EXH": exh,
    "DSW": dsw
}
const content = {
    "CRC": "A workshop designed specifically to provide a deep insight into the world of rocket science and propulsion technology",
    "I2F": "A contest where entrepreneurs present their business concept to a panel in the hope of winning a cash prize or investment capital",
    "IDE": "A Short, Intensive, Brainstorming event to help young talents generate fresh solutions to exisisting challenges in their communities",
    "DRC": "A High Speed race not for the Weak Hearts! Drone Race brings the best of technology to take part in a timed lap with obstacles",
    "FSV": "A Happy customer wishes speedy delivery and your team is here to help! Event specially for Auto-Heads to showcase their skills",
    "CBD": "A workshop targetted towards implementation of Deep Learning technology to develop a Chatbot. Strictly Hands-On!",
    "CUR": "An event curated for the young budding entrepreneurs and their ideas where you can showcase the next unicorn of India!",
    "HCKS": "A Competitive Coding Event for the BraveHearts who wish to be the best among the best. You leave the rest, to be the best!",
    "RBS": "A redifinition of Soccer where the GOAT is a BOT! Siuu for the Number 7 as Robo Football boasts a Proper Stadium and Audience",
    "FWG": "A workshop designed specifically for the ones who know that the limit is the sky! Trained professionals from a reputed aerospace startup will help you develop an RC Plane from scratch and fly it as well!",
    "QHCK": "A 24-Hour Hackathon designed specifically to boost your Adrenaline drive with our very special Company specific tracks in Quantum Hours",
    "CANW": "A workshop designed to enlighten the minds of space enthusiasts with the development of a mini satellite. Compete against each other through a drop test!",
    "CPCT": "A Deep insight into the minds of Industry Experts and Startup Founders on topics that relate to each and every one of us, A charcha amongst the best for the best",
    "BMM": "Engage in Six grueling rounds to test your people-skills and emerge victorious",
    "WZDS": "A workshop designed to provide students hands-on experience of stock simulation and enable the participants to uplift their stockmarket skills",
    "RCR": "A brutal race amongst cars in a mud pit filled with obstacles. Sturdiest shall stand on top!",
    "ETHW": "A hands-on session devised to enlighten the minds about the roles and responsibilities of an Ethical hacker with a small peak into his profession",
    "ARDW": "A workshop designed to infuse the easy use of hardware along with some basic software",
    "ROBW": "A fierce battle ground designed to determine the last standing bot. Survival of the fittest!",
    "DRFS": "A workshop for the aspiring drone pilots. Kicks-off with beginners, ends with pros!",
    "EXH": "Showcase your talent to the rest of the world with our Exhibition as experts from the Industry are brought in just for you!",
    "DSW": "An IEEE special! Workshop focusing on the prospect of Data Science with a complete hands-on session for the bright minds"
}

const poolContent = {
    "CRC": "Goodies",
    "I2F": "₹30,000",
    "IDE": "₹30,000",
    "DRC": "₹30,000",
    "FSV": "₹7,500",
    "CBD": "Goodies",
    "CUR" : "₹19,000",
    "HCKS": "Goodies from Company",
    "RBS": "₹10,000",
    "FWG": "Goodies from Company",
    "QHCK": "₹1,20,000",
    "CANW": "Special Prizes from Company",
    "CPCT": "Knowledge!",
    "BMM": "₹40,000",
    "WZDS": "Goodies",
    "RCR": "₹30,000",
    "ETHW": "Goodies",
    "ARDW": "Free Arduino Takeaway!",
    "ROBW": "₹90,000",
    "DRFS": "Goodies",
    "EXH": "₹5,000",
    "DSW": "Goodies"
}
const regContent = {
    "CRC": "2250",
    "I2F": "300",
    "IDE": "300",
    "DRC": "600",
    "FSV": "300",
    "CBD": "400",
    "CUR": "200",
    "HCKS":  "150",
    "RBS": "200",
    "FWG":  "700 Per Head",
    "QHCK": "800",
    "CANW":  "2000",
    "CPCT": "Its Free!",
    "BMM": "500",
    "WZDS":  "300",
    "RCR": "600",
    "ETHW": "400",
    "ARDW": "600",
    "ROBW": "1000",
    "DRFS": "250",
    "EXH": "100",
    "DSW": "400"
}

const venueContent = {
    "CRC": "MBA Classroom + Main Ground",
    "I2F": "MBA Seminar Hall",
    "IDE": "Falconry Hall",
    "DRC": "Main Ground",
    "FSV": "Automobile Lab",
    "CBD": "MBA Classrooms",
    "CUR": "BBA Quadrangle",
    "HCKS":"CSE Labs",
    "RBS": "Main Stage",
    "FWG": "ECE Labs",
    "QHCK": "Library",
    "CANW": "MBA Classroom + Main Ground",
    "CPCT": "Auditorium",
    "BMM": "MBA Classroom + Main Stage",
    "WZDS": "MBA Classroom ",
    "RCR": "Main Ground",
    "ETHW": "CSE Labs",
    "ARDW": "EDA + Communication lab (ECE)", 
    "ROBW": "Open Basketball Ground",
    "DRFS": "MBA Classroom + Main Ground",
    "EXH": "Old Building Corridors",
    "DSW": "PD Lab",
}
const sizeContent = {
    "CRC": "3",
    "I2F": "3",
    "IDE": "3",
    "DRC": "4",
    "FSV": "3",
    "CBD": "Individual",
    "CUR": "Individual (PUC Students Only)",
    "HCKS": "Individual",
    "RBS": "2",
    "FWG": "4",
    "QHCK": "3 - 4",
    "CANW": "2 - 4",
    "CPCT": "All are Welcome!",
    "BMM":  "Individual",
    "WZDS": "Individual",
    "RCR": "4",
    "ETHW": "Individual",
    "ARDW": "4",
    "ROBW": "4",
    "DRFS": "4",
    "EXH": "3",
    "DSW": "Individual",
}
const coodContent = {
    "CRC": "Ananyaa Sundar- +91 8197404137(ECE) \n  Sumanth Kb- +91 8088036206(ECE) \n Neha- +91 9606820633(AI&ML)",
    "I2F": "Nidhi Singh- +91 9555966145 (BBA) \n Kshitij - +91 9538529908 (BBA)",
    "IDE": "Vijayraj Nair- +91 9113064451 (BBA) \n Jyothi - +91 9380016684  (BBA)",
    "DRC": "Rithesh- +91 7760587221  (ECE) \n Priyanshu Roy- +91 8697017290  (CE) \n Shivam- +91 8092045874  (CE)",
    "FSV": "B Akhil- +91 7894215335  (AU) \n Vamshi- +91 9886469399  (AU)",
    "CBD": "Mahesh- +91 9701848618  (AI&ML) \n Hamsa- +91 6369900764  (CSE)",
    "CUR": "Sneha N- +91 9535041915  (BBA) \n Pranjal - +91 9474176275  (BBA)",
    "HCKS": "Peerzada Anzar- +91 7889731989  (CSE) \n Tanishq- +91 6395662994  (CSE)",
    "RBS": "Adnan Khan- +91 8553849929  (CE) \n Sai Kiran- +91 6360074795  (CE) \n Bhargav Dayal- +91 9742889022 (ECE)",
    "FWG": "Bhargav Dayal- +91 9742889022 (ECE) \n Avneesh Tamra - +91 9928914425  (AI&ML)",
    "QHCK": "Bharatdeep Hazarika - +91 7086034141  (ECE) \n Abhisek Bedant- +91 9148082154 (EEE) \n Bhargav Dayal- +91 9742889022 (ECE)",
    "CANW": "Ananyaa Sundar- +91 8197404137  (ECE) \n Mahesh - +91 9701848618  (AI&ML)",
    "CPCT": "Sahana- +91 9663964760 (ECE) \n B Rithesh- +91 7760587221 (ECE) ",
    "BMM": "Divya- +91 9108743874  (BBA) \n Vijayraj Nair- +91 9113064451  (BBA)",
    "WZDS": "Nidhi Singh- +91 9555966145  (BBA) \n Sneha N- +91 9535041915  (BBA)",
    "RCR": "B Rithesh- +91 7760587221  (ECE) \n Avneesh- +91 9928914425  (AI&ML) \n Shivam- +91 8092045874  (CE)",
    "ETHW": "Sumanth Kb- +91 8088036206  (ECE) \n Tanishq- +91 6395662994  (CSE)",
    "ARDW": "Rishi- +91 9611847778  (ECE) \n Adnan Khan- +91 8553849929  (CE)",
    "ROBW": "Abhisek- +91 9148082154  (EEE) \n Sai Kiran- +91 6360074795  (CE) \n B Akhil- +91 7894215335  (AU)",
    "DRFS": "Ayush- +91 9927973457  (ECE) \n Priyanshu Roy- +91 8697017290  (CE)",
    "EXH": "Lakshya Sharma- +91 8618719166 (ECE) \n Ayush: +91 9927973457 (ECE) \n Ananyaa Sundar- +91 8197404137 (ECE)",
    "DSW": "Peerzada Anzar- +91 7889731989 (CSE)"
}



const timingsContent = {
    "CRC": "9:30AM - 5:30PM",
    "I2F": "12:30PM - 5:30PM",
    "IDE":"12:30PM - 5:30PM",
    "DRC":"12:30PM - 2:30PM",
    "FSV":"12:30PM - 2:30PM",
    "CBD": "12:30PM - 2:30PM",
    "CUR": "12:30PM - 2:30PM",
    "HCKS": "3:30PM - 6:30PM",
    "RBS": "3:30PM - 6:30PM",
    "FWG": "9:00AM - 6:30PM",
    "QHCK": "9AM Onwards",
    "CANW": "9:30AM - 2:30PM",
    "CPCT": "Afternoon Session",
    "BMM": "10AM Onwards (Day2) - 10AM Onwards (Day3)",
    "WZDS": "10:30AM - 2:30PM",
    "RCR": "12:30PM Onwards",
    "ETHW":"12:00PM - 2:30PM",
    "ARDW":"12:30PM - 2:30PM",
    "ROBW": "3:30PM Onwards",
    "DRFS": "2:00PM - 6:00PM",
    "EXH": "9:00AM - 1:30PM",
    "DSW":"9:00AM - 2:00PM"
}

const linkContent = {
    "CRC": "https://docs.google.com/document/d/1urkhZ1qvmB4_PRXKjACQ99V-FgPWqIiKGTvmiMQDlDs/edit?usp=sharing",
    "I2F": "https://docs.google.com/document/d/1PywOQNfiOsBH3972x9tMKlSSkcARIsJqTjYB5QJd2y8/edit?usp=sharing",
    "IDE": "https://docs.google.com/document/d/1vhZZG0MgMWgC6RMjb8udEg5vKG1nsKqVl0FH-8QKZcM/edit?usp=sharing",
    "DRC": "https://docs.google.com/document/d/12ImehPUodiABNUCX89vBd-lh75HjWAh3Nd32dzup13U/edit?usp=sharing",
    "FSV": "https://docs.google.com/document/d/1JK8r6Nr940GVm908mHdLHx62zzttUFrzM6LQszyzkMA/edit?usp=sharing",
    "CBD": "https://docs.google.com/document/d/19xTMbhCRpKvJjs_LxGrNu95bhgsvl2_1nztPxdjzn30/edit?usp=sharing",
    "CUR": "https://docs.google.com/document/d/1Teww_Nr8KkagShTJtIfVys4HpPFb6gFWQV6ozHfbugI/edit?usp=sharing",
    "HCKS":  "https://docs.google.com/document/d/1jrdELb7fyFRoP1wh5O7FxvsohxeTql8vpO3uA5vhIkk/edit?usp=sharing",
    "RBS": "https://docs.google.com/document/d/1WI-eySzs4BjxfpOhK2b92bUkFFzVCEL2-lVkE_nz7ac/edit?usp=sharing",
    "FWG":  "https://docs.google.com/document/d/1zKVj3DsFNo_oFwpmTlM8NaGbjMNKCkeSifdniuKtPFQ/edit?usp=sharing",
    "QHCK": "https://docs.google.com/document/d/1zyhg_LI_78JSy3HN1vhrrcDJG0Ga-M-Qmti_OOc-AxU/edit?usp=sharing",
    "CANW":  "https://docs.google.com/document/d/112l0P77QiLS27KnQvftnrUhc7H6EFwtxCp5GxKm9wig/edit?usp=sharing",
    "CPCT": "https://docs.google.com/document/d/1k7oK-t-CoBPrGk0T7dNZGhrRSYWUfJfyqXrBuswo09s/edit?usp=sharing",
    "BMM": "https://docs.google.com/document/d/174MXtMr5tOyJ78G8lq7TqTZYv2mRKDaiV8kathWMQQ4/edit?usp=sharing",
    "WZDS":  "https://docs.google.com/document/d/1zon5308yBCnxAmCpNE8rnw46LiQQXv_86X6JBv7Mo2I/edit?usp=sharing",
    "RCR": "https://docs.google.com/document/d/1Jdnn0Vn5QxFOcayXkKxNfH1iKiApDPMXwkuOM9vCzac/edit?usp=sharing",
    "ETHW": "https://docs.google.com/document/d/1pQ6zYm8KdOdfQgA1597VrW5qyB5uPvFjpwia_D82ZRs/edit?usp=sharing",
    "ARDW": "https://docs.google.com/document/d/1h66PxUcAGqxDvrQJY2nuUsDVTdn2ZKEuaAJDYx9vIm8/edit?usp=sharing",
    "ROBW": "https://docs.google.com/document/d/1PwQK8YrrdsprfSItC6g1I-IJJ8AFIklqVwVFXBKdi2A/edit?usp=sharing",
    "DRFS": "https://docs.google.com/document/d/1X_cBZBilgwBUfm2kgvHj-CevVli-aABfRuPkx0lIzqc/edit?usp=sharing",
    "EXH": "https://docs.google.com/document/d/1pbYF0QS99LCfPSoE3_zkUeD4mNCE_XSbEBn4jBJ3e30/edit?usp=sharing",
    "DSW": "https://docs.google.com/document/d/1Pji4d_jJdfEJC0EfwmTzoWpOSqzROvR6d6eUCo6UxoQ/edit?usp=sharing"
}




const eventNames = [ "CHEMICAL ROCKETRY", "IDEAS2FUND", "IDEASTORM", 
"DRONE RACE","FAST SERVICE","CHATBOT DEVELOPMENT WORKSHOP","CURIOUS MINDS","HACKER SERIES",
"ROBO FOOTBALL","FIXED WING WORKSHOP","QUANTUM HACK (24-HOUR HACKATHON)","CANSAT WORKSHOP",
"CHAI PE CHARCHA","BEST MANAGER","WIZARDS OF DALAL STREET","FULL THROTTLE (RC CAR RACE)","ETHICAL HACKING WORKSHOP",
"ARDUINO WORKSHOP","BATTLE BOTS (ROBO-WARS)","LIFT-OFF (DRONE FLIGHT SIMULATION)",
"EXHIBITION","DATA SCIENCE WORKSHOP"]
function Events() {
    const [show, setShow] = useState(false);

   const [isEvent,setIsEvent] = useState(0)
   const handleClick = num => {
    setIsEvent(num);
    console.log(isEvent)

  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
   
    return(
        <div id="events" style={{"color":"white",  "overflow": "hidden" }}>
                    <Offcanvas show={show} onHide={handleClose} placement="end" style={{"fontWeight":"700","fontFamily": "'Source Code Pro', monospace","fontSize":"1rem"}} id="offBack">
                        <Offcanvas.Header closeButton>
                        <Offcanvas.Title style={{"fontWeight":"700","fontFamily": "'Source Code Pro', monospace","fontSize":"2rem"}}>{eventNames[isEvent-1]}</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                        <img src={Object.values(urlContent)[isEvent-1]} height={260} style={{"borderRadius":"20px","filter": "drop-shadow(0 0 0.6rem black)"}}/><br></br><br></br>
                         {/* <h5>{Object.values(content)[isEvent-1]}</h5><br></br> */}
                         {/* <h2 style={{"fontWeight":"700","filter": "drop-shadow(0 0 0.05rem black)"}}>Pool Prize Money: {Object.values(poolContent)[isEvent-1]}</h2> */}
                         <h4 style={{"fontWeight":"700"}}>Registration Fee {Object.values(regContent)[isEvent-1]} </h4>
                         <h4 style={{"fontWeight":"700"}}>Team Size: {Object.values(sizeContent)[isEvent-1]}</h4>
                         <h4 style={{"fontWeight":"700"}}>Venue: {Object.values(venueContent)[isEvent-1]}</h4>
                         <h4 style={{"fontWeight":"700"}}>Timings: {Object.values(timingsContent)[isEvent-1]}</h4><br></br>
                         <a class="btn btn-primary" href={Object.values(linkContent)[isEvent-1]} role="button" style={{"width":"100%","fontWeight":"700","fontFamily": "'Source Code Pro', monospace","fontSize":"2rem"}}>View Rulebook</a><br></br><br></br>
                         <h5 style={{"fontWeight":"500"}}>Coordinators: {Object.values(coodContent)[isEvent-1]}</h5>
                        </Offcanvas.Body>
                    </Offcanvas>
            <h1 style={{"fontWeight":"700"}}>OUR EVENTS</h1><br></br>
            <div className="container" style={{"width":"95%"}}>
                <div className="row">
                        <div className="col-md-2 col-12 " style={{"fontAlign":"left","fontSize":"1.2rem","fontWeight":"700","fontFamily": "'Source Code Pro', monospace"}}>
                        THUR, 8th Dec
                        </div>
                        <div className="col col-md-10 col-12">
                        <Filler time="9:30AM" content={content['CRC']} eventName="CHEMICAL ROCKETRY" handleClick={handleClick} handleShow={handleShow} eventNum={1} oddEven={0} />
                        <br></br>
                        <Filler time="12:30PM" content={content['I2F']} eventName="IDEAS2FUND"  handleClick={handleClick} handleShow={handleShow} eventNum={2} oddEven={1} />
                        <br></br>
                        <Filler time="12:30PM" content={content['IDE']} eventName="IDEASTORM"  handleClick={handleClick} handleShow={handleShow} eventNum={3} oddEven={0} />
                        <br></br>
                        <Filler time="12:30PM" content={content['DRC']} eventName="DRONE RACE"  handleClick={handleClick} handleShow={handleShow} eventNum={4} oddEven={1} />
                        <br></br>
                        <Filler time="12:30PM" content={content['FSV']} eventName="FAST SERVICE"   handleClick={handleClick} handleShow={handleShow} eventNum={5} oddEven={0} />
                        <br></br>
                        <Filler time="12:30PM" content={content['CBD']} eventName="CHATBOT DEVELOPMENT WORKSHOP"  handleClick={handleClick} handleShow={handleShow} eventNum={6}oddEven={1} />
                        <br></br>
                        <Filler time="12:30PM" content={content['CUR']} eventName="CURIOUS MINDS"   handleClick={handleClick} handleShow={handleShow} eventNum={7} oddEven={0}/>
                        <br></br>
                        <Filler time="3:30PM" content={content['HCKS']} eventName="HACKER SERIES" handleClick={handleClick} handleShow={handleShow} eventNum={8} oddEven={1}/>
                        <br></br>
                        <Filler time="3:30PM" content={content['RBS']} eventName="ROBO SOCCER" handleClick={handleClick} handleShow={handleShow} eventNum={9} oddEven={0}/>
                        </div>
                    </div>
            </div><br></br><br></br>
            <div className="container" style={{"width":"95%"}}>
                <div className="row">
                        <div className="col-md-2 col-12" style={{"fontAlign":"left","fontSize":"1.2rem","fontWeight":"700","fontFamily": "'Source Code Pro', monospace"}}>
                        FRI, 9th Dec
                        </div>
                        <div className="col col-md-10 col-12">
                        <Filler time="9:00AM" content={content['QHCK']} eventName="QUANTUM HACK (24-HOUR HACKATHON)"handleClick={handleClick} handleShow={handleShow}  eventNum={11} oddEven={1} />
                        <br></br>
                        <Filler time="9:30AM" content={content['CANW']} eventName="CANSAT WORKSHOP" handleClick={handleClick} handleShow={handleShow} eventNum={12} oddEven={0} />
                        <br></br>
                        <Filler time="Afternoon" content={content['CPCT']} eventName="CHAI PE CHARCHA" handleClick={handleClick} handleShow={handleShow} eventNum={13} oddEven={1} />
                        <br></br>
                        <Filler time="10:00AM" content={content['BMM']} eventName="BEST MANAGER"handleClick={handleClick} handleShow={handleShow} eventNum={14} oddEven={0} />
                        <br></br>
                        <Filler time="10:30AM" content={content['WZDS']} eventName="WIZARDS OF DALAL STREET"handleClick={handleClick} handleShow={handleShow} eventNum={15} oddEven={1}  />
                        <br></br>
                        <Filler time="12:00PM" content={content['ETHW']} eventName="ETHICAL HACKING WORKSHOP"handleClick={handleClick} handleShow={handleShow}  eventNum={17} oddEven={0} />
                        <br></br>
                        <Filler time="12:30PM" content={content['RCR']} eventName="FULL THROTTLE (RC CAR RACE)" handleClick={handleClick} handleShow={handleShow} eventNum={16}oddEven={1} />
                        <br></br>
                        <Filler time="12:30PM" content={content['ARDW']} eventName="ARDUINO WORKSHOP"handleClick={handleClick}  handleShow={handleShow} eventNum={18}oddEven={0} />
                        <br></br>
                        <Filler time="2:00PM" content={content['DRFS']} eventName="LIFT-OFF (DRONE FLIGHT SIMULATION)"handleClick={handleClick} handleShow={handleShow}  eventNum={20} oddEven={1}/>
                        <br></br>
                        <Filler time="3:30PM" content={content['ROBW']} eventName="BATTLE BOTS (ROBO-WARS)"handleClick={handleClick} handleShow={handleShow}  eventNum={19} oddEven={0}/>
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
                        <Filler time="9:00AM" content={content['EXH']} eventName="EXHIBITION"handleClick={handleClick} handleShow={handleShow} eventNum={21} oddEven={1}/>
                        <br></br>
                        <Filler time="9:00AM" content={content['FWG']} eventName="FIXED WING WORKSHOP" handleClick={handleClick} handleShow={handleShow} eventNum={10} oddEven={0}/>
                        <br></br>
                        <Filler time="9:00AM" content={content['DSW']} eventName="DATA SCIENCE WORKSHOP"handleClick={handleClick} handleShow={handleShow} eventNum={22}  oddEven={1}/>
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