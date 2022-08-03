import React from 'react'

function PrincipalBroker() {
    return (
        <section id="principal-broker">
            <div className='fluid py-5 px-3' style={{ backgroundColor: "lightgray" }}>
                <div className='container bg-white'>
                    <div className='row shadow'>
                        <h1 className='text-primary fw-bold text-start mt-4'>Our Principal Broker</h1>

                        <div className='col-lg-4 my-3'>
                            <img src="/Images/Profile.jpg" className="img-fluid" alt="..."></img>
                        </div>
                        <div className='col-lg-8 '>
                            <h4 className='text-start border-bottom border-dark border-2'>We're There for You</h4>
                            <p className='text-start'>Selling or Buying properties? Whether you’re a
                                Seller or a Buyer, we are here for you to oversee that the transaction is
                                as seamless as possible. We offer a wide range of possible solutions to your
                                selling or home ownership problems.</p>

                            <p className='text-start'>Do you need a property that meets a very specific set
                                of qualifications? Are you leaving the area temporarily and need to pay your
                                mortgage while you’re gone? Do you need more pictures or details on a particular
                                property because you need to move quickly? Do you want to live in an artist’s
                                loft downtown? Is a farm out in the country your idea of peaceful living? Does
                                your family need good schools, a great house and a homeowner’s association to
                                protect your property values?</p>

                            <p className='text-start'>We’re there to meet all your needs. At EVERRA Real Estate,
                                you’re more than a customer – you’re friend!</p>

                            <div className='row my-3'>
                                <div className='d-flex justify-content-start'>
                                    <a className='btn btn-primary' href='#'>More ABout Us</a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default PrincipalBroker