import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTask, removeCurrentTask } from './../../actions/actions';

class Edit extends Component {
  closeAddForm(e) {
    e.preventDefault();
    this.props.removeCurrentTask();
  }

  componentDidMount() {
    console.log('componentDidMount()', this.props);
    const [
      { ID, name, project, priority, description }
    ] = this.props.tasks.currentItem;

    this.setState({
      ID,
      name,
      project,
      priority,
      description,
      error: {}
    });
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }

  // Local state
  state = {
    name: '',
    project: '',
    priority: '1',
    description: '',
    error: {}
  };

  // Clear State
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
    const { ID, name, project, priority, description } = this.state;

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
      ID,
      name,
      project,
      priority,
      description
    };

    // Update task to store state
    this.props.updateTask(newTask, ID);

    // Clear State
    this.clearState();
    // Close form
    this.props.removeCurrentTask();
  };

  render() {
    const { name, project, priority, description, error } = this.state;

    return (
      <div
        // className={`jumbotron py-2 border bg-white mt-3 ${flag ? 'none' : ' '}`}
        className="jumbotron py-2 border bg-white mt-3"
      >
        <form className="mt-3">
          <div className="form-group row">
            <label
              htmlFor="inputTaskTitle"
              className="col-sm-5 col-form-label text-right"
            >
              Название задачи
            </label>
            <div className="col-sm-7">
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
              className="col-sm-5 col-form-label text-right"
            >
              Название проекта
            </label>
            <div className="col-sm-7">
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
              className="col-sm-5 col-form-label text-right"
            >
              Приоритет
            </label>
            <div className="col-sm-7">
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
              className="col-sm-5 col-form-label text-right"
            >
              Описание задачи
            </label>
            <div className="col-sm-7">
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
                  className="btn btn-warning btn-sm"
                  onClick={this.onSubmit}
                >
                  Update
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

Edit.propTypes = {
  updateTask: PropTypes.func.isRequired,
  removeCurrentTask: PropTypes.func.isRequired
};

export default connect(
  null,
  { updateTask, removeCurrentTask }
)(Edit);
