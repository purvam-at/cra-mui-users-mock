import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { IAppState } from 'store/store';
import CandidateFormComp from '../components/candidateForm';
import { addCandidate, clearCandidateData, getCadidateById, updateCandidate } from '../store/action/candidate.action';
import { ICandidate, CandidateType } from '../interface/candidate.interface';

interface IMatchParams {
  id: string;
}

interface IProps extends RouteComponentProps<IMatchParams> {
  selCandidate: CandidateType;
  redirectUrl: string; //redirect url(redux)
  loading: boolean;
  candidateActionCompleted: boolean;

  addCandidate: typeof addCandidate;
  updateCandidate: typeof updateCandidate;
  getCadidateById: typeof getCadidateById;
  clearCandidateData: typeof clearCandidateData;
}

class CandidateForm extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.onRefreshForm()) {
      this.props.getCadidateById(this.props.match.params.id);
    }
  }
  componentDidUpdate() {
    //redirect to program list only if program edit/add is completed successfully
    if (this.props.candidateActionCompleted) {
      this.goToCandidateList();
    }
  }

  componentWillUnmount() {
    if (!this.props.history.location.pathname.includes('/candidate')) {
      this.props.clearCandidateData();
    }
  }

  render() {
    return (
      <CandidateFormComp
        candidate={this.props.selCandidate}
        onSave={this.onSaveCandidate}
        onCancel={this.onClickCancel}
        loading={this.props.loading}
      />
    );
  }

  onRefreshForm = (): boolean => {
    return Boolean(
      this.props.match.params.id !== 'new' && this.props.match.params.id && this.props.selCandidate === null
    );
  };

  onSaveCandidate = (candidate: ICandidate): void => {
    if (candidate.id) {
      this.props.updateCandidate(candidate);
    } else {
      this.props.addCandidate(candidate);
    }
  };

  onClickCancel = (): void => {
    this.goToCandidateList();
  };

  goToCandidateList = () => {
    this.props.history.push(this.props.redirectUrl);
  };
}

const mapStateToProps = (state: IAppState) => {
  return {
    selCandidate: state.candidate.selCandidate,
    loading: state.candidate.loading,
    redirectUrl: state.candidate.redirectUrl,
    candidateActionCompleted: state.candidate.candidateActionCompleted,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    getCadidateById: (candidateId: number) => dispatch(getCadidateById(candidateId)),
    addCandidate: (candidate: ICandidate) => dispatch(addCandidate(candidate)),
    updateCandidate: (candidate: ICandidate) => dispatch(updateCandidate(candidate)),
    clearCandidateData: () => dispatch(clearCandidateData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidateForm);
