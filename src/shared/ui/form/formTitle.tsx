import React from 'react';
import Grid from '@material-ui/core/Grid';
//import Label from './label';
import genericClasses from 'App.module.css';
import Typography from '@material-ui/core/Typography';

interface IProps {
  title: string;
}
const FormTitle: React.SFC<IProps> = (props): JSX.Element => {
  return (
    <Grid container direction="row" alignItems="center" justifyContent="space-between">
      {/* <Label title={props.title} variant="subtitle2" /> */}
      <Typography variant="subtitle2" className={genericClasses.HeaderTitle}>
        {props.title}
      </Typography>
    </Grid>
  );
};
export default FormTitle;
