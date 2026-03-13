import React from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

function EditContactForm() {

    const { store, dispatch } = useGlobalReducer();
    const { id } = useParams();
    console.log(id)
    

    return (
        <>
            <form className="mt-5 mx-auto" style={{ maxWidth: 600 }}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="name" required placeholder="Enter Full Name" minLength='3' maxLength='20' />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" required placeholder="Enter Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" required placeholder="Enter Phone" />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" required placeholder="Enter Address" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Save</button>
            </form>
        </>
    )
}

export default EditContactForm;