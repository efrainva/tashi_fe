import React,{useState} from 'react'
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
    const [subjectOb,setSubjectOb] = useState({
        studentid:props.studentKey,
        subject:null,
        score:null,
        date:null,
    })

    const handleChange = (event) => {
        event.preventDefault()
        const {name,value} = event.target
        setSubjectOb({
            ...subjectOb,
            [name]:value
        })
        setSubjectOb({studentid:props.studentKey})
    }
    const addsub = () => {
        axios
        .post('http://ec2-3-20-225-176.us-east-2.compute.amazonaws.com/subject/add')
        .then()
        .catch()
    }

    const getNewSubjects =()=>{
        axios
        .get('http://ec2-3-20-225-176.us-east-2.compute.amazonaws.com/students/add').
        then()
        .catch()
    }

    return (
        <div
        className='selectedTable'
        >
{console.log(subjectOb)}
    <TableContainer component={Paper} className="tableContainer">
        <Table className={classes.table} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="left">
                    Subject <br/><input onChange={handleChange} name='subject' value={subjectOb.subject}/> 
                </TableCell>
                <TableCell align="left">
                    Avg. Score <br/><input onChange={handleChange} name='score' value={subjectOb.score}/>
                </TableCell>
                <TableCell align="left">date <br/><input onChange={handleChange} type='date' name='date' value={subjectOb.date}/> </TableCell>
                <TableCell align="left"><button onClick={addsub}>add</button></TableCell>
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
                    {/* <button>edit</button><button>delete</button> */}
                </TableCell> 
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
            </div>
)}

export default SelectedStudents;