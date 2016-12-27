import React from 'react';

const TableRow = ({ item }) => {
  return (
    <tr className='left-pad'>
      <td></td>
      <td style={{'textAlign': 'center'}}>{item.subcategory}</td>
      <td>{item.description}</td>
      <td style={{'textAlign': 'right'}}>{item.amount}</td>
    </tr>
  )
}

export default TableRow;