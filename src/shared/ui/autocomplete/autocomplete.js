/* eslint-disable react/prop-types, react/jsx-handler-names */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import classes from './autocomplete.module.css';

function NoOptionsMessage(props) {
	return (
		<Typography color="textSecondary" className={props.selectProps.classes.noOptionsMessage} {...props.innerProps}>
			{props.children}
		</Typography>
	);
}

function inputComponent({ inputRef, ...props }) {
	return <div ref={inputRef} {...props} />;
}

function Control(props) {
	return (
		<TextField
			fullWidth
			InputProps={{
				inputComponent,
				inputProps: {
					className: props.selectProps.classes.input,
					inputRef: props.innerRef,
					children: props.children,
					...props.innerProps
				}
			}}
			{...props.selectProps.textFieldProps}
		/>
	);
}

function Option(props) {
	return (
		<MenuItem
			buttonRef={props.innerRef}
			selected={props.isFocused}
			component="div"
			style={{
				fontWeight: props.isSelected ? 500 : 400
			}}
			{...props.innerProps}
		>
			{props.children}
		</MenuItem>
	);
}

function Placeholder(props) {
	return (
		<Typography color="textSecondary" className={props.selectProps.classes.placeholder} {...props.innerProps}>
			{props.children}
		</Typography>
	);
}

function SingleValue(props) {
	return (
		<Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
			{props.children}
		</Typography>
	);
}

function ValueContainer(props) {
	return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props) {
	return (
		<Chip
			tabIndex={-1}
			label={props.children}
			className={classNames(props.selectProps.classes.chip, {
				[props.selectProps.classes.chipFocused]: props.isFocused
			})}
			onDelete={props.removeProps.onClick}
			deleteIcon={<CancelIcon {...props.removeProps} />}
		/>
	);
}

function Menu(props) {
	return (
		<Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
			{props.children}
		</Paper>
	);
}

const components = {
	Control,
	Menu,
	MultiValue,
	NoOptionsMessage,
	Option,
	Placeholder,
	SingleValue,
	ValueContainer
};

const Autocomplete = props => {
	const selectStyles = {
		control: (base, state) => ({
			maxHeight: 500,
			...base
		})
	};
	return (
		<div>
			<NoSsr>
				{props.isMulti ? (
					<Select
						classes={classes}
						isClearable={false}
						isLoading={props.isLoading}
						//menuIsOpen={props.options.length > 0 ? true : false}
						backspaceRemovesValue={false}
						required={props.required}
						textFieldProps={{
							label: props.label,
							InputLabelProps: {
								shrink: true
							}
						}}
						options={props.options}
						error={props.error}
						components={components}
						value={props.options.find(option => option.value === props.value)}
						onChange={props.changed}
						isDisabled={props.readOnly}
						placeholder="Start typing to get suggestions"
						onInputChange={props.onInputChange}
						isMulti
					/>
				) : (
					<Select
						isLoading={props.isLoading}
						styles={selectStyles}
						required={props.required}
						backspaceRemovesValue={false}
						classes={classes}
						isClearable={false}
						//menuIsOpen={props.options.length > 0 ? true : false}
						error={props.error}
						options={props.options}
						components={components}
						value={props.options.find(option => option.value === props.value)}
						onChange={props.onValueChange}
						placeholder="Start typing to get suggestions"
						label={props.label}
						isDisabled={props.readOnly}
						onInputChange={props.onInputChange}
						textFieldProps={{
							label: props.label,
							InputLabelProps: {
								shrink: true
							}
						}}
					/>
				)}
			</NoSsr>
		</div>
	);
};

Autocomplete.propTypes = {
	onInputChange: PropTypes.func,
	label: PropTypes.object.isRequired,
	onValueChange: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired,
	error: PropTypes.bool.isRequired,
	required: PropTypes.bool,
	isMulti: PropTypes.bool,
	value: PropTypes.any.isRequired
};

export default Autocomplete;
