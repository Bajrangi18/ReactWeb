import next from "./Helpers/next.svg"
function Filler(props) {
    const tempFunc = props.handleClick
    const tempShow = props.handleShow
    
    if(props.oddEven===1){
    return (
        <div style={{"backgroundColor":"rgba(255, 255, 255, 0.3)","padding":"2%","borderRadius":"25px"}}>
            <div className="container text-center">
                    <div className="row" style={{"textAlign":"left","fontFamily": "'Source Code Pro', monospace","fontSize": "1.1rem"}}>
                        <div className="col-12 col-lg-2" style={{"fontWeight":"700"}}>
                        {props.time}
                        </div>
                        <div className=" col-9 col-lg-9">
                        <p style={{"fontWeight":"700","fontSize":"2rem"}}>{props.eventName}</p>
                        {props.content}
                        </div>
                        <div className="col-3 col-lg-1">
                        <button type="button" className="btn btn-link" id="buttonPress"
                        onClick={() => {tempFunc(props.eventNum);tempShow()}}>
                        <img  src={next} height={50} 
                        style={{"filter": "invert(1)"}}
                        />
                        </button>
                        </div>
                    </div>
                    </div>
                  
        </div>
    );
    }
    else{
        return (
            <div style={{"backgroundColor":"rgba(255, 255, 255, 1)","padding":"2%","borderRadius":"25px","color":"black"}}>
                <div className="container text-center">
                        <div className="row" style={{"textAlign":"left","fontFamily": "'Source Code Pro', monospace","fontSize": "1.1rem"}}>
                            <div className="col-12 col-lg-2" style={{"fontWeight":"700"}}>
                            {props.time}
                            </div>
                            <div className=" col-9 col-lg-9">
                            <p style={{"fontWeight":"700","fontSize":"2rem"}}>{props.eventName}</p>
                            {props.content}
                            </div>
                            <div className="col-3 col-lg-1">
                            <button type="button" className="btn btn-link" id="buttonPress"
                            onClick={() => {tempFunc(props.eventNum);tempShow()}}>
                            <img  src={next} height={50} 
                            // style={{"filter": "invert(1)"}}
                            />
                            </button>
                            </div>
                        </div>
                        </div>
                      
            </div>
        );

    }
}

export default Filler