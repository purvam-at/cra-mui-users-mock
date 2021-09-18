// import React from 'react';
import queryStringParser from 'query-string';
//import format from "date-fns/format";

//updateObject will update the values of the given object
export const updateObject = function updateObject<T, U>(oldObject: T, updatedProperties: U): T {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

/* stringify object contains params and it's value into string (In URL format) */
export const queryStringify = function queryStringify<T>(queryParams: T) {
  const filters = removeNullAndEmptyKeysFromObject<T>(queryParams);
  return queryStringParser.stringify(filters);
};

/* parse URL string into object with params and it's value */
export const queryParse = (queryString: string): queryStringParser.ParsedQuery<string> => {
  return queryStringParser.parse(queryString);
};

export const removeNullAndEmptyKeysFromObject = function removeNullAndEmptyKeysFromObject<T>(obj: T) {
  if (typeof obj !== 'object') {
    throw Error('Argument should be of type object');
  }

  const newObj: T = obj;
  // newObj = obj;
  // for (let key in obj) {
  // 	console.log(obj[key]);
  // 	if (typeof obj[key] != 'undefined' && obj[key]) {
  // 		newObj[key] = obj[key];
  // 	}
  // 	if (obj[key] !== '' && obj[key] !== null) {
  // 		newObj[key] = obj[key];
  // 	}
  // }
  return newObj;
};

/* Author:Ashish
Description: This function is used to replace null values to empty string as
	 form will give null value errors */
export const createFormObject = function createFormObject<T>(dataModel: T) {
  const obj: any = {};
  for (const key in dataModel) {
    if (dataModel[key] === null) {
      obj[key] = '';
    } else {
      obj[key] = dataModel[key];
    }
  }
  return obj;
};

/* Author:Ashish
Description: This function is used to get index
provide array key and value.  */
export const findIndex = (arr: [], key: any, value: any): number => {
  return arr.findIndex((i) => i[key] === value);
};

/* Author:Ashish
Description: This function is used to find record
provide array key and value.  */
export const find = <T>(arr: T[], key: keyof T, value: any): T => {
  return arr.find((i) => i[key] === value) as T;
};

/** Author:Aakash
 * @param {model} - record to create a object of type
 * Wll create a object of given type T from the object "model"
 * Use everytime at the time of submit form before send to the API
 */
export const assertModel = <T>(model: T) => {
  //const empty: any = {};
  let rec = {} as T;
  rec = model;
  return rec;
};

/** Author:Yash
 * @param {string} - gets the jwt token from local storage
 * it will prase the token and get the login user data which is being
 * encapsulate inside the token
 */
export const parseJwt = (token: string) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  } catch (e) {
    return null;
  }
};

/** Author:Yash
 * @param {FIle} - send  file object of type image
 * @param {max_size} - maximum file size allowed - here 50 kb
 * it will prase the file object into base64 string
 */
export const getBase64 = (file: File, max_size: number): any => {
  const max_size_bytes = max_size * 1024;
  return new Promise((resolve, reject) => {
    if (file.size > max_size_bytes) {
      //console.log('file is too big at ' + file.size / 1024 + 'Kb');
      reject('File exceeds max size of ' + max_size + 'Kb');
    } else {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file); // or readAsText(file) to get raw content
    }
  });
};

/** Author:Yash
 * @param {object} - data
 * A deep copy means actually creating a new array and copying over the values, since whatever happens to it will never affect the origin one.
 */
export const deepCopy = (data: any): any => {
  return JSON.parse(JSON.stringify(data));
};

/** Author:Yash
 * @param {object} - currObj - is the new form object
 * @param {object} - prevObj - is the old form object
 * it will prase the it will compare those two object deeply and return the boolean value, if dirty then true else false
 */
export const isFormDirty = (currObj: any, prevObj: any): boolean => {
  // checking form is getting dirty , is yes then trigger api else just pass to next screen
  let dirty = false;
  if (JSON.stringify(currObj) === JSON.stringify(prevObj)) {
    dirty = false;
  } else {
    dirty = true;
  }
  return dirty;
};

export const formatDate = (date: string): string => {
  const dateFormat = new Date(date);
  return (
    ('0' + dateFormat.getDate()).slice(-2) +
    '-' +
    ('0' + dateFormat.getMonth()).slice(-2) +
    '-' +
    dateFormat.getFullYear()
  );
};

export const formatTime = (time: string): string => {
  const dateFormat = new Date(time);
  return ('0' + dateFormat.getHours()).slice(-2) + ':' + ('0' + dateFormat.getMinutes()).slice(-2);
};
