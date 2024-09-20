import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Navbar = () => {
    const navigate = useNavigate();
  return (
    <Box >
      <AppBar sx={{color:"black"}} position="static">
        <Toolbar sx={{background:"grey",justifyContent:"space-around" }}>
          <Typography variant="h4" fontWeight="550" width={"50%"}>
              Blogss
          </Typography>
          <Box sx={{display:"flex", alignItems:"center", gap:"3%",flexGrow:1}}>
            <Button sx={{fontWeight:"550"}} color="inherit" onClick={()=>navigate("/home")}>Home</Button>
            <Button sx={{fontWeight:"550"}} color="inherit" onClick={()=>navigate("/register")}>Register</Button>
            <Button sx={{fontWeight:"550"}} color="inherit" onClick={()=>navigate("/login")}>Login</Button>
            <Button sx={{fontWeight:"550"}} color="inherit" onClick={()=>navigate("/posts")}>Blog Posts</Button>
            <Button sx={{fontWeight:"550"}} color="inherit" onClick={()=>navigate("/writeblog")}>Create Blog</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet/>
    </Box>
  )
}
