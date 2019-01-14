import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  deleteTask,
  closeAdd,
  setCurrentTask,
  removeCurrentTask
} from './../../actions/actions';

class Task extends Component {
  onDeleteClick(ID) {
    this.props.deleteTask(ID);
    this.props.removeCurrentTask();
  }

  onEditClick(ID) {
    this.props.setCurrentTask(ID);
    this.props.closeAdd();
  }

  // Local state to maximize description
  state = {
    showTask: false
  };

  render() {
    const { ID, name, project, priority, description } = this.props;
    const { showTask } = this.state;

    return (
      <li className="card mt-2">
        <div className="card-body">
          <div className="row mt-2">
            <div className="col-8">
              <strong className="card-title">
                <mark>{name}</mark>
              </strong>
            </div>
            <div className="col-4">
              <strong className="float-right">
                Priority:
                <span className="text-danger ml-2">{priority}</span>
              </strong>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-8">
              <strong>
                Project:
                <span className="text-primary ml-2">{project}</span>
              </strong>
            </div>
            <div className="col-4">
              <div
                className="btn-group btn-group-sm float-right"
                role="group"
                aria-label="Basic example"
              >
                <i
                  className="fas fa-pencil-alt"
                  style={{
                    color: 'black'
                  }}
                  onClick={this.onEditClick.bind(this, ID)}
                />
                <i
                  className="fas fa-times"
                  style={{
                    color: 'red'
                  }}
                  onClick={this.onDeleteClick.bind(this, ID)}
                />
                <i
                  className={`fas ${
                    showTask ? 'fa-chevron-up' : 'fa-chevron-down'
                  }`}
                  style={{
                    color: 'black'
                  }}
                  onClick={() =>
                    this.setState({
                      showTask: !this.state.showTask
                    })
                  }
                />
              </div>
            </div>
          </div>
          {showTask ? <p className="card-text mt-2">{description}</p> : null}
        </div>
      </li>
    );
  }
}

Task.propTypes = {
  ID: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
  setCurrentTask: PropTypes.func.isRequired,
  removeCurrentTask: PropTypes.func.isRequired,
  closeAdd: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteTask, closeAdd, setCurrentTask, removeCurrentTask }
)(Task);
