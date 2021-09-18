import { Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React from 'react';
import GridHeader from 'shared/ui/grid/gridHeader';
import { IUser } from '../interface/users.interface';
import genericClasses from 'App.module.css';
import IconButton from 'shared/ui/iconButton/iconButton';
import DelButGrid from 'shared/ui/grid/delButGrid';
import EmptyScreen from 'shared/ui/emptyScreen/emptyScreen';
import classes from '../Users.module.css';

interface IProps {
  users: IUser[];
  onAdd: () => void;
  onEdit: (user: IUser) => void;
  onConfirmDelete: (user: IUser) => void;
}

const UsersList = (props: IProps) => {
  const getTableRows = () => {
    const data = props.users.map((user, index) => {
      return (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{user.firstname}</TableCell>
          <TableCell>{user.lastname}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell align="right">
            <IconButton iconType="edit" fontSize="small" areaLabel="Edit" onIconClick={() => onClickEdit(user)} />
            <DelButGrid
              title="User"
              module={user.firstname + ' ' + user.lastname}
              onConfirmDelete={() => props.onConfirmDelete(user)}
            />
          </TableCell>
        </TableRow>
      );
    });
    if (data.length === 0) return <TableRow />;
    return data;
  };

  const getEmptyScreen = () => {
    return props.users.length === 0 ? <EmptyScreen emptyText="No Users available !" /> : '';
  };

  const onClickAdd = () => {
    props.onAdd();
  };

  const onClickEdit = (user: IUser) => {
    props.onEdit(user);
  };
  return (
    <>
      <GridHeader title="User List" btnText="Create User" handleBtnClick={onClickAdd} />
      <Grid container justifyContent="center">
        <Grid item xs={12} className={genericClasses.Mt8}>
          <Paper className={classes.UserGridHeight}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Sr No</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{getTableRows()}</TableBody>
            </Table>
            {getEmptyScreen()}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default UsersList;
