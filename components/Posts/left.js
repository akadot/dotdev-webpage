import styled from 'styled-components';

const PostContainer = styled.section`
border-radius: 5px;
border: 2px solid var(--purple);
position: relative;
width: 450px;
height: 150px;
display: flex;
align-items: flex-start;
justify-content: flex-end;

margin: 50px 0;
`;

const PostImage = styled.img`
position: absolute;
left: 20px;
top: -15px;
width: 200px;
height: 180px;
object-fit: cover;
border-radius: 5px;
border: 2px solid var(--purple);
`;

const PostInfo = styled.section`
width: 210px;
text-align: left;
word-break: break-all;
padding: 10px 5px; 
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
height: 100%;

& p{
	color: #c1c1c1;
}

& span{
	color: var(--purple);
}
`;

const Post = () => {
	return (
		<PostContainer>
			<PostImage src='./test.jpg' />
			<PostInfo>
				<h3>Post Title</h3>
				<p>lalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalal</p>
				<span>#tags</span>
			</PostInfo>
		</PostContainer>
	)
}

export default Post;