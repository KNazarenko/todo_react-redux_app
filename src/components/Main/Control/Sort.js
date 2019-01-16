import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { doSortByPriority } from './../../../actions/actions';

export class Sort extends Component {
  onChange(e) {
    this.props.doSortByPriority(e.target.checked);
  }

  render() {
    const { sortByPriority } = this.props.tasks;
    console.log(sortByPriority);
    return (
      <form className="form-group row m-0">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="checkBoxInput"
            checked={sortByPriority}
            onChange={this.onChange.bind(this)}
          />
          <label className="custom-control-label" htmlFor="checkBoxInput">
            По приоритету
          </label>
        </div>
      </form>
    );
  }
}

Sort.propTypes = {
  doSortByPriority: PropTypes.func.isRequired
};

export default connect(
  null,
  { doSortByPriority }
)(Sort);
