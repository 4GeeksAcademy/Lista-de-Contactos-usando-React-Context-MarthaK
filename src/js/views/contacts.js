import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/contact.css";


export const Contacts = () => {
	const { store, actions } = useContext(Context);

	const handleDeleteContact = (id) => actions.deleteContact(id);

	useEffect(() => { actions.getAgenda() }, []);

	return (
		<div className="container">
			<ul className="list-group">
				{store.contacts.length === 0 ? (<span>No contacts</span>) :
					store.contacts.map((item, index) => {
						return (
							<li key={index} className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-center">
								<div>
									<img src="https://picsum.photos/200/300" alt="Random" width="150" height="150"></img>
								</div>
								<div className="content">
									<h3>{item.full_name}</h3>
									<div className="contact-details">
										<p>{item.email}</p>
										<p>{item.address}</p>
										<p>{item.phone}</p>
									</div>
								</div>
								<div>
									<div className="btns-container">
										<Link to={`/contact/edit/${item.id}`}>
											<button className="btn custom-edit-btn"> Edit </button>
										</Link>
										<button className="btn custom-delete-btn" onClick={() => handleDeleteContact(item.id)}> Delete </button>
									</div>
								</div>
							</li>

						);
					})}
			</ul>
		</div>
	);
};