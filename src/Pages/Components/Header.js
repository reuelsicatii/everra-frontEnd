import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom"

function Header() {


    // const [orderCode, setOrderCode] = useState();
    // const navigate = useNavigate();

    // function trackPackage() {

    //     navigate('/order/summary/' + orderCode)

    // }

    return (
        <section id="header">

            <div id="contact-details" className="d-flex justify-content-center text-primary d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block">
                <div className="row w-100 p-2">
                    <div className="col-4">
                        <p className="mb-0"><b>Call Us:</b></p>
                        <i className="bi bi-phone-fill"> 63.915.6978008</i>
                    </div>
                    <div className="col-4">
                        <p className="mb-0"><b>Email Us:</b></p>
                        <i className="bi bi-envelope-fill"> info@everra.net </i>
                    </div>
                    <div className="col-4">
                        <p className="mb-0"><b>Visit Us:</b></p>
                        <a className="text-primary" href="https://web.facebook.com/EverraRealty"><i className="bi bi-facebook"></i></a>
                        {" "}
                        <a className="text-primary" href="https://www.linkedin.com/in/everra/"><i className="bi bi-linkedin"></i></a>
                        {" "}
                        <a className="text-primary" href="https://www.instagram.com/makatibroker/"><i className="bi bi-instagram"></i></a>
                        {" "}
                        <a className="text-primary" href="https://twitter.com/makatiREbroker"><i className="bi bi-twitter"></i></a>
                    </div>
                </div>
            </div>

            <div id="menu">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-4">
                    <div className="container">
                        <div>
                            <div className="d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block">
                                <a className="navbar-brand" href="/">
                                    <img src="/Images/Logo01.png" alt="logo" style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
                                </a>
                            </div>
                            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarColor03" aria-controls="navbarColor03"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <img src="/Images/Logo01.png" alt="logo" style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
                            </button>
                        </div>
                        <div>
                            <div className="show navbar-collapse" id="navbarColor03">

                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/">HOME
                                            <span className="visually-hidden">(current)</span>
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link active dropdown-toggle"
                                            id="navbarDropdown" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            LISTING
                                        </a>
                                        <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item nav-link text-center fw-bold" to="/listing-rent">For Rent</Link></li>
                                            <li><Link className="dropdown-item nav-link text-center fw-bold" to="/listing-sale">For Sale</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/about-us">ABOUT US</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link active" href="/contact-us">CONTACT US</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link active dropdown-toggle"
                                            href="/#" id="navbarDropdown" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            PROJECTS
                                        </a>
                                        <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item nav-link text-center fw-bold" to="/project/smdc-lushresidences">Lush Residences</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Header
