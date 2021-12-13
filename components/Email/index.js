import styled from 'styled-components';

const EmailContainer = styled.div`
	color:  #757FF8;
	font-weight: 600;
	font-size:1.2rem;
	position: relative;
	writing-mode: vertical-rl;
	text-orientation: mixed;
	display:block;
	position:fixed;
	top:0;
	right:0;

	&::before{
		content: "";
		display:block;
		margin-bottom: 100px;
		width: 3px;
		height: 150px;
		background-color: #757FF8;
		/* left:10px;
		top:-30px; */
	}

	&::after{
		content: "";
		display:block;
		margin: auto 0;
		width: 3px;
		height: 150px;
		background-color: #757FF8;
		/* left:10px;
		bottom:-160px; */
	}
`;

export default function IconBar() {
	return (
		<EmailContainer>
			<p>muriloholiveira@hotmail.com</p>
		</EmailContainer>
	);
}