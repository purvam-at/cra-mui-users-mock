import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import classes from './verticalDrawer.module.css';

const VerticalDrawer = props => {
	const listItemClasses = { selected: classes.selected };
	let tabs;
	tabs = props.tabs.map(tab => {
		return (
			<ListItem
				button
				className={classes.menuItem}
				key={tab.id}
				onClick={() => {
					props.onClickCallback(tab);
				}}
				disabled={tab.is_disabled}
				selected={props.selectedTab === tab.id}
				classes={listItemClasses}
			>
				<ListItemIcon className={classes.DrawerIcon}>{tab.tab_icon}</ListItemIcon>
				<ListItemText className={classes.DrawerTitle}>{tab.tab_name}</ListItemText>
			</ListItem>
		);
	});

	return (
		<div className={classes.LeftBarContainer}>
			<Grid
				container
				direction="row"
				justifyContent="flex-end"
				alignItems="center"
				className={classes.LeftBarHeader}
			></Grid>
			<Paper className={classes.MiniSideBarContainer}>
				<List component="nav">{tabs}</List>
				<Divider />
			</Paper>
			<Grid
				container
				direction="row"
				justifyContent="flex-end"
				alignItems="center"
				className={classes.LeftBarFooter}
			></Grid>
		</div>
	);
};

export default VerticalDrawer;
