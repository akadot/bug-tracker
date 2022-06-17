import styled from 'styled-components';

const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding: 20px;
height: 60%;
width: 100%;
`;

const Input = styled.input`
padding: 5px;
margin: 10px 0;
width: 100%;
`;

const Button = styled.button`
background-color: #FF416C;
padding: 10px 20px;
width: 100%;
color: #fff;
font-weight: 600;
border: none;
cursor: pointer;
`;


const Form = () => {
	return (
		<FormContainer>
			<Input type='text' placeholder='Seu email' />
			<Input type='password' placeholder='Sua senha' />
			<Button>Login</Button>
		</FormContainer>
	);
}

export default Form;