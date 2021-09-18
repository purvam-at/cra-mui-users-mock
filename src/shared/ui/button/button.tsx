import React from 'react';
import Button from '@material-ui/core/Button';
import { PropTypes } from '@material-ui/core';
import genericClasses from 'App.module.css';

interface IProps {
	color: PropTypes.Color;
	variant: 'text' | 'outlined' | 'contained';
	size: 'small' | 'medium' | 'large';
	title: string;
	class?: string;
	disabled?: boolean;
	type?: 'submit' | 'reset' | 'button';
	onClick?: any;
}
const CustomButton: React.SFC<IProps> = (props): JSX.Element => {
	return (
		<Button
			classes={{ disabled: genericClasses.ContainedDisabled }}
			color={props.color}
			variant={props.variant}
			size={props.size}
			className={props.class}
			disabled={props.disabled}
			type={props.type}
			onClick={props.onClick}
		>
			{props.title}
		</Button>
	);
};

CustomButton.defaultProps = {
	disabled: false,
	type: 'button'
};
export default CustomButton;
