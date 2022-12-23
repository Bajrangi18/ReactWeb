import { useState, } from 'react';
const Timer = () => {
    var days,hours,minutes,seconds
    const [isDays,setIsDays] = useState("0")
    const [isHours,setIsHours] = useState("0")
    const [isMins,setIsMins] = useState("0")
    const [isSecs,setIsSecs] = useState("0")


//     function makeTimer() {
//         var endTime = new Date("8 December 2022 9:30:00 GMT+01:00");			
//             endTime = (Date.parse(endTime) / 1000);

//             var now = new Date();
//             now = (Date.parse(now) / 1000);

//             var timeLeft = endTime - now;

//              days = Math.floor(timeLeft / 86400); 
//              hours = Math.floor((timeLeft - (days * 86400)) / 3600);
//              minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
//              seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
//             if (hours < "10") { hours = "0" + hours; }
//             if (minutes < "10") { minutes = "0" + minutes; }
//             if (seconds < "10") { seconds = "0" + seconds; }
//             setIsDays(days)
//             setIsHours(hours)
//             setIsMins(minutes)
//             setIsSecs(seconds)

//         }

//     setInterval(function() { makeTimer(); }, 1000);
    return(<div style={{"color":"white"}}>
            <div className="container text-center">
                    <div className="row" style={{"fontSize":"5vw","fontWeight":"700","fontFamily": "'Source Code Pro', monospace"}}>
                            <div className="col-3">
                            DAYS
                            </div>
                            <div className="col-3">
                            HOURS
                            </div>
                            <div className="col-3">
                            MINS
                            </div>
                            <div className="col-3">
                            SECS
                            </div>
                    </div>
                    <div className="row" style={{"fontSize":"7vw","fontWeight":"700","fontFamily": "'Source Code Pro', monospace"}}>
                            <div className="col-3" id="daysCol">
                            {isDays}
                            </div>
                            <div className="col-3" id="hoursCol">
                            {isHours}
                            </div>
                            <div className="col-3" id="minsCol">
                            {isMins}
                            </div>
                            <div className="col-3" id="secondsCol">
                            {isSecs}
                            </div>
                    </div>
            </div>
    </div>);
}

export default Timer