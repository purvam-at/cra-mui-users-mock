import React from 'react';
import ConfirmDel, { IInjectedProps } from '../dialog/confirmDel';
import IconButton from 'shared/ui/iconButton/iconButton';

interface IProps {
	title: string;
	module: string;
	isUserAllowed?: boolean;
	// module: T;
	onConfirmDelete: () => void;
}
const DelButGrid: React.SFC<IProps> = (props): JSX.Element => {
	return (
		<>
			<ConfirmDel title={props.title} module={props.module} onConfirmDelete={props.onConfirmDelete}>
				{(injectedProps: IInjectedProps) => (
					<>
						{!props.isUserAllowed && (
							<IconButton
								iconType="delete"
								fontSize="small"
								areaLabel="Delete"
								onIconClick={() => injectedProps.show()}
							/>
						)}
					</>
				)}
			</ConfirmDel>
		</>
	);
};

DelButGrid.defaultProps = {
	isUserAllowed: false
};

export default DelButGrid;
