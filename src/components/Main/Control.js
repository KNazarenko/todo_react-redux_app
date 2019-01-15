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
        className={`mt-4 ${flagCloseAddForm ? '' : 'none'} ${
          flagOpenEditForm ? 'none' : ''
        }`}
      >
        <form className="form-inline justify-content-around">
          <div className="custom-control custom-checkbox col-sm-4 pl-5">
            <Sort />
          </div>
          <div className="form-group justify-content-end col-sm-8">
            <Select tasks={tasks} />
          </div>
        </form>
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
