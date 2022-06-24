// import styled from "styled-components";

import axios from 'axios';
import { useEffect, useState } from 'react';

import ContentContainer from "../components/Content";
import TicketItem from "../components/Ticket";
import Filter from '../components/Filter';


const Tickets = () => {
	const [allTickets, setAllTickets] = useState([]);
	const [allStatus, setAllStatus] = useState([]);
	const [filteredTickets, setFilteredTickets] = useState([]);
	const [statusFilter, setStatusFilter] = useState("");

	const userName = localStorage.getItem("user_name");
	const userId = localStorage.getItem("user_id");
	const role = localStorage.getItem("user_role");
	const token = localStorage.getItem("api_token");

	useEffect(() => {
		(async function getTickets() {
			await axios.get(`http://localhost:8080/tickets`, { headers: { 'authorization': token } })
				.then((success) => {
					let tickets = success.data.data;
					if (role !== 'admin') {
						tickets = tickets.filter(item => item.created_by === userName);
					}
					setAllTickets(tickets);
				}).catch(err => {
					console.error(err)
					window.alert(err.response.data.error)
				})

			await axios.get(`http://localhost:8080/status`, { headers: { 'authorization': token } })
				.then((success) => {
					const status = success.data.data;
					setAllStatus(status)
				}).catch(err => {
					console.error(err)
					window.alert(err.response.data.error)
				})
		})()
	}, [token, userId, role, userName]);

	useEffect(() => {
		if (statusFilter === 'todos') {
			setFilteredTickets(allTickets);
		} else {
			let filtered = allTickets.filter(item => item.status === statusFilter);
			setFilteredTickets(filtered)
		}
	}, [statusFilter, allTickets])

	async function deleteTicket(id) {
		await axios.delete(`http://localhost:8080/tickets/${id}`, { headers: { 'authorization': token } })
			.then(() => {
				const newList = allTickets.filter(item => item.id !== id);
				setAllTickets(newList);
			}).catch(err => {
				console.error(err)
				window.alert(err.response.data.error)
			})
	}

	return (
		<ContentContainer>
			<Filter array={allStatus} setArray={setStatusFilter} />
			<ul>
				{
					filteredTickets.map(item => {
						return (
							<TicketItem key={item.id} title={item.title} description={item.description} user={item.created_by} project={item.project_id} category={item.category} status={item.status} datetime={item.created_at} onDelete={() => deleteTicket(item.id)} />
						)
					})
				}
			</ul>
		</ContentContainer>
	);
}

export default Tickets