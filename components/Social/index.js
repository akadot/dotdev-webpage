import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faDev, faMedium, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';


const SocialContainer = styled.section`
	position: fixed;
	bottom: 0;
	left: 50px;
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
					<FontAwesomeIcon icon={faGithub} size="lg" color="#757FF8" /*var(--blue)*/ />
				</a>

				<a href="https://www.linkedin.com/in/murilo-o" target="_blank">
					<FontAwesomeIcon icon={faLinkedinIn} size="lg" color="#757FF8" />
				</a>

				<a href="https://dev.to/akadot_" target="_blank">
					<FontAwesomeIcon icon={faDev} size="lg" color="#757FF8" />
				</a>

				<a href="https://medium.com/@akadot_" target="_blank">
					<FontAwesomeIcon icon={faMedium} size="lg" color="#757FF8" />
				</a>

				<a href="https://www.twitch.tv/dotdev_" target="_blank">
					<FontAwesomeIcon icon={faTwitch} size="lg" color="#757FF8" />
				</a>

				<a href="https://twitter.com/akadot_" target="_blank">
					<FontAwesomeIcon icon={faTwitter} size="lg" color="#757FF8" />
				</a>
			</Icons>
		</SocialContainer>
	);
}