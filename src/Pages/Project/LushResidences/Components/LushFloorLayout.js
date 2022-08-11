import React from 'react'

function LushFloorLayout() {
    return (
        <section id="lush-floor-layout">
            <div className='container my-3'>
                <h1 className='text-start fw-bold text-primary'>Floor Layout</h1>

                <div className='row mb-2 px-3'>
                    <div className='col-lg-4 mb-2'>
                        <div className="card border-0 h-100" style={{ background: "#325d88" }}>
                            <img src="/Images/Lush/FloorLayout1.png" class="d-block w-100" alt="..."></img>
                            <div className="card-body text-white">
                                <h4 className="card-title  text-start">Typical Floor</h4>
                                <p className="card-text text-start">
                                    <small>
                                        This is the typical floor plan for the 11th, 12th, 15th – 25th floors.
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mb-2'>
                        <div className="card border-0 h-100" style={{ background: "#325d88" }}>
                            <img src="/Images/Lush/FloorLayout2.png" class="d-block w-100" alt="..."></img>
                            <div className="card-body text-white">
                                <h4 className="card-title  text-start">8th to 10th Floor</h4>
                                <p className="card-text text-start">
                                    <small>
                                        The 8th to 10th floors have different layouts from 11th to 25th levels with several units available.
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 mb-2'>
                        <div className="card border-0 h-100" style={{ background: "#325d88" }}>
                            <img src="/Images/Lush/FloorLayout3.png" class="d-block w-100" alt="..."></img>
                            <div className="card-body text-white">
                                <h4 className="card-title  text-start">Amenities Level</h4>
                                <p className="card-text text-start">
                                    <small>
                                        The amenities area is on the 7th floor where there are several residential units.
                                    </small>
                                </p>
                                <p className="card-text text-start">
                                    <small>
                                        As of April 7, 2022, all units have been reserved but clients can waitlist for reopened units.
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default LushFloorLayout