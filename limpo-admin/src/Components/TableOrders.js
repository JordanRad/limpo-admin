import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import SearchInput from './SearchInput';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'Номер на поръчка', width: 200 },
  { field: 'lastName', headerName: 'Име на клиент', width: 200 },
  {
    field: 'age',
    headerName: 'Направена на',
    type: 'number',
    width: 200,
  },
  {
    field: 'fullName',
    headerName: 'Статус',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
  {
    field: 'price',
    headerName: 'Цена',
    type: 'number',
    width: 200,
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridDemo() {
  return (
      <div>
   
   <SearchInput />
      <center>
     
    <div style={{ height: 400, width: '50%' }}>
    
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
     
    </div>
    </center>
    </div>
  );
}