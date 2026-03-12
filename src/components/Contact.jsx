import React from "react";
import { Link } from "react-router-dom";

function Contact({ name, phone, email, address, id, onDeleteContact }) {


    return (
        <>
            <div className="d-flex border justify-content-between p-3 mx-auto" style={{ width: 750 }}>
                <div className="d-flex align-items-center gap-3">
                    <div className="p-3" style={{ width: 150 }}>
                        <img src="src/assets/img/user_profile_img.png" alt="profile photo" className="img-fluid" />
                    </div>
                    <div>
                        <p className="m-0 fs-5 mb-2">{name}</p>
                        <div className="fs-6 text-secondary">
                            <div>
                                <i className="fa-solid fa-location-dot"></i>
                                <span className="m-0 ms-2">{address}</span>
                            </div>
                            <div>
                                <i className="fa-solid fa-phone"></i>
                                <span className="m-0 ms-2">{phone}</span>
                            </div>
                            <div>
                                <i className="fa-solid fa-envelope"></i>
                                <span className="m-0 ms-2">{email}</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <Link to={`/edit-contact/${id}`}>
                        <button type="button" className="btn">
                            <i className="fa-solid fa-pencil text-black"></i>
                        </button >
                    </Link>

                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target={`#modal${id}`}>
                        <i className="fa-solid fa-trash-can text-black"></i>
                    </button>

                    <div className="modal fade" id={`modal${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    If you delete this thing the entire universe will go down!
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Oh no!</button>
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => onDeleteContact(id)}>Yes baby!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;