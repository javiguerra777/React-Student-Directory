import { useMemo } from 'react';
import { useTable } from 'react-table';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import TBodyRow from './TBodyRow';

const Wrapper = styled.div`
  width: 100%;
  overflow: auto;
`;
const TableWrapper = styled.table`
  width: 100%;
  padding: 0 5px;
  th, td {
    min-width: 100px;
    max-width: 200px;
    overflow: auto;
  }
  th {
    background: white;
    height: 30px;
  }
`;
const Table = ({ data, searchTerm }) => {
  const columns = useMemo(() => [
    {
      Header: "First Name",
      accessor: 'firstName'
    },
    {
      Header: "Last Name",
      accessor: 'lastName'
    },
    {
      Header: "Email",
      accessor: 'email'
    },
    {
      Header: "Department",
      accessor: 'department'
    },
  ], []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data: data.filter((user) => user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      || user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
      || user.email.toLowerCase().includes(searchTerm.toLowerCase())
      || user.department.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })
  return (
    <Wrapper>
      <TableWrapper {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr key={nanoid()} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th key={nanoid()} {...column.getHeaderProps}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => <TBodyRow key={nanoid()} row={row} prepareRow={prepareRow} />)}
        </tbody>
      </TableWrapper>
    </Wrapper>
  );
}

export default Table;
