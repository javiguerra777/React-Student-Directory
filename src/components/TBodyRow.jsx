import { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';

const TRWrapper = styled.tr`
background: white;
position: relative;
height: 40px;
&:hover {
  background: whitesmoke;
}
.options {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  .edit-btn {
    background: green;
    color: white;
  }
  .delete-btn {
    background: red;
    color: white;
  }
}
`;
export default function TBodyRow({ prepareRow, row, removeStudent }) {
  prepareRow(row);
  const [options, setOptions] = useState(false);
  return (
            <TRWrapper
              {...row.getRowProps}
              onMouseEnter={() => setOptions(true)}
              onMouseLeave={() => setOptions(false)}
            >
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
              {options && (
                <td className="options">
          <button
            type="button"
            className="edit-btn"
          >
                    <AiOutlineEdit size={16} />
                  </button>
          <button
            type="button"
            className="delete-btn"
            onClick={() => removeStudent(row.original.id)}
          >
            <BsTrash size={16} />
                  </button>
                </td>
              )}
            </TRWrapper>
          );
}