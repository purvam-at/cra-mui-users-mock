import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import genericClasses from 'App.module.css';

const dialog = props => {
	return (
		<Dialog open={props.open} onClose={props.cancelDelete}>
			<DialogTitle>Send &nbsp;{props.title} &nbsp; Invitation</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Total Selected &nbsp;{props.title} : &nbsp;{props.count}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={props.cancelInvitation} color="default" className={genericClasses.GreyButton}>
					Cancel
				</Button>
				<Button
					onClick={props.confirmInvitation}
					color="inherit"
					variant="contained"
					className={genericClasses.DeleteButton}
					autoFocus
				>
					Send Invitation
				</Button>
			</DialogActions>
		</Dialog>
	);
};
export default dialog;
