import styled from "styled-components";
import Menu from '../../components/Menu'
import Social from '../../components/Social'
import Email from '../../components/Email'
import Footer from '../../components/Footer'

const PageContainer = styled.section`
	display: flex;
	flex-direction: column;
	background-image: url('./top.png');
	background-repeat: no-repeat;
	background-size: 100%;

	& main{
		padding: 150px 200px; 
	}
`;



const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 20px;
`;

export default function Layout({ children }) {
	return (
		<PageContainer id="init">
			<HeaderContainer className="header">
				<Menu className="menu" />
			</HeaderContainer>
			<Social className="social" />
			<main className="content" >{children}</main>
			<Email className="email" />
			<Footer />
		</PageContainer>
	);
}