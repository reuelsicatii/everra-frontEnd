import React from 'react'
import "../../Assets/Landing.css"


function Banner() {

    return (
        <section id="Banner">
            <div className="heroStyling"
                style={{ backgroundImage: `url(/Images/Banner01.jpeg)` }}>
                <div className=" d-flex justify-content-start" style={{ height: "50%" }}>
                    <div className="d-flex align-items-start mx-3 my-5">
                        <div className="d-flex flex-column bg-white opacity-75 p-3">
                            <h1 className="fw-bold text-start text-primary mb-0 pb-0" style={{ fontSize: "65px" }}>EVERRA</h1>
                            <h5 className="text-start text-primary mt-0 pt-0" style={{ fontSize: "25px" }}>Real Estate Solutions</h5>
                        </div>
                    </div>
                </div>
                <div className=" d-flex justify-content-end" style={{ height: "40%" }}>
                    <div className="d-flex align-items-end">
                        <div className="mx-3 my-2">
                            <div className="d-flex flex-column bg-white opacity-75 p-3">
                                <small className="text-primary mb-0">We make it our </small>
                                <small className="text-primary ">business to find the perfect</small>
                                <small className="text-primary ">property suited for your needs.</small>
                                <div className="d-flex justify-content-center">
                                    <a className="btn btn-lg btn-primary" href='/products' >LEARN MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner