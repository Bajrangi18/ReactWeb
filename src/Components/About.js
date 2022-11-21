import logoBG from "./Helpers/logo.png"
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
      const remName = document.getElementById("amount").value
      const amount = document.getElementById("amount").value
      const transID = document.getElementById("transID").value
      const eventName = document.getElementById("optionsDown").value
      const email = document.getElementById("email").value
      const ieee = document.getElementById("flexCheckDefault").checked
      if(name!=undefined && phone!=undefined && collegeName!=undefined && state!=undefined 
        && city!=undefined && remName!=undefined && amount!=undefined && transID!=undefined && eventName!="SELECT EVENT" && email!=undefined && file!="" && filesName!="" ){
                
      const spacePath =  (eventName+name[0]+name[1]+name[2]+phone[0]+phone[2]+phone[4]+phone[6]+phone[8]+(Math.floor(Math.random() * 10))+(Math.floor(Math.random() * 10))+(Math.floor(Math.random() * 10))) 
      const storageRef = sRef(storage,"Screenshots/"+spacePath+".jpg");

      uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });

      const storageIDRef = sRef(storage,"StudentID/"+spacePath+".jpg");
      uploadBytes(storageIDRef, filesName).then((snapshot) => {
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
      });   
      document.getElementById("subDis").disabled = true;
      setTimeout(() => {window.location.reload();},20000)
      }else{
        alert("Some of the Inputs are Blank!")
      }

  }

    return(
        <div style={{"overflow": "hidden"}}>
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
                <option value="HCKS">HACKER SERIES</option>
                <option value="RBS">ROBO SOCCER</option>
                <option value="RBW">ROBOTICS WORKSHOP</option>
                <option value="QHCK">QUANTUM HACKS</option>
                <option value="CANW">CANSAT WORKSHOP</option>
                <option value="BMM">BEST MANAGER</option>
                <option value="WZDS">WIZARDS OF DALAL STREET</option>
                <option value="RCR">FULL THROTTLE</option>
                <option value="ETHW">ETHICAL HACKING WORKSHOP</option>
                <option value="ARDW">ARDUINO WORKSHOP</option>
                <option value="ROBW">BATTLE BOTS</option>
                <option value="DRFS">LIFT-OFF</option>
              </Form.Select><br></br>
              <div className="input-group mb-3">
                  <input type="file" className="form-control" placeholder="Integers Only" aria-label="Recipient's username" aria-describedby="basic-addon2" id="fileName"/>
                  <span className="input-group-text" id="basic-addon2">SCREENSHOT</span>
                </div>
                
              <div className="input-group mb-3">
                  <input type="file"  className="form-control" placeholder="Integers Only" aria-label="Recipient's username" aria-describedby="basic-addon2" id="fileSName"/>
                  <span className="input-group-text" id="basic-addon2">STUDENT ID</span>
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
                    <img src={logoBG} height={240} style={{"objectFit":"contain"}} id="logoID"/>
                    </div>
                    <div className="col-12 col-lg-7" style={{"padding": "4%", "color": "white","fontFamily": "'Source Code Pro', monospace","fontSize": "1.1rem"}}>
                     <p>{`New Horizon College of Engineering, Bangalore presents QuantumX-22, a 3-day tech fest and the first one to ever be hosted in the NHCE campus, from 8th-10th December. Over the duration of three days, the fest offers students from all around Bangalore a series of events, from a 24 hour hackathon to a drone race, from hacker series to robo wars. Along with those, a bunch of workshops and guest talks awaits the minds eager to gain knowledge.`}
                     </p><br></br>
                     <button type="button" className="btn btn-light btn-lg" onClick={handleShow} 
                     style={{"margin":"10%","width":"80%","height":"20%","fontFamily": "'Source Code Pro', monospace","fontSize": "2.2rem","fontWeight":"700","filter": "drop-shadow(0 0 0.3rem white)"}}>BOOK PASSES NOW!</button>
                    </div>
                </div>
                </div>

        </div>
    );
}

export default About