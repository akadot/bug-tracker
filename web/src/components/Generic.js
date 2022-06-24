import styled from "styled-components";

import { HiTrash, HiPencilAlt } from 'react-icons/hi';

const GenericContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: max-content;
border-radius: 5px;
height: max-content;
padding: 10px;
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
  white-space: wrap;
  overflow: hidden;
	width: 200px;
	height: 50px;
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

& #buttons{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
}

& #edit{
	background-color: #00BFFF;
}
& #delete{
	background-color: #FF3333;
}

`;


const GenericItem = ({ title, description, onEdit, onDelete }) => {
	return (
		<GenericContainer>
			<section>
				<h2>{title}</h2>
				<p>{description}</p>
			</section>
			<section id="buttons">
				<button onClick={onEdit} id='edit'><HiPencilAlt /></button>
				<button onClick={onDelete} id='delete'><HiTrash /></button>
			</section>
		</GenericContainer>
	);
}

export default GenericItem