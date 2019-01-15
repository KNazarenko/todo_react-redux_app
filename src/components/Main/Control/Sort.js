import React, { Component } from 'react';

export class Sort extends Component {
  render() {
    return (
      <React.Fragment>
        <input
          type="checkbox"
          className="custom-control-input"
          id="checkBoxInput"
        />
        <label
          className="custom-control-label float-left"
          htmlFor="checkBoxInput"
        >
          По приоритету
        </label>
      </React.Fragment>
    );
  }
}

export default Sort;
