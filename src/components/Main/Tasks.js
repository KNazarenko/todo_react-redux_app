import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTasks } from './../../actions/actions';
import PropTypes from 'prop-types';
import Task from './Task';

class Tasks extends Component {
  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    const items = this.props.tasks;

    return (
      <div id="tasksCollection" className="row justify-content-center">
        <div className="col">
          <ul
            id="tasksList"
            className="jumbotron pt-0 pb-2 border mb-0"
            style={{ maxHeight: '300px', overflow: 'auto' }}
          >
            {items.map(function(item) {
              return <Task key={item.ID} {...item} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

Tasks.propTypes = {
  getTasks: PropTypes.func.isRequired
};

export default connect(
  null,
  { getTasks }
)(Tasks);
