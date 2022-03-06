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
      <Title>dollars contributed (as a function of hours)</Title>
      <Typography component="p" variant="h4">
        $443,005.66
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        as of July 3, 2021
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View hours
        </Link>
      </div>
    </React.Fragment>
  );
}
