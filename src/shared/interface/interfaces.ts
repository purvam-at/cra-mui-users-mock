/**
 * Summary : Interfaces
 *
 * Description : Common Interfaces which are common and used across app
 *
 * @file   interface.ts
 * @author Aakash.
 * @since  25/9/2019
 */

// Imports
import { ActionCreator, AnyAction, Action as ReduxAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import React from 'react';

// Action interface is created beacuse you need to extend it during action and reducers actions.
export interface Action {
	type: string;
}

// this actions is called in side menu of two column layout
export interface SubMenu {
	id: number;
	tab_name: string;
	tab_icon: JSX.Element;
}

// common API response
export interface Response {
	success?: boolean;
}

// render tables rows or list
export type TableRows = JSX.Element | JSX.Element[];

export type Nullable<T> = T | undefined | null;

// used in dispatch actions
export type AsyncAction<S, T extends ReduxAction> = ActionCreator<ThunkAction<Promise<AnyAction | void>, S, null, T>>;

// Pagination

//pagging object
export interface IPaging {
	page: number;
	rowPerPage: number;
}

// two column side menu tabs
export interface ITabs {
	id: number;
	tab_name: string;
	tab_icon: JSX.Element;
	url: string;
	query_params: string;
}
