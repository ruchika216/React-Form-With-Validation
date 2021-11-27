import * as React from 'react';
import Title from './Title';
import Forms from './Forms';






export default function ProfileSetup() {
  return (
    <React.Fragment>
      <Title>PROFILE INFORMATION</Title>
      <Forms/>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        
      </Link> */}
    </React.Fragment>
  );
}