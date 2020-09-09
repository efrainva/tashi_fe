import React from 'react'
import '../App.css'
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableCell from '@material-ui/core/TableCell';

const Nav = (props) => {
        return (<nav> 
            {/* {console.log(props.student)} */}
            <p>logo</p>
            <div class='studentInfo'>

        <div>
            students
            <p>{props.studentCap}</p>
        </div>

        <div >
            
        <TableContainer>
            <Table>
                <TableCell>selected</TableCell>
                <TableCell>{ props.student.name}</TableCell>
            </Table>
        </TableContainer>
        <TableContainer>
            <Table>
                <TableCell>subject</TableCell>
                <TableCell>{props.student.subjects}</TableCell>
            </Table>
        </TableContainer>
        <TableContainer>
            <Table>
                <TableCell>average score</TableCell>
                <TableCell>{props.student.score}</TableCell>
            </Table>
        </TableContainer>
        </div>

    </div>

</nav>
)}

export default Nav;