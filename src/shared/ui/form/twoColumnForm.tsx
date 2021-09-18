import React from 'react';
import BasicForm, { IInjectedProps } from 'shared/ui/form/form';
import ButFooter from 'shared/ui/form/butFooter';
import Paper from '@material-ui/core/Paper';
import FormTitle from 'shared/ui/form/formTitle';
import genericClasses from 'App.module.css';
import Divider from '@material-ui/core/Divider';

interface IProps {
	title: string;
	initValues: any;
	saveButDisable?: boolean;
	onSave: (values: any) => void;
	onCancel: () => void;
	children(props: IInjectedProps): JSX.Element;
	validationSchema: any;
}

const TwoColForm: React.SFC<IProps> = (props: IProps): JSX.Element => {
	return (
		<BasicForm
			initValues={props.initValues}
			onSave={props.onSave}
			validationSchema={props.validationSchema}
			saveButDisable={props.saveButDisable}
		>
			{(injectedProps: IInjectedProps) => (
				<React.Fragment>
					<Paper className={[genericClasses.FormGroupping, genericClasses.TCFormPaperHeight].join(' ')}>
						<FormTitle title={props.title} />
						<Divider classes={{ root: genericClasses.Mt8Mb16 }} />
						{
							props.children({
								handleChange: injectedProps.handleChange,
								setFieldValue: injectedProps.setFieldValue,
								values: injectedProps.values,
								dirty: injectedProps.dirty
							}) as React.ReactNode
						}
					</Paper>
					<ButFooter onCancel={props.onCancel} disabled={props.saveButDisable} />
				</React.Fragment>
			)}
		</BasicForm>
	);
};

export default TwoColForm;
