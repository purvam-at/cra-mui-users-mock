/**
 * Summary : Login Support Component
 *
 * Description. Support Card is shown below login form
 *
 * @file   loginSupport.tsx
 * @author Yash.
 * @since  19/10/2019
 */

import React from 'react';
import genericClasses from 'App.module.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import classes from '../Login.module.css';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import PhoneIcon from '@material-ui/icons/PhoneAndroidOutlined';
import Typography from '@material-ui/core/Typography';

const LoginSupport = (): JSX.Element => {
  return (
    <Paper elevation={1} className={[genericClasses.Mt32, genericClasses.P20].join(' ')}>
      <Grid container direction="column" justifyContent="flex-start">
        <Typography
          variant="body2"
          color="textSecondary"
          className={[genericClasses.Mb16, genericClasses.TextCenter].join(' ')}
        >
          Support
        </Typography>
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Grid item container direction="row" alignItems="center" justifyContent="center" xs={6}>
            <EmailIcon className={[classes.SupportIcon, genericClasses.Mr8].join(' ')} />
            <Typography variant="body1" color="textSecondary">
              help@xxxxxxxxxx.com
            </Typography>
          </Grid>
          <Grid item container direction="row" alignItems="center" justifyContent="center" xs={6}>
            <PhoneIcon className={[classes.SupportIcon, genericClasses.Mr8].join(' ')} />
            <Typography variant="body1" color="textSecondary">
              +91-94XXXXXXXX
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LoginSupport;
