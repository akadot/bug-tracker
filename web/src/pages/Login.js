import React from "react";
import Input from "../components/Input";
import Card from "../components/Card";
import Container from "../components/Container";

import Logo from '../assets/logo.svg'

const Login = () => {
	return (
		<Container>
			<img src={Logo} alt='Bug Tracker Logo' />
			<Card>
				<h1>Login</h1>
				<Input type='text' placeholder='Nome...' />
			</Card>
		</Container>
	);
}

export default Login;