import { queryStringify } from '../shared/utility';
import store from '../store/store';
import { ILogoutAction, LoginActionTypes } from '../features/login/interface/login.interface';
import { IToasterAction } from './ui/toaster/toaster.interface';
import { showFailureToast } from '../shared/ui/toaster/toaster.actions';
/**
 * [extractErrorData returns object with property msg which contains error msg]
 */

interface IErrorResponse {
  message: string;
}

interface IErrorData extends IErrorResponse {
  statusText: string;
  success: boolean;
}

/* extractErrorData returns object with property msg which contains error msg */
function extractErrorData(data: IErrorData): IErrorResponse {
  let errorMsg = '';
  if (data.message) {
    errorMsg = data.message;
  } else {
    errorMsg = 'Api such error !!';
  }
  store.dispatch<IToasterAction>(showFailureToast(errorMsg));
  return { message: errorMsg };
}

/* check api if user has expired of not */
function checkStatus(response: any): Promise<unknown> {
  //dispatch logout action when status = 401 (unauthorize req)
  // if (response.status === 401 && localStorage.getItem('jwtToken')) {
  if (response.status === 401 || response.status === 403) {
    //remove jstToken from localstorage
    localStorage.removeItem('jwtToken');
    //dispatch logout function
    store.dispatch<ILogoutAction>({
      type: LoginActionTypes.LOGOUT,
      loggedInUser: null,
    });
    //store.dispatch(handleActionDispatch(actionTypes.LOGOUT, null));
    const unAuthError = new Error(response.statusText);
    //	unAuthError.response = response;
    return Promise.reject(unAuthError);
  }
  return Promise.resolve(response);
}

function json(response: any) {
  return response.json();
}

function post<T>(url: string, params?: T): Promise<unknown> {
  const jwtToken: any = localStorage.getItem('jwtToken');
  return new Promise(function (resolve, reject) {
    fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': jwtToken,
      },
      body: JSON.stringify(params),
    })
      .then(checkStatus)
      .then(json)
      .then((data) => {
        if (!data.success) {
          reject(extractErrorData(data));
        } else {
          resolve(data);
        }
      })
      .catch((error) => {
        reject(extractErrorData(error));
        console.log('request failed', error);
      });
  });
}

function get<T>(url: string, params: T): Promise<unknown> {
  if (typeof params === 'string') {
    if (params === '') {
      url = params;
    }
  } else {
    url = `${url}?${queryStringify<T>(params)}`;
  }
  const jwtToken: any = localStorage.getItem('jwtToken');
  return new Promise(function (resolve, reject) {
    fetch(url, {
      method: 'GET',
      //signal: abortSignal,
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': jwtToken,
      },
    })
      .then(checkStatus)
      .then(json)
      .then((data) => {
        if (!data.success) {
          reject(extractErrorData(data));
        } else {
          resolve(data);
        }
      })
      .catch((error) => {
        reject(extractErrorData(error));
        console.log('request failed', error);
      });
  });
}

function put<T>(url: string, params: T) {
  const jwtToken: any = localStorage.getItem('jwtToken');
  return new Promise(function (resolve, reject) {
    fetch(url, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': jwtToken,
      },
      body: JSON.stringify(params),
    })
      .then(checkStatus)
      .then(json)
      .then((data) => {
        if (!data.success) {
          reject(extractErrorData(data));
        } else {
          resolve(data);
        }
      })
      .catch((error) => {
        reject(extractErrorData(error));
        console.log('request failed', error);
      });
  });
}

function remove(url: string, params?: number) {
  const jwtToken: any = localStorage.getItem('jwtToken');
  return new Promise(function (resolve, reject) {
    //url = `${url}/${params}`;
    return fetch(url, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': jwtToken,
      },
      body: JSON.stringify(params),
    })
      .then(checkStatus)
      .then(json)
      .then((data) => {
        if (!data.success) {
          reject(extractErrorData(data));
        } else {
          resolve(data);
        }
      })
      .catch((error) => {
        reject(extractErrorData(error));
        console.log('request failed', error);
      });
  });
}

export { post, put, get, remove };
