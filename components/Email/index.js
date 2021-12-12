import styled from 'styled-components';

const EmailContainer = styled.div`
	transform: rotateZ(90deg);
	
	&::before{

	}

	&::after{
		
	}
`;

export default function IconBar() {
	return (
		<EmailContainer>
			<p>muriloholiveira@hotmail.com</p>
		</EmailContainer>
	);
}