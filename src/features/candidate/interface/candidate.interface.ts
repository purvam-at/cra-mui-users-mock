import { Nullable } from 'shared/interface/interfaces';

export interface ICandidate {
	id: number;
	sidno: string;
	name: string;
	seat_no: string;
	is_hold: boolean;
	total_count?: number;
}

export type CandidateType = Nullable<ICandidate>;

//filters
export interface ICandidateFilterObject {
	limit?: number;
	offset?: number;
}

// Redux Store
export interface ICandidateState {
	readonly candidates: ICandidate[];
	readonly redirectUrl: string;
	readonly selCandidate: CandidateType;
	readonly totalCount: number;
	readonly loading: boolean;
	readonly candidateActionCompleted: boolean;
}

// Action types
export enum CandidateActionTypes {
	SETLOADING = 'CANDIDATE/SETLOADING',
	GETALL = 'CANDIDATE/GETALL',
	SETURL = 'CANDIDATE/SETURL',
	SETSELCANDIDATE = 'CANDIDATE/SETSELCANDIDATE',
	CLEARCANDIDATE = 'CANDIDATE/CLEARCANDIDATE',
	RESETCANDIDATE = 'CANDIDATE/RESETCANDIDATE',
	DELETECANDIDATE = 'CANDIDATE/DELETECANDIDATE',
	ADDCANDIDATE = 'CANDIDATE/ADDCANDIDATE',
	UPDATECANDIDATE = 'CANDIDATE/UPDATECANDIDATE',
	GETCANDIDATEBYID = 'CANDIDATE/GETCANDIDATEBYID',
}

export interface IGetAllCandidateAction {
	type: CandidateActionTypes.GETALL;
	candidates: ICandidate[];
}

export interface ISelectedCandidateAction {
	selCandidate: ICandidate;
	type: CandidateActionTypes.SETSELCANDIDATE;
}

export interface ICandidateByIdAction {
	type: CandidateActionTypes.GETCANDIDATEBYID;
	selCandidate: CandidateType;
}

export interface IAddCandidateAction {
	type: CandidateActionTypes.ADDCANDIDATE;
	candidate: ICandidate;
}

export interface IUpdateCandidateAction {
	candidate: ICandidate;
	type: CandidateActionTypes.UPDATECANDIDATE;
}

export interface IDeleteCandidateAction {
	type: CandidateActionTypes.DELETECANDIDATE;
	id: number;
}

export interface IResetCandidateAction {
	type: CandidateActionTypes.RESETCANDIDATE;
}

export interface ILoadingCandidateAction {
	type: CandidateActionTypes.SETLOADING;
	value: boolean;
}

export interface IClearCandidateAction {
	type: CandidateActionTypes.CLEARCANDIDATE;
}

export interface ISetUrlCandidateAction {
	url: string;
	type: CandidateActionTypes.SETURL;
}

export type CandidateActions =
	| IGetAllCandidateAction
	| ISelectedCandidateAction
	| ICandidateByIdAction
	| IAddCandidateAction
	| IUpdateCandidateAction
	| IDeleteCandidateAction
	| IResetCandidateAction
	| ILoadingCandidateAction
	| IClearCandidateAction
	| ISetUrlCandidateAction;
