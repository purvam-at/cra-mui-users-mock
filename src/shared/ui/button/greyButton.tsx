import React from 'react';
import CustomButton from './button';
import genericClasses from 'App.module.css';

interface IProps {
	onClick: () => void;
}
const GreyButton: React.SFC<IProps> = (props): JSX.Element => {
	return (
		<CustomButton
			title="Cancel"
			color="default"
			variant="text"
			size="large"
			class={genericClasses.GreyButton}
			onClick={props.onClick}
		/>
	);
};
export default GreyButton;
