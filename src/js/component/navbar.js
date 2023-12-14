import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const navbarStyle = {
		backgroundColor: 'lightblue',
	};

	return (
		<nav className="navbar navbar-light mb-3" style={navbarStyle}>
			<div className="container d-flex justify-content-center">
				<Link to="/createContact">
					<button className="custom-edit-btn">Add New Contact</button>
				</Link>
			</div>
		</nav>
	);
};
