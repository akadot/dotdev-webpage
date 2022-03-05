import styled from 'styled-components';

const EmailContainer = styled.section`
	position: fixed;
	bottom: 0;
	right: 50px;
	left: auto;

	&::before{
		content: "";
		display:block;
		width: 2px;
		height: 20px;
		background-color: #757FF8;
		margin: 0px auto 10px auto;
		
	}

	&::after{
		content: "";
		display:block;
		width: 2px;
		height: 125px;
		background-color: #757FF8;
		margin: 10px auto 0px auto;
	}

`;

const Email = styled.section`
	position:relative;
	display: flex;
	flex-direction: column;
	align-items: center;

	& a{
		color: #757FF8;
		font-weight: 600;
		font-size:1em;
		writing-mode: vertical-rl;
		text-decoration: none;
		cursor:pointer;
	}

	& a{
		transition: all .2s ease-in-out;
	}

	& a:hover{
		transform: scale(1.03);
		color:#fefefe;
	}
`;

export default function IconBar() {
	return (
		<EmailContainer>
			<Email>
				<a href="mailto:muriloholiveira@hotmail.com">
					muriloholiveira@hotmail.com
				</a>
			</Email>
		</EmailContainer>
	);
}