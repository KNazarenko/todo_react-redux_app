import React, { Component } from 'react';
import Sort from './Control/Sort';
import Select from './Control/Select';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Control extends Component {
  render() {
    const flagCloseAddForm = this.props.flagCloseAddForm;
    const flagOpenEditForm = this.props.flagOpenEditForm[0];
    const tasks = this.props.tasks;

    return (
      <div
        className={`${flagCloseAddForm ? '' : 'none'} ${
          flagOpenEditForm ? 'none' : ''
        }`}
      >
        <div className="row my-4 px-4 ">
          <div className="col-sm-4 d-flex align-items-center">
            <Sort tasks={tasks} />
          </div>
          <div className="col-sm-8 mt-2 mt-sm-0">
            <Select tasks={tasks} />
          </div>
        </div>
      </div>
    );
  }
}

Control.propTypes = {
  flagCloseAddForm: PropTypes.bool.isRequired,
  flagOpenEditForm: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  flagCloseAddForm: state.flag.closeAddForm,
  flagOpenEditForm: state.tasks.currentItem
});

export default connect(mapStateToProps)(Control);
