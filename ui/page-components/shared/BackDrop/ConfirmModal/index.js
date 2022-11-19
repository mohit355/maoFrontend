import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import React from 'react';

const ConfirmModal = ({
	open = false,
	loading,
	heading,
	onConfirm,
	onClose,
	content,
	buttonName,
}) => {
	return (
		<div>
			<Dialog
				open={open}
				onClose={onClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{heading}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">{content}</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={onClose}>{loading ? '' : `${buttonName[0]}`}</Button>
					<Button onClick={onConfirm}>{loading ? '' : `${buttonName[1]}`}</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default ConfirmModal;
