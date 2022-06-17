import React from "react";
import Form from "../components/Form";
import Container from "../components/Container";

import Logo from '../assets/logo.svg'

const Login = () => {
	return (
		<Container>
			<img src={Logo} alt='Bug Tracker Logo' />
			<Form />
		</Container>
	);
}

export default Login;