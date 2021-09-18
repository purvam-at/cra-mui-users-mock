import React from 'react';
import Grid from '@material-ui/core/Grid';
import FieldLabel from './fieldLabel';
import FormContainer from './formContainer';
import genericClasses from 'App.module.css';

interface IProps {
  label?: string;
  alignItems?: any;
  formContainerClassName?: any;
  mTop?: string;
  mBottom?: string;
  xs?: any;
  isRequired?: boolean;
}

const FieldContainer: React.SFC<IProps> = (props): JSX.Element => {
  return (
    <FormContainer mTop={props.mTop} mBottom={props.mBottom}>
      <Grid
        container
        direction="row"
        alignItems={props.alignItems}
        justifyContent="flex-start"
        className={[props.formContainerClassName, genericClasses.Mt8Mb8].join(' ')}
      >
        {props.label ? <FieldLabel className={genericClasses.FormLabel} title={props.label} variant="body2" /> : null}

        <Grid item xs>
          {props.children}
        </Grid>
      </Grid>
    </FormContainer>
  );
};

FieldContainer.defaultProps = {
  alignItems: 'baseline',
};

export default FieldContainer;
