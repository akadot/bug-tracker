import React from "react";
import LoginForm from "../components/LoginForm";
import Container from "../components/Container";

import Logo from '../assets/logo.svg'

const Login = () => {
	return (
		<Container>
			<img src={Logo} alt='Bug Tracker Logo' />
			<LoginForm />
		</Container>
	);
}

export default Login;