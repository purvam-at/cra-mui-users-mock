/**
 * Summary : Toaster Action
 *
 * Description.
 *
 * @file   errorDialog.action.ts
 * @author Yash.
 * @since  28/04/2020
 */

import { IErrorDialogAction, ErrorDialogActionTypes } from './errorDialog.interface';
import { ActionCreator } from 'redux';

export const showErrorDialog: ActionCreator<IErrorDialogAction> = (res: any) => {
  return {
    type: ErrorDialogActionTypes.SHOW_DIALOG,
    message: res.message ? res.message : res,
    showDialog: true,
  };
};

export const hideErrorDialog: ActionCreator<IErrorDialogAction> = () => {
  return {
    type: ErrorDialogActionTypes.HIDE_DIALOG,
    showDialog: false,
  };
};
