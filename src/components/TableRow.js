import React from 'react';
import NumberFormat from 'react-number-format';

const TableRow = ({ item, onEdit, onDelete }) => {
  return (
    <tr className='left-pad'>
      <td></td>
      <td>{item.subcategory}</td>
      <td>{item.description}</td>
      <td style={{'textAlign': 'right'}}><NumberFormat value={item.amount} displayType={'text'} thousandSeparator={true} prefix={'₡ '} /></td>
      <td>
        <a onClick={onEdit}><i className='fa fa-pencil-square fa-lg'></i></a>
        <a onClick={onDelete}></a>
      </td>
    </tr>
  )
}

export default TableRow;