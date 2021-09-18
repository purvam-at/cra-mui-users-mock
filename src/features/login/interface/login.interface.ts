/**
 * Summary : Login Interfaces
 *
 * Description.
 *
 * @file   login.interface.ts
 * @author Yash.
 * @since  24/04/2020
 */

import { Nullable } from 'shared/interface/interfaces';

// login from values
export interface ILoginVal {
	authfield: number;
	password: string;
	user_type: string;
}

// Otp form values
export interface IOtpVal {
	otp: number;
}

// Otp Request Data
export interface IOtp {
	authfield: number;
	otp?: number;
}

// Login User Details
export interface ILoggedInUser {
	id: number;
	name: string;
	mobile_no: number;
	email_id: string;
	title: string;
}

export type LoggedInUserType = Nullable<ILoggedInUser>;

// Redux Store
export interface ILoginState {
	readonly loggedInUser: LoggedInUserType; // user details which will get on login
	readonly authActionCompleted: boolean;
	readonly loading: boolean; // loading flag to show loader, handle form button state
}

// Action types
export enum LoginActionTypes {
	LOGINSUCCESS = 'LOGIN/LOGINSUCCESS',
	LOGOUT = 'LOGIN/LOGOUT',
	ERROR = 'LOGIN/ERROR',
	RESETAUTHACTION = 'LOGIN/RESETAUTHACTION',
	AUTHACTION = 'LOGIN/AUTHACTION',
	SETLOADING = 'LOGIN/SETLOADING',
}

// Actions

// LOGINSUCCESS
export interface ILoginAction {
	type: LoginActionTypes.LOGINSUCCESS;
	loggedInUser: ILoggedInUser;
}

// LOGOUT
export interface ILogoutAction {
	type: LoginActionTypes.LOGOUT;
	loggedInUser: LoggedInUserType;
}

// ERROR
export interface ILoginErrorAction {
	type: LoginActionTypes.ERROR;
	error: string;
}

// RESET ON LOGIN ACTION
export interface IAuthResetAction {
	type: LoginActionTypes.RESETAUTHACTION;
}

// ON LOGIN ACTION
export interface IAuthAction {
	type: LoginActionTypes.AUTHACTION;
}

// SETLOADING ACTION
export interface IAuthSetLoadingAction {
	type: LoginActionTypes.SETLOADING;
	value: boolean;
}

export type LoginActions =
	| ILoginAction
	| ILogoutAction
	| IAuthResetAction
	| ILoginErrorAction
	| IAuthAction
	| IAuthSetLoadingAction;
