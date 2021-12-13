import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const SocialContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-itens: center;
	position:relative;
	gap:10px;
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
		<SocialContainer>
			<FontAwesomeIcon icon={['fab', 'github']} size="2x" color="#757FF8" />
			<FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" color="#757FF8" />
			<FontAwesomeIcon icon={['fab', 'dev']} size="2x" color="#757FF8" />
			<FontAwesomeIcon icon={['fab', 'medium']} size="2x" color="#757FF8" />
			<FontAwesomeIcon icon={['fab', 'twitch']} size="2x" color="#757FF8" />
			<FontAwesomeIcon icon={['fab', 'twitter']} size="2x" color="#757FF8" />
		</SocialContainer>
	);
}