import React from 'react';
import GridHeader from 'shared/ui/grid/gridHeader';
import { Table, TableBody, TableCell, TableHead, TableRow, TablePagination } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import genericClasses from 'App.module.css';
import Paper from '@material-ui/core/Paper';
import Pagination from 'shared/ui/pagination/pagination';
import IconButton from 'shared/ui/iconButton/iconButton';
import DelButGrid from 'shared/ui/grid/delButGrid';
import { IPaging } from '../../../shared/interface/interfaces';
import { ICandidate } from '../interface/candidate.interface';
import EmptyScreen from 'shared/ui/emptyScreen/emptyScreen';
import classes from '../Candidate.module.css';
import Button from '@material-ui/core/Button';

interface IProps {
  candidates: ICandidate[];
  paging: IPaging;
  totalCount: number;
  onAdd: () => void;
  onHoldCandidate: (candidateId: number) => void;
  onEdit: (candidate: ICandidate) => void;
  onConfirmDelete: (candidate: ICandidate) => void;
  onPageChange: (limit: number, page: number) => void;
}

const CandidateList = (props: IProps): JSX.Element => {
  const getTableRows = (): JSX.Element | JSX.Element[] => {
    const data = props.candidates.map((candidate: ICandidate, index: number) => {
      return (
        <TableRow key={index}>
          <TableCell>{index + 1 + props.paging.page * props.paging.rowPerPage}</TableCell>
          <TableCell>{candidate.sidno}</TableCell>
          <TableCell>{candidate.name}</TableCell>
          <TableCell>{candidate.seat_no}</TableCell>
          <TableCell align="right">
            <Button
              onClick={() => props.onHoldCandidate(candidate.id)}
              variant="contained"
              color={candidate.is_hold ? 'secondary' : 'primary'}
            >
              {candidate.is_hold ? 'Release' : 'Hold'}
            </Button>
            <IconButton
              iconType="edit"
              fontSize="small"
              areaLabel="Delete"
              onIconClick={() => onClickEdit(candidate)}
            />
            <DelButGrid
              title="Candidate"
              module={candidate.name}
              onConfirmDelete={() => props.onConfirmDelete(candidate)}
            />
          </TableCell>
        </TableRow>
      );
    });
    return data;
  };

  const getEmptyScreen = () => {
    return props.candidates.length === 0 && <EmptyScreen emptyText="No Candidates available !" />;
  };

  const onClickAdd = (): void => {
    props.onAdd();
  };

  const onClickEdit = (candidate: ICandidate) => {
    props.onEdit(candidate);
  };

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number): void => {
    props.onPageChange(props.paging.rowPerPage, page);
  };

  return (
    <>
      <GridHeader title="Candidate List" handleBtnClick={onClickAdd} />
      <Grid container justifyContent="center">
        <Grid item xs={12} className={genericClasses.Mt8}>
          <Paper className={classes.CandidateGridHeight}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Sr No</TableCell>
                  <TableCell>Sid</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Seat No.</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{getTableRows()}</TableBody>
            </Table>
            {getEmptyScreen()}
          </Paper>
          <Table>
            <TableBody>
              <TableRow>
                <TablePagination
                  // colSpan={3}
                  count={props.totalCount}
                  rowsPerPage={props.paging.rowPerPage}
                  page={props.paging.page}
                  onPageChange={handleChangePage}
                  ActionsComponent={Pagination as any}
                  rowsPerPageOptions={[]}
                />
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </>
  );
};

export default CandidateList;
