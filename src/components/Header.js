import React, { Component } from 'react';
import logo from '../assets/img/github-logo-invert.png';
import { connect } from 'react-redux';
import { openAdd, removeCurrentTask } from './../actions/actions';
import PropTypes from 'prop-types';

class Header extends Component {
  onNewTaskClick() {
    this.props.removeCurrentTask();
    this.props.openAdd();
  }

  render() {
    // Total tasks number
    const tasks = this.props.tasks.length;

    return (
      <nav className="navbar navbar-dark bg-dark text-light">
        <div className="container col-md-8 col-xl-6 justify-content-between">
          <a
            className="navbar-brand"
            href="https://github.com/KNazarenko/KNazarenko.github.io"
          >
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="KNazarenko.github.io"
            />
            <span className="appName">Todo</span>
          </a>
          <button
            type="button"
            className="btn btn-warning btn-sm"
            onClick={this.onNewTaskClick.bind(this)}
          >
            New task
          </button>
          <div>
            Total tasks:
            <strong className="text-warning pl-2">{tasks}</strong>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  tasks: PropTypes.array.isRequired,
  removeCurrentTask: PropTypes.func.isRequired,
  openAdd: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tasks: state.tasks.items
});

export default connect(
  mapStateToProps,
  { removeCurrentTask, openAdd }
)(Header);
