import styled from 'styled-components';

const EmailContainer = styled.div`
	color:  #757FF8;
	font-weight: 600;
	font-size:1.2rem;
	writing-mode: vertical-rl;
	align-self: flex-end;
	display: block;
	position:relative;
	right:70px;
	bottom:160px;
	

	@media (max-width: 1100px){
		display: none;
	}

	&::before{
		content: "";
		position: absolute;
		width: 2px;
		height: 20px;
		background-color: #757FF8;
		right:15px;
		top:-30px;
	}

	&::after{
		content: "";
		position: absolute;
		width: 2px;
		height: 150px;
		background-color: #757FF8;
		right:15px;
		bottom:-160px;
	}

	& a{
		text-decoration: none;
		color: inherit;
		cursor:pointer;
		
	}

	& a p{
		transition: all .2s ease-in-out;
	}

	& a p:hover{
		transform: scale(1.03);
		color:#fefefe;
	}
`;

export default function IconBar() {
	return (
		<EmailContainer>
			<a href="mailto:muriloholiveira@hotmail.com">
				<p> muriloholiveira@hotmail.com </p>
			</a>
		</EmailContainer>
	);
}