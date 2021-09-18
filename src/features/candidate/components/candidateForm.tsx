import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Field from 'shared/ui/form/inputField';
import { CandidateType, ICandidate } from '../interface/candidate.interface';
import Form from 'shared/ui/form/simpleForm';
import { IInjectedProps } from 'shared/ui/form/form';
import Checkbox from 'shared/ui/form/formikCheckbox';

const initialValues: any = {
  id: 0, // as it will not reflect in form
  sidno: '',
  name: '',
  seat_no: '',
  is_hold: false,
};

const validations: any = {
  sidno: { rule: 'required', name: 'Student Id no.' },
  name: { rule: 'required', name: 'Name' },
  seat_no: { rule: 'required', name: 'Seat no.' },
};

interface IProps {
  candidate: CandidateType;
  loading: boolean;
  onSave: (candidate: ICandidate) => void;
  onCancel: () => void;
}

const CandidateForm = (props: IProps): JSX.Element => {
  // call on save button click
  const onClickSave = (candidate: ICandidate) => {
    props.onSave(candidate);
  };

  const candidateRec = props.candidate || initialValues;
  return (
    <React.Fragment>
      <Divider />
      <Form
        title="Candidate Form"
        initValues={candidateRec}
        onSave={(candidate: any) => {
          onClickSave(candidate as ICandidate);
        }}
        onCancel={props.onCancel}
        validationSchema={validations}
        saveButDisable={props.loading}
      >
        {(injectedProps: IInjectedProps) => (
          <Grid container direction="column">
            <Field type="text" label="Sid no." placeholder="Sid No." name="sidno" />
            <Field type="text" label="Candidate Name" placeholder="Candidate Name" name="name" />
            <Field type="text" label="Seat No." placeholder="Seat No." name="seat_no" />
            <Checkbox
              name="is_hold"
              label="Status"
              message="Is this candidate on hold ?"
              onChange={injectedProps.handleChange('is_hold')}
            />
          </Grid>
        )}
      </Form>
    </React.Fragment>
  );
};

export default CandidateForm;
