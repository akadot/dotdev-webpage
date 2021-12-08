import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
	padding: 0;
	margin: 0;
	outline: 0;
	box-sizing: border-box;
}

html,body{
	height: 100vh;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

a, button, li{
	text-decoration: none;
}
`;

export default GlobalStyle;