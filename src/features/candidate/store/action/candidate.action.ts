import to from 'await-to-js';
import configUrl from 'shared/configUrl';
import * as httpService from 'shared/httpService';
import { ActionCreator, Dispatch } from 'redux';

import {
	ICandidateState,
	IGetAllCandidateAction,
	ICandidateFilterObject,
	ILoadingCandidateAction,
	CandidateActionTypes,
	ISetUrlCandidateAction,
	ICandidate,
	ISelectedCandidateAction,
	IClearCandidateAction,
	IResetCandidateAction,
	IDeleteCandidateAction,
	IAddCandidateAction,
	IUpdateCandidateAction,
	ICandidateByIdAction,
} from '../../interface/candidate.interface';
import { AsyncAction } from 'shared/interface/interfaces';
import { showSuccessToast } from 'shared/ui/toaster/toaster.actions';

export const clearCandidateData: ActionCreator<IClearCandidateAction> = () => {
	return {
		type: CandidateActionTypes.CLEARCANDIDATE,
	};
};

export const getCandidates: AsyncAction<ICandidateState, IGetAllCandidateAction> = (data: ICandidateFilterObject) => {
	return async (dispatch: Dispatch) => {
		dispatch<ILoadingCandidateAction>(setLoader(true));
		const [, res] = await to<any>(httpService.get(configUrl.mockApiServer + '/candidate', data));
		dispatch<ILoadingCandidateAction>(setLoader(false));
		if (res) {
			return dispatch<IGetAllCandidateAction>({
				candidates: res.data,
				type: CandidateActionTypes.GETALL,
			});
		}
	};
};

export const addCandidate: AsyncAction<ICandidateState, IResetCandidateAction> = (candidate: ICandidate) => {
	return async (dispatch: Dispatch) => {
		dispatch<ILoadingCandidateAction>(setLoader(true));
		const [, res] = await to<any>(httpService.post<ICandidate>(configUrl.apiServer + '/program', candidate));
		dispatch<ILoadingCandidateAction>(setLoader(false));
		if (res) {
			dispatch(showSuccessToast(res.message));
			candidate.id = res.data.id;
			dispatch<IAddCandidateAction>({
				type: CandidateActionTypes.ADDCANDIDATE,
				candidate,
			});
		}
		return dispatch<IResetCandidateAction>({
			type: CandidateActionTypes.RESETCANDIDATE,
		});
	};
};

export const updateCandidate: AsyncAction<ICandidateState, IResetCandidateAction> = (candidate: ICandidate) => {
	return async (dispatch: Dispatch) => {
		dispatch<ILoadingCandidateAction>(setLoader(true));
		const [, res] = await to<any>(
			httpService.put<ICandidate>(configUrl.apiServer + '/candidate/' + candidate.id, candidate)
		);
		dispatch<ILoadingCandidateAction>(setLoader(false));
		if (res) {
			dispatch(showSuccessToast(res.message));
			dispatch<IUpdateCandidateAction>({
				type: CandidateActionTypes.UPDATECANDIDATE,
				candidate,
			});
		}
		return dispatch<IResetCandidateAction>({
			type: CandidateActionTypes.RESETCANDIDATE,
		});
	};
};

export const deleteCandidate: AsyncAction<ICandidateState, IResetCandidateAction> = (candidateId: number) => {
	return async (dispatch: Dispatch) => {
		dispatch<ILoadingCandidateAction>(setLoader(true));
		const [, res] = await to<any>(httpService.remove(configUrl.apiServer + '/candidate/' + candidateId));
		dispatch<ILoadingCandidateAction>(setLoader(false));
		if (res) {
			dispatch(showSuccessToast(res.message));
			dispatch<IDeleteCandidateAction>({
				type: CandidateActionTypes.DELETECANDIDATE,
				id: candidateId,
			});
		}

		return dispatch<IResetCandidateAction>({
			type: CandidateActionTypes.RESETCANDIDATE,
		});
	};
};

export const getCadidateById: AsyncAction<ICandidateState, ICandidateByIdAction> = (candidateId: number) => {
	return async (dispatch: Dispatch) => {
		dispatch<ILoadingCandidateAction>(setLoader(true));
		const [, res] = await to<any>(httpService.get(configUrl.apiServer + '/candidate/' + candidateId, {}));
		dispatch<ILoadingCandidateAction>(setLoader(false));
		if (res) {
			return dispatch<ICandidateByIdAction>({
				type: CandidateActionTypes.GETCANDIDATEBYID,
				selCandidate: res.data,
			});
		}
	};
};

export const setSelectedCandidate: ActionCreator<ISelectedCandidateAction> = (candidate: ICandidate) => {
	return {
		selCandidate: candidate,
		type: CandidateActionTypes.SETSELCANDIDATE,
	};
};

export const setLoader = (value: boolean): ILoadingCandidateAction => {
	return {
		value,
		type: CandidateActionTypes.SETLOADING,
	};
};

export const setRedirectUrl: ActionCreator<ISetUrlCandidateAction> = (url: string) => {
	return {
		url: url,
		type: CandidateActionTypes.SETURL,
	};
};
