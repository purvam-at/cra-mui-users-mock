import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// Reducers
import ErrorDialogReducer from 'shared/ui/errorDialog/errorDialog.reducer';
import LoginReducer from 'features/login/store/login.reducer';
import ToasterReducer from 'shared/ui/toaster/toaster.reducer';
import CandidateReducer from 'features/candidate/store/reducer/candidate.reducer';
import UsersReducer from 'features/users/store/reducer/users.reducer'

// Interfaces
import { ICandidateState } from 'features/candidate/interface/candidate.interface';
import { ILoginState } from 'features/login/interface/login.interface';
import { IErrorDialogState } from 'shared/ui/errorDialog/errorDialog.interface';
import { IToasterState } from 'shared/ui/toaster/toaster.interface';
import { IUsersState } from 'features/users/interface/users.interface';

interface IWindow {
	__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

declare let window: IWindow;

export interface IAppState {
	login: ILoginState;
	toaster: IToasterState;
	errorDialog: IErrorDialogState;
	candidate: ICandidateState;
	users: IUsersState;
}

const reducers = {
	login: LoginReducer,
	toaster: ToasterReducer,
	errorDialog: ErrorDialogReducer,
	candidate: CandidateReducer,
	users: UsersReducer,
};

const rootReducer = combineReducers<IAppState>(reducers);
const composeEnhancers =
	process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : null || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
