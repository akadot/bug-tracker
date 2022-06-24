import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from './Input.js';
import Button from './Button.js';
import CustomLink from './Link.js';

const FormContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 20px;
height: 60%;
width: 100%;
`;

const Form = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	async function handlerLogin() {
		await axios.post("http://localhost:8080/auth/login", {
			email: email,
			password: password
		}).then((success) => {
			localStorage.setItem("api_token", success.data.token);
			localStorage.setItem("user_id", success.data.userId);
			localStorage.setItem("user_role", success.data.role);
			localStorage.setItem("user_name", success.data.name);
			navigate(`/dashboard`);
		}).catch((err) => {
			const msg = err.response.data.error;
			window.alert(msg);
		})
	}


	return (
		<FormContainer>
			<Input type='email' placeholder='Digite seu email' onChange={e => setEmail(e.target.value)} />
			<Input type='password' placeholder='Digite sua senha' onChange={e => setPassword(e.target.value)} />
			<Button onClick={handlerLogin}>Entrar</Button>
			<p>Não possui conta? <CustomLink to='/register'>Registre-se aqui.</CustomLink></p>
		</FormContainer>
	);
}

export default Form;