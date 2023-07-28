import { Container, Title, EmptyImage } from './styles';
import NoResult from './no-result.svg';

const Empty = ({ message }) => {
	return (
		<Container>
			<EmptyImage>
				<NoResult />
			</EmptyImage>
			<Title>{message}</Title>
		</Container>
	);
};

export default Empty;
