import React from 'react';
import Grid from '@material-ui/core/Grid';
import genericClasses from 'App.module.css';
import Paper from '@material-ui/core/Paper';
import FormTitle from 'shared/ui/form/formTitle';
import Divider from '@material-ui/core/Divider';
import ButFooter from 'shared/ui/form/butFooter';
import BasicForm, { IInjectedProps } from 'shared/ui/form/form';

interface IProps {
  initValues: any;
  saveButDisable?: boolean;
  onSave: (values: any) => void;
  onCancel: () => void;
  children(props: IInjectedProps): JSX.Element;
  validationSchema: any;
  title: string;
}

const SimpleForm: React.SFC<IProps> = (props: IProps): JSX.Element => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={8} container direction="row" className={genericClasses.MVer16}>
        <Grid item xs>
          <BasicForm
            initValues={props.initValues}
            onSave={props.onSave}
            validationSchema={props.validationSchema}
            saveButDisable={props.saveButDisable}
          >
            {(injectedProps: IInjectedProps) => (
              <>
                <Paper className={genericClasses.FormGroupping}>
                  <FormTitle title={props.title} />
                  <Divider classes={{ root: genericClasses.Mt8Mb16 }} />
                  {
                    props.children({
                      handleChange: injectedProps.handleChange,
                      setFieldValue: injectedProps.setFieldValue,
                      values: injectedProps.values,
                      dirty: injectedProps.dirty,
                    }) as React.ReactNode
                  }
                </Paper>
                <ButFooter onCancel={props.onCancel} disabled={props.saveButDisable} />
              </>
            )}
          </BasicForm>
        </Grid>
      </Grid>
    </Grid>
  );
};

SimpleForm.defaultProps = {
  saveButDisable: false,
};

export default SimpleForm;
