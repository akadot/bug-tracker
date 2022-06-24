import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { HiOutlineUser, HiOutlineTicket, HiOutlineUserGroup, HiOutlineBriefcase, HiOutlineIdentification, HiOutlineTag, HiOutlineInformationCircle, HiOutlineLogout } from 'react-icons/hi';

const SideContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;

	& h1{
		font-size: 1.3em;
		margin-bottom: 20px;
	}

	& section{
		font-size: 1em;
		font-weight: 600;
		width: 100%;
		padding: 10px 20px 10px 5px;
		transition: background-color .2s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin-bottom: 10px;
		cursor: pointer;

		& p{
			margin-left: 10px;
		}

		&:hover{
			background-color: #FF416C;
			color: #fff;
		}
	}
`;

const Sidebar = () => {
	const [userName, setUserName] = useState("");
	const userId = localStorage.getItem("user_id");
	const role = localStorage.getItem("user_role");
	const token = localStorage.getItem("api_token");

	const navigate = useNavigate();

	useEffect(() => {
		(async function getUser() {
			await axios.get(`http://localhost:8080/users/${userId}`, { headers: { 'authorization': token } })
				.then((success) => {
					const userInfo = success.data.data[0];
					setUserName(userInfo.name)
				}).catch(err => {
					console.error(err)
					navigate('/login')
					window.alert(err.response.data.error)
				})
		}
		)()
	}, [token, userId, navigate])

	function handleLogout() {
		window.localStorage.removeItem("api_token");
		window.localStorage.removeItem("user_role");
		window.localStorage.removeItem("user_id");
		window.localStorage.clear();
		navigate('/login');
	}


	return (
		<SideContainer>
			<h1>Boas Vindas, {userName}.</h1>
			<section onClick={() => navigate('/dashboard')}>
				<HiOutlineUser />
				<p>Perfil</p>
			</section>
			<section onClick={() => navigate('/dashboard/tickets')}>
				<HiOutlineTicket />
				<p>Tickets</p>
			</section>
			{role === "admin" ? <section onClick={() => navigate('/dashboard/users_list')}>
				<HiOutlineUserGroup />
				<p>Usuários</p>
			</section> : ''}
			{role === "admin" ? <section onClick={() => navigate('/dashboard/projects')}>
				<HiOutlineBriefcase />
				<p>Projetos</p>
			</section> : ''}
			{role === "admin" ? <section onClick={() => navigate('/dashboard/roles')}>
				<HiOutlineIdentification />
				<p>Cargos</p>
			</section> : ''}
			{role === "admin" ? <section onClick={() => navigate('/dashboard/categories')}>
				<HiOutlineTag />
				<p>Categorias</p>
			</section> : ''}
			{role === "admin" ? <section onClick={() => navigate('/dashboard/status')}>
				<HiOutlineInformationCircle />
				<p>Status</p>
			</section> : ''}
			<section onClick={handleLogout}>
				<HiOutlineLogout />
				<p>Sair</p>
			</section>

		</SideContainer>
	)
}

export default Sidebar;