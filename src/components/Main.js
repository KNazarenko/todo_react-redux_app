import React, { Component } from 'react';
import Welcome from './Main/Welcome';
import Tasks from './Main/Tasks';
import Add from './Main/Add';
import Edit from './Main/Edit';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Main extends Component {
  render() {
    const tasks = this.props.tasks;
    const currentItem = this.props.currentItem;
    console.log('currentItem from main', currentItem.length, currentItem);

    return (
      <div className="container col-md-8 col-xl-6 mt-3">
        {tasks.length === 0 ? <Welcome tasks={tasks} /> : null}
        {tasks.length === 0 ? null : <Tasks tasks={tasks} />}
        <Add tasks={tasks} />
        {currentItem.length === 0 ? null : <Edit currentItem={currentItem} />}
      </div>
    );
  }
}

Main.propTypes = {
  tasks: PropTypes.array.isRequired,
  currentItem: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  tasks: state.tasks.items,
  currentItem: state.tasks.currentItem
});

export default connect(mapStateToProps)(Main);
