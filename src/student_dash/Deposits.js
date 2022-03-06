import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Application</Title>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      Submitted on March 4, 2022
      </Typography>
      <Typography component="p" variant="h6">
        26 views
      </Typography>
      <Typography component="p" variant="h5">
      🔥 5 🔥 interested
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      Stay tuned... we may be reaching out shortly 😊
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Mentors
        </Link>
      </div>
    </React.Fragment>
  );
}
