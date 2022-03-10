import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



const ProjectItem = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	height: 200px;
	width: 250px;
	padding: 30px 20px;
	border: 3px solid;
	border-color: ${props => props.color};
	border-radius: 10px;
	word-break: break-all;
	background-color: var(--bg);
	font-family: monospace;

	& h1{
		font-size: 1.5em;
	}

	& p{
		color: #c4c4c4;
		font-weight: 500;
		font-size: 1em;
		word-break: break-all;
	}

	& .project-bottom{
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		font-weight: 600;
		font-size: 1em;

		& a svg{
			fill: #000;
		}
	}
`;

const Project = (props) => {
	return (
		<ProjectItem color={props.color}>
			<h1><FontAwesomeIcon icon={faGithub} />{props.name}</h1>
			<p>{props.description}</p>
			<section className='project-bottom'>
				<span>{props.language}</span>
				<Link href={props.url} ><a target="_blank"><FontAwesomeIcon icon={faExternalLinkAlt} /></a></Link>
			</section>
		</ProjectItem>
	)

}

export default Project;