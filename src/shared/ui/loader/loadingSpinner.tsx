import React from 'react';
import style from './loadingSpinner.module.css';
import Typography from '@material-ui/core/Typography';

interface IProps {
	type?: string;
	status?: boolean;
}

const LoadingSpinner: React.SFC<IProps> = (props): JSX.Element => {
	return (
		<>
			{props.status && (
				<div className={props.type === 'dialog' ? style.LoadingDialogContainer : style.LoadingContainer}>
					<div className={style.LoadingBlock}>
						<svg className={style.spinner} viewBox="0 0 50 50">
							<circle className={style.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
						</svg>
						<Typography variant="subtitle2" className={style.LoadingText}>
							Loading . . .
						</Typography>
					</div>
				</div>
			)}
		</>
	);
};

LoadingSpinner.defaultProps = {
	status: false
};

export default LoadingSpinner;
