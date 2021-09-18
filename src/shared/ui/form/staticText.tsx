import React from 'react';
import FieldLabel from './fieldLabel';
import FormContainer from './formContainer';

interface IProps {
	label: string;
	text: string;
	mTop?: string;
}
const StaticText: React.SFC<IProps> = (props): JSX.Element => {
	return (
		<FormContainer alignItems="flex-start" mTop={props.mTop}>
			<FieldLabel title={props.label} variant="body2" />
			<FieldLabel title={props.text} variant="body1" xs={10} />
		</FormContainer>
	);
};

StaticText.defaultProps = {
	mTop: '20px'
};

export default StaticText;
