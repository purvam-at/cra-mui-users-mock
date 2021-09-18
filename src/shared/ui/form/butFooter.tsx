import React from 'react';
import Grid from '@material-ui/core/Grid';
import genericClasses from 'App.module.css';
import GradientButton from '../button/gradientButton';
import GreyButton from '../button/greyButton';
interface IProps {
  disabled?: boolean;
  onCancel: () => void;
  onSave?: () => void; // if butFooter not used in form. on save this funtion called
}
const ButFooter: React.SFC<IProps> = (props): JSX.Element => {
  return (
    <Grid container direction="row" justifyContent="flex-end" className={genericClasses.Mb16}>
      <GreyButton onClick={props.onCancel} />
      <GradientButton disabled={props.disabled} onClick={props.onSave} />
    </Grid>
  );
};

ButFooter.defaultProps = {
  disabled: false,
};
export default ButFooter;
