import React from "react";
import { Link } from "react-router-dom";
import EditContactForm from "../components/EditContactForm";

function EditContact() {

    return (
        <>
            <div className="m-2">
                <h1 className="text-center my-5 fw-bold">Edit contact page</h1>
                <EditContactForm />
                <Link to={'/'}>
                    <p className="text-center">or get back to contacts</p>
                </Link>
            </div>
        </>
    )
}

export default EditContact;