import React, { useState } from 'react';
import Grid from '../../../Grid';
import { CardTitle, SortIconUpDown } from './styles';

const { Col } = Grid;

const stylesCol = {
	display: 'flex',
	flex: 1,
	alignItems: 'center',
	padding: '0 4px',
};

const Field = ({ field = {}, showCode = true, sort = {}, setSort = () => {} }) => {
	const [show, setShow] = useState(false);

	const renderHeaderText = () => {
		if (showCode && field.name) {
			return field.name;
		}
		return field.label;
	};

	const handleOnchange = (item) => {
		const fieldType = item?.sorting.name;
		setSort((oldSort) => {
			if (Object?.keys(oldSort)?.[0] === fieldType) {
				setShow(!show);
			} else {
				setShow(true);
			}
			return {
				[fieldType]: sort?.[fieldType] === 'Desc' ? 'Asc' : 'Desc',
			};
		});
	};

	const sortingKey = field.sorting ? Object?.keys(field.sorting)?.[0] : null;

	const showSortingType =
		field.sorting &&
		field.sorting[sortingKey] &&
		field.sorting[sortingKey] === Object?.keys(sort)?.[0];

	return (
		<Col
			xs={field.span}
			sm={field.span}
			md={field.span}
			lg={field.span}
			style={field.hasStyle ? field.styles : stylesCol}
			key={field?.key || field?.label}
		>
			<CardTitle className="card-list-header-title">
				{field.checkbox && <div style={{ paddingRight: '5px' }} />}
				{field.tooltip ? <></> : renderHeaderText()}
				{field.sorting && (
					<SortIconUpDown
						sortType={showSortingType && show}
						onClick={() => handleOnchange(field)}
					/>
				)}
			</CardTitle>
		</Col>
	);
};
export default Field;
