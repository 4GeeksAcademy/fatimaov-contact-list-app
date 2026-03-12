import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";
import { getContacts, deleteContact, appInit } from "../api/apiService";
import storeReducer from "../store";
import Contact from "./Contact";

function ContactsList() {

    const { store, dispatch } = useGlobalReducer();
    console.log('store update', store)

    useEffect(() => {
        async function loadContacts() {
            dispatch({
                type: 'GET_CONTACTS',
                payload: { contacts: await appInit() },
            }
            )
        }
        loadContacts();
    }, [])

    async function deleteContactClick(id) {
        await deleteContact(id)
        dispatch({
            type: 'GET_CONTACTS',
            payload: { contacts: await getContacts() },
        }
        )
    }


    return (
        <>
            <div className="d-flex flex-column gap-3">

                {store.length !== 0 ? store.map((contact) => {
                    return (
                        <Contact
                            key={contact.id}
                            name={contact.name}
                            address={contact.address}
                            phone={contact.phone}
                            email={contact.email}
                            id={contact.id}
                            onDeleteContact={deleteContactClick}
                        />
                    )
                })
                    : (
                        <div class="spinner-border text-primary mx-auto" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    )}
            </div>
        </>
    )
}

export default ContactsList;