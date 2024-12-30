import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
  var [user, setuser] = useState([])
  var navigate =useNavigate()
  useEffect(() => {
    axios.get("http://localhost:3004/get")
      .then((res) => {
        console.log(res.data)
        setuser(res.data)
      })
},[])
  const delval = (id) => {
    console.log(id)
    axios.delete("http://localhost:3004/remove/"+id)
      .then((res) => {
        alert(res.data.message)
        window.location.reload()
      })
  }
     const edival = (val) => {
     navigate("/add",{state:{val}})
       }
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell>AGE</TableCell>
              <TableCell>DEPARTMENT</TableCell>
              <TableCell>SALARY</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((u) => {
              return (
                <TableRow>
                  <TableCell>{u.Name}</TableCell>
                  <TableCell>{u.Age}</TableCell>
                  <TableCell>{u.Dept}</TableCell>
                  <TableCell>{u.Sal}</TableCell>
                  <TableCell>
                    <Button variant='contained' onClick={() => { delval(u._id) }}>Delete</Button>&nbsp;&nbsp;
                    <Button variant='contained' onClick={() => { edival(u) }}>Edit</Button>
                  </TableCell>
                </TableRow>
              )
            })}

         </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default View
