import React from 'react';
import classes from './emptyScreen.module.css';
import NoDataSvg from 'shared/ui/svg/noDataLogo';
import Typography from '@material-ui/core/Typography';

interface IProps {
	emptyText: string;
}

const EmptyScreen: React.SFC<IProps> = (props): JSX.Element => {
	const emptyScreen = () => {
		return (
			<div className={classes.EmptyScreenContainer}>
				<div className={classes.EmptyScreenView}>
					<div className={classes.EmptyIconContainer}>
						<NoDataSvg style={{ width: '16rem', height: 'auto' }} />
					</div>
					<Typography variant="body1" color="textSecondary" className={classes.bodyText}>
						{props.emptyText}
					</Typography>
				</div>
			</div>
		);
	};

	return emptyScreen();
};

export default EmptyScreen;
