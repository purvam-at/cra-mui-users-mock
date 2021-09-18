/**
 * Summary : Error Dialog Reducer
 *
 * Description.
 *
 * @file   errorDialog.reducer.ts
 * @author Yash.
 * @since  30/9/2019
 */
import { updateObject } from 'shared/utility';
import { IErrorDialogState, IErrorDialogAction, ErrorDialogActionTypes } from './errorDialog.interface';

const initialState: IErrorDialogState = {
	showDialog: false,
	message: null,
	//toastType: null,
};

/** Function represents toaster reducer
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */

const reducer = (state: IErrorDialogState = initialState, action: IErrorDialogAction): IErrorDialogState => {
	switch (action.type) {
		case ErrorDialogActionTypes.SHOW_DIALOG:
			return handleErrorDialog(state, action);
		case ErrorDialogActionTypes.HIDE_DIALOG:
			return handleErrorDialog(state, action);
		default:
			return state;
	}
};

/** Function update toaster state in store's
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
const handleErrorDialog = (state: IErrorDialogState, action: IErrorDialogAction): IErrorDialogState => {
	return updateObject<IErrorDialogState, IErrorDialogState>(state, {
		showDialog: action.showDialog,
		message: action.message ? action.message : state.message,
	});
};

export default reducer;
