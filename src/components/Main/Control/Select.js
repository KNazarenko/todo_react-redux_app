import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrentSelect } from './../../../actions/actions';

export class Select extends Component {
  onChange(e) {
    this.props.setCurrentSelect(e.target.value);
  }

  // Local state to maximize description
  // state = {
  //   selected: ''
  // };

  // changeState(newState) {
  //   this.setState({
  //     selected: newState
  //   });
  // }

  // componentDidMount() {
  //   console.log('componentDidMount()');
  //   const { selectedFlag } = this.props.tasks;
  //   this.changeState(selectedFlag);
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate()');
  //   // const { selectedFlag } = this.props.tasks;
  //   // this.changeState(selectedFlag);
  // }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps()');
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
      <React.Fragment>
        <label className="my-1 float-right mr-3" htmlFor="selectProjectName">
          Project
        </label>
        <select
          id="selectProjectName"
          value={
            selectedItems.length === 0 ? selectedFlag : selectedProjectName
          }
          className="custom-select col-7"
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
      </React.Fragment>
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
