import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
          <AppBar>
              <Toolbar>
                  <Typography variant='h6'>Home</Typography>
                  <Link to='/add'>
                    <Button variant='contained' color='primary'>Add</Button>  
                  </Link>

                  <Link to='/view'>
                      <Button variant='contained' color='primary'>View</Button>
                    </Link>
              </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
