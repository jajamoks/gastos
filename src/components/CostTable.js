import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

class CostTable extends Component {
  renderCostItem() {
    const data = this.props.costs
    const rows = data.map((item, i) => {
      return(
        <tr>
          <td></td>
          <td>{item.amount}</td>
          <td>{item.subcategory}</td>
        </tr>
      )
    })
    return rows;
  }

  // use lodash filter to sort by category

  render() {
    console.log(this.props.costs)
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Amount</th>
              <th>Subcategory</th>
              <th>Descripción</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>UTILIDADES</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {this.renderCostItem()}
            <tr>
              <th>COMIDA</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>CARRO</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>CASA</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>PERSONAL</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>FUN</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>GATA</th>
              <td></td>
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