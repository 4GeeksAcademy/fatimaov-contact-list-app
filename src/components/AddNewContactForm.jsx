import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { addContact, getContacts } from "../api/apiService";
import { useNavigate } from "react-router-dom";

function AddNewContactForm() {

    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();
    const [addContactInfo, setAddContactInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    })

    console.log(addContactInfo)

    function handleSubmit(e) {
        e.preventDefault();
        
        async function addNewContact() {
            await addContact(addContactInfo);
            dispatch({
                type: 'GET_CONTACTS',
                payload: { contacts: await getContacts() },
            }
            )
        }
        addNewContact();
        navigate('/')
    }

    return (
        <>
            <form className="mt-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input onChange={(e) => setAddContactInfo({ ...addContactInfo, name: e.target.value })} value={addContactInfo.name} type="text" className="form-control" id="name" aria-describedby="name" required placeholder="Enter Full Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input onChange={(e) => setAddContactInfo({ ...addContactInfo, email: e.target.value })} value={addContactInfo.email} type="email" className="form-control" id="email" required placeholder="Enter Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input onChange={(e) => setAddContactInfo({ ...addContactInfo, phone: e.target.value })} value={addContactInfo.phone} type="text" className="form-control" id="phone" required placeholder="Enter Phone" />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input onChange={(e) => setAddContactInfo({ ...addContactInfo, address: e.target.value })} value={addContactInfo.address} type="text" className="form-control" id="address" required placeholder="Enter Address" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Save</button>

            </form>
        </>
    )
}

export default AddNewContactForm;