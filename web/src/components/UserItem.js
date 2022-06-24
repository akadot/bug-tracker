import styled from "styled-components";

import { HiTrash, HiPencilAlt } from 'react-icons/hi';

const UserContainer = styled.section`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
border-radius: 5px;
padding: 10px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
margin: 10px 0;
height: max-content;

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


const UserItem = ({ name, email, role, onEdit, onDelete }) => {
	return (
		<UserContainer>
			<section>
				<h2>Nome</h2>
				<p>{name}</p>
			</section>
			<section>
				<h2>Email</h2>
				<p>{email}</p>
			</section>
			<section>
				<h2>Cargo</h2>
				<p>{role}</p>
			</section>

			<button onClick={onEdit} id='edit'><HiPencilAlt /></button>
			<button onClick={onDelete} id='delete'><HiTrash /></button>
		</UserContainer>
	);
}

export default UserItem