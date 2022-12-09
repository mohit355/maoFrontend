import React from 'react';
import { FlexColumn, FlexRow } from '../../../common/styles';
import VegIcon from '../../../assets/veg-icon.svg';
import NonVegIcon from '../../../assets/non-veg-icon.svg';

const FoodDetails = ({ selectedFoodItem }) => {
	return (
		<div>
			{Object.values(selectedFoodItem).map((values) => {
				return (
					<>
						{values?.half >= 1 && (
							<FlexRow
								style={{
									marginTop: '20px',
									width: '100%',
									marginLeft: 'auto',
									marginRight: 'auto',
								}}
							>
								<FlexColumn style={{ width: '70%' }}>
									<FlexRow>
										{values?.productType === 'veg' ? (
											<VegIcon style={{ marginTop: 'auto', marginRight: '8px' }} />
										) : (
											<NonVegIcon style={{ marginTop: 'auto', marginRight: '8px' }} />
										)}
										{values?.foodName} (Half)
									</FlexRow>
								</FlexColumn>
								<FlexColumn style={{ width: '10%' }}>X {values?.half}</FlexColumn>
								<FlexColumn style={{ width: '25%', textAlign: 'right' }}>
									₹ {values?.halfPrice*values?.half}
								</FlexColumn>
							</FlexRow>
						)}
						{values?.full >= 1 && (
							<FlexRow
								style={{
									marginTop: '20px',
									width: '100%',
									marginLeft: 'auto',
									marginRight: 'auto',
								}}
							>
								<FlexColumn style={{ width: '70%' }}>
									<FlexRow>
										{values?.productType === 'veg' ? (
											<VegIcon style={{ marginTop: 'auto', marginRight: '8px' }} />
										) : (
											<NonVegIcon style={{ marginTop: 'auto', marginRight: '8px' }} />
										)}
										{values?.foodName} {values?.halfPrice && '(Full)'}
									</FlexRow>
								</FlexColumn>
								<FlexColumn style={{ width: '10%' }}>X {values?.full}</FlexColumn>
								<FlexColumn style={{ width: '25%', textAlign: 'right' }}>
									{' '}
									₹ {values?.fullPrice*values?.full}
								</FlexColumn>
							</FlexRow>
						)}
					</>
				);
			})}
		</div>
	);
};

export default FoodDetails;
