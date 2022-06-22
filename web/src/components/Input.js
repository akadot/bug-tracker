import styled from 'styled-components';

const Input = styled.input`
padding: 15px 10px;
border: none;
width: 100%;
border-radius: 5px;
background-color: #e5e8ed;
color: #171c28;
font-weight: 600;

	&::placeholder{
		color: #7a808e;
		opacity: .7;
	}
`;

export default Input;