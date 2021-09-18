import to from 'await-to-js';
import configUrl from 'shared/configUrl';
import * as httpService from 'shared/httpService';
import { ActionCreator, Dispatch } from 'redux';
import { AsyncAction } from 'shared/interface/interfaces';
import { showSuccessToast } from 'shared/ui/toaster/toaster.actions';
import { ISetSelUserAction, IUser, IUserAddUserAction, IUserByIdAction, IUserClearDataAction, IUserDeleteAction, IUserResetAction, IUserSetLoadingAction, IUserSetUrlAction, IUsersGetAllAction, IUsersState, IUserUpdateUserAction, UsersActionTypes } from 'features/users/interface/users.interface';

export const clearUserData: ActionCreator<IUserClearDataAction> = () => {
	return {
		type: UsersActionTypes.CLEARUSER
	};
};

export const getUsers: AsyncAction<IUsersState, IUsersGetAllAction> = () => {
	return async (dispatch: Dispatch) => {
		dispatch<IUserSetLoadingAction>(setLoader(true));
		const [, res] = await to<any>(httpService.get(configUrl.mockApiServer + '/user', {}));
		dispatch<IUserSetLoadingAction>(setLoader(false));
		if (res) {
			return dispatch<IUsersGetAllAction>({
				users: res.data,
				type: UsersActionTypes.GETALL
			});
		}
	};
};

export const createUser: AsyncAction<IUsersState, IUserResetAction> = (user: IUser) => {
	return async (dispatch: Dispatch) => {
		dispatch<IUserSetLoadingAction>(setLoader(true));
		const [, res] = await to<any>(httpService.post<IUser>(configUrl.mockApiServer + '/user', user));
		dispatch<IUserSetLoadingAction>(setLoader(false));
		// console.log(res) --> Only ID
		if (res) {
			dispatch(showSuccessToast(res.message));
			user.id = res.data.id;
			dispatch<IUserAddUserAction>({
				type: UsersActionTypes.ADDUSER,
				user: user
			});
		}
		return dispatch<IUserResetAction>({
			type: UsersActionTypes.RESETUSERS
		});
	};
};

export const updateUser: AsyncAction<IUsersState, IUserResetAction> = (user: IUser) => {
	return async (dispatch: Dispatch) => {
		dispatch<IUserSetLoadingAction>(setLoader(true));
		const [, res] = await to<any>(httpService.put<IUser>(configUrl.mockApiServer + '/user/' + user.id, user));
		dispatch<IUserSetLoadingAction>(setLoader(false));
		if (res) {
			dispatch(showSuccessToast(res.message));
			dispatch<IUserUpdateUserAction>({
				type: UsersActionTypes.UPDATEUSER,
				user: user
			});
		}
		return dispatch<IUserResetAction>({
			type: UsersActionTypes.RESETUSERS
		});
	};
};

export const getUserById: AsyncAction<IUsersState, IUserByIdAction> = (userId: number) => {
	return async (dispatch: Dispatch) => {
		dispatch<IUserSetLoadingAction>(setLoader(true));
		const [, res] = await to<any>(httpService.get(configUrl.mockApiServer + `/user/${userId}`, {}));
		dispatch<IUserSetLoadingAction>(setLoader(false));
		if (res) {
			console.log(typeof res.data);
			return dispatch<IUserByIdAction>({
				type: UsersActionTypes.GETUSERBYID,
				selUser: res.data[0]
			});
		}
	};
};

export const deleteUser: AsyncAction<IUsersState, IUserResetAction> = (userId: number) => {
	return async (dispatch: Dispatch) => {
		dispatch<IUserSetLoadingAction>(setLoader(true));
		const [, res] = await to<any>(httpService.remove(configUrl.mockApiServer + '/user/' + userId));
		dispatch<IUserSetLoadingAction>(setLoader(false));
		if (res) {
			dispatch(showSuccessToast(res.message));
			dispatch<IUserDeleteAction>({
				type: UsersActionTypes.DELETEUSER,
				id: userId
			});
		}
		return dispatch<IUserResetAction>({
			type: UsersActionTypes.RESETUSERS
		});
	};
};

export const setSelUser: ActionCreator<ISetSelUserAction> = (user: IUser) => {
	return {
		selUser: user,
		type: UsersActionTypes.SETSELUSER
	};
};

export const setLoader = (value: boolean): IUserSetLoadingAction => {
	return {
		value,
		type: UsersActionTypes.SETLOADING
	};
}; 

export const setRedirectUrl: ActionCreator<IUserSetUrlAction> = (url: string) => {
	return {
		url: url,
		type: UsersActionTypes.SETURL
	};
};