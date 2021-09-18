import React from 'react';
import genericClasses from 'App.module.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import classes from '../Login.module.css';
import Typography from '@material-ui/core/Typography';
import Form from 'shared/ui/form/form';
import Field from 'shared/ui/form/inputField';
import { ILoginVal } from '../interface/login.interface';

//for prod
const initialValues: any = {
  authfield: '',
  password: '',
};

// for dev
// const initialValues: any = {
// 	authfield: '8866895046',
// 	password: '@12345@',
// };

const validations: any = {
  authfield: 'mobile',
  password: 'password',
};

// props which are used in Login Form
export interface IProps {
  enableButton?: boolean; // disable login button after click
  loading: boolean; // flag to handle save button state
  onLogin: (userData: ILoginVal) => void; // login button event
}

const LoginForm = (props: IProps): JSX.Element => {
  //initial login form value
  return (
    <>
      <Typography variant="h4" className={[genericClasses.Mb16, genericClasses.TextCenter].join(' ')}>
        HSC General Admin
      </Typography>
      <Grid container direction="row">
        <Grid item xs={12}>
          <Form
            initValues={initialValues}
            onSave={(loginVal: any) => {
              console.log(loginVal);
            }}
            validationSchema={validations}
            saveButDisable={false}
          >
            {() => (
              <>
                <Grid container direction="column">
                  <Grid item xs={12} className={genericClasses.Mb8}>
                    <Field fullWidth={true} label="" type="number" placeholder="Enter Mobile No." name="authfield" />
                  </Grid>
                  <Grid item xs={12} className={genericClasses.Mb8}>
                    <Field fullWidth={true} label="" type="password" placeholder="Enter Password" name="password" />
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  className={classes.Submit}
                >
                  <Button color="default" variant="text" className={genericClasses.GreyButton}>
                    Forgot Password
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                    classes={{ disabled: genericClasses.ContainedDisabled }}
                    disabled={props.loading}
                  >
                    Login
                  </Button>
                </Grid>
              </>
            )}
          </Form>
        </Grid>
      </Grid>
    </>
  );
};
export default LoginForm;
