import React from "react";

import RegisterForm from "../components/RegisterForm";
import Container from "../components/Container";

import Logo from '../assets/logo.svg';

const Register = () => {
	return (
		<Container>
			<img src={Logo} alt='Bug Tracker Logo' />
			<RegisterForm />
		</Container>
	);
}

export default Register;