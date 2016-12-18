import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, ControlLabel, InputGroup } from 'react-bootstrap';

class CostInput extends Component {
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <ControlLabel>Enter cost: </ControlLabel>
            <InputGroup>
              <FormControl
                type='text'
                placeholder='Enter amount'
              />
              <InputGroup.Addon>$</InputGroup.Addon>
            </InputGroup><br/>
          </FormGroup>
          <FormGroup controlId="formControlsSelect">
                <ControlLabel>Categoría</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
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

export default CostInput;