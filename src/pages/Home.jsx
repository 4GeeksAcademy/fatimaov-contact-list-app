import React from "react";
import { useNavigate } from "react-router-dom";
import ContactsList from "../components/ContactsList";

export const Home = () => {

	const navigate = useNavigate();

	function handleAddNewContactClick() {
		return navigate('/add-new-contact')
	}

	return (
		<>
			<div className="mt-5 text-end me-5">
				<button className="btn btn-success" onClick={handleAddNewContactClick}>Add new contact</button>
			</div>
			<ContactsList />
		</>
	);
}; 