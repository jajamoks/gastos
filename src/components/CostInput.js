import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, FormControl, ControlLabel, InputGroup } from 'react-bootstrap';
import { updateCost, updateCategory, updateSubcategory, updateDescription, submitCost } from '../actions'

const optionsUtil = ['Agua', 'Electridad', 'Telefono', 'Internet y Cable', 'Gas', 'Impuestos']
const optionsComida = ['Compras', 'Restaurante']
const optionsCarro = ['Gasolina', 'Reparación', 'Seguro']
const optionsCasa = ['Materiales', 'Mano obra', 'Empleada', 'Alarma']
const optionsPersonal = ['Corte Pelo', 'Dentista', 'Doctor', 'Medicinas', 'Otros']
const optionsFun = ['Cine', 'Bar', 'Cafe', 'Eventos']
const optionsGata = ['Veterinario', 'Comida', 'Arena', 'Juguetes']

moment.locale('es')

class CostInput extends Component {

  onSubmit() {
    const now = moment().format('MMMM-YYYY')
    const { amount, category, subcategory, description } = this.props;
    this.props.submitCost({ amount, category, subcategory, description, date: now })
  }

  onCostChange(e) {
    this.props.updateCost(e.target.value);
  }

  onCategoryChange(e) {
    this.props.updateCategory(e.target.value);
  }

  onSubcategoryChange(e) {
    this.props.updateSubcategory(e.target.value);
  }

  onDescriptionChange(e) {
    this.props.updateDescription(e.target.value);
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
      <Form>
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
        <br/>
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
        <FormGroup>
          <ControlLabel>Costo: </ControlLabel>
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
        <FormGroup>
          <ControlLabel>Descripción</ControlLabel>
          <FormControl
            componentClass='textarea'
            onChange={this.onDescriptionChange.bind(this)}
            value={this.props.description}
          />
        </FormGroup>
        <Button bsStyle='primary' onClick={this.onSubmit.bind(this)} block>
          Guardar
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    amount: state.cost.amount,
    category: state.cost.category,
    subcategory: state.cost.subcategory,
    description: state.cost.description
  }
}

export default connect(mapStateToProps, { updateCost, updateCategory, updateSubcategory, updateDescription, submitCost })(CostInput);