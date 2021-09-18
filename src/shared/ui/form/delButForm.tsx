import React from 'react';
import ConfirmDel, { IInjectedProps } from '../dialog/confirmDel';
import Grid from '@material-ui/core/Grid';
import FormContainer from './formContainer';
import Button from '@material-ui/core/Button';
import genericClasses from 'App.module.css';

interface IProps {
	butText: string;
	disabled?: boolean;
	title: string;
	module: string;
	mTop?: string;
	onConfirmDelete: () => void;
}
const DelButForm: React.SFC<IProps> = (props): JSX.Element => {
	return (
		<ConfirmDel title={props.title} module={props.module} onConfirmDelete={props.onConfirmDelete}>
			{(injectedProps: IInjectedProps) => (
				<FormContainer mTop={props.mTop}>
					<Grid item xs={2} />
					<Grid item xs={10}>
						<Button
							classes={{
								disabled: genericClasses.DisabledOutlineButton
							}}
							variant="outlined"
							size="large"
							className={genericClasses.ErrorButton}
							disabled={props.disabled}
							onClick={() => injectedProps.show()}
						>
							{props.butText}
						</Button>
					</Grid>
				</FormContainer>
			)}
		</ConfirmDel>
	);
};

DelButForm.defaultProps = {
	mTop: '72px',
	disabled: false
};

export default DelButForm;
