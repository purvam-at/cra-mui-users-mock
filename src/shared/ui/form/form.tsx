import React from 'react';
import { Formik } from 'formik';
import { IValidationRule, createValidSchema } from 'shared/services/validations/validations';
import genericClasses from 'App.module.css';

interface IProps {
  initValues: any;
  saveButDisable?: boolean;
  validationSchema: any;
  onSave: (values: any) => void;
  children(props: IInjectedProps): JSX.Element;
}

export interface IInjectedProps {
  setFieldValue: { (field: string, value: any): void };
  values: any;
  handleChange: any;
  dirty: boolean;
}

const getValidationSchema = (validation: { string: string | IValidationRule }) => {
  return createValidSchema(validation);
};

const Form: React.SFC<IProps> = (props: IProps): JSX.Element => {
  const onSubmit = (values: any) => {
    props.onSave(values);
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={props.initValues}
      onSubmit={(values) => onSubmit(values)}
      validateOnChange={false}
      validationSchema={() => getValidationSchema(props.validationSchema)}
      render={({ handleSubmit, handleChange, setFieldValue, values, dirty }) => (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <div className={genericClasses.PosRel}>
            {
              props.children({
                handleChange: handleChange,
                setFieldValue: setFieldValue,
                values: values,
                dirty: dirty,
              }) as React.ReactNode
            }
          </div>
        </form>
      )}
    />
  );
};

export default Form;
