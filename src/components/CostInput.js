import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { costCreate } from '../actions'
import CostForm from './CostForm';

moment.locale('es')

class CostInput extends Component {

  onButtonSubmit() {
    const { amount, category, subcategory, description, selectedMonth } = this.props;
    this.props.costCreate({ amount, category, subcategory, description, date: selectedMonth })
  }

  renderButton() {
    if (this.props.error) {
      return (
        <Button bsStyle='primary' onClick={this.onButtonSubmit.bind(this)} disabled block>
          Añadir
        </Button>
      )
    } else {
      return (
        <Button bsStyle='primary' onClick={this.onButtonSubmit.bind(this)} block>
          Añadir
        </Button>
      )
    }
  }

  render() {

    return (
      <div>
        <CostForm />
        {this.renderButton()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    amount: state.cost.amount,
    error: state.cost.error,
    category: state.cost.category,
    subcategory: state.cost.subcategory,
    description: state.cost.description,
    selectedMonth: state.month.selectedMonth
  }
}

export default connect(mapStateToProps, { costCreate })(CostInput);