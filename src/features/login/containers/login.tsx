import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import LoginForm from '../components/loginForm';
import LoginOtp from '../components/loginOtp';
import { connect } from 'react-redux';
import { doLogin, verifyOtp, resendOtp } from '../store/login.action';
import { ILoginVal, ILoggedInUser, IOtp, IOtpVal } from '../interface/login.interface';
import Grid from '@material-ui/core/Grid';
import genericClasses from 'App.module.css';
import { IAppState } from 'store/store';
import Paper from '@material-ui/core/Paper';
//import LoginSupport from '../components/loginSupport';

// ActiveScreenName is used to manage the active login screen based on auth data
enum ActiveScreenName {
  Login, // LoginForm
  Otp, // LoginOtp
}

interface IProps extends RouteComponentProps {
  loggedInUser: ILoggedInUser; // logged in user details which gets on login success
  authActionCompleted: boolean; // return true only if api gets success
  loading: boolean; // flag to handle save button state
  doLogin: typeof doLogin; // API method to load Users data from server
  verifyOtp: typeof verifyOtp; // api method to check verified entered otp,
  resendOtp: typeof resendOtp; // resend Otp
}

interface IState {
  activeScreen: ActiveScreenName; // It is use to manage current login screen based on auth data
  enableButton: boolean; // disable button on click,
  authfieldVal: number; // set the mobile number entered while login
}

class Login extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      activeScreen: ActiveScreenName.Login, // by default there will be login screen
      enableButton: true, // by default button will be set true
      authfieldVal: 0, // inital value is 0 due to type number
    };
  }

  // invoke on change of props
  static getDerivedStateFromProps = (props: IProps) => {
    if (props.authActionCompleted) {
      //redirect to lab list only if user edit/add is completed successfully
      return {
        activeScreen: 1, // now active screen will be verify otp
      };
    }
    // necessary to return atleast null
    return null;
  };

  render() {
    return (
      <main className={genericClasses.DefaultRouteContainer}>
        <Grid container direction="row" justifyContent="center" alignItems="center" className={genericClasses.HInherit}>
          <Grid item xs={4}>
            <Paper elevation={1} className={genericClasses.P20} style={{ height: '100%' }}>
              {this.getActiveScreen()}
            </Paper>
          </Grid>
        </Grid>
      </main>
    );
  }

  getActiveScreen(): JSX.Element {
    // if user verified go to otp screen
    if (this.state.activeScreen === 1) {
      return <LoginOtp loading={this.props.loading} onResendOtp={this.onResendOtp} onVerifyOtp={this.onVerifyOtp} />;
    }
    // login screen
    return <LoginForm enableButton={this.state.enableButton} loading={this.props.loading} onLogin={this.onLogin} />;
  }

  toggleButton = (val: boolean) => {
    this.setState({
      enableButton: val,
    });
  };

  setAuthFieldVal = (data: number) => {
    this.setState({
      authfieldVal: data, // now active screen will be verify otp
    });
  };

  // function will check whether login form field are correct,
  onLogin = async (data: ILoginVal): Promise<void> => {
    // disable login button
    this.toggleButton(true);
    // calling login api
    this.props.doLogin(data);
    // set user mobile number authFieldVal
    this.setAuthFieldVal(data.authfield);
    //enable login button
    this.toggleButton(false);
  };

  onVerifyOtp = (data: IOtpVal) => {
    // creating object as per verifyOtp params
    const verifyReqData: IOtp = {
      authfield: this.state.authfieldVal,
      otp: data.otp,
    };
    // calling verify otp api
    this.props.verifyOtp(verifyReqData);
  };

  onResendOtp = () => {
    // creating object as per verifyOtp params
    const resnedReqData: IOtp = {
      authfield: this.state.authfieldVal,
    };
    // calling resend otp api
    this.props.resendOtp(resnedReqData);
  };
}

const mapStateToProps = (state: IAppState) => {
  return {
    loggedInUser: state.login.loggedInUser as ILoggedInUser,
    authActionCompleted: state.login.authActionCompleted,
    loading: state.login.loading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    doLogin: (data: ILoginVal) => dispatch(doLogin(data)),
    verifyOtp: (data: IOtp) => dispatch(verifyOtp(data)),
    resendOtp: (data: IOtp) => dispatch(resendOtp(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
