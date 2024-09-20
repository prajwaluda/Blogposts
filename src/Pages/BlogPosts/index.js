import { Box,Typography,Card,CardActionArea,CardContent } from '@mui/material'
import React from 'react'
import { useGetBlogsQuery } from '../../State/api'

export const BlogPosts = () => {
  const {data,isLoading}=useGetBlogsQuery();
  console.log(data)
  return (
    <Box margin="2%">
      {data.map(({
        title,
        body,
        author,
        })=>(
        <Card
            
            sx={{ border:"2px solid grey", background:"none", mb:"5px"}}
          >
              <CardContent>
                <CardActionArea sx={{p:"2px 3px",borderRadius:"5px",display:"flex",justifyContent:"space-around",":hover":{background:"whitesmoke"}}}>
                    <Typography  variant='h3'>{title}</Typography>
                </CardActionArea>
                <Typography sx={{fontSize:{xs:"20px",md:"15px"},mt:"5px" }}>
                {body}
                </Typography>
                <Typography textAlign={"right"} variant='h6'>{author}</Typography>
              </CardContent>
          </Card>
       ))} 
    </Box>
  )
}
