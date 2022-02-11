import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const SocialContainer = styled.section`
	position: fixed;
	bottom: 0;
	left: 100px;
	right: auto;

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
		margin: 10px auto 0px auto;
		background-color: #757FF8;
	}

	@media (max-width: 1100px){
		display: none;
	}
`;

const Icons = styled.section`
	display: flex;
	flex-direction: column;
	gap:20px;
	position:relative;

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
				<a href="https://github.com/akadot" target="_blank">
					<FontAwesomeIcon icon={['fab', 'github']} size="2x" color="#757FF8" /*var(--blue)*/ />
				</a>

				<a href="https://www.linkedin.com/in/murilo-o" target="_blank">
					<FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" color="#757FF8" />
				</a>

				<a href="https://dev.to/akadot_" target="_blank">
					<FontAwesomeIcon icon={['fab', 'dev']} size="2x" color="#757FF8" />
				</a>

				<a href="https://medium.com/@akadot_" target="_blank">
					<FontAwesomeIcon icon={['fab', 'medium']} size="2x" color="#757FF8" />
				</a>

				<a href="https://www.twitch.tv/dotdev_" target="_blank">
					<FontAwesomeIcon icon={['fab', 'twitch']} size="2x" color="#757FF8" />
				</a>

				<a href="https://twitter.com/akadot_" target="_blank">
					<FontAwesomeIcon icon={['fab', 'twitter']} size="2x" color="#757FF8" />
				</a>
			</Icons>
		</SocialContainer>
	);
}