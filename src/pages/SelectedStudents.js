import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
const useStyles = makeStyles({
    table: {
      minWidth: 650
      // maxWidth: 100,
    }
  });

    const SelectedStudents = (props)=> {
    const classes = useStyles();

    const addsub = () => {

        axios
        .post()
        .then()
        .catch()
    }

    return (
    <TableContainer component={Paper} className="tableContainer">
        <Table className={classes.table} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Subjects </TableCell>
              <TableCell align="right">Avg. Score </TableCell>
              <TableCell align="right"><button>actions</button></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.info.map((row, index) => (
                
              <TableRow
                // onClick={() => {
                //   curserClick(index,row);
                // }}
                // key={row.name}
                >
                    {console.log(row,index)}
                <TableCell align="right">{row.subjectid}</TableCell>
                <TableCell align="right">{row.subject}</TableCell>
                <TableCell align="right">{row.score}</TableCell> 
                <button align="right"> click for more </button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}

export default SelectedStudents;