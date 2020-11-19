import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ITemperatura } from "../../_Logic/Models/ITemperatura"

import * as names from "../../_Logic/_Common/dataNames"

interface IBaseDatosMaterialProps {
  itemsMaterial: ITemperatura[];
}


const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const useStyles = makeStyles({

  table:{
    height: "50%",
  },
  contTable:{
    maxWidth: "50%",
    maxHeight: "500px"
  }
});

export function BaseDatosMaterial(props:IBaseDatosMaterialProps) {
  const classes = useStyles();
  return (
    <TableContainer className={classes.contTable} component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{names.idName}</StyledTableCell>
            <StyledTableCell align="right">{names.tempName}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.itemsMaterial.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.temperature}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
