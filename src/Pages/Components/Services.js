import React from 'react'

function Services() {
    return (
        <section id="services">
            <div className='container py-5'>
                <div className='row'>
                    <h1 className='text-primary fw-bold text-start'>Our Services</h1>
                </div>

                <div className='row px-3'>
                    <div className='col-lg-4'>
                        <div className="card" style={{border: "none"}}>
                            <img src="/Images/Services/Approach.jpg" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">A Different Approach</h5>
                                <p className="card-text">After being in the real estate industry for over 15 years,
                                    Vinia has learned that the being a Real Estate Service Practioner entails careful considerations .
                                    She wanted to spend time with her clients, to learn about their needs, wants and dreams.
                                    The look on her clients’ faces when she showed them the perfect home was well worth the extra
                                    hours it took to locate it.</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="card" style={{border: "none"}}>
                            <img src="/Images/Services/HomeBuying.jpg" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Home Buying Made Easy</h5>
                                <p className="card-text">Are you tired of dealing with real estate agents who are more interested in
                                    their schedule and commission than in helping you buy or sell a home? If you’re looking for a wonderful,
                                    easy real estate experience, EVERRA Real Estate is your answer. From subdivision sales to property management,
                                    we can meet all your real estate needs.</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="card" style={{border: "none"}}>
                            <img src="/Images/Services/Quality.jpg" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Quality Over Quantity</h5>
                                <p className="card-text">Are you tired of dealing with real estate agents who are more interested in their
                                    schedule and commission than in helping you buy or sell a home? If you’re looking for a wonderful,
                                    easy real estate experience, EVERRA Real Estate is your answer. From subdivision sales to property management,
                                    we can meet all your real estate needs.</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services