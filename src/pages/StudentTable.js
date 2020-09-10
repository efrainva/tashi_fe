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
  },

});

const StudentTable = ( props ) => {
  const classes = useStyles();
  const [newStudent,setNewStudent] = useState({
    "name": "",
    "score": null,
  })
  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState({});
  const [studentInfo, setStudentInfo] = useState([]);

  const handleChange = (event) => {
    event.preventDefault()
    const {name,value} = event.target
      setNewStudent({...newStudent,
        [name]:value
      })
  }
  const handleChangeSelected = (event) => {
    event.preventDefault()
    const {name,value} = event.target
      setSelected({...selected,
        [name]:value
      })
  }
  
  useEffect(() => {
    axios
      .get("http://ec2-3-20-225-176.us-east-2.compute.amazonaws.com/students")
      .then(res => {
        setStudents(res.data.students);

      })
      .catch(error => {});
  }, []);

  const curserClick = (item,row) => {
    setSelected(students[item]);
      const url = `http://ec2-3-20-225-176.us-east-2.compute.amazonaws.com/subjects/${row.studentid}`
      axios
      .get(url)
      .then((res)=>{
        setStudentInfo(res.data.subjects)
        if (res.data.subjects.length !== students.subject){
        }
      })
      .catch(error=>{
        console.log(error,'here')
      })
  };

  const resetSubjects = () => {
    
    const url = `http://ec2-3-20-225-176.us-east-2.compute.amazonaws.com/subjects/${selected.studentid}`
      axios
      .get(url)
      .then((res)=>{
        setStudentInfo(res.data.subjects)
        if (res.data.subjects.length !== students.subject){
        }
      })
      .catch(error=>{
        console.log(error,'here')
      })
  }

  const refreshing = () =>{
    axios
      .get("http://ec2-3-20-225-176.us-east-2.compute.amazonaws.com/students")
      .then(res => {
        setStudents(res.data.students);
      })
      .catch(err=> console.log(err));
  }

  const addStudent = () => {
    axios
    .post('http://ec2-3-20-225-176.us-east-2.compute.amazonaws.com/students/add',newStudent)
    .then(()=>refreshing() )
    .catch(err=> console.log(err))
  }

  const editStudent = (id) => {
    axios
    .put(`http://ec2-3-20-225-176.us-east-2.compute.amazonaws.com/students/${id}`,selected)
    .then(()=>refreshing())
    .catch(err=> console.log(err))
  }
  
  const deleteStudent = (id) => {
    axios
    .delete(`http://ec2-3-20-225-176.us-east-2.compute.amazonaws.com/delete/student/${id}`)
    .then(()=>refreshing())
    .catch(err=> console.log(err))
  }

  const addSubject = (id) => {
    axios
    .post('http://ec2-3-20-225-176.us-east-2.compute.amazonaws.com/students/add',)
    .then(()=>refreshing() )
    .catch(err=> console.log(err))
  }

  const editSubject = (id) => {
    axios
    .put(`http://ec2-3-20-225-176.us-east-2.compute.amazonaws.com/subjects/${id}`)
    .then(()=>refreshing())
    .catch(err=> console.log(err))
  }
  
  const deleteSubject = (id) => {
    axios
    .delete(`http://ec2-3-20-225-176.us-east-2.compute.amazonaws.com/delete/subject/${id}`)
    .then(()=>refreshing())
    .catch()
  }

  return (
    <>
    {console.log(selected.studentid)}
      <Nav  student={selected} studentCap={students.length}/>
      <h1>All students</h1>
      <TableContainer component={Paper} className="tableContainer">
        <Table className={classes.table} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Name<br/>
                <input placeholder='name' onChange={handleChange} value={newStudent.name} name='name' />
              </TableCell>
              <TableCell align="left">Subjects</TableCell>
              <TableCell align="left">Avg. Score<br/>
                <input placeholder='100' onChange={handleChange} name='score' value={newStudent.score} />  
              </TableCell>
              <TableCell align="right"><button onClick={addStudent}>add</button></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((row, index) => (
              <TableRow
                onClick={() => {
                  curserClick(index,row);
                }}
                key={row.studentid}>
                  {/* update input with editable value  */}
                   
                <TableCell align="left"> {row.studentid} </TableCell>
                <TableCell align="left"> {row.name} </TableCell>
                <TableCell align="left"> {row.subjects} </TableCell>
                <TableCell align="left"> {(selected.studentid == row.studentid)? <input onChange={handleChangeSelected} name='score' value={selected.score}/>:row.score} </TableCell>
                <TableCell align="left">
                  <button onClick={()=>editStudent(row.studentid)}>edit</button>
                  <button onClick={()=>deleteStudent(row.studentid)}>delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h1>selected student</h1>
      {/* refunc refreshes the subject data and resets the state */}
      <SelectedStudents reFunc={resetSubjects}  studentKey={selected.studentid} info={studentInfo}/>

      {/* {console.log(studentInfo,'student info here')} */}
    </>
  );
};

export default StudentTable;