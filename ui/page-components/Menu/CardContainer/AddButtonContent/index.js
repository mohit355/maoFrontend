import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { PopContainer, AddButtonTitle, Line } from './styles';
import { Column, Count } from '../styles';
import { FlexColumn, FlexRow } from '../../../../common/styles';
import VegIcon from '../../../../assets/veg-icon.svg';
import NonVegIcon from '../../../../assets/non-veg-icon.svg';

const AddButtonContent = ({ item, selectedFoodItem, handlePlus, handleMinus }) => {
	console.log('selectedFoodItem', selectedFoodItem);
	return (
		<PopContainer>
			<Column>
				<AddButtonTitle>
					<FlexRow>
						{item?.productType === 'veg' ? (
							<VegIcon style={{ marginTop: 'auto', marginRight: '8px' }} />
						) : (
							<NonVegIcon style={{ marginTop: 'auto', marginRight: '8px' }} />
						)}
						{item?.productName}
					</FlexRow>
				</AddButtonTitle>
				<Line />
				<FlexRow>
					<FlexColumn style={{ width: '25%' }}>
						<span style={{ fontWeight: '600' }}>Half</span>
					</FlexColumn>
					<FlexColumn style={{ width: '50%' }}>
						<ButtonGroup style={{ marginLeft: '20px' }}>
							<Button
								onClick={() => {
									handleMinus(item, 'H');
								}}
								className="minusButton"
								disabled={!selectedFoodItem[item.id]?.half}
							>
								{' '}
								<RemoveIcon fontSize="small" />
							</Button>

							<Button
								onClick={() => {
									handlePlus(item, 'H');
								}}
								className="plusButton"
							>
								{' '}
								<AddIcon fontSize="small" />
							</Button>
						</ButtonGroup>
					</FlexColumn>
					<FlexColumn style={{ width: '25%' }}>
						{selectedFoodItem[item.id] && (
							<Count className="modal_count">{selectedFoodItem[item.id]?.half}</Count>
						)}
					</FlexColumn>
				</FlexRow>
				<FlexRow style={{ marginTop: '20px' }}>
					<FlexColumn style={{ width: '25%' }}>
						<span style={{ fontWeight: '600' }}>Full</span>
					</FlexColumn>
					<FlexColumn style={{ width: '50%' }}>
						<ButtonGroup style={{ marginLeft: '20px' }}>
							<Button
								onClick={() => {
									handleMinus(item, 'F');
								}}
								className="minusButton"
								disabled={!selectedFoodItem[item.id]?.full}
							>
								{' '}
								<RemoveIcon fontSize="small" />
							</Button>

							<Button
								onClick={() => {
									handlePlus(item, 'F');
								}}
								className="plusButton"
							>
								{' '}
								<AddIcon fontSize="small" />
							</Button>
						</ButtonGroup>
					</FlexColumn>
					<FlexColumn style={{ width: '25%' }}>
						{selectedFoodItem[item.id] && (
							<Count className="modal_count">{selectedFoodItem[item.id]?.full}</Count>
						)}
					</FlexColumn>
				</FlexRow>
			</Column>
		</PopContainer>
	);
};

export default AddButtonContent;
