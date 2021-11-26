import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@mui/material/Button';
import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo';

function preventDefault(event) {
  event.preventDefault();
}

export default function ProfileInfo() {
  return (
    <React.Fragment>
      <Box>
  
      <Typography component="p" variant="h4" padding="30px">
        HARSIMRAN SINGH
      </Typography>
      <Typography component="p" variant="h4">
        
      </Typography>
      {/* <Typography color="text.primary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography> */}
      <Box 
      
      sx={{
        '& > :not(style)': { m: 1, width: '20ch' },
      
      }}>
      <Button 
      variant="contained" 
      startIcon={<FontAwesomeIcon 
      icon={faInfo} />}
      
      >
        CSE
      </Button>
      <Button variant="contained" startIcon={<FontAwesomeIcon icon={faInfo} />}>
        Batch 2018
      </Button>
      

      </Box>
      {/* <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div> */}

    </Box>
      
    </React.Fragment>
  );
}