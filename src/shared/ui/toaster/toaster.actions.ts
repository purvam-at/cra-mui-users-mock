import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'shared/interface/interfaces';
import { IToasterAction, ToasterActionTypes } from './toaster.interface';
import { ActionCreator } from 'redux';

export const showFailureToast: ActionCreator<IToasterAction> = (res: any) => {
  return {
    type: ToasterActionTypes.SHOW_TOASTER,
    toastMessage: res.message ? res.message : res,
    showToaster: true,
    toastType: 'error',
  };
};

export const showSuccessToast: ActionCreator<IToasterAction> = (customMsg: string, resMeg: string) => {
  return {
    type: ToasterActionTypes.SHOW_TOASTER,
    toastMessage: resMeg ? resMeg : customMsg,
    showToaster: true,
    toastType: 'success',
  };
};

export const hideToaster = () => {
  return (dispatch: ThunkDispatch<any, any, Action>): Promise<unknown> => {
    return new Promise(function (resolve) {
      dispatch<IToasterAction>({
        type: ToasterActionTypes.HIDE_TOASTER,
        toastMessage: null,
        showToaster: false,
        toastType: null,
      });
      resolve(true);
    });
  };
};
