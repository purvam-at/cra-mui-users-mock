import FormErrorMsg from 'shared/services/formErrorMsg';
import { array, string, StringSchema, object, ArraySchema, ObjectSchema, ref } from 'yup';
export interface IValidationRule {
  rule: string;
  name: string;
  properties: any;
}

interface IValidationSchema {
  name?: StringSchema<string | undefined>;
  code?: StringSchema<string | undefined>;
  mobile?: StringSchema<string | undefined>;
  email?: StringSchema<string | undefined>;
  password?: StringSchema<string | undefined>;
  confirmPassword?: StringSchema<string | undefined>;
  otp?: StringSchema<string | undefined>;
  required?: (name: string) => StringSchema<string | undefined>;
  requiredArray?: (name: unknown) => ArraySchema<any>;
  min?: (name: string, length: number) => StringSchema<string | undefined>;
  max?: (name: string, length: number) => StringSchema<string | undefined>;
  nestedArray?: (properties: any) => ArraySchema<any>;
}

const validations: IValidationSchema = {
  name: string().required(FormErrorMsg.required('Name')),
  code: string().max(20, FormErrorMsg.maxLength('Code', 20)).required(FormErrorMsg.required('Code')),
  mobile: string()
    .matches(/^[0-9]{10}$/, FormErrorMsg.mobileNoError('Mobile No', '10'))
    .required(FormErrorMsg.required('Mobile No')),
  email: string().email(FormErrorMsg.emailIdError('Email')).required(FormErrorMsg.required('Email')),
  password: string()
    .min(6, FormErrorMsg.minLength('Password', 6))
    .max(30, FormErrorMsg.maxLength('Password', 30))
    .required(FormErrorMsg.required('Password')),
  confirmPassword: string()
    .min(6, FormErrorMsg.minLength('Confirm Password', 6))
    .max(30, FormErrorMsg.maxLength('Confirm Password', 30))
    .oneOf([ref('password')], 'Confirm Passwords do not match')
    .required(FormErrorMsg.required('Confirm Password')),
  otp: string()
    .required(FormErrorMsg.required('OTP'))
    .matches(/^(\s*|\d+)$/, FormErrorMsg.numberField('OTP'))
    .min(6, FormErrorMsg.minLength('OTP', 6))
    .max(6, FormErrorMsg.maxLength('OTP', 6)),
  required: (name) => {
    return string().required(FormErrorMsg.required(name));
  },
  requiredArray: (name) => {
    return array().required(FormErrorMsg.required(name));
  },
  min: (name, length) => {
    return string().min(length, FormErrorMsg.minLength(name, length));
  },
  max: (name, length) => {
    return string().max(length, FormErrorMsg.maxLength(name, length));
  },
  nestedArray: (properties) => {
    return array().ensure().of(createValidSchema(properties));
  },
};

export const createValidSchema = (vals: any): ObjectSchema<any> => {
  const schema: any = {}; // need to assign initial value
  for (const [key, value] of Object.entries(vals)) {
    schema[key as keyof IValidationSchema] = getValidationRule(value as string | IValidationRule);
  }
  return object().shape(schema);
};

const getValidationRule = (rule: string | IValidationRule) => {
  if ((rule as IValidationRule).name !== undefined && validations.required) {
    return validations.required((rule as IValidationRule).name);
  }
  if ((rule as IValidationRule).properties !== undefined && validations.nestedArray) {
    return validations.nestedArray((rule as IValidationRule).properties);
  }
  return validations[rule as keyof IValidationSchema];
};
