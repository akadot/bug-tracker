import styled from "styled-components";
import axios from 'axios';

import { useEffect, useState } from 'react';
import { HiOutlineUser } from 'react-icons/hi';

import Button from '../components/Button.js';
import Input from '../components/Input.js';

const Container = styled.section`
width: 50em;
height: 100%;
margin-left: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

& section{
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
}

& select{
	padding: 15px 10px;
border: none;
width: 35em;
border-radius: 5px;
background-color: #e5e8ed;
color: #171c28;
font-weight: 600;

	&::placeholder{
		color: #7a808e;
		opacity: .7;
	}
}

`;


const Default = () => {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [userRole, setUserRole] = useState("");
	const [allRoles, setAllRoles] = useState([]);

	const userId = localStorage.getItem("user_id");
	const role = localStorage.getItem("user_role");
	const token = localStorage.getItem("api_token");

	useEffect(() => {
		(async function getUser() {
			await axios.get(`http://localhost:8080/users/${userId}`, { headers: { 'authorization': token } })
				.then((success) => {
					const userInfo = success.data.data[0];
					setUserName(userInfo.name)
					setEmail(userInfo.email)
					setUserRole(userInfo.role)
				}).catch(err => {
					console.error(err)
					window.alert(err.response.data.error)
				})

			await axios.get('http://localhost:8080/roles', { headers: { 'authorization': token } })
				.then((success) => {
					const userInfo = success.data.data;
					setAllRoles(userInfo)
				}).catch(err => {
					console.error(err)
					window.alert(err.response.data.error)
				})
		}
		)()
	}, [token, userId]);

	async function handlerUpdate() {
		await axios.put(`http://localhost:8080/users/${userId}`, {
			name: userName,
			email: email,
			password: password,
			role: userRole,
		}, { headers: { 'authorization': token } })
			.then((success) => {
				window.alert('Usuário Alterado.')
			}).catch(err => {
				window.alert(err.response.data.error)
			})
	}

	return (
		<Container>
			<h1><HiOutlineUser /> Informações do Usuário</h1>
			<section>
				<label htmlFor="username">Nome de Usuário</label>
				<Input id='username' type='text' defaultValue={userName} onChange={(e) => setUserName(e.target.value)} />
			</section>

			<section>
				<label htmlFor="email">Email</label>
				<Input id='email' type='email' defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
			</section>

			<section>
				<label htmlFor="pass">Nova Senha</label>
				<Input id='pass' type='password' onChange={(e) => setPassword(e.target.value)} />
			</section>

			{role === 'admin' ? <section>
				<label htmlFor="role">Cargo</label>
				<select id='role' type='selector' onChange={(e) => setUserRole(e.target.value)}>
					{allRoles.map((item) => {
						return (
							<option key={item.title} value={item.title}>{item.title}</option>
						)
					})}
				</select>
			</section> : ''}

			<Button style={{ width: '50%' }} onClick={handlerUpdate}>Atualizar Usuário</Button>
		</Container>
	);
}

export default Default