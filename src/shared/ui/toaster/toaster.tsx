/**
 * Summary : toaster Component
 *
 * Description.
 *
 * @file   toaster.tsx
 * @author Ashish
 * @since  30/9/2019
 */
import React from 'react';
import classes from './toaster.module.css';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

export interface IProps {
	type: string | null; //success / error types //to add classes according to type
	open: boolean; // flag to hide and show toaster
	message: string | null; // msg in toaster
	handleToasterClose: () => void; // handle close event
}

/** function to
 * @param {object} props
 * @returns {JSX.Element}
 */
const toaster = (props: IProps): JSX.Element => {
	const inputClasses = [];
	if (props.type && props.type === 'success') {
		inputClasses.push(classes.success);
	}
	if (props.type && props.type === 'error') {
		inputClasses.push(classes.error);
	}
	return (
		<Snackbar
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left'
			}}
			open={props.open}
			autoHideDuration={3000}
			onClose={props.handleToasterClose}
		>
			<SnackbarContent
				classes={{
					root: inputClasses.join(' ')
				}}
				aria-describedby="client-snackbar"
				message={<span id="message-id">{props.message}</span>}
			/>
		</Snackbar>
	);
};
export default toaster;
