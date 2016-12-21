import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

class CostTable extends Component {
  renderUtilidades() {
    let data = _.filter(this.props.costs, ['category', 'Utilidades'])
    let rows = data.map((item, i) => {
      return(
        <tr className='left-pad'>
          <td>{item.subcategory}</td>
          <td>{item.amount}</td>
          <td>{item.description}</td>
          <td></td>
        </tr>
      )
    })
    return rows;
  }

  renderComida() {
    let data = _.filter(this.props.costs, ['category', 'Comida'])
    let rows = data.map((item, i) => {
      return(
        <tr className='left-pad'>
          <td>{item.subcategory}</td>
          <td>{item.amount}</td>
          <td>{item.description}</td>
          <td></td>
        </tr>
      )
    })
    return rows;
  }

  render() {
    console.log(this.props.costs)
    return (
      <div>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Categorías</th>
              <th className='center'>Costo</th>
              <th className='center'>Descripción</th>
              <th className='center'>Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>UTILIDADES</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {this.renderUtilidades()}
            <tr>
              <th>COMIDA</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {this.renderComida()}
            <tr>
              <th>CARRO</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>CASA</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>PERSONAL</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>FUN</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>GATA</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    costs: state.costRecords.records
  }
}

export default connect(mapStateToProps, {})(CostTable);