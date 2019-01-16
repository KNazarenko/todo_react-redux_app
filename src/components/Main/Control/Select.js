import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrentSelect } from './../../../actions/actions';

export class Select extends Component {
  onChange(e) {
    this.props.setCurrentSelect(e.target.value);
  }

  render() {
    const {
      items,
      selectedFlag,
      selectedProjectName,
      selectedItems
    } = this.props.tasks;

    let selectProjects = [];

    return (
      <form className="form-group row mb-0">
        <label
          className="col-sm-4 m-sm-0 pr-0 d-flex align-items-center justify-content-sm-end"
          htmlFor="selectProjectName"
        >
          <span>Project</span>
        </label>
        <div className="col-sm-8">
          <select
            id="selectProjectName"
            value={
              selectedItems.length === 0 ? selectedFlag : selectedProjectName
            }
            className="custom-select"
            onChange={this.onChange.bind(this)}
          >
            <option>{selectedFlag}</option>
            {items.map((item, index) => {
              const { project } = item;
              // Add all unique project names to array
              if (selectProjects.indexOf(project) === -1) {
                selectProjects.push(project);
                return <option key={index}>{project}</option>;
              }
            })}
          </select>
        </div>
      </form>
    );
  }
}

Select.propTypes = {
  setCurrentSelect: PropTypes.func.isRequired
};

export default connect(
  null,
  { setCurrentSelect }
)(Select);
