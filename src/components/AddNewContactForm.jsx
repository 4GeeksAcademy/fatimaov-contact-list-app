import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

function AddNewContactForm() {

    const { store, actions } = useGlobalReducer();

    return (
        <>
            <h1>Add New Contact Form Component</h1>
        </>
    )
}

export default AddNewContactForm;