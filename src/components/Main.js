import React, { Component } from 'react';
import Welcome from './Main/Welcome';
import Tasks from './Main/Tasks';
import Add from './Main/Add';
import Edit from './Main/Edit';
import Control from './Main/Control';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Main extends Component {
  render() {
    const tasks = this.props.tasks;
    const { items, currentItem, selectedItems } = this.props.tasks;

    return (
      <div className="container col-md-8 col-xl-6 mt-4">
        {items.length === 0 ? <Welcome tasks={tasks} /> : null}
        {items.length === 0 ? null : (
          <Tasks tasks={selectedItems.length === 0 ? items : selectedItems} />
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

export default connect(mapStateToProps)(Main);
