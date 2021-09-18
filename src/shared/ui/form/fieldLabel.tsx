import React from 'react';
import Grid from '@material-ui/core/Grid';
import Label from './label';

interface IProps {
	title?: string;
	variant?: any;
	xs?: any;
	className?: any;
}
const FieldLabel: React.SFC<IProps> = (props): JSX.Element => {
	return (
		<Grid item xs={props.xs}>
			<Label title={props.title} variant={props.variant} className={props.className} />
		</Grid>
	);
};

FieldLabel.defaultProps = {
	variant: 'body2',
	xs: 2
};
export default FieldLabel;
