import React from 'react';
import UsersListComp from '../components/usersList';
import { IAppState } from 'store/store';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { IUser, UserType } from '../interface/users.interface';
import { clearUserData, deleteUser, getUsers, setRedirectUrl, setSelUser } from '../store/action/users.action';
import { showFailureToast, showSuccessToast } from 'shared/ui/toaster/toaster.actions';

interface IProps extends RouteComponentProps {
  setSelUser: typeof setSelUser;
  showSuccessToast: typeof showSuccessToast;
  showFailureToast: typeof showFailureToast;
  clearUserData: typeof clearUserData;
  deleteUser: typeof deleteUser;
  getUsers: typeof getUsers;
  users: IUser[];
  setRedirectUrl: typeof setRedirectUrl;
}

class UsersList extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.loadInitData();
    }
  }

  componentWillUnmount() {
    if (!this.props.history.location.pathname.includes('/user')) {
      this.props.clearUserData();
    }
  }

  render() {
    return (
      <UsersListComp
        users={this.props.users}
        onAdd={this.onAdd}
        onEdit={this.onEdit}
        onConfirmDelete={this.onConfirmDelete}
      />
    );
  }

  loadInitData = async () => {
    this.reloadUsers();
  };

  reloadUsers = () => {
    const queryParams = this.setURL();
    this.props.getUsers(queryParams);
  };

  onAdd = (): void => {
    this.props.setSelUser(null);
    this.props.history.push('/user/new');
  };

  onEdit = (user: IUser): void => {
    this.props.setSelUser(user);
    this.props.history.push('/user/' + user.id);
  };

  onConfirmDelete = (user: IUser) => {
    this.props.deleteUser(user.id);
  };

  setURL = () => {
    const url = '/user';
    this.props.setRedirectUrl(url);
    this.props.history.push(url);
  };

  failureToast = (msg: string): void => {
    this.props.showFailureToast(msg);
  };
}

const mapStateToProps = (state: IAppState) => {
  return {
    users: state.users.users,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUsers: () => dispatch(getUsers()),
    clearUserData: () => dispatch(clearUserData()),
    deleteUser: (userId: number) => dispatch(deleteUser(userId)),
    setSelUser: (user: UserType) => dispatch(setSelUser(user)),
    showFailureToast: (msg: string) => dispatch(showFailureToast(msg)),
    setRedirectUrl: (url: string) => dispatch(setRedirectUrl(url)),
    showSuccessToast: (msg: string) => dispatch(showSuccessToast(msg)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
