import logoBG from "./Helpers/logo1.png"
import {useState,} from 'react'
import { initializeApp } from 'firebase/app'
import {  getDatabase, ref, set} from 'firebase/database'
import { getStorage,uploadBytes,ref as sRef } from "firebase/storage";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';


const firebaseConfig = {
  apiKey: "AIzaSyAz1M9XwJYbTB82HEBOwQxcQqz4e_0R618",
  authDomain: "paymentsapp-eab66.firebaseapp.com",
  databaseURL: "https://paymentsapp-eab66-default-rtdb.firebaseio.com",
  projectId: "paymentsapp-eab66",
  storageBucket: "paymentsapp-eab66.appspot.com",
  messagingSenderId: "1001322442148",
  appId: "1:1001322442148:web:9ce7afefffba77c83f6531",
  measurementId: "G-WGFW2EYFGG"
};
function About() {
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const storage = getStorage(app);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUploadOne, setImageUploadOne] = useState(null);
 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const sendData = async () => {
      const file = document.getElementById("fileName").value
      const filesName = document.getElementById("fileSName").value
      console.log(typeof(file))
      const name  = document.getElementById("name").value
      const phone = document.getElementById("phone").value
      const collegeName = document.getElementById("collegeName").value
      const state = document.getElementById("state").value
      const city = document.getElementById("city").value
      const remName = document.getElementById("remName").value
      const amount = document.getElementById("amount").value
      const transID = document.getElementById("transID").value
      const eventName = document.getElementById("optionsDown").value
      const email = document.getElementById("email").value
      const ieee = document.getElementById("flexCheckDefault").checked
      const ieeeID = document.getElementById("ieeeID").value;
      const teamMemberNames = document.getElementById("teamMemberNames").value;
      const teamMemberNumbers = document.getElementById("teamMemberNumbers").value;

      if(name!=undefined && phone!=undefined && collegeName!=undefined && state!=undefined 
        && city!=undefined && remName!=undefined && amount!=undefined && transID!=undefined && eventName!="SELECT EVENT" && email!=undefined && file!="" && filesName!="" ){
                
      const spacePath =  (eventName+name[0]+name[1]+name[2]+phone[0]+phone[2]+phone[4]+phone[6]+phone[8]+(Math.floor(Math.random() * 10))+(Math.floor(Math.random() * 10))+(Math.floor(Math.random() * 10))) 
      // const storageRef = sRef(storage,`Screenshots/${imageUpload.name + v4()}`);
      const storageRef = sRef(storage,`Screenshots/`+spacePath+"_SS");


      uploadBytes(storageRef, imageUpload).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });

      const storageIDRef = sRef(storage,"StudentID/"+spacePath+"_SID");
      uploadBytes(storageIDRef, imageUploadOne).then((snapshot) => {
        const pElement = document.createElement('h6')
        pElement.innerHTML = "Docs Uploaded Successfully! Here is your RegID";
        pElement.style.color = "black"
        pElement.style.textAlign = "left"
        document.getElementById("submitButton").append(pElement)
        const paraElement = document.createElement('h1')
        paraElement.innerHTML = spacePath;
        paraElement.style.color = "black"
        paraElement.style.textAlign = "left"
        document.getElementById("submitButton").append(paraElement)
        
      });


      set(ref(db, 'users/' + spacePath), {
        name: name,
        phone: phone,
        email: email,
        collegeName: collegeName,
        state: state,
        city: city,
        remittersName: remName,
        amount: amount,
        transactionID: transID,
        eventName: eventName,
        isIEEE: ieee,
        ieeeID: ieeeID,
        teamMemberNames: teamMemberNames,
        teamMemberNumbers: teamMemberNumbers,
      });   
      document.getElementById("subDis").disabled = true;
      }else{
        alert("Some of the Inputs are Blank!")
      }

  }

    return(
        <div id="home" style={{"overflow": "hidden"}}>
            <div className="container-fluid text-center">
            <Offcanvas show={show} onHide={handleClose} style={{"fontFamily": "'Source Code Pro', monospace","fontSize": "1.1rem"}}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title >REGISTRATION FORM</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body id="submitButton">
                    <h6>ACCOUNT NUMBER: 484700078</h6>
                    <h6>IFSC: IDIB000N112</h6>
                    <h6>BANK NAME: INDIAN BANK</h6>
                    <h6>RECIPIENT NAME: NEW HORIZON COLLEGE OF ENGINGEERING</h6><br></br>
                  <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="In Capital Letters" aria-label="Recipient's username" aria-describedby="basic-addon2" id="name" required />
                  <span className="input-group-text" id="basic-addon2">PARTICIPANT NAME</span>
                  </div>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Full Name" aria-label="Recipient's username" aria-describedby="basic-addon2" id="collegeName"/>
                  <span className="input-group-text" id="basic-addon2">COLLEGE NAME</span>
                </div>
                <div className="input-group mb-3">
                  <input type="tel" className="form-control" maxLength="10" 
                  placeholder="Exclude +91" aria-label="Recipient's username" aria-describedby="basic-addon2" id="phone"/>
                  <span className="input-group-text" id="basic-addon2">PHONE NUMBER</span>
                </div>
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="@email.com" aria-label="Recipient's username" aria-describedby="basic-addon2" id="email"/>
                  <span className="input-group-text" id="basic-addon2">EMAIL ID</span>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Team Consists of IEEE Members?
                  </label>
                </div>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Only Team Leaders ID (Ignore if not IEEE Member)" aria-label="Recipient's username" aria-describedby="basic-addon2" id="ieeeID"/>
                  <span className="input-group-text" id="basic-addon2">IEEE ID</span>
                </div>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="In Small Letters" aria-label="Recipient's username" aria-describedby="basic-addon2" id="state"/>
                  <span className="input-group-text" id="basic-addon2">STATE</span>
                </div>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="In Small Letters" aria-label="Recipient's username" aria-describedby="basic-addon2" id="city"/>
                  <span className="input-group-text" id="basic-addon2">CITY</span>
                </div>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Account Holders Name" aria-label="Recipient's username" aria-describedby="basic-addon2" id="remName"/>
                  <span className="input-group-text" id="basic-addon2">REMITTERS NAME</span>
                </div>
                <div className="input-group mb-3">
                  <input type="number" className="form-control" placeholder="Integers Only" aria-label="Recipient's username" aria-describedby="basic-addon2" id="amount"/>
                  <span className="input-group-text" id="basic-addon2">AMOUNT PAID</span>
                </div>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Account Holders Name" aria-label="Recipient's username" aria-describedby="basic-addon2" id="transID"/>
                  <span className="input-group-text" id="basic-addon2">TRANSACTION ID</span>
                </div>
                <Form.Select aria-label="Default select example" id="optionsDown">
                <option>SELECT EVENT</option>
                <option value="CRC">CHEMICAL ROCKETRY</option>
                <option value="I2F">IDEAS2FUND</option>
                <option value="IDE">IDEASTORM</option>
                <option value="DRC">DRONE RACE</option>
                <option value="FSV">FAST SERVICE</option>
                <option value="CBD">CHATBOT DEVELOPMENT WORKSHOP</option>
               {/*  <option value="HCKS">HACKER SERIES</option> */}
                <option value="RBS">ROBO SOCCER</option>
                <option value="RBW">ROBOTICS WORKSHOP</option>
                <option value="QHCK">QUANTUM HACKS</option>
                <option value="CANW">CANSAT WORKSHOP</option>
                <option value="BMM">BEST MANAGER</option>
                <option value="WZDS">WIZARDS OF DALAL STREET</option>
                <option value="RCR">FULL THROTTLE</option>
                {/* <option value="ETHW">ETHICAL HACKING WORKSHOP</option> */}
                <option value="ARDW">ARDUINO WORKSHOP</option>
                <option value="CURM">CURIOUS MINDS</option>
                <option value="ROBW">BATTLE BOTS</option>
                <option value="DRFS">LIFT-OFF</option>
                {/* <option value="DATA">DATA SCIENCE</option> */}
                <option value="FWG">FIXED WING RC</option>
                <option value="EXHB">EXHIBITION</option>
             {/*   <option value="WEB">WEB DEVELOPMENT</option> */}
              </Form.Select><br></br>
              <div className="input-group mb-3">
                  <input onChange={(event)=> {
                    setImageUpload(event.target.files[0])
                  }}type="file" className="form-control" placeholder="Integers Only" aria-label="Recipient's username" aria-describedby="basic-addon2" id="fileName"/>
                  <span className="input-group-text" id="basic-addon2">SCREENSHOT</span>
                </div>
                
              <div className="input-group mb-3">
                  <input  onChange={(event)=> {
                    setImageUploadOne(event.target.files[0])
                  }} type="file"  className="form-control" placeholder="Integers Only" aria-label="Recipient's username" aria-describedby="basic-addon2" id="fileSName"/>
                  <span className="input-group-text" id="basic-addon2">STUDENT ID</span>
                </div><br></br>
                <h4>Team Member Details</h4>
                <div className="input-group">
                  <span className="input-group-text">Team Member <br></br> Names</span>
                  <textarea className="form-control" aria-label="With textarea" placeholder="(Ignore if Partcipation is Individual) Example Name1,Name2,Name3" id="teamMemberNames" style={{"fontFamily": "'Source Code Pro', monospace","fontSize": "0.7rem"}}></textarea>
                </div><br></br>
                <div className="input-group">
                  <span className="input-group-text">Team Member<br></br>Numbers</span>
                  <textarea className="form-control" aria-label="With textarea" placeholder="(Ignore Partcipation is Individual)Example Num1,Num2,Num3" id="teamMemberNumbers" style={{"fontFamily": "'Source Code Pro', monospace","fontSize": "0.7rem"}}></textarea>
                </div>
                <br></br><center>
                <button type="button" className="btn btn-dark" style={{"height":"3.5rem","width":"8rem"}} id="subDis" >
                  <p style={{"fontSize":"1.6rem"}} onClick={sendData} >SUBMIT</p>
                  </button>
                </center>
                  </Offcanvas.Body>
                </Offcanvas>
                <div className="row">
                    <div className="col-12 col-lg-5 " style={{"alignItems":"center","justifyContent":"center"}}><br></br><br></br><br></br>
                    <img src={logoBG} height={240} style={{"objectFit":"contain"}} id="logoID"/><br></br><br></br>
                    <h1 style={{"color": "white","fontFamily": "'Source Code Pro', monospace","fontSize": "2rem"}}><br></br>First<br></br>Techno-Management<br></br>Fest<br></br>In NHCE</h1>
                    </div>
                    <div className="col-12 col-lg-7" style={{"padding": "4%", "color": "white","fontFamily": "'Source Code Pro', monospace","fontSize": "1.1rem"}}>
                     <p id="typeW">{`QUANTUM is the most basic, fundamental level at which matter exists - the site of
genesis for all. Just as how this concept of quantum has been around for generations
- causing tremendous advancements in the sciences, this techno-management fest
will be the singularity - ushering in a new era of raw talent, skill and enthusiasm.
QUANTUMX-22 is the first-ever national level techno-management fest of New Horizon
College of Engineering, Bangalore - a nationwide event which brings an opportunity
for curious minds to explore! With a unique blend of the pillars of industry - tech and
management - this is your chance to showcase your mettle, distinctive ideas and
knack for technology to the world!`}
                     </p><br></br>
                     <div id="book">
                     <button type="button" className="btn btn-light btn-lg" onClick={handleShow} id="bookPass"
                     style={{"margin":"10%","width":"80%","height":"20%","fontFamily": "'Source Code Pro', monospace","fontSize": "2.2rem","fontWeight":"700","filter": "drop-shadow(0 0 0.3rem white)"}}>BOOK PASSES NOW!</button>
                     </div>
                    </div>
                </div>
                </div>

        </div>
    );
}

export default About