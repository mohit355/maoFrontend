import { Title, EmptyImage } from './styles';
import Cooker from '../../../../assets/cooker.svg';

const EmptyCart = () => {
	return (
		<>
			<Title>Cart Empty</Title>
			<EmptyImage>
				<Cooker />
			</EmptyImage>
		</>
	);
};

export default EmptyCart;
