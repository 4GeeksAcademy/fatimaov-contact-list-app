import React from "react";
import AddNewContactForm from '../components/AddNewContactForm'
import { Link } from "react-router-dom";

function AddNewContact() {

    return (
        <>
            <div className="m-5">
                <h1 className="text-center mb-3 fw-bold">Add a new contact</h1>
                <AddNewContactForm />
                <Link to={'/'}>or get back to contacts</Link>
            </div>
        </>
    )
}

export default AddNewContact;