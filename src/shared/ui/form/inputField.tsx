import React from 'react';
import genericClasses from 'App.module.css';
import { Field as FormikField, ErrorMessage } from 'formik';
import { LnTextField } from 'shared/inputTypes';
import LnInputError from 'shared/inputError';
import FieldContainer from './fieldContainer';

interface IProps {
  type?: string;
  label?: string;
  placeholder?: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  style?: object;
  fullWidth?: boolean;
  disabled?: boolean;
  formContainerClassName?: any;
  mTop?: string;
  mBottom?: string;
  xs?: any;
  isRequired?: boolean; // this is to show astreik * sign in label for required fields.
}
const Field: React.SFC<IProps> = (props): JSX.Element => {
  return (
    <FieldContainer
      xs={props.xs}
      label={props.label}
      formContainerClassName={props.formContainerClassName}
      mTop={props.mTop}
      mBottom={props.mBottom}
      isRequired={props.isRequired}
    >
      <FormikField
        type={props.type}
        className={props.fullWidth ? genericClasses.FullWidthFormControl : genericClasses.FormControl}
        placeholder={props.placeholder}
        name={props.name}
        component={LnTextField}
        disabled={props.disabled}
        style={props.style}
        required
      />
      <ErrorMessage name={props.name} component={LnInputError} />
    </FieldContainer>
  );
};

Field.defaultProps = {
  type: 'text',
  fullWidth: false,
  disabled: false,
};

export default Field;
