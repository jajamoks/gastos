import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel, InputGroup } from 'react-bootstrap';
import { updateCost, updateCategory, updateSubcategory, updateDescription } from '../actions';

const optionsUtil = ['Agua', 'Electridad', 'Telefono', 'Internet y Cable', 'Gas', 'Impuestos', 'Correo']
const optionsComida = ['Compras', 'Restaurante', 'Cafe']
const optionsCarro = ['Gasolina', 'Parqueo', 'Reparación', 'Seguro', 'Marchamo', 'Riteve']
const optionsTrans = ['Taxi', 'Uber', 'Peaje', 'Bus']
const optionsCasa = ['Materiales', 'Mano obra', 'Empleada', 'Alarma']
const optionsPersonal = ['Corte Pelo', 'Dentista', 'Doctor', 'Terapia', 'Medicinas', 'Ropa/Zapatos', 'Chunches']
const optionsFun = ['Cine', 'Bar', 'Eventos']
const optionsGata = ['Veterinario', 'Comida', 'Arena', 'Juguetes']

class CostInput extends Component {

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
    if (this.props.category === 'Carro') {
      let options = optionsCarro.map((option, i) => {
        return(
          <option key={i} value={option}>{option}</option>
        )
      })
      return options
    }
    if (this.props.category === 'Transporte') {
      let options = optionsTrans.map((option, i) => {
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
        <FormGroup>
          <ControlLabel>Categoría</ControlLabel>
          <FormControl
            value={this.props.category}
            onChange={this.onCategoryChange.bind(this)}
            componentClass="select"
          >
            <option value="">- seleccionar -</option>
            <option value="Utilidades">Utilidades</option>
            <option value="Comida">Comida</option>
            <option value="Carro">Carro</option>
            <option value="Transporte">Transporte</option>
            <option value="Casa">Casa</option>
            <option value="Personal">Personal</option>
            <option value="Fun">Fun</option>
            <option value="Gata">Gata</option>
          </FormControl>
        </FormGroup>
        <br/>
        <FormGroup>
          <ControlLabel>Subcategoría</ControlLabel>
          <FormControl
            value={this.props.subcategory}
            onChange={this.onSubcategoryChange.bind(this)}
            componentClass='select'
          >
            <option value="">- seleccionar -</option>
            {this.renderSubOptions()}
          </FormControl>
        </FormGroup>
        <FormGroup validationState={ this.props.error ? 'error' : null }>
          <ControlLabel>Costo: </ControlLabel>
          <InputGroup>
            <FormControl
              type='text'
              value={this.props.amount}
              placeholder='Entrar costo'
              onChange={this.onCostChange.bind(this)}
            />
            <InputGroup.Addon>₡</InputGroup.Addon>
          </InputGroup><br/>
          <span className='error-validation'>{this.props.error}</span>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Descripción</ControlLabel>
          <FormControl
            componentClass='textarea'
            onChange={this.onDescriptionChange.bind(this)}
            value={this.props.description}
          />
        </FormGroup>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    amount: state.cost.amount,
    error: state.cost.error,
    category: state.cost.category,
    subcategory: state.cost.subcategory,
    description: state.cost.description
  }
}

export default connect(mapStateToProps, { updateCost, updateCategory, updateSubcategory, updateDescription })(CostInput);