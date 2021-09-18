/**
 * Summary : Login Action
 *
 * Description.
 *
 * @file   login.action.ts
 * @author Yash.
 * @since  24/9/2019
 */
import to from 'await-to-js';
import {
  ILoginVal,
  IOtp,
  ILoginState,
  ILoginAction,
  ILogoutAction,
  IAuthSetLoadingAction,
  LoginActionTypes,
  IAuthResetAction,
  IAuthAction,
} from '../interface/login.interface';
import { AsyncAction } from 'shared/interface/interfaces';
import { Dispatch } from 'redux';
import { showSuccessToast } from 'shared/ui/toaster/toaster.actions';
import configUrl from 'shared/configUrl';
import * as httpService from 'shared/httpService';

// function will check whether login form field are correct
export const doLogin: AsyncAction<ILoginState, IAuthResetAction> = (data: ILoginVal) => {
  return async (dispatch: Dispatch) => {
    dispatch<IAuthSetLoadingAction>(setLoader(true));
    const [, res] = await to<any>(httpService.post<ILoginVal>(configUrl.apiServer + '/login', data));
    dispatch<IAuthSetLoadingAction>(setLoader(false));
    if (res) {
      dispatch<IAuthAction>({
        type: LoginActionTypes.AUTHACTION,
      });
    }
    return dispatch<IAuthResetAction>({
      type: LoginActionTypes.RESETAUTHACTION,
    });
  };
};

// will check otp
export const verifyOtp: AsyncAction<ILoginState, ILoginAction> = (data: IOtp) => {
  return async (dispatch: Dispatch) => {
    dispatch<IAuthSetLoadingAction>(setLoader(true));
    const [, res] = await to<any>(httpService.post<IOtp>(configUrl.apiServer + '/login/verifyOtp', data));
    dispatch<IAuthSetLoadingAction>(setLoader(false));
    if (res) {
      localStorage.setItem('jwtToken', res.token);
      return dispatch<ILoginAction>({
        type: LoginActionTypes.LOGINSUCCESS,
        loggedInUser: res.data,
      });
    }
  };
};

// will resend otp
export const resendOtp: AsyncAction<ILoginState, ILoginAction> = (data: IOtp) => {
  return async (dispatch: Dispatch) => {
    dispatch<IAuthSetLoadingAction>(setLoader(true));
    const [, res] = await to<any>(httpService.post<IOtp>(configUrl.apiServer + '/login/resendOTP', data));
    dispatch<IAuthSetLoadingAction>(setLoader(false));
    if (res) {
      dispatch(showSuccessToast('', res.message));
      return res;
    }
  };
};

// will logout user and clear the jwt token from local storage
export const logout: AsyncAction<ILoginState, ILogoutAction> = () => {
  return async (dispatch: Dispatch) => {
    dispatch<IAuthSetLoadingAction>(setLoader(true));
    const [, res] = await to<any>(httpService.post(configUrl.apiServer + '/logout'));
    dispatch<IAuthSetLoadingAction>(setLoader(false));
    if (res) {
      localStorage.removeItem('jwtToken');
      return dispatch<ILogoutAction>({
        type: LoginActionTypes.LOGOUT,
        loggedInUser: null,
      });
    }
  };
};

const setLoader = (value: boolean): IAuthSetLoadingAction => {
  return {
    value,
    type: LoginActionTypes.SETLOADING,
  };
};
