import { Box, Typography ,Button } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddProject from '../Component/AddProject';
import React from 'react'

function Myprojects() {
  return (
     <Box>
      <Box>
        <Typography variant='h3'>
          My Projects
        </Typography>
      </Box>
      <Box>
        {/* Collection Of Projects */}
        <Box>
            <Typography variant='h5'>
              Projects Titles
            </Typography>
            <Box>
              <AddProject/>
            </Box>
            <Box>
              <Button startIcon={<GitHubIcon />}></Button>
              <Button startIcon={<EditIcon />}></Button>
              <Button startIcon={<DeleteIcon />}></Button>
            </Box>
        </Box>
      </Box>
     </Box>
  )
}

export default Myprojects
