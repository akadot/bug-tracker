import styled from "styled-components";

const ContentContainer = styled.section`
width: 50em;
height: 100%;
padding: 0 10px;
margin-left: 20px;
display: flex;
flex-direction: column;
overflow-y: scroll;

& ul{
	gap: 15px;
	flex-wrap: wrap;
	width: 100%;
	height: max-content;
}

`;

export default ContentContainer