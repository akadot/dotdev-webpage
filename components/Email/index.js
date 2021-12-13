import styled from 'styled-components';

const EmailContainer = styled.div`
	color:  #757FF8;
	font-weight: 600;
	font-size:1.2rem;
	position: relative;
	writing-mode: vertical-rl;
	align-self: flex-end;

	&::before{
		content: "";
		position: absolute;
		width: 3px;
		height: 20px;
		background-color: #757FF8;
		
	}

	&::after{
		content: "";
		position: absolute;
		width: 3px;
		height: 150px;
		background-color: #757FF8;
		
	}
`;

export default function IconBar() {
	return (
		<EmailContainer>
			<p>muriloholiveira@hotmail.com</p>
		</EmailContainer>
	);
}