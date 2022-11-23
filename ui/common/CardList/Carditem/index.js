import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from 'next/link';
import EditIcon from '@material-ui/icons/Edit';
import getValue from '../../utils/getValue';
import Skeleton from '../../Skeleton';
import Grid from '../../Grid';
import { TitleBlack, Row, Label } from './styles';
import VegIcon from '../../../assets/veg-icon.svg';
import NonVegIcon from '../../../assets/non-veg-icon.svg';

const { Col } = Grid;

const Item = ({
	item,
	fields,
	loading = false,
	disabled = false,
	handleDeleteProduct = () => {},
	handleDeleteDiscount = () => {},
}) => {
	const stylesCol = { padding: '0px 4px' };
	const newFunctions = {
		handleType: () => (
			<>
				{item?.productType === 'veg' ? (
					<VegIcon style={{ fontSize: '20px' }} />
				) : (
					<NonVegIcon style={{ fontSize: '20px' }} />
				)}
			</>
		),
		handleDelete: () => (
			<span onClick={() => handleDeleteProduct(item.id)}>
				<DeleteIcon />
			</span>
		),
		handleDeleteDiscount: () => (
			<span onClick={() => handleDeleteDiscount(item.id)}>
				<DeleteIcon />
			</span>
		),
		handleEdit: () => (
			<Link href={`/admin/products/edit/${item.id}`}>
				<EditIcon />
			</Link>
		),
		handleEditDiscount: () => (
			<Link href={`/admin/discounts/edit/${item.id}`}>
				<EditIcon />
			</Link>
		),
	};
	return (
		<Row
			style={{
				opacity: disabled ? '0.4' : '1',
				cursor: disabled ? 'not-allowed' : 'pointer',
			}}
			tabIndex="0"
			className={`${item.expired ? 'expired' : ''} card-body-row`}
		>
			{fields.map((singleItem) => {
				if (singleItem?.show === false) {
					return null;
				}

				return (
					<Col
						xs={6}
						sm={6}
						md={singleItem.span}
						lg={singleItem.span}
						style={singleItem.hasStyle ? singleItem.styles : stylesCol}
						key={singleItem?.key}
						className="card-body-col"
					>
						{loading ? <Skeleton width="100%" height="20px" /> : null}
						<Label className="card-list-label-mobile">{singleItem.label}</Label>
						{singleItem.render && !loading ? singleItem.render(item) : null}
						{!loading && !singleItem.render ? (
							<TitleBlack className="card-list-item-value">
								{getValue(item, singleItem, false, newFunctions)
									? getValue(item, singleItem, false, newFunctions)
									: '__'}
							</TitleBlack>
						) : null}
					</Col>
				);
			})}
		</Row>
	);
};

export default Item;
