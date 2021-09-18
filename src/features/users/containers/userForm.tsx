import React from 'react';
import UserFormComp from '../components/userForm';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { IAppState } from 'store/store';
import { IUser, UserType } from '../interface/users.interface';
import { createUser, updateUser, getUserById, clearUserData } from '../store/action/users.action';

interface IMatchParams {
  id: string;
}

interface IProps extends RouteComponentProps<IMatchParams> {
  selUser: UserType;
  loading: boolean;
  userActionCompleted: boolean;
  redirectUrl: string;

  createUser: typeof createUser;
  updateUser: typeof updateUser;
  getUserById: typeof getUserById;
  clearUserData: typeof clearUserData;
}

class UserForm extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.onRefreshForm()) {
      this.props.getUserById(this.props.match.params.id);
    }
  }

  componentDidUpdate = () => {
    if (this.props.userActionCompleted) {
      this.goToUsersList();
    }
  };

  componentWillUnmount() {
    if (!this.props.history.location.pathname.includes('/user')) {
      this.props.clearUserData();
    }
  }
  render() {
    return (
      <UserFormComp
        user={this.props.selUser}
        onSave={this.onSaveUser}
        onCancel={this.onClickCancel}
        loading={this.props.loading}
      />
    );
  }

  onRefreshForm = (): boolean => {
    return Boolean(this.props.match.params.id !== 'new' && this.props.match.params.id && this.props.selUser === null);
  };

  onSaveUser = (user: IUser): void => {
    if (user.id) {
      this.props.updateUser(user);
    } else {
      this.props.createUser(user);
    }
    this.goToUsersList();
  };

  onClickCancel = (): void => {
    this.goToUsersList();
  };

  goToUsersList = () => {
    this.props.history.push(this.props.redirectUrl);
  };
}

const mapStateToProps = (state: IAppState) => {
  return {
    selUser: state.users.selUser,
    loading: state.users.loading,
    userActionCompleted: state.users.userActionCompleted,
    redirectUrl: state.users.redirectUrl,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUserById: (userId: number) => dispatch(getUserById(userId)),
    createUser: (user: IUser) => dispatch(createUser(user)),
    updateUser: (user: IUser) => dispatch(updateUser(user)),
    clearUserData: () => dispatch(clearUserData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
