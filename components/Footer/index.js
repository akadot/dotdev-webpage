import styled from "styled-components";

const FooterComponent = styled.footer`
background-image: url('/down.png');
background-repeat: no-repeat;
background-size: cover;
background-position: center;
height: 10em;

display: flex;
align-items: center;
justify-content: center;
`;

export default function Footer() {
	return (
		<FooterComponent>
			<p>Made with ☕🌻🎧 by dot_</p>
		</FooterComponent>
	);
}