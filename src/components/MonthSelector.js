import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button, Modal, FormGroup, FormControl } from 'react-bootstrap';
import { monthSelect, updateNewMonth, updateNewYear, monthAdd, monthsFetch } from '../actions';

class MonthSelector extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false
    };
  }

  componentWillMount() {
    this.props.monthsFetch();
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  renderMonthList() {
    const months = this.props.availableMonths.map((item, i) => {
      return (
        <Button key={i} onClick={() => {this.props.monthSelect(item)} } className='month-buttons'>
          {item}
        </Button>
      )
    })
    return months
  }

  render() {
    const { newMonth, newYear } = this.props
    return (
      <div>
        <Modal bsSize='small' show={this.state.showModal} onHide={() => this.close()}>
          <Modal.Header closeButton>
            <Modal.Title>Create a new month</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup>
                <FormControl
                  componentClass="select"
                  value={this.props.newMonth}
                  onChange={(e) => this.props.updateNewMonth(e.target.value)}>
                  <option value="">-Select Month-</option>
                  <option value="enero">Enero</option>
                  <option value="febrero">Febrero</option>
                  <option value="marzo">Marzo</option>
                  <option value="abril">Abril</option>
                  <option value="mayo">Mayo</option>
                  <option value="junio">Junio</option>
                  <option value="julio">Julio</option>
                  <option value="agosto">Agosto</option>
                  <option value="septiembre">Septiembre</option>
                  <option value="octubre">Octubre</option>
                  <option value="noviembre">Noviembre</option>
                  <option value="diciembre">Diciembre</option>
                </FormControl>
              </FormGroup>
              <FormGroup>
                <FormControl
                  componentClass="select"
                  value={this.props.newYear}
                  onChange={(e) => this.props.updateNewYear(e.target.value)}>
                  <option value="">-Select Year-</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                </FormControl>
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle='success' onClick={() => this.props.monthAdd({ newMonth, newYear })}>Guardar</Button>
          </Modal.Footer>
        </Modal>
        <ButtonGroup vertical>
          <Button bsStyle='success' onClick={() => this.open()} >
            Add Month <i className='fa fa-plus'></i>
          </Button>
          {this.renderMonthList()}
        </ButtonGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const orderedMonths = _.reverse(_.map(state.month.availableMonths))
  return {
    availableMonths: orderedMonths,
    newMonth: state.month.newMonth,
    newYear: state.month.newYear,
  }
};

export default connect(mapStateToProps, { monthSelect, updateNewMonth, updateNewYear, monthAdd, monthsFetch })(MonthSelector);