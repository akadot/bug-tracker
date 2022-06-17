import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
	margin: 0;
	padding: 0;
	outline: 0;
	box-sizing: border-box;
}

html, body{
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body{
	height: 100vh;
}

 #root{
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #FF416C;
	background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
	background: linear-gradient(to right, #FF4B2B, #FF416C); 
}
`;

export default GlobalStyle;