import React, { Component } from 'react';
import Task from './Task';

class Tasks extends Component {
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

export default Tasks;
