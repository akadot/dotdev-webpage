import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
:root{
	--purple: #757FF8;
	--green: #05f69e;
	--yellow: #ffdd00;
	--blue: #58D1EB;
	--red: #FF5277;
	--bg: #010313;
}

*::-webkit-scrollbar{
	width: 10px;
}

*::-webkit-scrollbar-track{
	background: transparent;
}

*::-webkit-scrollbar-thumb{
	background: #e1e1e1;
	
}

*{
	padding: 0;
	margin: 0;
	outline: 0;
	box-sizing: border-box;
	scrollbar-width: thin;
	scrollbar-color: #e1e1e1 transparent;
}

html{
	scroll-behavior: smooth;
}

body{
	background-color: var(--bg);
	color: #fff;
	height: 100%;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

a, button, li{
	text-decoration: none;
}
`;

export default GlobalStyle;