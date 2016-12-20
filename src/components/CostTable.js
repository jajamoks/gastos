import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

class CostTable extends Component {
  renderCostItem() {
    const options = this.props.costs.map((item, i) => {
      return(
        <tr>
          <td>{item.amount}</td>
          <td>{item.category}</td>
          <td></td>
          <td></td>
        </tr>
      )
    })
    return options;
  }

  render() {
    console.log(this.props.costs)
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Description</th>
              <th>Category</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.renderCostItem()}
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