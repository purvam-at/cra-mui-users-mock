import React from 'react';
import genericClasses from 'App.module.css';
import { Field as FormikField, ErrorMessage } from 'formik';
import { LnTextArea } from 'shared/inputTypes';
import LnInputError from 'shared/inputError';
import FieldContainer from './fieldContainer';

interface IProps {
  type?: string;
  fullWidth?: boolean;
  label: string;
  placeholder: string;
  name: string;
}
const TextArea: React.SFC<IProps> = (props): JSX.Element => {
  return (
    <FieldContainer label={props.label}>
      <FormikField
        type={props.type}
        className={props.fullWidth ? genericClasses.FullWidthFormControl : genericClasses.FormControl}
        placeholder={props.placeholder}
        name={props.name}
        component={LnTextArea}
        required
      />
      <ErrorMessage name={props.name} component={LnInputError} />
    </FieldContainer>
  );
};

TextArea.defaultProps = {
  type: 'text',
};

export default TextArea;
