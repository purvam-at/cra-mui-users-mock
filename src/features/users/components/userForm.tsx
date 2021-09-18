/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Form from 'shared/ui/form/simpleForm';
import { IUser, UserType } from '../interface/users.interface';
import Field from 'shared/ui/form/inputField';
import Grid from '@material-ui/core/Grid';

const initialValues: any = {
  id: 0,
  firstname: '',
  lastname: '',
  email: '',
};

const validations: any = {
  firstname: { rule: 'required', name: 'First Name' },
  lastname: { rule: 'required', name: 'Last Name' },
  email: { rule: 'required', name: 'Email' },
};

interface IProps {
  user: UserType;
  loading: boolean;
  onSave: (user: IUser) => void;
  onCancel: () => void;
}

const UserForm = (props: IProps): JSX.Element => {
  const onClickSave = (user: IUser) => {
    props.onSave(user);
  };
  const createUserObject = (user: IUser) => {
    return {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    };
  };
  const userRec = (props.user && createUserObject(props.user)) || initialValues;
  return (
    <>
      <Form
        title="User Form"
        initValues={userRec}
        onSave={(user: IUser) => {
          onClickSave(user);
        }}
        onCancel={props.onCancel}
        validationSchema={validations}
        saveButDisable={props.loading}
      >
        {() => (
          <Grid container direction="column">
            <Field isRequired type="text" label="First Name" placeholder="First Name" name="firstname" />
            <Field isRequired type="text" label="Last Name" placeholder="Last Name" name="lastname" />
            <Field isRequired type="text" label="Email" placeholder="Email" name="email" />
          </Grid>
        )}
      </Form>
    </>
  );
};

export default UserForm;
