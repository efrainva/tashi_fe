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
        <div
        className='selectedTable'
        >

    <TableContainer component={Paper} className="tableContainer">
        <Table className={classes.table} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="left">Subject <br/><input /> </TableCell>
              <TableCell align="left">Avg. Score <br/><input /> </TableCell>
              <TableCell align="left">date <br/><input /> </TableCell>
              <TableCell align="left"><button>add</button></TableCell>
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
                    {/* {console.log(row,index)} */}
                <TableCell align="right"> {row.subjectid} </TableCell>
                <TableCell align="left"> <input value={row.subject}/> </TableCell>
                <TableCell align="left"> <input value={row.score}/> </TableCell> 
                <TableCell align="left"> <input value={row.date}/> </TableCell> 
                <TableCell align="left">
                    <button>edit</button><button>delete</button>
                </TableCell> 
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
            </div>
)}

export default SelectedStudents;