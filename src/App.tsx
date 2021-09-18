import React from 'react';
import { Route, Switch, withRouter, Redirect, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ILoginState } from 'features/login/interface/login.interface';
import { IAppState } from 'store/store';
import { IMenu } from 'shared/layout/layout.interface';
import { hideToaster } from './shared/ui/toaster/toaster.actions';
import { hideErrorDialog } from 'shared/ui/errorDialog/errorDialog.actions';
import { IToasterState } from 'shared/ui/toaster/toaster.interface';
import { IErrorDialogState } from 'shared/ui/errorDialog/errorDialog.interface';
import ErrorDialog from 'shared/ui/errorDialog/errorDialog';
import Toaster from 'shared/ui/toaster/toaster';
import Layout from './shared/layout/layout';
import Login from 'features/login/containers/login';
import CandidateList from 'features/candidate/containers/candidateList';
import CandidateForm from 'features/candidate/containers/candidateForm';
import UsersList from 'features/users/containers/usersList';
import UserForm from 'features/users/containers/userForm';

interface IAppProps extends RouteComponentProps {
  hideToaster: typeof hideToaster;
  hideErrorDialog: typeof hideErrorDialog;
  loginDetails: ILoginState;
  toaster: IToasterState;
  errorDialog: IErrorDialogState;
}

class App extends React.Component<IAppProps> {
  render() {
    const redirect = null;
    return (
      <>
        {redirect}
        {this.getRoutes()}
        <Toaster
          open={this.props.toaster.showToaster}
          type={this.props.toaster.toastType}
          message={this.props.toaster.toastMessage}
          handleToasterClose={this.props.hideToaster}
        />
        <ErrorDialog
          open={this.props.errorDialog.showDialog}
          message={this.props.errorDialog.message}
          handleErrorDialogClose={this.props.hideErrorDialog}
        />
      </>
    );
  }

  getRoutes = (): JSX.Element => {
    let routes = this.getDefaultRoute();

    const checkUser = this.checkUserExist();
    if (checkUser) {
      routes = this.getLayoutRoute();
    }
    return routes;
  };

  checkUserExist = (): boolean => {
    return true;
  };

  getDefaultRoute = (): JSX.Element => {
    return (
      <Switch>
        <Route path="/login" exact component={Login} />
        <Redirect to="/login" />
      </Switch>
    );
  };

  getLayoutRoute = (): JSX.Element => {
    return (
      <Layout
        routes={(menu: IMenu[]) => {
          return (
            <Switch>
              <Route path="/candidate/:id" exact component={CandidateForm} />
              <Route path="/candidate" exact component={CandidateList} />
              <Route path="/user/:id" component={UserForm} />
              <Route path="/user" exact component={UsersList} />
              {menu.length > 0 ? <Redirect to={`${menu[0].state}`} /> : null}
            </Switch>
          );
        }}
      />
    );
  };
}
const mapStateToProps = (state: IAppState) => {
  return {
    toaster: state.toaster,
    loginDetails: state.login,
    errorDialog: state.errorDialog,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    hideToaster: () => dispatch(hideToaster()),
    hideErrorDialog: () => dispatch(hideErrorDialog()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
