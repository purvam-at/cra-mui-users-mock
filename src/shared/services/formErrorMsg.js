/* Author:vidhi
This file is created to use validation messages for forms.
*/
import { string } from 'yup';

const FormErrorMsg = {
	required: fieldName => {
		return `${fieldName} is required field`;
	},
	minLength: (fieldName, length) => {
		return `${fieldName} must be at least ${length} characters`;
	},
	maxLength: (fieldName, length) => {
		return `${fieldName} must be at most ${length} characters`;
	},
	stringWithUnderscoreDotDash: () => {
		return 'Only _ . & - are allowed in special characters';
	},
	stringWithUnderscoreDot: () => {
		return 'Only _ and . is allowed in special characters';
	},
	noSpecialChar: () => {
		return 'No special characters allowed';
	},
	positiveNumber: fieldName => {
		return `${fieldName} must be positive number`;
	},
	mobileNoError: (fieldName, condition) => {
		return `${fieldName} must be ${condition} digits`;
	},
	emailIdError: fieldName => {
		return `Please enter a valid ${fieldName} address `;
	},
	numberField: fieldName => {
		return `${fieldName} must be number`;
	},
	duplicateValue: (field1, field2) => {
		return `${field1} and ${field2} must not be same`;
	},
	onlyCharacters: field1 => {
		return `Only characters are allowed in ${field1} `;
	},
	limitCheck: (fieldName, limitType, limit) => {
		return `${fieldName} value must be ${limitType} ${limit}`;
	},
	onlyRequiredSpecialCharAllowed: specialChar => {
		return `Only ${specialChar} are allowed in special characters`;
	},
	passwordPolicy: fieldName => {
		return `${fieldName} must one numeric character`;
	},
	validField: (fieldName, validFormate) => {
		return `${fieldName} should be valid ${validFormate}`;
	},
	integerValue: fieldName => {
		return `${fieldName} must be an integer`;
	}
};

const validationDefs = {
	name: string()
		.matches(/^[a-zA-Z\s]*$/, FormErrorMsg.onlyCharacters('Name'))
		.required(FormErrorMsg.required('Name')),
	code: string()
		.max(20, FormErrorMsg.maxLength('Code', 20))
		.matches(/[^A-Za-z0-9]+/, FormErrorMsg.noSpecialChar('Code'))
		.required(FormErrorMsg.required('Code')),
	mobile: string()
		.matches(/^[0-9]{10}$/, FormErrorMsg.mobileNoError('Mobile No', '10'))
		.required(FormErrorMsg.required('Mobile No')),
	email: string()
		.email(FormErrorMsg.emailIdError('Email'))
		.required(FormErrorMsg.required('Email')),
}

export const createValidSchema = (validations) => {
	for (const [key, value] of Object.entries(validations)) {
		validations[key] = validationDefs[value]
	}
	return validations;
}


export default FormErrorMsg;
