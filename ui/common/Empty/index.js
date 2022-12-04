import { Container, Title, EmptyImage } from './styles';
import NoResult from './no-result.svg';

const Empty = () => {
	return (
		<Container>
			<EmptyImage>
				<NoResult />
			</EmptyImage>
			<Title>Ups!... no results found</Title>
		</Container>
	);
};

export default Empty;
