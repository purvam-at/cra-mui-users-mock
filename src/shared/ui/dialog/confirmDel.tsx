import React from 'react';
import ToggleContent from '../toggleContent';
import ConfirmationDialog from 'shared/ui/dialog/dialog';

interface IProps {
	title: string;
	module: string;
	onConfirmDelete: () => void;
	children(props: IInjectedProps): JSX.Element;
}
export interface IInjectedProps {
	show(): void;
}
const ConfirmDel: React.SFC<IProps> = (props): JSX.Element => {
	const onConfirmDelete = (hide: () => void) => {
		props.onConfirmDelete();
		hide();
	};
	return (
		<ToggleContent
			toggle={show => (
				<React.Fragment>
					{
						props.children({
							show: show
						}) as React.ReactNode
					}
				</React.Fragment>
			)}
			content={hide => (
				<ConfirmationDialog
					open={true}
					confirmDelete={() => onConfirmDelete(hide)}
					cancelDelete={hide}
					module={props.module}
					title={props.title}
				/>
			)}
		/>
	);
};

//DelButForm.defaultProps = {
//  disabled: false
//};

export default ConfirmDel;
