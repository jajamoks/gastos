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
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Utilidades</th>
              <td></td>
              <td></td>
            </tr>
            {this.renderCostItem()}
            <tr>
              <th>Casa</th>
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