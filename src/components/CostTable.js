import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Modal, Button } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { costsFetch, costEdit, loadCost, cancelEdit } from '../actions';
import { getUtilidades, getComida, getCarro, getCasa, getPersonal, getFun, getGata, getTotalCost } from '../selectors';
import CostForm from './CostForm';
import TableRow from './TableRow';

class CostTable extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      selectedItem: ''
    };
  }

  componentWillMount() {
    const { selectedMonth } = this.props
    this.props.costsFetch({ selectedMonth });
  }

  onButtonSubmit() {
    const { selectedMonth, amount, category, subcategory, description } = this.props;
    this.props.costEdit({ selectedMonth, amount, category, subcategory, description, uid: this.state.selectedItem });
    this.setState({ showModal: false });
  }

  onEditClick(item) {
    this.setState({ showModal: true, selectedItem: item.uid });
    this.props.loadCost({ amount: item.amount, category: item.category, subcategory: item.subcategory, description: item.description })
  }

  renderUtilidades() {
    let rows = this.props.utilidades.map((item, i) => {
      return(
        <TableRow key={i} item={item} onEdit={() => this.onEditClick(item)} />
      )
    })
    return rows;
  }

  renderComida() {
    let rows = this.props.comida.map((item, i) => {
      return(
        <TableRow key={i} item={item} onEdit={() => this.onEditClick(item)} />
      )
    })
    return rows;
  }

  renderCarro() {
    let rows = this.props.carro.map((item, i) => {
      return(
        <TableRow key={i} item={item} onEdit={() => this.onEditClick(item)} />
      )
    })
    return rows;
  }

  renderCasa() {
    let rows = this.props.casa.map((item, i) => {
      return(
        <TableRow key={i} item={item} onEdit={() => this.onEditClick(item)} />
      )
    })
    return rows;
  }

  renderPersonal() {
    let rows = this.props.personal.map((item, i) => {
      return (
        <TableRow key={i} item={item} onEdit={() => this.onEditClick(item)} />
      );
    })
    return rows;
  }

  renderFun() {
    let rows = this.props.fun.map((item, i) => {
      return(
        <TableRow key={i} item={item} onEdit={() => this.onEditClick(item)} />
      )
    })
    return rows;
  }

  renderGata() {
    let rows = this.props.gata.map((item, i) => {
      return(
        <TableRow key={i} item={item} onEdit={() => this.onEditClick(item)} />
      )
    })
    return rows;
  }

  render() {
    console.log(this.state.selectedItem)
    const parts = this.props.selectedMonth.split('-')
    const separatedMonth = parts[0].toUpperCase();
    const separatedYear = parts[1]
    return (
      <div>
        <div>
          <h4 className='month-header'>{separatedMonth + ' ' + separatedYear}</h4>
        </div>
        <div className='total-display'>
          <h4><NumberFormat value={Math.round(this.props.total / 550)} displayType={'text'} thousandSeparator={true} prefix={'$ '} /></h4>
          <h4><NumberFormat value={this.props.total} displayType={'text'} thousandSeparator={true} prefix={'₡ '} /></h4>
        </div>
        <Table id='CostTable' bordered>
          <thead>
            <tr>
              <th className='center'>Categorías</th>
              <th className='center'>Subcategoría</th>
              <th className='center'>Descripción</th>
              <th className='center'>Costo</th>
              <th></th>
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
            {this.renderUtilidades()}
            <tr>
              <th>COMIDA</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {this.renderComida()}
            <tr>
              <th>CARRO</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {this.renderCarro()}
            <tr>
              <th>CASA</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {this.renderCasa()}
            <tr>
              <th>PERSONAL</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {this.renderPersonal()}
            <tr>
              <th>FUN</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {this.renderFun()}
            <tr>
              <th>GATA</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {this.renderGata()}
          </tbody>
        </Table>
        <Modal bsSize='small' show={this.state.showModal} onHide={() => {
          this.setState({ showModal: false });
          this.props.cancelEdit();
        }}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Costo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CostForm />
          </Modal.Body>
          <Modal.Footer className='center'>
            <Button bsStyle='warning' onClick={() => this.onButtonSubmit()}>Guardar Cambios</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    utilidades: getUtilidades(state),
    comida: getComida(state),
    carro: getCarro(state),
    casa: getCasa(state),
    personal: getPersonal(state),
    fun: getFun(state),
    gata: getGata(state),
    total: getTotalCost(state),
    selectedMonth: state.month.selectedMonth,
    amount: state.cost.amount,
    category: state.cost.category,
    subcategory: state.cost.subcategory,
    description: state.cost.description
  }
}

export default connect(mapStateToProps, { costsFetch, costEdit, loadCost, cancelEdit })(CostTable);