import React from 'react';

const TableRow = ({ item }) => {
  return (
    <tr className='left-pad'>
      <td>{item.subcategory}</td>
      <td>{item.amount}</td>
      <td>{item.description}</td>
      <td></td>
    </tr>
  )
}

export default TableRow;