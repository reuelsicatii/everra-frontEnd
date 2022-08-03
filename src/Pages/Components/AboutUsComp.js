import React from 'react'

function AboutUsComp() {
    return (
        <section id="about-us">
            <div className='container'>
                <div className='row my-5'>
                    <h1 className='text-primary fw-bold text-start mt-4'>About Us</h1>
                    <div className='row my-3'>
                        <div className='col-lg-6 px-3 '>
                            <h4 className='text-primary text-start mb-0 pb-0'>Quality over Quantity</h4>
                            <p className='text-primary text-start mx-1 mt-0 pt-0 border-bottom border-primary border-1'>We Do It Right</p>

                            <p className='text-primary text-start mx-1 '>
                                We’ve all run into real estate brokers who seem to always be in a hurry.
                                They can’t stop and take the time to make sure your needs are being met
                                because they’re afraid they’ll miss out on that next big deal.
                                At EVERRA Real Estate, we think buying or selling a home should be a careful,
                                deliberate process that meets all your needs, not done so quickly that
                                you don’t know what happened.
                            </p>

                            <p className='text-primary text-start mx-1 '>
                                We use a unique, multifaceted approach to ensure that our customers
                                are put first, no matter what. When we opened more than 15 years ago,
                                we believed in providing quality customer service to meet your family’s
                                needs, and we still do today. With our network of other Real Estate
                                Professionals, we make it happen. We’re your Real Estate Professional
                                yesterday, today and tomorrow.
                            </p>

                        </div>
                        <div className='col-lg-6 px-3'>
                            <img src="/Images/AboutUs/Quality.jpg" className="img-fluid" alt="..."></img>
                        </div>
                    </div>

                    <div className='row my-3'>
                        <div className='col-lg-6 px-3'>
                            <img src="/Images/AboutUs/SellHome.jpg" className="img-fluid" alt="..."></img>
                        </div>
                        <div className='col-lg-6 px-3 my-3'>
                            <h4 className='text-primary text-start mb-0 pb-0'>Selling Your Home?</h4>
                            <p className='text-primary text-start mx-1 mt-0 pt-0 border-bottom border-primary border-1'>Explore Your Options With Us</p>

                            <p className='text-primary text-start mx-1 '>
                                We know there are many reasons why you need to sell your home,
                                and some of them can be very complicated. That’s why we discuss
                                your options before having you sign any paperwork – we want you
                                to be able to make the best choice for your family. Whether you’re
                                moving across town, across the country or around the world,
                                we’ll take care of you.
                            </p>

                            <p className='text-primary text-start mx-1 '>
                                We not only try to sell your property on our own but we also work
                                with other real estate professionals to get more visibility for
                                your property to the right buyer through the Multiple Listing System (MLS).
                                With cooperating brokers, we will be able to match client requirements with our listings.
                            </p>

                        </div>

                    </div>

                    <div className='row mb-3'>
                        <div className='col-lg-6 px-3 '>
                            <h4 className='text-primary text-start mb-0 pb-0'>Buying a New Home?</h4>
                            <p className='text-primary text-start mx-1 mb-0 pb-0'>Whether Ready for Occupancy, Resale or Developer Pre-selling:</p>
                            <p className='text-primary text-start mx-1 mt-0 pt-0 border-bottom border-primary border-1'>Rest Assured In Our Services</p>

                            <p className='text-primary text-start mx-1 '>
                                We know that buying a home can be a truly nerve wracking experience.
                                Whether you’re looking for your first home or are downsizing because
                                of an empty nest, we can help you find the perfect home. Do you need
                                to step up to an executive-level luxury home? Want a quiet place in
                                the woods to reflect during your retirement? Our access to a variety
                                of databases ensures you’ll be happy with your options.
                            </p>

                            <p className='text-primary text-start mx-1 '>
                                EVERRA Real Estate is now accredited and working closely with one of
                                the top developers in the country, SMDC thus giving our clients the
                                option to own real estate properties at low pre-selling prices allowing
                                for much capital appreciation. Real estate is still the best investment
                                to put your money in where in a few years’ time you can recoup what you
                                put in with passive income through rentals or selling such property for
                                a profit later on.
                            </p>

                        </div>
                        <div className='col-lg-6 px-3'>
                            <img src="/Images/AboutUs/BuyHome.jpg" className="img-fluid" alt="..."></img>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default AboutUsComp