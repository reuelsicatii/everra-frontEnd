import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import { send } from 'emailjs-com';
import useSendEmail from "../../Hooks/useSendEmail"

function ContactUsComp() {

    // Leads States
    // =================================================
    const [modalShowSuccess, setModalShowSuccess] = useState(false);
    const [modalShowError, setModalShowError] = useState(false);
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");

    function sendLead(e) {

        if (!fullname || !email || !mobile || !message) {

            console.log("One or all fields are empty");
            setModalShowError(true);

        }

        else {

            e.preventDefault();
            send(
                'service_2rovyok',
                'template_i9ln0kz',
                { fullname, email, mobile, message, address },
                'ks1W4IJypA6KzHBVM'
            )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                });

        }
    }


    return (
        <section id="contact-us">
            <div className="container my-5">
                <div className="px-2 py-5 shadow" >
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6">
                            <div className="d-flex justify-content-center">
                                <i className="bi bi-envelope" style={{ fontSize: "70px" }}></i>
                            </div>
                            <h2 className="text-center fw-bold mb-0 pb-0">Leave Us a Message</h2>
                            <p className="text-center mt-0 pt-0">We would love to hear from you</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mb-5">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <div className="input-group mb-3">
                                    <span className="input-group-text ">Fullname<small style={{ color: "red", paddingLeft: "0.2em" }}>(REQ)</small> </span>
                                    <input type="text"
                                        className="form-control"
                                        aria-describedby="emailHelp"
                                        placeholder="Juan Dela Cruz"
                                        onChange={(e) => setFullname(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">EAddress<small style={{ color: "red", paddingLeft: "0.2em" }}>(REQ)</small> </span>
                                    <input type="email"
                                        className="form-control"
                                        aria-describedby="emailHelp"
                                        placeholder="juandelacruz@gmail.com"
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="input-group mb-0 pb-0">
                                    <span className="input-group-text">Number<small style={{ color: "red", paddingLeft: "0.2em" }}>(REQ)</small> </span>
                                    <input type="text"
                                        className="form-control"
                                        aria-describedby="emailHelp"
                                        placeholder="+63 917 4676123"
                                        onChange={(e) => setMobile(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className='text-start mb-3'>
                                    <small className='mx-1' style={{ fontSize: "0.8em" }}>Please include Country and Area code (eg. 63 917 4676123)</small>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Home Address<small style={{ color: "red", paddingLeft: "0.2em" }}>(REQ)</small> </span>
                                    <textarea
                                        className="form-control"
                                        placeholder="2562 Jupiter cor Evangelist St Brgy Bel-Air, Makati City, Philippines, 1209"
                                        rows="4"
                                        onChange={(e) => setAddress(e.target.value)} required>
                                    </textarea>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Message<small style={{ color: "red", paddingLeft: "0.2em" }}>(REQ)</small> </span>
                                    <textarea
                                        className="form-control"
                                        placeholder="Drop your message here and we'll connect on your most immediate and available time."
                                        rows="6"
                                        onChange={(e) => setMessage(e.target.value)} required>
                                    </textarea>
                                </div>
                            </div>
                            <button type="submit"
                                className="btn btn-success btn-lg w-100"
                                onClick={sendLead}
                            >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={modalShowSuccess} onHide={() => setModalShowSuccess(false)}>
                <Modal.Body style={{ color: "green" }}>
                    <p className="mb-0 fw-bold">Thank you for your message</p>
                    <small>You will here from us soon!</small>
                </Modal.Body>
            </Modal>
            <Modal show={modalShowError} onHide={() => setModalShowError(false)}>
                <Modal.Body style={{ color: "red" }}>
                    <p className="mb-0 fw-bold">One or more fields are invalid or empty</p>
                    <small>Please check the fields and click "Submit" button again!</small>
                </Modal.Body>
            </Modal>
        </section >
    )
}

export default ContactUsComp
