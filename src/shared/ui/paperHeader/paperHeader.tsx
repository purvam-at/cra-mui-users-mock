import React from 'react';
import Grid from '@material-ui/core/Grid';
import genericClasses from 'App.module.css';
import Typography from '@material-ui/core/Typography';

export interface IHeader {
  paperHeaderTitle: string;
}

interface IProps {
  paperHeaderTitle: string;
}

const PaperHeader: React.SFC<IProps> = (props): JSX.Element => {
  return (
    <Grid item xs={12} container alignItems="center" justifyContent="space-between" className={genericClasses.H48}>
      <Typography
        variant="subtitle2"
        color="textSecondary"
        className={genericClasses.HeaderTitle}
        style={{ marginLeft: 16 }}
      >
        {props.paperHeaderTitle}
      </Typography>
      {props.children}
    </Grid>
  );
};

export default PaperHeader;
