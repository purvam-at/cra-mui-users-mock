/*
	Author : Harsh H. Gandhi
	Created On : 19-11-2018
	This file was created to show error message at below form element
*/
import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import PropTypes from 'prop-types';

const LnInputError = props => {
	return <FormHelperText style={{ color: '#f44336' }}>{props.children}</FormHelperText>;
};

LnInputError.prototype = {
	children: PropTypes.object.isRequired
};

export default LnInputError;
