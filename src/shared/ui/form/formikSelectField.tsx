import React from 'react';
//import Grid from '@material-ui/core/Grid';
import genericClasses from 'App.module.css';
import { Field as FormikField, ErrorMessage } from 'formik';
import { LnSelect } from 'shared/inputTypes';
import LnInputError from 'shared/inputError';
import FieldContainer from './fieldContainer';

type Value = string | number;

interface IMenuItem {
	displayValue: string;
	value: Value;
}

interface IProps {
	label: string;
	placeholder: string;
	name: string;
	menuItems: any[];
	displayField: string;
	valueField: string;
	multiple?: boolean;
	disabled?: boolean;
	className?: string;
	helperText?: string;
	onChange?: (event: React.ChangeEvent<{ name?: string; value: unknown }>) => void;
}
const Field: React.SFC<IProps> = (props: IProps): JSX.Element => {
	return (
		<FieldContainer label={props.label}>
			<FormikField
				label={props.placeholder}
				className={props.className}
				placeholder={props.placeholder}
				name={props.name}
				component={LnSelect}
				customChange={props.onChange ? true : false}
				onChange={props.onChange}
				multiple={props.multiple}
				disabled={props.disabled}
				helperText={props.helperText}
				// value={props.value}
				options={getMenuItems(props)}
			/>
			<ErrorMessage name={props.name} component={LnInputError} />
		</FieldContainer>
	);
};

const getMenuItems = (props: IProps): IMenuItem[] => {
	const menuItems = props.menuItems.map(m => {
		return {
			displayValue: m[props.displayField],
			value: m[props.valueField]
		};
	});
	return menuItems;
};

Field.defaultProps = {
	multiple: false,
	disabled: false,
	className: genericClasses.FormControl
};

export default Field;
