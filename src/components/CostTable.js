import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { costsFetch } from '../actions';
import { getUtilidades, getComida, getCarro, getCasa, getPersonal, getFun, getGata, getTotalCost } from '../selectors';
import TableRow from './TableRow';

class CostTable extends Component {
  componentWillMount() {
    const { selectedMonth } = this.props
    this.props.costsFetch({ selectedMonth });
  }

  renderUtilidades() {
    let rows = this.props.utilidades.map((item, i) => {
      return(
        <TableRow key={i} item={item} />
      )
    })
    return rows;
  }

  renderComida() {
    let rows = this.props.comida.map((item, i) => {
      return(
        <TableRow key={i} item={item} />
      )
    })
    return rows;
  }

  renderCarro() {
    let rows = this.props.carro.map((item, i) => {
      return(
        <TableRow key={i} item={item} />
      )
    })
    return rows;
  }

  renderCasa() {
    let rows = this.props.casa.map((item, i) => {
      return(
        <TableRow key={i} item={item} />
      )
    })
    return rows;
  }

  renderPersonal() {
    let rows = this.props.personal.map((item, i) => {
      return (
        <TableRow key={i} item={item} />
      );
    })
    return rows;
  }

  renderFun() {
    let rows = this.props.fun.map((item, i) => {
      return(
        <TableRow key={i} item={item} />
      )
    })
    return rows;
  }

  renderGata() {
    let rows = this.props.gata.map((item, i) => {
      return(
        <TableRow key={i} item={item} />
      )
    })
    return rows;
  }

  render() {
    return (
      <div>
        <div>
          <h4 className='month-header'>{this.props.selectedMonth}</h4>
        </div>
        <div className='total-display'>
          <h4>Total: {this.props.total} colones</h4>
        </div>
        <Table>
          <thead>
            <tr>
              <th>Categorías</th>
              <th className='center'>Subcategoría</th>
              <th className='center'>Descripción</th>
              <th className='center'>Costo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>UTILIDADES</th>
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
            </tr>
            {this.renderComida()}
            <tr>
              <th>CARRO</th>
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
            </tr>
            {this.renderCasa()}
            <tr>
              <th>PERSONAL</th>
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
            </tr>
            {this.renderFun()}
            <tr>
              <th>GATA</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {this.renderGata()}
          </tbody>
        </Table>
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
    selectedMonth: state.month.selectedMonth
  }
}

export default connect(mapStateToProps, { costsFetch })(CostTable);