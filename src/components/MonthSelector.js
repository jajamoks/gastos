import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClassNames from 'classnames';
import { ButtonGroup, Button } from 'react-bootstrap';
import { monthSelect, monthsFetch, monthCreate } from '../actions';

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

  componentDidUpdate() {
    const { availableMonths } = this.props;
    this.props.monthCreate({ availableMonths });
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  renderMonthList() {

    const monthList = this.props.availableMonths.map((item, i) => {
      const btnClass = ClassNames({
        'btn-month': true,
        'btn-active': item === this.props.selectedMonth
      });
      return (
        <Button key={i} onClick={() => {this.props.monthSelect(item)} } className={btnClass}>
          {item}
        </Button>
      )
    })
    return monthList
  }

  render() {
    return (
      <div>
        <ButtonGroup vertical>
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
    selectedMonth: state.month.selectedMonth
  }
};

export default connect(mapStateToProps, { monthSelect, monthsFetch, monthCreate })(MonthSelector);