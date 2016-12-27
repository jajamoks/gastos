import React from 'react';
import NumberFormat from 'react-number-format';

const TableRow = ({ item }) => {
  return (
    <tr className='left-pad'>
      <td></td>
      <td style={{'textAlign': 'center'}}>{item.subcategory}</td>
      <td>{item.description}</td>
      <td style={{'textAlign': 'right'}}><NumberFormat value={item.amount} displayType={'text'} thousandSeparator={true} prefix={'₡ '} /></td>
    </tr>
  )
}

export default TableRow;