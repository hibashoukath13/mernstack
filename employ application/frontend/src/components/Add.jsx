import { Button, Table, TableContainer, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = (props) => {
  var [input, Setinput] = useState({ Name: "", Age: "", Dept: "", Sal: ""})
  var navigate =useNavigate()
  var location = useLocation()
  console.log("a",location.state)

  const inputHandler = (e) => {
    Setinput({ ...input,[e.target.name]:e.target.value })
    console.log(input)
  }
  const addHandler = () => {
    if (location.state !== null) {
      axios.put("http://locationhost:3004/update/"+location.state.val._id,input)
        .then((res) => {
          alert(res.data.massage)
          navigate('/view')
        })
    }
  else{
      
      axios.post("http://localhost:3004/add",input)
        .then((res) => {
          alert(res.data.message)
          navigate('/view')
      })
           
}
  }
  useEffect(() => {
    if(location.state !==null)
    Setinput({
      ...input,
      Name:location.state.val.Name,
      Age:location.state.val.Age,
      Dept:location.state.val.Dept,
      Sal:location.state.val.Sal
    })
  }, [])
  
  return (
    <div>
      <br /><br /><br /><br />
      <Typography variant='h3' align='center'>Add Details</Typography>
      <TextField
        required
        id='outlined-required'
        label='Name'
        type='text'
        name='Name'
        value={input.Name}
        onChange={inputHandler}
      />&nbsp;&nbsp;&nbsp;&nbsp;


      <TextField
        required
        id='outlined-required'
        label='Age'
        name='Age'
        value={input.Age}
        onChange={inputHandler}
      />
      <br /><br />
      <TextField
      required
        id='outlined-required'
        label='Department'
        type='text'
        name='Dept'
        value={input.Dept}
        onChange={inputHandler}
        />&nbsp;&nbsp;&nbsp;&nbsp;

      <TextField
        required
        id='outlined-required'
        label='Salary'
        name='Sal'
        value={input.Sal}
        onChange={inputHandler}
      />
      <br /><br />
      <Button variant='contained' onClick={addHandler}>Submit</Button>
    
    </div>
  )
}

export default Add
