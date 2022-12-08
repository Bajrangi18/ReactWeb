import car1 from './Helpers/car1.jpeg'
import car2 from './Helpers/car2.jpg'
import car3 from './Helpers/car3.jpeg'
import car4 from './Helpers/car4.jpeg'
import car5 from './Helpers/car5.jpeg'
import car6 from './Helpers/car6.jpg'
import car7 from './Helpers/car7.jpg'
import car8 from './Helpers/car8.jpg'
import car9 from './Helpers/car9.jpg'
import car10 from './Helpers/car9.jpg'
import car11 from './Helpers/car10.jpg'
import car12 from './Helpers/car11.jpg'



const Gallery = () => {
    return(
        <div >
            <h1 style={{"fontWeight":"700","fontFamily": "'Source Code Pro', monospace","color":"white"}}>Gallery</h1><br></br>
            <div className="container text-center">
                    <div className="row gx-5 gy-5">
                        <div className="col-xs-6 col-sm-6 col-md-3">
                        <div id="carouselExampleControls1" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner" style={{"borderRadius":"25px"}}>
                                    <div className="carousel-item active">
                                    <img src={car1} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                    <img src={car2} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                    <img src={car3} className="d-block w-100" />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
                        </div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-3">
                        <div id="carouselExampleControls2" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner" style={{"borderRadius":"25px"}}>
                                    <div className="carousel-item active">
                                    <img src={car6} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                    <img src={car5} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                    <img src={car4} className="d-block w-100" />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>

                        </div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-3">
                        <div id="carouselExampleControls3" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner" style={{"borderRadius":"25px"}}>
                                    <div className="carousel-item active">
                                    <img src={car7} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                    <img src={car8} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                    <img src={car9} className="d-block w-100" />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>

                        </div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-3">
                        <div id="carouselExampleControls4" className="carousel slide" data-bs-ride="carousel" >
                                <div className="carousel-inner" style={{"borderRadius":"25px"}}>
                                    <div className="carousel-item active">
                                    <img src={car10} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                    <img src={car11} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                    <img src={car12} className="d-block w-100" />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>

                        </div>
                        </div>
                    </div>
                    </div>

        </div>

    )
}

export default Gallery