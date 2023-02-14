import React from "react";
import logo from "../images/logo.png";

function Header() {
    return (<header>
			<a href="index.html">
				<img src={logo} alt="logo"/> 
			</a>
			<div class="mainHeading">
			<div class="headingText">
				<h1>The Baltimore Blot!</h1>
				<p> Community of artists and art enthusiasts </p>
			</div>
			{/* <div id="login"> */}
				<a class="loginButton" href="login.html">Login</a>
				<a class="signUpButton" href="signup.html">Sign Up!</a>
			{/* </div> */}
			</div>
    </header>);
}

export default Header;