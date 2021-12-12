import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const SocialContainer = styled.div`
	height:100%;
	display: flex;
	flex-direction: column;
	align-itens: center;
	justify-content: space-between;
	
	
	&::before{

	}

	&::after{
		
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