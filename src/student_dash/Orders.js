import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    'March 5, 2022',
    'Robert Reffkin',
    'New York, NY',
    'Real Estate',
    '6 hours',
  ),
  createData(
    1,
    'March 5, 2022',
    'Baiju Bhatt',
    'Menlo Park, CA',
    'FinTech',
    '1 hour',
  ),
  createData(2, 'March 4, 2022', 'Elon Musk', 'Fremont, CA', 'Energy', '30 seconds'),
  createData(
    3,
    'March 6, 2022',
    'Jack Dorsey',
    'San Francisco, CA',
    'Payments',
    '10 hours',
  ),
  createData(
    4,
    'March 6, 2022',
    'Arash Ferdowsi',
    'San Francisco, CA',
    'Cloud Storage',
    '4 hours',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Potential Mentors</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date Reviewed</TableCell>
            <TableCell>Mentor</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Industry</TableCell>
            <TableCell>Time to Offer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell>{`${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more
      </Link>
    </React.Fragment>
  );
}
