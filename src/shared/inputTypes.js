/*
	Author : Harsh H. Gandhi
	Created On : 19-11-2018
	This file was created to handle form input types , i.e. to make form element reusable in entire proejct
*/
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//import Autocomplete from './ui/autocomplete/autocomplete';

export const LnTextField = (props) => {
	const form = props.form;
	const field = props.field;
	return (
		//this <FormControl /> tag do not set layout proper if single field is set in form
		//<FormControl error aria-describedby="component-error-text">
		<TextField
			type={props.type}
			name={field.name}
			label={props.label}
			placeholder={props.placeholder}
			value={field.value}
			required={props.required}
			className={props.className}
			helperText={props.helperText}
			style={props.style}
			InputProps={{
				readOnly: props.readOnly ? true : false
			}}
			error={
				Boolean(form.errors[field.name] && form.touched[field.name])
			}
			onKeyUp={props.onKeyUp}
			onChange={field.onChange}
			onBlur={field.onBlur}
			disabled={props.disabled}
		/>
		/* <ErrorMessage name="email" component={LnInputError} />  */
		//</FormControl>
	)
}
// LnTextField.propTypes = {
// 	label: PropTypes.object.isRequired,
// }

export const LnTextArea = (props) => {
	const form = props.form;
	const field = props.field;
	return (
		<TextField
			multiline
			rows="4"
			name={field.name}
			placeholder={props.placeholder}
			label={props.label}
			value={field.value === null ? '' : field.value}
			className={props.className}
			error={
				Boolean(form.errors[field.name] && form.touched[field.name])
			}
			onChange={field.onChange}
			onBlur={field.onBlur}
			disabled={props.disabled}
		/>
	)
}
// LnTextArea.propTypes = {
// 	label: PropTypes.object.isRequired,
// }

export const LnSelect = (props) => {
	const form = props.form;
	const field = props.field;
	return (
		<FormControl required={props.required} className={props.className}
			error={Boolean(form.errors[field.name] && !field.isValid && form.touched[field.name])}>
			<InputLabel htmlFor={field.name}>{props.label}</InputLabel>
			<Select
				input={<Input name={field.name} readOnly={props.readOnly ? true : false} />}
				required={props.required}
				label={props.label}
				value={field.value}
				disabled={props.disabled}
				multiple={props.multiple ? props.multiple : false}
				onChange={props.customChange ? props.onChange : field.onChange}
				className={props.className}
				style={{ width: '100%' }}
			>
				{props.options.map((option, index) => (
					<MenuItem key={index}
						value={option.value}>
						{option.displayValue}
					</MenuItem>
				))}
			</Select>
			<Typography style={{ marginTop: 2 }} color="textSecondary" variant="caption">{props.helperText}</Typography>
		</FormControl>
	)
}
LnSelect.propTypes = {
	//label: PropTypes.object.isRequired,
	options: PropTypes.array.isRequired
}



export const LnDatePicker = (props) => {
	const field = props.field;
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container justifyContent="flex-start">
				<DatePicker
					autoOk
					name={field.name}
					variant="inline"
					placeholder={field.placeholder}
					animateYearScrolling
					format="dd/MM/yyyy"
					margin="normal"
					value={field.value}
					onChange={props.onChange}
				/>
			</Grid>
		</MuiPickersUtilsProvider>)
}

export const LnTimePicker = (props) => {
	const field = props.field;
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container justifyContent="flex-start">
				<TimePicker
					autoOk
					name={field.name}
					variant="inline"
					placeholder={field.placeholder}
					margin="normal"
					value={field.value}
					onChange={props.onChange}
				/>
			</Grid>
		</MuiPickersUtilsProvider>)
}



export const LnCheckbox = (props) => {
	const field = props.field;
	return (
		<Checkbox
			name={field.name}
			value={field.value}
			checked={field.value}
			required={props.required}
			inputProps={{
				readOnly: props.readOnly ? true : false,
			}}
			onChange={props.onChange}
			disabled={props.disabled}
		/>
	)
}
