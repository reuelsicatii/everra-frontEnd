import React from 'react'
import "../../../../Assets/Landing.css"


function LushBanner() {

    return (
        <section id="Banner" className="heroStylingLush"
            style={{ backgroundImage: `url(/Images/Lush/LushResidences.jpeg)` }}>
            <div className="d-flex justify-content-start" style={{ height: "50%" }}>
                <div className="d-flex flex-column align-items-start mx-3 my-3">
                    <div className="d-xxl-none d-xl-none d-xxl-block d-lg-none d-xl-block d-flex bg-white p-2 mb-1">
                        <h1 className="fw-bold text-start text-primary mb-0 pb-0">
                            LUSH RESIDENCES
                        </h1>
                    </div>
                    <div className="d-flex bg-info p-2 mb-1">
                        <div className='d-flex align-items-center mx-3'>
                            <h5 className="fw-bold text-start text-white mb-0 pb-0">
                                ON THE SPOTLIGHT
                            </h5>
                        </div>

                        <p className="text-start text-white m-0 p-0" >
                            <small>
                                Lush Residences is an iconic landmark located north of the Makati Central Business District
                                <br></br>
                                A development that seamlessly blends elements of nature throughout the property
                            </small>
                        </p>

                    </div>
                    <div className="d-flex bg-white p-2">
                        <div className='d-flex align-items-center mx-3'>
                            <h5 className="fw-bold text-start text-primary mb-0 pb-0">
                                AN OASIS IN THE BIG CITY
                            </h5>
                        </div>
                        <p className="text-start text-primary m-0 p-0" >
                            <small>
                                Lush Residences is an iconic landmark located north of the Makati Central Business District.
                                <br></br>
                                A development that seamlessly blends elements of nature with its lush greenery throughout
                                <br></br>
                                the property making it a relaxing place to live. With its prime location, an outdoor lush garden
                                <br></br>
                                and great amenities, owning a property in Lush Residences will be one of the best decisions
                                <br></br>
                                an investor or unit owner can make.
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LushBanner