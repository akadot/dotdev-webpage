import styled from "styled-components";
import Menu from '../Menu'
import Social from '../Social'
import Email from '../Email'
import Image from 'next/image'

const PageContainer = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 100px 1fr;
	gap:0px 0px;
	grid-auto-flow: row;
	grid-template-areas:
		"header header header"
		"social content email";
	height: 100vh;
	text-align:center;
	align-items: flex-start;

	&.logo{
		grid-area: logo;
	}

	&.menu{
		grid-area: menu;
	}

	&.social{
		grid-area: social;
	}

	&.content{
		grid-area: content;
	}

	&.email{
		grid-area: email;
	}

`;

const HeaderContainer = styled.header`
	width:100%;
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	grid-template-rows: 100px;
	gap:0px 0px;
	grid-auto-flow: row;
	grid-template-areas:
		"logo menu .";
	grid-area: header;
	align-items: center;
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
				<p className="logo">Logo</p>
				<Menu className="menu" />
			</HeaderContainer>
			<Social className="social" />
			<main className="content" >{children}</main>
			<Email className="email" />

		</PageContainer>
	);
}