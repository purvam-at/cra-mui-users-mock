/**
 * Summary : Toaster Reducers
 *
 * Description.
 *
 * @file   toaster.reducer.ts
 * @author Ashish.
 * @since  30/9/2019
 */
import { updateObject } from 'shared/utility';
import { IToasterState, IToasterAction, ToasterActionTypes } from './toaster.interface';

const initialState: IToasterState = {
	showToaster: false,
	toastMessage: null,
	toastType: null,
};

const reducer = (state: IToasterState = initialState, action: IToasterAction): IToasterState => {
	switch (action.type) {
		case ToasterActionTypes.SHOW_TOASTER:
			return handleToaster(state, action);
		case ToasterActionTypes.HIDE_TOASTER:
			return handleToaster(state, action);
		default:
			return state;
	}
};

const handleToaster = (state: IToasterState, action: IToasterAction): IToasterState => {
	return updateObject<IToasterState, IToasterState>(state, {
		showToaster: action.showToaster,
		toastMessage: action.toastMessage,
		toastType: action.toastType,
	});
};

export default reducer;
