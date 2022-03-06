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
    'December 8, 2021',
    'Elvis Presley',
    'Founder, Plaid',
    '63 hours',
    312.44,
  ),
  createData(
    1,
    'November 10, 2021',
    'Paul McCartney',
    'Co-Founder, Rappi',
    '46 hours',
    866.99,
  ),
  createData(2, 'November 13, 2021', 'Jeff Bezos', 'Founder, Amazon', '1 hour', 100.81),
  createData(
    3,
    'July 11, 2021',
    'Michael Jackson',
    'Partner, Sequoia Capital',
    '55 hours',
    654.39,
  ),
  createData(
    4,
    'October 5, 2021',
    'Bruce Springsteen',
    'Singer',
    '105 hours',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Notable Mentees</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Last interaction</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Hours given back</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
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
