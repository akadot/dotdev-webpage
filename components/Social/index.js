import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const SocialContainer = styled.div`
	align-self: flex-end;
	display: block;
	bottom: 160px;
	left: 100px;
	position: relative;

	@media (max-width: 1100px){
		display: none;
	}
`;

const Icons = styled.div`
	display: flex;
	flex-direction: column;
	align-itens: center;
	gap:20px;
	position:relative;

	&::before{
		content: "";
		position: absolute;
		width: 2px;
		height: 20px;
		background-color: #757FF8;
		top:-30px;
		left: 15px;
	}

	&::after{
		content: "";
		position: absolute;
		width: 2px;
		height: 150px;
		background-color: #757FF8;
		bottom:-160px;
		left: 15px;
	}

	& svg{
		cursor:pointer;
		transition: all .2s ease-in-out;
	}

	& svg:hover{
		transform: scale(1.3) rotate(5deg);
		color: #fefefe; /*var(--blue)*/
	}

`;

export default function IconBar() {
	return (
		<SocialContainer>
			<Icons>
				<FontAwesomeIcon icon={['fab', 'github']} size="2x" color="#757FF8" /*var(--blue)*/ />
				<FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" color="#757FF8" />
				<FontAwesomeIcon icon={['fab', 'dev']} size="2x" color="#757FF8" />
				<FontAwesomeIcon icon={['fab', 'medium']} size="2x" color="#757FF8" />
				<FontAwesomeIcon icon={['fab', 'twitch']} size="2x" color="#757FF8" />
				<FontAwesomeIcon icon={['fab', 'twitter']} size="2x" color="#757FF8" />
			</Icons>
		</SocialContainer>
	);
}