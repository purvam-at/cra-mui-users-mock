import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Field as FormikField, ErrorMessage } from 'formik';
import { LnCheckbox } from 'shared/inputTypes';
import LnInputError from 'shared/inputError';
import FieldContainer from './fieldContainer';
import Typography from '@material-ui/core/Typography';

interface IProps {
  label: string;
  name: string;
  message?: string;
  disabled?: boolean;
  required?: boolean;
  color?: string;
  onChange?: (event: React.ChangeEvent<{ name?: string; value: unknown }>) => void;
}
const Checkbox: React.SFC<IProps> = (props: IProps): JSX.Element => {
  return (
    <FieldContainer label={props.label} alignItems="center">
      <Grid container direction="row" alignItems="center" justifyContent="flex-start">
        <FormikField
          name={props.name}
          component={LnCheckbox}
          onChange={props.onChange}
          required={props.required}
          disabled={props.disabled}
          color={props.color}
        />
        <Typography variant="body2" color="textSecondary">
          {props.message}
        </Typography>
      </Grid>
      <ErrorMessage name={props.name} component={LnInputError} />
    </FieldContainer>
  );
};

Checkbox.defaultProps = {
  color: 'primary',
};

export default Checkbox;
