import React from "react";
import AddNewContactForm from '../components/AddNewContactForm'
import { Link } from "react-router-dom";

function AddNewContact() {

    return (
        <>
            <div className="m-2">
                <h1 className="text-center my-5 fw-bold">Add a new contact</h1>
                <AddNewContactForm />
                <Link to={'/'}>
                    <p className="text-center">or get back to contacts</p>
                </Link>
            </div>
        </>
    )
}

export default AddNewContact;