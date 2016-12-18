import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, FormControl, ControlLabel, InputGroup } from 'react-bootstrap';
import { updateCost, updateCategory } from '../actions'

class CostInput extends Component {
  onCostChange(e) {
    this.props.updateCost(e.target.value)
  }

  onCategoryChange(e) {
    this.props.updateCategory(e.target.value)
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <ControlLabel>Enter cost: </ControlLabel>
            <InputGroup>
              <FormControl
                type='text'
                value={this.props.amount}
                placeholder='Enter amount'
                onChange={this.onCostChange.bind(this)}
              />
              <InputGroup.Addon>$</InputGroup.Addon>
            </InputGroup><br/>
          </FormGroup>
          <FormGroup controlId="formControlsSelect">
                <ControlLabel>Categoría</ControlLabel>
                <FormControl
                  value={this.props.category}
                  onChange={this.onCategoryChange.bind(this)}
                  componentClass="select"
                  placeholder="select">
                  <option value="">-select one-</option>
                  <option value="Casa">Casa</option>
                  <option value="Compras">Compras</option>
                </FormControl>
              </FormGroup>
          <Button bsStyle='primary'>Submit</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    amount: state.cost.amount,
    category: state.cost.category
  }
}

export default connect(mapStateToProps, { updateCost, updateCategory })(CostInput);