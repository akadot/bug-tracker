import styled from "styled-components";

import { HiTrash, HiPencilAlt } from 'react-icons/hi';

const TicketContainer = styled.section`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
border-radius: 5px;
padding: 10px;
height: fit-content;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
margin: 10px 0;

& section{
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

& h1{
	font-size: .8em;
	color:  #FF416C;
	text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
	width: 100px;
}

& h2{
	font-size: .8em;
	color:  #FF416C;
}

& p{
	text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
	width: 100px;
	color: #696969;
	font-size: .8em;
}

& button{
	border: none;
	border-radius: 5px;
	padding: 10px;
	margin: 1px 0;
	color: #fff;
	cursor: pointer;
}

& #edit{
	background-color: #00BFFF;
}
& #delete{
	background-color: #FF3333;
}

`;


const TicketItem = ({ title, description, user, project, category, status, datetime, onEdit, onDelete }) => {
	return (
		<TicketContainer>
			<section>
				<h1>{title}</h1>
				<p>{description}</p>
			</section>
			<section>
				<h2>Usuário</h2>
				<p>{user}</p>
			</section>
			<section>
				<h2>Projeto</h2>
				<p>{project}</p>
			</section>
			<section>
				<h2>Categoria</h2>
				<p>{category}</p>
			</section>
			<section>
				<h2>Status</h2>
				<p>{status}</p>
			</section>
			<section>
				<h2>Data/Hora</h2>
				<p>{datetime}</p>
			</section>
			<button onClick={onEdit} id='edit'><HiPencilAlt /></button>
			<button onClick={onDelete} id='delete'><HiTrash /></button>
		</TicketContainer>
	);
}

export default TicketItem