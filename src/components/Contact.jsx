import React from "react";
import { Link } from "react-router-dom";

function Contact({ name, phone, email, address, id, onDeleteContact }) {


    return (
        <>
            <div className="d-flex align-items-center mb-3">
                <div style={{ width: 150 }}>
                    <img src="src/assets/img/user_profile_img.png" alt="profile photo" className="img-fluid" />
                </div>
                <div>
                    <p className="m-0">{name}</p>
                    <p className="m-0">{address}</p>
                    <p className="m-0">{phone}</p>
                    <p className="m-0">{email}</p>
                </div>
                <div>
                    <Link>
                        Edit
                    </Link>

                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#modal${id}`}>
                        Launch demo modal
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