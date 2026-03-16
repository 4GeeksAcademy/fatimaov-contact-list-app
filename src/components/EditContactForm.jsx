import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { editContact, getContacts } from "../api/apiService";

function EditContactForm() {

    const { store, dispatch } = useGlobalReducer();
    const { id } = useParams();
    const activeContact = store.find((contact) => contact.id === Number(id));
    const [activeContactEdit, setActiveContactEdit] = useState(activeContact)
    const navigate = useNavigate();

    function handleChange(e) {
        setActiveContactEdit({
            ...activeContactEdit,
            [e.target.id]: e.target.value ? e.target.value : activeContact[e.target.id],
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        async function editActiveContact() {
            await editContact(activeContactEdit);
            dispatch({
                type: 'GET_CONTACTS',
                payload: { contacts: await getContacts() },
            }
            )
        }
        editActiveContact();
        navigate('/');
    }


    return (
        <>
            <form className="mt-5 mx-auto" onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input onChange={handleChange} value={activeContactEdit.name} type="text" className="form-control" id="name" aria-describedby="name" required minLength='3' maxLength='20' />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input onChange={handleChange} value={activeContactEdit.email} type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input onChange={handleChange} value={activeContactEdit.phone} type="tel" className="form-control" id="phone" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input onChange={handleChange} value={activeContactEdit.address} type="text" className="form-control" id="address" required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Save</button>
            </form>
        </>
    )
}


export default EditContactForm;