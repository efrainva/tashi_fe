import React,{useState,useEffect} from 'react'
import Nav from './Nav'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import SelectedStudents from './SelectedStudents';

const useStyles = makeStyles({
  table: {
    minWidth: 650
    // maxWidth: 100,
  }
});

const StudentTable = ( props ) => {
  const classes = useStyles();

  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState({
    id:"",
  });
  const [studentInfo, setStudentInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/students")
      .then(res => {
        setStudents(res.data.students);
      })
      .catch(error => {});
  }, []);

  const curserClick = (item,row) => {
    console.log(row.studentid,"row id here",item)
    setSelected(students[item]);
      const url = `http://localhost:3000/subjects/${row.studentid}`
    // console.log(item,row.id)
      axios
      .get(url)
      .then((res)=>{
        setStudentInfo(res.data.subjects)
      })
      .catch(error=>{
        console.log(error,'here')
      })
      console.log(studentInfo,'look at the info')
  };

  return (
    <>
    {/* {console.log(students,selected,studentInfo)} */}
      <Nav  student={selected} studentCap={students.length}/>

      <TableContainer component={Paper} className="tableContainer">
        <Table className={classes.table} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Subjects </TableCell>
              <TableCell align="right">Avg. Score </TableCell>
              <TableCell align="right"><button>actions</button></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((row, index) => (
              <TableRow
                onClick={() => {
                  curserClick(index,row);
                }}
                key={row.name}>
                <TableCell align="right">{row.studentid}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.subjects}</TableCell>
                <TableCell align="right">{row.score}</TableCell>
                <TableCell align="right"><button>details</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
            <SelectedStudents info={studentInfo}/>
      </TableContainer>

      {console.log(studentInfo,'student info here')}
    </>
  );
};

export default StudentTable;