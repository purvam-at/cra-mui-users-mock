import { Action } from 'shared/interface/interfaces';

export enum ToasterActionTypes {
	SHOW_TOASTER = 'SHOW_TOASTER',
	HIDE_TOASTER = 'HIDE_TOASTER',
}

export interface IToasterState {
	showToaster: boolean;
	toastMessage: string | null;
	toastType: string | null;
}

export interface IToasterAction extends Action, IToasterState {}
