/* eslint-disable jsx-a11y/alt-text */
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import React from 'react';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {
	Container,
	CardCont,
	Card,
	Title,
	Image,
	FlexRow,
	FlexColumn,
	ItemName,
	Price,
	TypeIcon,
	OrderButton,
} from './styles';
import VegIcon from '../../../assets/veg-icon.svg';

const CardContainer = ({ itemCount, setItemCount }) => {
	return (
		<Container>
			<Title>Paneer</Title>
			<CardCont>
				<Card>
					<FlexRow>
						<Image
							alt="img"
							src="https://cogoport-testing.sgp1.digitaloceanspaces.com/235e3e0646b3dd17b8c07e7db88f6354/Butter-Paneer-1-4x5-LOW-RES-1110x1065.jpeg"
						/>
						<FlexColumn>
							<ItemName>
								Kadhai Paneer <InfoOutlinedIcon />
							</ItemName>
							<Price>₹ 251</Price>

							{itemCount <= 0 ? (
								<OrderButton
									onClick={() => {
										setItemCount(itemCount + 1);
									}}
								>
									Add
								</OrderButton>
							) : (
								<ButtonGroup>
									<Button
										onClick={() => {
											setItemCount(Math.max(itemCount - 1, 0));
										}}
									>
										{' '}
										<RemoveIcon fontSize="small" />
									</Button>
									<Button
										onClick={() => {
											setItemCount(itemCount + 1);
										}}
									>
										{' '}
										<AddIcon fontSize="small" />
									</Button>
								</ButtonGroup>
							)}
						</FlexColumn>
						<TypeIcon>
							<VegIcon />
						</TypeIcon>
					</FlexRow>
				</Card>

				<Card>
					<FlexRow>
						<Image
							alt="img"
							src="https://cogoport-testing.sgp1.digitaloceanspaces.com/235e3e0646b3dd17b8c07e7db88f6354/Butter-Paneer-1-4x5-LOW-RES-1110x1065.jpeg"
						/>
						<FlexColumn>
							<ItemName>
								Kadhai Paneer <InfoOutlinedIcon />
							</ItemName>
							<Price>₹ 251</Price>

							{itemCount <= 0 ? (
								<OrderButton
									onClick={() => {
										setItemCount(itemCount + 1);
									}}
								>
									Add
								</OrderButton>
							) : (
								<ButtonGroup>
									<Button
										onClick={() => {
											setItemCount(Math.max(itemCount - 1, 0));
										}}
									>
										{' '}
										<RemoveIcon fontSize="small" />
									</Button>
									<Button
										onClick={() => {
											setItemCount(itemCount + 1);
										}}
									>
										{' '}
										<AddIcon fontSize="small" />
									</Button>
								</ButtonGroup>
							)}
						</FlexColumn>
						<TypeIcon>
							<VegIcon />
						</TypeIcon>
					</FlexRow>
				</Card>

				<Card>
					<FlexRow>
						<Image
							alt="img"
							src="https://cogoport-testing.sgp1.digitaloceanspaces.com/235e3e0646b3dd17b8c07e7db88f6354/Butter-Paneer-1-4x5-LOW-RES-1110x1065.jpeg"
						/>
						<FlexColumn>
							<ItemName>
								Kadhai Paneer <InfoOutlinedIcon />
							</ItemName>
							<Price>₹ 251</Price>

							{itemCount <= 0 ? (
								<OrderButton
									onClick={() => {
										setItemCount(itemCount + 1);
									}}
								>
									Add
								</OrderButton>
							) : (
								<ButtonGroup>
									<Button
										onClick={() => {
											setItemCount(Math.max(itemCount - 1, 0));
										}}
									>
										{' '}
										<RemoveIcon fontSize="small" />
									</Button>
									<Button
										onClick={() => {
											setItemCount(itemCount + 1);
										}}
									>
										{' '}
										<AddIcon fontSize="small" />
									</Button>
								</ButtonGroup>
							)}
						</FlexColumn>
						<TypeIcon>
							<VegIcon />
						</TypeIcon>
					</FlexRow>
				</Card>

				<Card>
					<FlexRow>
						<Image
							alt="img"
							src="https://cogoport-testing.sgp1.digitaloceanspaces.com/235e3e0646b3dd17b8c07e7db88f6354/Butter-Paneer-1-4x5-LOW-RES-1110x1065.jpeg"
						/>
						<FlexColumn>
							<ItemName>
								Kadhai Paneer <InfoOutlinedIcon />
							</ItemName>
							<Price>₹ 251</Price>

							{itemCount <= 0 ? (
								<OrderButton
									onClick={() => {
										setItemCount(itemCount + 1);
									}}
								>
									Add
								</OrderButton>
							) : (
								<ButtonGroup>
									<Button
										onClick={() => {
											setItemCount(Math.max(itemCount - 1, 0));
										}}
									>
										{' '}
										<RemoveIcon fontSize="small" />
									</Button>
									<Button
										onClick={() => {
											setItemCount(itemCount + 1);
										}}
									>
										{' '}
										<AddIcon fontSize="small" />
									</Button>
								</ButtonGroup>
							)}
						</FlexColumn>
						<TypeIcon>
							<VegIcon />
						</TypeIcon>
					</FlexRow>
				</Card>
			</CardCont>
		</Container>
	);
};

export default CardContainer;
