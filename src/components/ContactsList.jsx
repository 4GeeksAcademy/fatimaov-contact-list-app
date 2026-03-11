import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";
import { getContacts, deleteContact } from "../api/apiService";
import storeReducer from "../store";
import Contact from "./Contact";

function ContactsList() {

    const { store, dispatch } = useGlobalReducer();
    console.log(store)

    useEffect(() => {
        async function loadContacts() {
            dispatch({
                type: 'GET_CONTACTS',
                payload: { contacts: await getContacts() },
            }
            )
        }
        loadContacts()
    }, [])



    async function deleteContactClick(id) {
        console.log('delete contact function declaration', id)
        await deleteContact(id)
        dispatch({
            type: 'GET_CONTACTS',
            payload: { contacts: await getContacts() },
        }
        )

    }


    return (
        <>
            <h1>Contacts List</h1>
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
        : 'No contacts'}
        </>
    )
}

export default ContactsList;