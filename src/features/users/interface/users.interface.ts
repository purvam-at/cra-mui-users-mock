import { Nullable } from 'shared/interface/interfaces';

export interface IUser {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
 }
 
 export type UserType = Nullable<IUser>;
 
 
 // Redux Store
 export interface IUsersState {
     readonly users: IUser[],
     readonly selUser: UserType,
     readonly loading: boolean;
     readonly userActionCompleted: boolean;
     readonly redirectUrl: string,
 }
 
 // Action types
 export enum UsersActionTypes {
    GETALL = 'USERS/GETALL',
     SETLOADING = 'USERS/SETLOADING',
     SETURL = 'USERS/SETURL',
     SETSELUSER = 'USERS/SETSELUSER',
     CLEARUSER = 'USERS/CLEARUSER',
     RESETUSERS = 'USERS/RESETUSERS',
     DELETEUSER = 'USERS/DELETEUSER',
     ADDUSER = 'USERS/ADDUSER',
     UPDATEUSER = 'USERS/UPDATEUSER',
     GETUSERBYID = 'USERS/GETUSERBYID'
 }
 
 // Actions
 
 export interface IUserSetLoadingAction {
     type: UsersActionTypes.SETLOADING;
     value: boolean;
 }
 
 export interface IUserClearDataAction {
     type: UsersActionTypes.CLEARUSER;
 }

 export interface IUserSetUrlAction {
     url: string;
     type: UsersActionTypes.SETURL;
 }
 
 export interface ISetSelUserAction {
     selUser: IUser;
     type: UsersActionTypes.SETSELUSER;
 }
 

 export interface IUserByIdAction {
     type: UsersActionTypes.GETUSERBYID;
     selUser: UserType;
 }
 
 export interface IUserAddUserAction {
     type: UsersActionTypes.ADDUSER;
     user: IUser;
 }
 
 export interface IUserUpdateUserAction {
     user: IUser;
     type: UsersActionTypes.UPDATEUSER;
 }
 
 export interface IUserResetAction {
     type: UsersActionTypes.RESETUSERS;
 }
 
 export interface IUserDeleteAction {
     id: number;
     type: UsersActionTypes.DELETEUSER;
 }

 export interface IUsersGetAllAction {
	type: UsersActionTypes.GETALL;
	users: IUser[];
}
 
 export type usersActions =
     | IUsersGetAllAction
     | IUserSetLoadingAction
     | IUserSetUrlAction
     | ISetSelUserAction
     | IUserClearDataAction
     | IUserResetAction
     | IUserDeleteAction
     | IUserByIdAction
     | IUserAddUserAction
     | IUserUpdateUserAction;
 
 