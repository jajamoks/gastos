import React from 'react';
import NumberFormat from 'react-number-format';

const TableRow = ({ item, onClick }) => {
  return (
    <tr className='left-pad'>
      <td></td>
      <td>{item.subcategory}</td>
      <td>{item.description}</td>
      <td style={{'textAlign': 'right'}}><NumberFormat value={item.amount} displayType={'text'} thousandSeparator={true} prefix={'₡ '} /></td>
      <td><a onClick={onClick}><i className='fa fa-pencil-square fa-lg'></i></a></td>
    </tr>
  )
}

export default TableRow;