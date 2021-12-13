import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const SocialContainer = styled.div`
	display:block;
	position:fixed;
	bottom:100px;
	left:50px;
`;

const Icons = styled.div`
	height:100%;
	display: flex;
	flex-direction: column;
	align-itens: center;
	justify-content: space-between;
	position:relative;
	gap:20px;
	
	&::before{
		content: "";
		position: absolute;
		display: block;
		width: 3px;
		height: 20px;
		background-color: #757FF8;
		left:50%;
		top:-30px;
	}

	&::after{
		content: "";
		position: absolute;
		display: block;
		width: 3px;
		height: 150px;
		background-color: #757FF8;
		left:50%;
		bottom:-160px;
	}
`;

export default function IconBar() {
	return (
		<SocialContainer>
			<Icons>
				<FontAwesomeIcon icon={['fab', 'github']} size="2x" color="#757FF8" />
				<FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" color="#757FF8" />
				<FontAwesomeIcon icon={['fab', 'dev']} size="2x" color="#757FF8" />
				<FontAwesomeIcon icon={['fab', 'medium']} size="2x" color="#757FF8" />
				<FontAwesomeIcon icon={['fab', 'twitch']} size="2x" color="#757FF8" />
				<FontAwesomeIcon icon={['fab', 'twitter']} size="2x" color="#757FF8" />
			</Icons>
		</SocialContainer>
	);
}