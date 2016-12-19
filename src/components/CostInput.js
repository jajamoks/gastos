import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, FormControl, ControlLabel, InputGroup } from 'react-bootstrap';
import { updateCost, updateCategory, updateSubcategory, submitCost } from '../actions'

const optionsUtil = ['Agua', 'Electridad', 'Telefono', 'Internet y Cable', 'Gas', 'Impuestos']
const optionsComida = ['Compras', 'Restaurante']
const optionsCarro = ['Gasolina', 'Reparación', 'Seguro']
const optionsCasa = ['Materiales', 'Mano obra', 'Empleada', 'Alarma']
const optionsPersonal = ['Corte Pelo', 'Dentista', 'Doctor', 'Medicinas', 'Otros']
const optionsFun = ['Cine', 'Bar', 'Cafe', 'Eventos']
const optionsGata = ['Veterinario', 'Comida', 'Arena', 'Juguetes']

class CostInput extends Component {
  onCostChange(e) {
    this.props.updateCost(e.target.value)
  }

  onCategoryChange(e) {
    this.props.updateCategory(e.target.value)
  }

  onSubcategoryChange(e) {
    this.props.updateSubcategory(e.target.value)
  }

  renderSubOptions() {
    if (this.props.category === 'Utilidades') {
      let options = optionsUtil.map((option, i) => {
        return (
          <option key={i} value={option}>{option}</option>
        )
      })
      return options
    }
    if (this.props.category === 'Comida') {
      let options = optionsComida.map((option, i) => {
        return(
          <option key={i} value={option}>{option}</option>
        )
      })
      return options
    }
    if (this.props.category === 'Carro') {
      let options = optionsCarro.map((option, i) => {
        return(
          <option key={i} value={option}>{option}</option>
        )
      })
      return options
    }
    if (this.props.category === 'Casa') {
      let options = optionsCasa.map((option, i) => {
        return(
          <option key={i} value={option}>{option}</option>
        )
      })
      return options
    }
    if (this.props.category === 'Personal') {
      let options = optionsPersonal.map((option, i) => {
        return(
          <option key={i} value={option}>{option}</option>
        )
      })
      return options
    }
    if (this.props.category === 'Fun') {
      let options = optionsFun.map((option, i) => {
        return(
          <option key={i} value={option}>{option}</option>
        )
      })
      return options
    }
    if (this.props.category === 'Gata') {
      let options = optionsGata.map((option, i) => {
        return(
          <option key={i} value={option}>{option}</option>
        )
      })
      return options
    }
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
            >
              <option value="">-select one-</option>
              <option value="Utilidades">Utilidades</option>
              <option value="Comida">Comida</option>
              <option value="Carro">Carro</option>
              <option value="Casa">Casa</option>
              <option value="Personal">Personal</option>
              <option value="Fun">Fun</option>
              <option value="Gata">Gata</option>
            </FormControl>
          </FormGroup>
          <FormGroup>
            <ControlLabel>SubCategoría</ControlLabel>
            <FormControl
              value={this.props.subcategory}
              onChange={this.onSubcategoryChange.bind(this)}
              componentClass='select'
            >
              <option value="">-select one-</option>
              {this.renderSubOptions()}
            </FormControl>
          </FormGroup>
          <Button bsStyle='primary'>Guardar</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    amount: state.cost.amount,
    category: state.cost.category,
    subcategory: state.cost.subcategory
  }
}

export default connect(mapStateToProps, { updateCost, updateCategory, updateSubcategory, submitCost })(CostInput);