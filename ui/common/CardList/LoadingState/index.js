import React from 'react';
import Skeleton from '../../Skeleton';
import Grid from '../../Grid';
import { Row } from './styles';

const { Col } = Grid;

const LoadingState = ({ fields = [], isLast = false }) => {
	const stylesCol = { padding: '0px 4px' };

	return (
		<Row
			style={{ borderBottom: isLast ? 'none' : '1px solid #e0e0e0' }}
			className="card-body-row"
		>
			{fields.map((singleItem) => {
				if (singleItem?.show === false) {
					return null;
				}

				return (
					<Col xs={6} sm={6} md={singleItem.span} lg={singleItem.span} style={stylesCol}>
						<Skeleton width="100%" height="20px" />
					</Col>
				);
			})}
		</Row>
	);
};

export default LoadingState;
