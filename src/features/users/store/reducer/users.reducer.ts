import { IUser, IUsersState, usersActions, UsersActionTypes } from 'features/users/interface/users.interface';
import { Reducer } from 'redux';
import { findIndex } from 'shared/utility';

// initial State
const initialState: IUsersState = {
	users: [],
	selUser: null,
	loading: false,
	userActionCompleted: false,
	redirectUrl: '/user',
};

const reducer: Reducer<IUsersState, usersActions> = (state = initialState, action) => {
	switch (action.type) {
		case UsersActionTypes.SETURL:
			return {
				...state,
				redirectUrl: action.url
			};
		case UsersActionTypes.GETALL:
			return setUsers(state, action.users);
		case UsersActionTypes.SETSELUSER:
			return {
				...state,
				selUser: action.selUser
			};
		case UsersActionTypes.CLEARUSER:
			return clearUserData(state);
		case UsersActionTypes.RESETUSERS:
			return {
				...state,
				programActionCompleted: false
			};
		case UsersActionTypes.ADDUSER:
			return addUser(state, action.user);
		case UsersActionTypes.UPDATEUSER:
			return updateUser(state, action.user);
		case UsersActionTypes.SETLOADING:
			return {
				...state,
				loading: action.value
			};
		case UsersActionTypes.GETUSERBYID:
			return {
				...state,
				selUser: action.selUser
			};
		case UsersActionTypes.DELETEUSER:
			return deleteUser(state, action.id);
		default:
			return state;
	}
};

const clearUserData = (state: IUsersState): IUsersState => {
	return {
		...state,
		users: [],
		selUser: null
	};
};

const addUser = (state: IUsersState, user: IUser): IUsersState => {
	const dataArr = [...state.users];
	dataArr.push(user);
	return {
		...state,
		users: dataArr,
		userActionCompleted: true,
	};
};

const updateUser = (state: IUsersState, user: IUser): IUsersState => {
	const index = state.users.findIndex(u => u.id === user.id);
	return {
		...state,
		users: [...state.users.slice(0, index), user, ...state.users.slice(index + 1)],
		userActionCompleted: true
	};
};

const deleteUser = (state: IUsersState, id: number): IUsersState => {
	const userArray = [...state.users];
	const index = findIndex(userArray as [], 'id', id);
	userArray.splice(index, 1);
	return {
		...state,
		users: userArray,
		userActionCompleted: true,
	};
};

const setUsers = (state: IUsersState, users: IUser[]): IUsersState => {
	return {
		...state,
		users: users,
	};
};

export default reducer;
