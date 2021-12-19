import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
:root{
	--purple: #757FF8;
	--green: #05f69e;
	--yellow: #ffdd00;
	--blue: #58D1EB;
	--red: #FF5277;
	--bg: #757FF8;
}

*{
	padding: 0;
	margin: 0;
	outline: 0;
	box-sizing: inherit;
}

body{
	background-color: #0F1921;
	color: #fff;
	height: 100%;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

a, button, li{
	text-decoration: none;
}

.background{
	z-index: -1;
}
`;

export default GlobalStyle;