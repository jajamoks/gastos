import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Modal, Button } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { costsFetch, costEdit, loadCost, cancelEdit, costDelete } from '../actions';
import {
  getUtilidades,
  getUtilidadesTotal,
  getComida,
  getComidaTotal,
  getCarro,
  getCarroTotal,
  getTrans,
  getTransTotal,
  getCasa,
  getCasaTotal,
  getPersonal,
  getPersonalTotal,
  getFun,
  getFunTotal,
  getGata,
  getGataTotal,
  getTotalCost
} from '../selectors';
import CostForm from './CostForm';
import TableRow from './TableRow';

class CostTable extends Component {
  constructor() {
    super();

    this.state = {
      showEditModal: false,
      selectedItem: '',
      showUtilidades: false,
      showComida: false,
      showTrans: false,
      showCasa: false,
      showPersonal: false,
      showFun: false,
      showGata: false
    };
  }

  componentWillMount() {
    const { selectedMonth } = this.props;
    this.props.costsFetch({ selectedMonth });
  }

  onEditClick(item) {
    this.setState({ showEditModal: true, selectedItem: item.uid });
    this.props.loadCost({ amount: item.amount, category: item.category, subcategory: item.subcategory, description: item.description })
  }

  onEditSubmit() {
    const { selectedMonth, amount, category, subcategory, description } = this.props;
    this.props.costEdit({ selectedMonth, amount, category, subcategory, description, uid: this.state.selectedItem });
    this.setState({ showEditModal: false, selectedItem: '' });
  }

  onDeleteClick(item) {
    this.setState({ showDeleteModal: true, selectedItem: item.uid });
  }

  onDeleteSubmit() {
    const { selectedMonth } = this.props;
    this.props.costDelete({ selectedMonth, uid: this.state.selectedItem });
    this.setState({ showDeleteModal: false, selectedItem: '' });
  }

  renderUtilidades() {
    let rows = this.props.utilidades.map((item, i) => {
      return(
        <TableRow
          key={i}
          item={item}
          onEdit={() => this.onEditClick(item)}
          onDelete={() => this.onDeleteClick(item)}
          collapse={this.state.showUtilidades ? '' : 'hidden'}
        />
      )
    })
    return rows;
  }

  renderComida() {
    let rows = this.props.comida.map((item, i) => {
      return(
        <TableRow
          key={i}
          item={item}
          onEdit={() => this.onEditClick(item)}
          onDelete={() => this.onDeleteClick(item)}
          collapse={this.state.showComida ? '' : 'hidden'}
        />
      )
    })
    return rows;
  }

  renderCarro() {
    let rows = this.props.carro.map((item, i) => {
      return(
        <TableRow
          key={i}
          item={item}
          onEdit={() => this.onEditClick(item)}
          onDelete={() => this.onDeleteClick(item)}
          collapse={this.state.showCarro ? '' : 'hidden'}
        />
      )
    })
    return rows;
  }

  renderTrans() {
    let rows = this.props.trans.map((item, i) => {
      return(
        <TableRow
          key={i}
          item={item}
          onEdit={() => this.onEditClick(item)}
          onDelete={() => this.onDeleteClick(item)}
          collapse={this.state.showTrans ? '' : 'hidden'}
        />
      )
    })
    return rows;
  }

  renderCasa() {
    let rows = this.props.casa.map((item, i) => {
      return(
        <TableRow
          key={i}
          item={item}
          onEdit={() => this.onEditClick(item)}
          onDelete={() => this.onDeleteClick(item)}
          collapse={this.state.showCasa ? '' : 'hidden'}
        />
      )
    })
    return rows;
  }

  renderPersonal() {
    let rows = this.props.personal.map((item, i) => {
      return (
        <TableRow
          key={i}
          item={item}
          onEdit={() => this.onEditClick(item)}
          onDelete={() => this.onDeleteClick(item)}
          collapse={this.state.showPersonal ? '' : 'hidden'}
        />
      );
    })
    return rows;
  }

