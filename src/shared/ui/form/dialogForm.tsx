import React from 'react';
import BasicForm, { IInjectedProps } from 'shared/ui/form/form';
import ButFooter from 'shared/ui/form/butFooter';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import LoadingSpinner from 'shared/ui/loader/loadingSpinner';

interface IProps {
	initValues: any;
	saveButDisable?: boolean;
	onSave: (values: any) => void;
	onCancel: () => void;
	children(props: IInjectedProps): JSX.Element;
	validationSchema: any;
}

const DialogForm: React.SFC<IProps> = (props: IProps): JSX.Element => {
	const displayLoader = (loaderState: boolean): JSX.Element | null => {
		// check loader bit from its respective props
		return loaderState ? <LoadingSpinner type="dialog" /> : null;
	};

	return (
		<BasicForm
			initValues={props.initValues}
			onSave={props.onSave}
			validationSchema={props.validationSchema}
			saveButDisable={props.saveButDisable}
		>
			{(injectedProps: IInjectedProps) => (
				<React.Fragment>
					<DialogContent>
						{
							props.children({
								handleChange: injectedProps.handleChange,
								setFieldValue: injectedProps.setFieldValue,
								values: injectedProps.values,
								dirty: injectedProps.dirty
							}) as React.ReactNode
						}
					</DialogContent>
					<DialogActions>
						<ButFooter onCancel={props.onCancel} disabled={props.saveButDisable} />
					</DialogActions>
					{displayLoader(props.saveButDisable as boolean)}
				</React.Fragment>
			)}
		</BasicForm>
	);
};

export default DialogForm;
