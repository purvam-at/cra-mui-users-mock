import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/EditOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import PlayIcon from '@material-ui/icons/PlayArrowOutlined';
import StopIcon from '@material-ui/icons/StopOutlined';
import ViewIcon from '@material-ui/icons/ViewAgendaOutlined';
import EyeIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import CloseIcon from '@material-ui/icons/Close';
import genericClasses from '../../../App.module.css';

const iconButton = props => {
	let icon = null;
	let inputClasses = [];

	if (props.classes) {
		inputClasses.push(props.classes);
	}

	switch (props.iconType) {
		case 'setting':
			icon = <SettingsIcon fontSize={props.fontSize} className={genericClasses.ActionButton} />;
			break;
		case 'play':
			icon = (
				<PlayIcon
					fontSize={props.fontSize}
					className={props.disabled ? genericClasses.DisableIconButton : genericClasses.AffermativeButton}
				/>
			);
			break;
		case 'stop':
			icon = (
				<StopIcon
					fontSize={props.fontSize}
					className={props.disabled ? genericClasses.DisableIconButton : genericClasses.NegativeButton}
				/>
			);
			break;
		case 'view':
			icon = <ViewIcon fontSize={props.fontSize} className={genericClasses.ActionButton} />;
			break;
		case 'edit':
			icon = <EditIcon fontSize={props.fontSize} className={genericClasses.AffermativeButton} />;
			break;
		case 'delete':
			icon = <DeleteIcon fontSize={props.fontSize} className={genericClasses.NegativeButton} />;
			break;
		case 'eye':
			icon = <EyeIcon fontSize={props.fontSize} className={genericClasses.NegativeButton} />;
			break;
		case 'close':
			icon = <CloseIcon fontSize={props.fontSize} className={genericClasses.NegativeButton} />;
			break;
		default:
			icon = null;
			break;
	}

	return (
		<IconButton
			className={inputClasses.join(' ')}
			//style = {{ color: 'rgba(0, 0, 0, 0.26)' }}
			//className = {genericClasses.DisableIconButton}
			aria-label={props.areaLabel}
			disabled={props.disabled}
			onClick={() => props.onIconClick()}
		>
			{icon}
		</IconButton>
	);
};

iconButton.propTypes = {
	onIconClick: PropTypes.func,
	fontSize: PropTypes.string,
	iconType: PropTypes.string.isRequired,
	areaLabel: PropTypes.string
};
export default iconButton;
