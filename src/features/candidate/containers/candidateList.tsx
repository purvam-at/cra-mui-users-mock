import React from 'react';
import { IAppState } from 'store/store';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import CandidateListComp from '../components/candidateList';
import { ICandidate, ICandidateFilterObject, CandidateType } from '../interface/candidate.interface';
import { IPaging } from 'shared/interface/interfaces';
import {
	getCandidates,
	setRedirectUrl,
	setSelectedCandidate,
	clearCandidateData,
	deleteCandidate,
} from '../store/action/candidate.action';
import { queryParse, queryStringify } from 'shared/utility';

interface IProps extends RouteComponentProps {
	candidates: ICandidate[];
	totalCount: number;

	getCandidates: typeof getCandidates;
	setSelectedCandidate: typeof setSelectedCandidate;
	setRedirectUrl: typeof setRedirectUrl;
	clearCandidateData: typeof clearCandidateData;
	deleteCandidate: typeof deleteCandidate;
}

interface IState {
	queryParams: any;
}

class CandidateList extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			queryParams: queryParse(this.props.location.search),
		};
	}

	componentDidMount() {
		if (this.props.candidates.length === 0) {
			this.loadInitData();
		}
	}

	componentWillUnmount() {
		if (!this.props.history.location.pathname.includes('/candidate')) {
			this.props.clearCandidateData();
		}
	}

	render() {
		return (
			<CandidateListComp
				candidates={this.props.candidates}
				onHoldCandidate={this.onHoldCandidate}
				totalCount={this.props.totalCount}
				onAdd={this.onAdd}
				onEdit={this.onEdit}
				onConfirmDelete={this.onConfirmDelete}
				paging={this.getPaging()}
				onPageChange={this.onClickPageChange}
			/>
		);
	}

	loadInitData = async () => {
		const { limit, offset } = this.state.queryParams;
		this.reloadPrograms(limit, offset);
	};

	onAdd = (): void => {
		this.props.setSelectedCandidate(null);
		this.props.history.push('/candidate/new');
	};

	onEdit = (candidate: ICandidate): void => {
		this.props.setSelectedCandidate(candidate);
		this.props.history.push('/candidate/' + candidate.id);
	};

	onHoldCandidate = (candidateId: number): void => {
		console.log(candidateId);
	};

	onConfirmDelete = (candidate: ICandidate) => {
		this.props.deleteCandidate(candidate.id);
	};

	reloadPrograms = (limit: number, offset: number) => {
		const queryParams = this.setURL(limit, offset);
		this.setQueryParams(queryParams);
		this.props.getCandidates(queryParams);
	};

	setQueryParams = (queryParams: any): void => {
		this.setState({
			queryParams: queryParams,
		});
	};

	setURL = (limit: number, offset: number): any => {
		const queryParams = this.state.queryParams;
		queryParams.limit = limit;
		queryParams.offset = offset;

		const url = `/candidate?${queryStringify(queryParams)}`;
		this.props.setRedirectUrl(url);
		this.props.history.push(url);
		return queryParams;
	};

	getPaging = (): IPaging => {
		const queryParams = this.state.queryParams;
		return {
			page: queryParams.offset / queryParams.limit,
			rowPerPage: parseInt(queryParams.limit),
		};
	};

	onClickPageChange = (limit: number, page: number): void => {
		const offset: number = limit * page;
		this.reloadPrograms(limit, offset);
	};
}

const mapStateToProps = (state: IAppState) => {
	return {
		candidates: state.candidate.candidates,
		totalCount: state.candidate.totalCount,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		getCandidates: (data: ICandidateFilterObject) => dispatch(getCandidates(data)),
		setRedirectUrl: (url: string) => dispatch(setRedirectUrl(url)),
		setSelectedCandidate: (candidate: CandidateType) => dispatch(setSelectedCandidate(candidate)),
		clearCandidateData: () => dispatch(clearCandidateData()),
		deleteCandidate: (candidateId: number) => dispatch(deleteCandidate(candidateId)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidateList);
