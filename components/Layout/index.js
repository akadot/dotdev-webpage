import styled from "styled-components";

const HeaderContainer = styled.header`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	align-items:center;
	justify-items:center;
	top: 20px;
  position: fixed;
  width: 100%;
`;

const ContentContainer = styled.div`
	padding: 100px ;
	text-align:center;
	height:100%;
`;

export { HeaderContainer, ContentContainer }