  renderFun() {
    let rows = this.props.fun.map((item, i) => {
      return(
        <TableRow
          key={i}
          item={item}
          onEdit={() => this.onEditClick(item)}
          onDelete={() => this.onDeleteClick(item)}
          collapse={this.state.showFun ? '' : 'hidden'}
        />
      )
    })
    return rows;
  }

  renderGata() {
    let rows = this.props.gata.map((item, i) => {
      return(
        <TableRow
          key={i}
          item={item}
          onEdit={() => this.onEditClick(item)}
          onDelete={() => this.onDeleteClick(item)}
          collapse={this.state.showGata ? '' : 'hidden'}
        />
      )
    })
    return rows;
  }

  renderUtilidadesArrow() {
    if (this.props.utilidadesTotal) {
      return <i className='fa fa-angle-double-down fa-lg'></i>
    }
  }

  renderComidaArrow() {
    if (this.props.comidaTotal) {
      return <i className='fa fa-angle-double-down fa-lg'></i>
    }
  }

  renderCarroArrow() {
    if (this.props.carroTotal) {
      return <i className='fa fa-angle-double-down fa-lg'></i>
    }
  }

  renderTransArrow() {
    if (this.props.transTotal) {
      return <i className='fa fa-angle-double-down fa-lg'></i>
    }
  }

  renderCasaArrow() {
    if (this.props.casaTotal) {
      return <i className='fa fa-angle-double-down fa-lg'></i>
    }
  }

  renderPersonalArrow() {
    if (this.props.personalTotal) {
      return <i className='fa fa-angle-double-down fa-lg'></i>
    }
  }

  renderFunArrow() {
    if (this.props.funTotal) {
      return <i className='fa fa-angle-double-down fa-lg'></i>
    }
  }

  renderGataArrow() {
    if (this.props.gataTotal) {
      return <i className='fa fa-angle-double-down fa-lg'></i>
    }
  }

