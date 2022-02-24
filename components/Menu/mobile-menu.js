import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

const MobileContainer = styled.nav``;

export default function MobileMenu() {
	return (
		<MobileContainer>
			<ul>
				<FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon>
			</ul>
		</MobileContainer>
	);
}