import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Application</Title>
      <Typography component="p" variant="h4">
        26 Mentor Views
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Submitted on March 4, 2022
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
