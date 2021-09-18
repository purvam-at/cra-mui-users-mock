import React from 'react';
import Typography from '@material-ui/core/Typography';

interface IProps {
  title: any;
  color?: any;
  variant: any;
  className?: any;
  style?: any;
}
const Label: React.SFC<IProps> = (props): JSX.Element => {
  return (
    <Typography className={props.className} variant={props.variant} color={props.color} style={props.style}>
      {props.title}
    </Typography>
  );
};

Label.defaultProps = {
  color: 'textSecondary',
};

export default Label;
