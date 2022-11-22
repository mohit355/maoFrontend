import React from 'react';
import Grid from '../../Grid';
import Field from './Field';
import { Container } from './styles';

const { Row } = Grid;

const stylesRow = {
	paddingBottom: 0,
	borderBottom: 'none',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'flex-start',
	margin: 0,
};

const CardHeader = ({ fields = [], showCode = false, sort = {}, setSort = () => {} }) => {
	return (
		<Container className="card-list-header-root">
			<Row style={stylesRow} className="card-list-header-root-row">
				{fields?.map((field) => {
					if (field.show === false) {
						return null;
					}

					return (
						<Field field={field} showCode={showCode} sort={sort} setSort={setSort} />
					);
				})}
			</Row>
		</Container>
	);
};

export default CardHeader;
