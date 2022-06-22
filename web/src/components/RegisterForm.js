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
height: 70%;
width: 100%;
`;

const Form = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	async function handlerRegister() {
		await axios.post("http://localhost:8080/users", {
			name: name,
			email: email,
			password: password,
			role: "user"
		}).then((success) => {
			navigate('/login');
		}
		).catch((err) => {
			const msg = err.response.data.error;
			window.alert(msg);
		})
	}

	return (
		<FormContainer>
			<Input type='text' placeholder='Digite seu nome' onChange={e => setName(e.target.value)} />
			<Input type='email' placeholder='Digite seu melhor email' onChange={e => setEmail(e.target.value)} />
			<Input type='password' placeholder='Digite uma senha' onChange={e => setPassword(e.target.value)} />
			<Button onClick={handlerRegister}>Registrar</Button>
			<p>Já possui conta? <CustomLink to='/login'>Faça o Login.</CustomLink></p>
		</FormContainer>
	);
}

export default Form;