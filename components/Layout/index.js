import styled from "styled-components";

const PageContainer = styled.div`
	padding: 1% 3%;
	height: 100%;
`;

const HeaderContainer = styled.header`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	align-items:center;
	justify-items:center;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 100%;
`;

export { PageContainer, HeaderContainer, ContentContainer }