import { Alert, Snackbar } from '@mui/material';
import React from 'react';

const ShowMessage = ({ handleClose, open, message, type }) => {
	return (
		<span>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				autoHideDuration={2000}
				open={open}
				onClose={handleClose}
				key="to right"
			>
				<Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
					{message}
				</Alert>
			</Snackbar>
		</span>
	);
};

export default ShowMessage;
