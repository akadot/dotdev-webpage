import styled from 'styled-components';
import Head from 'next/head';
import Project from '../components/Projects';

const colors = ["#757FF8", "#05f69e", "#ffdd00", "#58D1EB", "#FF5277"];

const ProjectContainer = styled.ul`
	display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: auto;
  grid-area: auto;
  grid-gap: 70px;
  margin-top: 50px;
`;

export async function getStaticProps(context) {

	const githubData = await fetch("https://api.github.com/users/akadot/repos").then((serverResponse) => {
		if (serverResponse.ok) {
			return serverResponse.json();
		}
	}).then((objectResponse) => {
		return objectResponse;
	})

	return {
		props: {
			githubData
		}
	}
}

export default function Home(props) {
	const { githubData } = props;

	return (
		<>
			<Head>
				<title>dot - Projects</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<h1>Projects</h1>
			<ProjectContainer>
				{
					githubData.map((repo) => {
						return (
							<Project key={repo.name} name={repo.name} description={repo.description} language={repo.language} url={repo.html_url} color={colors[Math.floor(Math.random() * colors.length)]}></Project>
						);
					})
				}
			</ProjectContainer>
		</>
	);
}
