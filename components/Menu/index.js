import styled from "styled-components";
import Link from 'next/link'

const MenuContainer = styled.nav`
width: 60%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

const MenuItem = styled.a`
	padding: 15px 10px;
	position: relative;
	font-size: 1.5rem;
	font-weight: 500;
	z-index: 1;
	transition: all 0.2s ease-in-out;
	cursor: pointer;

	&::before{
		content: "";
		position: absolute;
		width: 5px;
		height: 60%;
		margin-right: 50px;
		background-color: ${props => props.color};
		transform: skew(-20deg);
		top: 22%;
		left: -5%;
		z-index: -1;
		transition: all 0.2s ease-in-out;
	}

	&:hover{
		color: #0F1921;
	}

	&:hover::before{
		width: 110%;
	}
`;

/**
 * Background:#0F1921
 * 
 * Purple:
 * #757FF8
 * #8c25b2
 * #571fdb
 * #c836ff
 * #a333ef
 * #9d65ff
 */

const Menu = () => {
	return (
		<MenuContainer>
			<Link href="/"><MenuItem color={"#757FF8"}>home</MenuItem></Link>
			<Link href="/about"><MenuItem color={"#05f69e"}>about</MenuItem></Link>
			<Link href="/blog"><MenuItem color={"#ffdd00"}>blog</MenuItem></Link >
			<Link href="/projects"><MenuItem color={"#58D1EB"}>projects</MenuItem></Link >
			<Link href="/contact"><MenuItem color={"#FF5277"}>contact</MenuItem></Link >
		</MenuContainer >
	);
}

export default Menu