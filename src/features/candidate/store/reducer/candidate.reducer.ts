import { Reducer } from 'redux';
import {
	CandidateActionTypes,
	CandidateActions,
	ICandidateState,
	ICandidate,
} from '../../interface/candidate.interface';
import { findIndex } from 'shared/utility';

const initialState: ICandidateState = {
	candidates: [],
	selCandidate: null,
	redirectUrl: '/canidate?limit=10&offset=0',
	loading: false,
	totalCount: 0,
	candidateActionCompleted: false,
};

const reducer: Reducer<ICandidateState, CandidateActions> = (state = initialState, action) => {
	switch (action.type) {
		case CandidateActionTypes.SETURL:
			return {
				...state,
				redirectUrl: action.url,
			};
		case CandidateActionTypes.SETSELCANDIDATE:
			return {
				...state,
				selCandidate: action.selCandidate,
			};
		case CandidateActionTypes.RESETCANDIDATE:
			return {
				...state,
				candidateActionCompleted: false,
			};
		case CandidateActionTypes.GETALL:
			return setCandidates(state, action.candidates);
		case CandidateActionTypes.ADDCANDIDATE:
			return addCandidate(state, action.candidate);

		case CandidateActionTypes.UPDATECANDIDATE:
			return updateCandidate(state, action.candidate);
		case CandidateActionTypes.SETLOADING:
			return {
				...state,
				loading: action.value,
			};
		case CandidateActionTypes.GETCANDIDATEBYID:
			return {
				...state,
				selCandidate: action.selCandidate,
			};
		case CandidateActionTypes.DELETECANDIDATE:
			return deleteCandidate(state, action.id);
		case CandidateActionTypes.CLEARCANDIDATE:
			return clearCandidateData(state);
		default:
			return state;
	}
};

const setCandidates = (state: ICandidateState, candidates: ICandidate[]): ICandidateState => {
	let totalCount = 0;
	if (candidates.length !== 0) {
		totalCount = candidates[0].total_count as number;
	}
	return {
		...state,
		candidates: candidates,
		totalCount: totalCount,
	};
};

const addCandidate = (state: ICandidateState, candidate: ICandidate): ICandidateState => {
	const dataArr = [...state.candidates];
	dataArr.push(candidate);

	const totalCount = state.totalCount + 1;
	return {
		...state,
		candidates: dataArr,
		totalCount: totalCount,
		candidateActionCompleted: true,
	};
};

const updateCandidate = (state: ICandidateState, candidate: ICandidate): ICandidateState => {
	const index = state.candidates.findIndex((u) => u.id === candidate.id);
	return {
		...state,
		candidates: [...state.candidates.slice(0, index), candidate, ...state.candidates.slice(index + 1)],
		candidateActionCompleted: true,
	};
};

const deleteCandidate = (state: ICandidateState, id: number): ICandidateState => {
	const candidates = [...state.candidates];
	const index = findIndex(candidates as [], 'id', id);
	candidates.splice(index, 1);
	const totalCount = state.totalCount - 1;

	return {
		...state,
		candidates: candidates,
		totalCount: totalCount,
		candidateActionCompleted: true,
	};
};

const clearCandidateData = (state: ICandidateState): ICandidateState => {
	return {
		...state,
		candidates: [],
		selCandidate: null,
	};
};

export default reducer;
