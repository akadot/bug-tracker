import styled from 'styled-components';


const FilterContainer = styled.section`
/* position: fixed; */
background-color: #fff;
width: 100%;
padding: 5px;
/* 
& section{
	display: flex;
	flex-direction: row;
	width: 100%;
} */

& select{
	padding: 10px;
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
}
`;

const Filter = ({ array, setArray }) => {
	return (
		<FilterContainer>
			<section>
				<label htmlFor="status">Status</label>
				<select id='status' type='selector' onChange={(e) => setArray(e.target.value)}>
					<option value='todos' defaultChecked='true' selected>Todos</option>
					{array.map((item) => {
						return (
							<option key={item.title} value={item.title}>{item.title}</option>
						)
					})}
				</select>
			</section>

		</FilterContainer>
	)
}

export default Filter;