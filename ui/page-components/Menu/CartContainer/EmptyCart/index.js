import { Title, EmptyImage } from './styles';
import Cooker from '../../../../assets/cooker.svg';

const EmptyCart = ({ title, height, width }) => {
	return (
		<>
			{title && <Title>{title}</Title>}
			<EmptyImage style={{ height: `${height}`, width: `${width}` }}>
				<Cooker />
			</EmptyImage>
		</>
	);
};

export default EmptyCart;