  render() {
    const parts = this.props.selectedMonth.split('-')
    const separatedMonth = parts[0].toUpperCase();
    const separatedYear = parts[1]
    return (
      <div>
        <div>
          <h4 id='month-header'>{separatedMonth + ' ' + separatedYear}</h4>
        </div>
        <div className='total-display'>
          <h4>
            <NumberFormat
              value={this.props.total ? Math.round(this.props.total / 550) : '0' }
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$ '} />
          </h4>
          <h4>
            <NumberFormat
              value={this.props.total ? this.props.total : '0' }
              displayType={'text'}
              thousandSeparator={true}
              prefix={'₡ '} />
          </h4>
        </div>
        <Table id='CostTable'>
          <thead>
            <tr>
              <th>Categorías</th>
              <th>Subcategoría</th>
              <th>Descripción</th>
              <th className='right-align'>Costo</th>
              <th className='right-align'>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className='category-row' onClick={() => this.setState({ showUtilidades: !this.state.showUtilidades })}>
              <th>UTILIDADES</th>
              <td></td>
              <td></td>
              <td></td>
              <td className='right-align'>
                <NumberFormat value={this.props.utilidadesTotal} displayType={'text'} thousandSeparator={true} prefix={'₡ '} />
              </td>
              <td className='center'>{this.renderUtilidadesArrow()}</td>
            </tr>
            {this.renderUtilidades()}
            <tr className='category-row' onClick={() => this.setState({ showComida: !this.state.showComida })}>
              <th>COMIDA</th>
              <td></td>
              <td></td>
              <td></td>
              <td className='right-align'>
                <NumberFormat value={this.props.comidaTotal} displayType={'text'} thousandSeparator={true} prefix={'₡ '} />
              </td>
              <td className='center'>{this.renderComidaArrow()}</td>
            </tr>
            {this.renderComida()}
            <tr className='category-row' onClick={() => this.setState({ showCarro: !this.state.showCarro })}>
              <th>CARRO</th>
              <td></td>
              <td></td>
              <td></td>
              <td className='right-align'>
                <NumberFormat value={this.props.carroTotal} displayType={'text'} thousandSeparator={true} prefix={'₡ '} />
              </td>
              <td className='center'>{this.renderCarroArrow()}</td>
            </tr>
            {this.renderCarro()}
            <tr className='category-row' onClick={() => this.setState({ showTrans: !this.state.showTrans })}>
              <th>TRANSPORTE</th>
              <td></td>
              <td></td>
              <td></td>
              <td className='right-align'>
                <NumberFormat value={this.props.transTotal} displayType={'text'} thousandSeparator={true} prefix={'₡ '} />
              </td>
              <td className='center'>{this.renderTransArrow()}</td>
            </tr>
            {this.renderTrans()}
            <tr className='category-row' onClick={() => this.setState({ showCasa: !this.state.showCasa })}>
              <th>CASA</th>
              <td></td>
              <td></td>
              <td></td>
              <td className='right-align'>
                <NumberFormat value={this.props.casaTotal} displayType={'text'} thousandSeparator={true} prefix={'₡ '} />
              </td>
              <td className='center'>{this.renderCasaArrow()}</td>
            </tr>
            {this.renderCasa()}
            <tr className='category-row' onClick={() => this.setState({ showPersonal: !this.state.showPersonal })}>
              <th>PERSONAL</th>
              <td></td>
              <td></td>
              <td></td>
              <td className='right-align'>
                <NumberFormat value={this.props.personalTotal} displayType={'text'} thousandSeparator={true} prefix={'₡ '} />
              </td>
              <td className='center'>{this.renderPersonalArrow()}</td>
            </tr>
            {this.renderPersonal()}
            <tr className='category-row' onClick={() => this.setState({ showFun: !this.state.showFun })}>
              <th>FUN</th>
              <td></td>
              <td></td>
              <td></td>
              <td className='right-align'>
                <NumberFormat value={this.props.funTotal} displayType={'text'} thousandSeparator={true} prefix={'₡ '} />
              </td>
              <td className='center'>{this.renderFunArrow()}</td>
            </tr>
            {this.renderFun()}
            <tr className='category-row' onClick={() => this.setState({ showGata: !this.state.showGata })}>
              <th>GATA</th>
              <td></td>
              <td></td>
              <td></td>
              <td className='right-align'>
                <NumberFormat value={this.props.gataTotal} displayType={'text'} thousandSeparator={true} prefix={'₡ '} />
              </td>
              <td className='center'>{this.renderGataArrow()}</td>
            </tr>
            {this.renderGata()}
          </tbody>
        </Table>
        <Modal bsSize='small' show={this.state.showEditModal} onHide={() => {
          this.setState({ showEditModal: false });
          this.props.cancelEdit();
        }}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Costo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CostForm />
          </Modal.Body>
          <Modal.Footer className='center'>
            <Button bsStyle='warning' onClick={() => this.onEditSubmit()}>Guardar Cambios</Button>
          </Modal.Footer>
        </Modal>
        <Modal bsSize='small' show={this.state.showDeleteModal} onHide={() => this.setState({ showDeleteModal: false })}>
          <Modal.Header closeButton>
            <Modal.Title>Borrar Costo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Estas Seguro?
          </Modal.Body>
          <Modal.Footer className='center'>
            <Button bsStyle='danger' onClick={() => this.onDeleteSubmit()}>Borrar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    utilidades: getUtilidades(state),
    utilidadesTotal: getUtilidadesTotal(state),
    comida: getComida(state),
    comidaTotal: getComidaTotal(state),
    carro: getCarro(state),
    carroTotal: getCarroTotal(state),
    trans: getTrans(state),
    transTotal: getTransTotal(state),
    casa: getCasa(state),
    casaTotal: getCasaTotal(state),
    personal: getPersonal(state),
    personalTotal: getPersonalTotal(state),
    fun: getFun(state),
    funTotal: getFunTotal(state),
    gata: getGata(state),
    gataTotal: getGataTotal(state),
    total: getTotalCost(state),
    selectedMonth: state.month.selectedMonth,
    amount: state.cost.amount,
    category: state.cost.category,
    subcategory: state.cost.subcategory,
    description: state.cost.description
  }
}

export default connect(mapStateToProps, { costsFetch, costEdit, loadCost, cancelEdit, costDelete })(CostTable);