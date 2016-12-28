import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { costCreate } from '../actions'
import CostForm from './CostForm';

const optionsUtil = ['Agua', 'Electridad', 'Telefono', 'Internet y Cable', 'Gas', 'Impuestos']
const optionsComida = ['Compras', 'Restaurante']
const optionsCarro = ['Gasolina', 'Reparación', 'Seguro']
const optionsCasa = ['Materiales', 'Mano obra', 'Empleada', 'Alarma']
const optionsPersonal = ['Corte Pelo', 'Dentista', 'Doctor', 'Medicinas', 'Otros']
const optionsFun = ['Cine', 'Bar', 'Cafe', 'Eventos']
const optionsGata = ['Veterinario', 'Comida', 'Arena', 'Juguetes']

moment.locale('es')

class CostInput extends Component {

  onPress() {
    const { amount, category, subcategory, description, selectedMonth } = this.props;
    this.props.costCreate({ amount, category, subcategory, description, date: selectedMonth })
  }



  render() {
    return (
      <div>
        <CostForm />
        <Button bsStyle='primary' onClick={this.onPress.bind(this)} block>
          Crear
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    amount: state.cost.amount,
    category: state.cost.category,
    subcategory: state.cost.subcategory,
    description: state.cost.description,
    selectedMonth: state.month.selectedMonth
  }
}

export default connect(mapStateToProps, { costCreate })(CostInput);