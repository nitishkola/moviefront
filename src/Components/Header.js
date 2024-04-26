import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography,  } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import {NavLink} from 'react-router-dom';
import MovieIcon from '@mui/icons-material/Movie';



const Header = () => {
  const[value, setValue]=useState()
  return (
    <div>
      <AppBar sx={{backgroundColor: '#6495ED'}} position='sticky'>
        <Toolbar>
          <MovieIcon/>
            <Typography>MOVIES AND TV SHOWS</Typography>
            <Tabs textColor='inherit' indicatorColor='primary'  sx={{ml: "auto"}} value={value} onChange={(e,val)=>setValue(val)}>
              <Tab LinkComponent={NavLink} to='/SignUp' label='SignUp'/>
              {/* <Tab LinkComponent={NavLink} to='/SignIn' label='SignIn'/> */}
              <Tab LinkComponent={NavLink} to='/Movies' label='MOVIES'/>
              <Tab LinkComponent={NavLink} to='/Series' label='SERIES'/>
              <Tab LinkComponent={NavLink} to='/form' label='FEEDBACK'/>
              <Tab LinkComponent={NavLink} to='/FetchRegistrations' label='Fetch Registrations'/>
              
              <Tab LinkComponent={NavLink} to='/submissions' label='Feedback Submissions'/>
            </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header