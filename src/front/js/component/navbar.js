import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navbar = () => {

	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

	const handleLogOut = async () => {
		 actions.logout()
		
		 navigate("/login")
				
	}

	return (
		<nav style={{backgroundColor: "#6495ed"}} className="navbar">
			<div className="container">
				<Link to="/" style={{textDecoration: "none"}}>
					<span className="navbar-brand mb-0 h1 titulo text-white">Navbar</span>
				</Link>
				<div className="ml-auto d-flex justify-content-between" style={{width: "150px"}}>
					{ !store.token ?
					<>
						<Link to="/login">
							<button className="btn btn-light me-2" style={{width: "100px", height: "100%"}}>Log in</button>

						</Link>
						<Link to="/signup">
							<button className="btn btn-light" style={{width: "100px", height: "100%"}}>Sign Up</button>
						</Link>
					</>
					:
					<>
						<button onClick={handleLogOut} className="btn btn-light" style={{minWidth: "70%"}}>Log out</button>
					</>
					}
					
					
				</div>
			</div>
		</nav>
	);
};
