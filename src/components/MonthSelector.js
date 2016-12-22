import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button } from 'react-bootstrap';
import { monthSelect } from '../actions';
import { getAvailableMonths } from '../selectors';

class MonthSelector extends Component {

  renderMonthList() {
    const months = this.props.months.map((item, i) => {
      return (
        <Button key={i} onClick={() => {this.props.monthSelect(item)} } >
          {item}
        </Button>
      )
    })
    return months
  }

  render() {
    return (
      <ButtonGroup>
        {this.renderMonthList()}
      </ButtonGroup>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    months: getAvailableMonths(state)
  }
};

export default connect(mapStateToProps, { monthSelect })(MonthSelector);