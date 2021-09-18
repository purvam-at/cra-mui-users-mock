/**
 * Summary : Login Reducer
 *
 * Description.
 *
 * @file   login.reducer.ts
 * @author Yash.
 * @since  10/10/2019
 */
import { Reducer } from 'redux';
import { ILoginState, LoginActions, LoginActionTypes } from '../interface/login.interface';
//import { parseJwt } from "shared/utility";

// initally login user data will be null
//let userDataFromToken = null;

// get jwt token

// const jwtToken: any = localStorage.getItem('jwtToken');
// if (jwtToken) {
// 	userDataFromToken = parseJwt(jwtToken);
// }

const loggedInUser = {
	id: 1,
	name: 'Yash Vekaria',
	mobile_no: 7878127903,
	email_id: 'yashvekaria@gmail.com',
	title: 'S.P University',
};

// initial State
const initialState: ILoginState = {
	//loggedInUser: userDataFromToken,
	loggedInUser: loggedInUser,
	authActionCompleted: false,
	loading: false,
};

const reducer: Reducer<ILoginState, LoginActions> = (state = initialState, action) => {
	switch (action.type) {
		case LoginActionTypes.LOGINSUCCESS:
			return {
				...state,
				loggedInUser: action.loggedInUser,
			};
		case LoginActionTypes.LOGOUT:
			return {
				...state,
				loggedInUser: action.loggedInUser,
			};
		case LoginActionTypes.AUTHACTION:
			return {
				...state,
				authActionCompleted: true,
			};
		case LoginActionTypes.RESETAUTHACTION:
			return {
				...state,
				authActionCompleted: false,
			};
		case LoginActionTypes.SETLOADING:
			return {
				...state,
				loading: action.value,
			};
		default:
			return state;
	}
};

export default reducer;
