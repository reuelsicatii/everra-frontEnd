import React from 'react'

function Footer() {
    return (

        <section id="footer" className="bg-primary">
            <div className="container pt-5">
                <div className='row mb-5'>
                    <div className="col-lg-4">
                        <div className='d-flex flex-column'>
                            <img src="/Images/Logo01.png" alt="logo" style={{ height: '200px', width: '220px', borderRadius: '50%' }} />
                            <div className="text-white-50 mt-4">
                                <h3 className="text-white text-start">Address</h3>
                                <p className="text-start">
                                    <i className="bi bi-pin-map-fill">Makati City, 1204 Metro Manila, Philippines</i>
                                </p>
                            </div>
                            <div className="text-white-50">
                                <h3 className="text-white text-start">Contact Us</h3>
                                <p className="text-start">
                                    <i className="bi bi-phone-fill"> 63.915.6978008</i>
                                    <br></br>
                                    <i className="bi bi-whatsapp"> 63.915.6978008 (whatsapp)</i>
                                    <br></br>
                                    <i className="bi bi-whatsapp"> 63.915.6978008 (viber)</i>
                                    <br></br>
                                    <a className='text-white' href="/contact-us">
                                        <i className="bi bi-envelope-fill"> info@everra.net </i>
                                    </a>
                                    <br></br>
                                    <a className="text-white" href="https://web.facebook.com/EverraRealty"><i className="bi bi-facebook"></i></a>
                                    {" "}
                                    <a className="text-white" href="https://www.linkedin.com/in/everra/"><i className="bi bi-linkedin"></i></a>
                                    {" "}
                                    <a className="text-white" href="https://www.instagram.com/makatibroker/"><i className="bi bi-instagram"></i></a>
                                    {" "}
                                    <a className="text-white" href="https://twitter.com/makatiREbroker"><i className="bi bi-twitter"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 embed-responsive embed-responsive-1by1">
                        <iframe className="embed-responsive-item"
                            width="100%" height="100%"
                            src="https://maps.google.com/maps?q=Makati%20City&t=&z=17&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                </div>
                <div className='row d-flex justify-content-center text-white-50'>COPYRIGHTS NIMPHUS INC. ALL RIGHTS RESERVED</div>
                <div className='row justify-content-center fw-bold pb-3'>
                    <a className='text-white' href='https://reuelcv.pages.dev/'>
                        Design by Reuel B Sicat II
                    </a>
                </div>




            </div>
        </section>

    )
}

export default Footer
