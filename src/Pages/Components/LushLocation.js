import React from 'react'

function LushLocation() {
    return (

        <section id="lush-location" className="">
            <div className="container pt-3">
                <div className='row mb-5 p-5 text-white' style={{ background: "#325d88" }}>
                    <div className="col-lg-6 embed-responsive embed-responsive-1by1 mb-2">
                        <h3 className='text-start m-0 p-0'>PRIME LOCATION</h3>
                        <p className='text-start'>
                            <small>
                                LUSH Residences is located in
                                Bagtikan corner Kamagong Streets
                                near Ayala Avenue Extension
                                Makati City, Phiippines
                            </small>
                        </p>
                        <iframe className="embed-responsive-item"
                            width="100%" height="330rem"
                            src="https://maps.google.com/maps?q=Lush%20Residences&t=m&z=16&output=embed"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                    <div className="col-lg-6">

                        <div id="carouselLushIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselLushIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselLushIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselLushIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselLushIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselLushIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carouselLushIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                <button type="button" data-bs-target="#carouselLushIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                <button type="button" data-bs-target="#carouselLushIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="/Images/Lush/LocationMap.png" className='img-fluid' alt="logo"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="/Images/Lush/BuildingElevation.png" className='img-fluid' alt="logo" />
                                </div>
                                <div class="carousel-item">
                                    <img src="/Images/Lush/ProjectDetails.png" className='img-fluid' alt="logo" />
                                </div>
                                <div class="carousel-item">
                                    <img src="/Images/Lush/ProjectOverview.png" className='img-fluid' alt="logo" />
                                </div>
                                <div class="carousel-item">
                                    <img src="/Images/Lush/BuildingFeature.png" className='img-fluid' alt="logo" />
                                </div>
                                <div class="carousel-item">
                                    <img src="/Images/Lush/KeyToSuccess.png" className='img-fluid' alt="logo" />
                                </div>
                                <div class="carousel-item">
                                    <img src="/Images/Lush/LifeFlourish.png" className='img-fluid' alt="logo" />
                                </div>
                                <div class="carousel-item">
                                    <img src="/Images/Lush/LifeFlourish2.png" className='img-fluid' alt="logo" />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselLushIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselLushIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default LushLocation
