import Head from 'next/head';
import Project from '../components/Projects';

export default function Home() {
	return (
		<>
			<Head>
				<title>dot - Projects</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<h1>Projects</h1>
			<Project></Project>
		</>
	);
}
