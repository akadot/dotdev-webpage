import styled from "styled-components";
import Menu from '../Menu'
import Social from '../Social'
import Email from '../Email'
import Image from 'next/image'

const PageContainer = styled.section`
	display: flex;
	flex-direction: column;
	/* background-image: linear-gradient(#757FF80a, #0F1921); */

	& main{
		padding: 150px 250px; 
		
		& h1{
			font-size: 2.4em;
		}
	}

	@media (max-width: 1100px){
		padding: 0 150px; 
	}
`;

const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	padding: 10px 0 0 80px;
`;

export default function Layout({ children }) {
	return (
		<PageContainer>
			<Image
				alt='Background Pattern'
				src='/bg.png'
				layout='fill'
				objectFit='cover'
				quality={100}
				className='background'
			/>
			<HeaderContainer className="header">
				<Menu className="menu" />
			</HeaderContainer>
			<Social className="social" />
			<main className="content" >{children}</main>
			<Email className="email" />

		</PageContainer>
	);
}