import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import genericClasses from 'App.module.css';

class TablePaginationActions extends Component {
	render() {
		const { count, page, rowsPerPage } = this.props;
		return (
			<div className={genericClasses.Pagination}>
				<IconButton
					onClick={this.handleFirstPageButtonClick}
					disabled={page === 0}
					aria-label="First Page"
				> {<FirstPageIcon />}
				</IconButton>
				<IconButton
					onClick={this.handleBackButtonClick}
					disabled={page === 0}
					aria-label="Previous Page"
				> {<KeyboardArrowLeft />}
				</IconButton>
				<IconButton
					onClick={this.handleNextButtonClick}
					disabled={page >= Math.ceil(count / rowsPerPage) - 1}
					aria-label="Next Page"
				>
					{<KeyboardArrowRight />}
				</IconButton>
				<IconButton
					onClick={this.handleLastPageButtonClick}
					disabled={page >= Math.ceil(count / rowsPerPage) - 1}
					aria-label="Last Page"
				>
					{<LastPageIcon />}
				</IconButton>
			</div>
		);
	}

	handleFirstPageButtonClick = event => {
		this.props.onPageChange(event, 0);
	};

	handleBackButtonClick = event => {
		const nextPage = this.props.page - 1;
		this.props.onPageChange(event, nextPage);
	};

	handleNextButtonClick = event => {
		const nextPage = this.props.page + 1;
		this.props.onPageChange(event, nextPage);
	};

	handleLastPageButtonClick = event => {
		const nextPage = Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1);
		this.props.onPageChange(event, nextPage);
	};
}

TablePaginationActions.propTypes = {
	count: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired
};

export default TablePaginationActions
