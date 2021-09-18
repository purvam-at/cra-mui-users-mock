import { Action } from 'shared/interface/interfaces';

export enum ErrorDialogActionTypes {
	SHOW_DIALOG = 'SHOW_DIALOG',
	HIDE_DIALOG = 'HIDE_DIALOG',
}

export interface IErrorDialogState {
	showDialog: boolean;
	message?: string | null;
}

export interface IErrorDialogAction extends Action, IErrorDialogState {}
