import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTasks } from './../actions/actions';
import Welcome from './Main/Welcome';
import Tasks from './Main/Tasks';
import Add from './Main/Add';
import Edit from './Main/Edit';
import Control from './Main/Control';

class Main extends Component {
  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    const tasks = this.props.tasks;
    const {
      items,
      sortItems,
      currentItem,
      sortByPriority,
      selectedItems,
      selectAndSortItems
    } = this.props.tasks;
    // Check if sorted by priority
    const sortedItems = sortByPriority ? sortItems : items;
    const selectedAndSortedItems = sortByPriority
      ? selectAndSortItems
      : selectedItems;

    return (
      <div className="container col-md-8 col-xl-6 mt-4">
        {items.length === 0 ? <Welcome tasks={tasks} /> : null}
        {items.length === 0 ? null : (
          <Tasks
            tasks={
              selectedItems.length === 0 ? sortedItems : selectedAndSortedItems
            }
          />
        )}
        <Add tasks={tasks} />
        {currentItem.length === 0 ? null : <Edit tasks={tasks} />}
        {items.length === 0 ? null : <Control tasks={tasks} />}
      </div>
    );
  }
}

Main.propTypes = {
  tasks: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(
  mapStateToProps,
  { getTasks }
)(Main);
