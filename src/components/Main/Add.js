import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeAdd, addTask } from './../../actions/actions';
import uuid from 'uuid';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      project: '',
      priority: '1',
      description: '',
      error: {}
    };
  }
  closeAddForm(e) {
    e.preventDefault();
    this.clearState();
    this.props.closeAdd();
  }

  clearState() {
    this.setState({
      name: '',
      project: '',
      priority: '1',
      description: '',
      error: {}
    });
  }

  // Add inputs value to local state
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, project, priority, description } = this.state;
    // Check For Errors
    if (name === '') {
      this.setState({ error: { name: 'Name is required' } });
      return;
    }
    if (project === '') {
      this.setState({ error: { project: 'Project is required' } });
      return;
    }
    if (description === '') {
      this.setState({ error: { description: 'Description is required' } });
      return;
    }

    const newTask = {
      ID: uuid(),
      name,
      project,
      priority,
      description
    };

    // Add new task to store state
    this.props.addTask(newTask);

    // Clear State
    this.clearState();
    // Close form
    this.props.closeAdd();
  };

  render() {
    const flag = this.props.flag;
    const { name, project, priority, description, error } = this.state;

    return (
      <div
        className={`jumbotron py-2 border bg-white mt-3 ${flag ? 'none' : ' '}`}
      >
        <form className="mt-3">
          <div className="form-group row">
            <label
              htmlFor="inputTaskTitle"
              className="col-sm-4 col-form-label text-right"
            >
              Task name
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                name="name"
                className={`form-control form-control-sm ${
                  error.name ? 'is-invalid' : ' '
                }`}
                value={name}
                onChange={this.onChange}
              />
              <div className="invalid-feedback">{error.name}</div>
            </div>
          </div>

          <div className="form-group row">
            <label
              htmlFor="inputProjectTitle"
              className="col-sm-4 col-form-label text-right"
            >
              Project name
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                name="project"
                className={`form-control form-control-sm ${
                  error.project ? 'is-invalid' : ' '
                }`}
                value={project}
                onChange={this.onChange}
              />
              <div className="invalid-feedback">{error.project}</div>
            </div>
          </div>

          <div className="form-group row">
            <label
              htmlFor="inputPriority"
              className="col-sm-4 col-form-label text-right"
            >
              Priority
            </label>
            <div className="col-sm-8">
              <select
                className="custom-select custom-select-sm"
                name="priority"
                value={priority}
                onChange={this.onChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label
              htmlFor="inputTaskDescribe"
              className="col-sm-4 col-form-label text-right"
            >
              Task description
            </label>
            <div className="col-sm-8">
              <textarea
                className={`form-control form-control-sm ${
                  error.description ? 'is-invalid' : ' '
                }`}
                name="description"
                rows="2"
                value={description}
                onChange={this.onChange}
              />
              <div className="invalid-feedback">{error.description}</div>
            </div>
          </div>

          <div className="form-group row justify-content-end">
            <div className="col-sm-7 pr-0">
              <div className="btn-group btn-block row">
                <button
                  type="submit"
                  className="btn btn-success btn-sm"
                  onClick={this.onSubmit}
                >
                  Add
                </button>

                <button
                  type="botton"
                  className="btn btn-secondary btn-sm"
                  onClick={this.closeAddForm.bind(this)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Add.propTypes = {
  flag: PropTypes.bool.isRequired,
  closeAdd: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  flag: state.flag.closeAddForm
});

export default connect(
  mapStateToProps,
  { closeAdd, addTask }
)(Add);
