import React from 'react';
import genericClasses from 'App.module.css';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

interface IProps {
	helperText?: string;
	placeholder?: string; //place holder
	value: any; //value
	disabled?: boolean; //disable select field
	displayField: string;
	valueField: string;
	options: any[];
	onChange?: (event: React.ChangeEvent<{ name?: string; value: unknown }>, child: React.ReactNode) => void; //change event
	className?: string;
}
const SelectField: React.SFC<IProps> = (props): JSX.Element => {
	return (
		<FormControl className={props.className}>
			{props.placeholder ? <InputLabel>{props.placeholder}</InputLabel> : null}
			<Select value={props.value} onChange={props.onChange} disabled={props.disabled}>
				{getMenuItems(props)}
			</Select>
			{props.helperText ? <FormHelperText>{props.helperText}</FormHelperText> : null}
		</FormControl>
	);
};

const getMenuItems = (props: IProps): JSX.Element | JSX.Element[] => {
	const option = props.options.map((m, idx: number) => {
		return (
			<MenuItem key={idx} value={m[props.valueField]}>
				{m[props.displayField]}
			</MenuItem>
		);
	});

	return option;
};

SelectField.defaultProps = {
	className: genericClasses.FullWidthFormControl,
	disabled: false
};
export default SelectField;
