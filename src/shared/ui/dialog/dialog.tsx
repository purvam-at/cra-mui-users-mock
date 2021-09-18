// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import genericClasses from 'App.module.css';

// const dialog = props => {
// 	return (
// 		<Dialog open={props.open} onClose={props.cancelDelete}>
// 			<DialogTitle>Delete&nbsp;{props.title}</DialogTitle>
// 			<DialogContent>
// 				<DialogContentText>Are you sure you want to delete&nbsp;{props.module} ?</DialogContentText>
// 			</DialogContent>
// 			<DialogActions>
// 				<Button onClick={props.cancelDelete} color="default" className={genericClasses.GreyButton}>
// 					Cancel
// 				</Button>
// 				<Button
// 					onClick={props.confirmDelete}
// 					color="inherit"
// 					variant="contained"
// 					className={genericClasses.DeleteButton}
// 					autoFocus
// 				>
// 					Delete
// 				</Button>
// 			</DialogActions>
// 		</Dialog>
// 	);
// };
// export default dialog;

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import genericClasses from 'App.module.css';

interface IProps {
	open: boolean;
	title: string;
	cancelDelete: () => void;
	confirmDelete: () => void;
	module: string;
}
const DelDialog: React.SFC<IProps> = (props): JSX.Element => {
	return (
		<Dialog open={props.open} onClose={props.cancelDelete}>
			<DialogTitle>Delete&nbsp;{props.title}</DialogTitle>
			<DialogContent>
				<DialogContentText>Are you sure you want to delete&nbsp;{props.module} ?</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={props.cancelDelete} color="default" className={genericClasses.GreyButton}>
					Cancel
				</Button>
				<Button
					onClick={props.confirmDelete}
					color="inherit"
					variant="contained"
					className={genericClasses.DeleteButton}
					autoFocus
				>
					Delete
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DelDialog;
