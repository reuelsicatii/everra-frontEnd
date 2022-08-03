import React from 'react'

function FeaturedListing() {
  return (
    <section id="featured-listing">
      <div className='container-fluid' style={{ backgroundColor: "lightgray" }}>
        <div className='container py-5'>
          <div className='row'>
            <h1 className='text-primary fw-bold text-start'> Featured Listing
              <div className='position-relative'>
                <div className="position-absolute top-0 end-0">
                  <i className="bi bi-bookmark-star-fill"
                    style={{ fontSize: "6rem", color: "#DAA520" }}></i>
                </div>
              </div>
            </h1>
            <div className='shadow rounded' style={{ backgroundColor: "#f8f5f0" }}>
              <div className='row mx-1'>
                <h2 className='text-secondary fw-bold text-start mt-3'>Asteria Residences</h2>
                <p className='text-secondary fw-bold text-start mb-0 pb-0'>2-Bedroom With Parking Slot</p>
                <p className='text-secondary text-start mt-0 pt-0'><small>Being sold as Furnished, Upgraded</small></p>

                <p className='text-secondary text-start'>
                  <small >Looking for a ready for occupancy condominium
                    unit in the south of Manila? Here is a 2-Bedroom in a DMCI Homes mid-rise community — Asteria Residences
                    in Parañaque City, ready to move in with parking slot. As with many other DMCI projects, this is a resort-type
                    community with large swimming pools with separate kiddie pool, a big playground, game room, basketball court,
                    multi-purpose hall, lounge, convenience store, and many more.This particular unit is on the Ground Floor fronting
                    the clubhouse thereby making it very convenient to go enjoy the amenities by crossing the road which is not very busy
                    because inside an exclusive community. A homey place it is, unit owner of Asteria Residences may have small dogs as pets.
                  </small>
                </p>

                <p className='text-secondary text-start'>
                  <small >For complete set of amenities in the complex just click button below to see what Asteria Residences has to offer.
                    Ownership is through Condominium Certificate of Title (CCT) wherein even foreigners may get perpetual or freehold ownership
                    that can be passed on to heirs. For a hassle- and worry-free ownership of this property, just contact our details below and
                    will be happy to transfer property to your name. As licensed brokers, we do our very best to ensure that your journey to owning
                    this property is a pleasant one.Please watch the video above to get more details on the property.
                  </small>
                </p>

                <div className='container m-2'>
                  <h3 className='text-secondary fw-bold text-start my-3'>Unit Features</h3>

                  <div className='row mb-3'>
                    <div className='row container'>

                      <div className='col-lg-8'>
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                          </div>
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img src="/Images/Asteria/MastersBedroom.jpeg" className="img-fluid" alt="..."></img>
                              <div className="carousel-caption d-none d-md-block">
                                <h4>Master's Bedroom.</h4>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img src="/Images/Asteria/Kitchen.jpeg" className="img-fluid" alt="..."></img>
                              <div className="carousel-caption d-none d-md-block">
                                <h4>Large Kitchen</h4>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img src="/Images/Asteria/Balcony.jpeg" className="img-fluid" alt="..."></img>
                              <div className="carousel-caption d-none d-md-block">
                                <h4>Spacious Balcony</h4>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img src="/Images/Asteria/LivingRoom.jpeg" className="img-fluid" alt="..."></img>
                              <div className="carousel-caption d-none d-md-block">
                                <h4>Cozy Living Room</h4>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img src="/Images/Asteria/Bathroom.jpeg" className="img-fluid" alt="..."></img>
                              <div className="carousel-caption d-none d-md-block">
                                <h4>Luxurious Bathroom</h4>
                              </div>
                            </div>
                          </div>
                          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>

                      <div className='col-lg-4'>
                        <p className='text-secondary text-start mb-0 pt-0'>This is an upgraded unit with the following features:</p>
                        <ul className='text-secondary text-start'>
                          <li>2 Bedrooms</li>
                          <li>1 Toilet and Bath (upgraded)</li>
                          <li>Large Balcony</li>
                          <li>Upgraded kitchen</li>
                          <li>Fronting clubhouse</li>
                          <li>69 sq.m. (731.40 sq.ft.)</li>
                        </ul>
                        <p className='text-secondary text-start mb-0 pt-0'>Three (3) titles for the: </p>
                        <ol className='text-secondary text-start'>
                          <li>unit</li>
                          <li>utility area on roofdeck</li>
                          <li>parking</li>
                        </ol>
                        <p className='text-secondary text-start'>Price: <b>PhP5,995,000 Only</b></p>
                        <p className='text-secondary text-start'>
                          <small >* This price is even lower than published</small>
                          <br></br>
                          <small >developer pricer unfurnished, not upgraded</small>
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

                <div className='container m-2'>
                  <div className='row mb-3'>
                    <div className='row container'>

                      <div className='col-lg-4'>
                        <p className='text-secondary text-start mb-0 pt-0'>Asteria Residences is a medium rise condominium complex that offers
                          a secure residence with access to numerous places of interest complimenting the emerging dynamic lifestyle in the South.</p>
                        <p className='text-secondary text-start mt-2 mb-0 pt-0'>Asteria Residences is perfect for starting families and accomplished
                          young professionals in Parañaque, as well as parts of Muntinlupa and Las Piñas.</p>
                        <p className='text-secondary text-start mt-2 mb-0 pt-0'>Amenities: </p>
                        <ul className='text-secondary text-start'>
                          <li>Fitness Gym</li>
                          <li>Function Hall</li>
                          <li>Game Area</li>
                          <li>Kiddie Pool</li>
                          <li>Main Entrance</li>
                          <li>Play Ground</li>
                          <li>Swimming Pool</li>
                        </ul>
                      </div>

                      <div className='col-lg-8'>
                        <div id="carouselBuildingFeatures" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselBuildingFeatures" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselBuildingFeatures" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselBuildingFeatures" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselBuildingFeatures" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselBuildingFeatures" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselBuildingFeatures" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#carouselBuildingFeatures" data-bs-slide-to="6" aria-label="Slide 7"></button>

                          </div>
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img src="/Images/Asteria/FitnessGym2.jpg" className="img-fluid" alt="..."></img>
                              <div className="carousel-caption d-none d-md-block">
                                <h4>Fitness Gym</h4>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img src="/Images/Asteria/FunctionHall.jpg" className="img-fluid" alt="..."></img>
                              <div className="carousel-caption d-none d-md-block">
                                <h4>Function Hall</h4>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img src="/Images/Asteria/GameArea.jpg" className="img-fluid" alt="..."></img>
                              <div className="carousel-caption d-none d-md-block">
                                <h4>Game Area</h4>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img src="/Images/Asteria/KiddiePool.jpg" className="img-fluid" alt="..."></img>
                              <div className="carousel-caption d-none d-md-block">
                                <h4>Kiddie Pool</h4>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img src="/Images/Asteria/MainEntrance.jpg" className="img-fluid" alt="..."></img>
                              <div className="carousel-caption d-none d-md-block">
                                <h4>Main Entrance</h4>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img src="/Images/Asteria/PlayGround.jpg" className="img-fluid" alt="..."></img>
                              <div className="carousel-caption d-none d-md-block">
                                <h4>Play Ground</h4>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img src="/Images/Asteria/SwimmingPool.jpg" className="img-fluid" alt="..."></img>
                              <div className="carousel-caption d-none d-md-block">
                                <h4>Swimming Pool</h4>
                              </div>
                            </div>
                          </div>
                          <button className="carousel-control-prev" type="button" data-bs-target="#carouselBuildingFeatures" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target="#carouselBuildingFeatures" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className='container d-flex justify-content-center m-2'>
                  <div className='d-flex flex-col mb-3'>
                    <a className='btn btn-primary mx-2' href="">Learn More</a>
                    <a className='btn btn-primary mx-2' href="">Inquire</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedListing