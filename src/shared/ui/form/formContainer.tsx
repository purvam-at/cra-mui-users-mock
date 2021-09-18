import React from 'react';
import * as Grid from '@material-ui/core/Grid';

interface IProps {
  alignItems?: Grid.GridItemsAlignment;
  mTop?: string;
  mBottom?: string;
}

const FormContainer: React.SFC<IProps> = (props): JSX.Element => {
  return (
    <Grid.default
      container
      direction="row"
      alignItems={props.alignItems}
      justifyContent="flex-start"
      style={{ marginTop: props.mTop, marginBottom: props.mBottom }}
    >
      {props.children}
    </Grid.default>
  );
};

FormContainer.defaultProps = {
  alignItems: 'baseline',
  mTop: '8px',
  mBottom: '16px',
};

export default FormContainer;
