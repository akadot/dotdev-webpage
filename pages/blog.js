import Head from 'next/head';
import PostLeft from '../components/Posts/left'
import PostRight from '../components/Posts/right'


export default function Home() {
	return (
		<>
			<Head>
				<title>dot - Blog</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<h1>Blog</h1>
			<PostLeft></PostLeft>
			<PostRight></PostRight>

		</>
	);
}
