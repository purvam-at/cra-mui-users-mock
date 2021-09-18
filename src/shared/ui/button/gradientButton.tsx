import React from 'react';
import CustomButton from './button';

interface IProps {
  disabled?: boolean;
  onClick?: () => void; //if not form. this function called
}
const GradientButton: React.SFC<IProps> = (props): JSX.Element => {
  return (
    <CustomButton
      color="secondary"
      variant="contained"
      size="large"
      title="Save"
      type="submit"
      disabled={props.disabled}
      onClick={props.onClick}
    />
  );
};

GradientButton.defaultProps = {
  disabled: false,
};

export default GradientButton;
