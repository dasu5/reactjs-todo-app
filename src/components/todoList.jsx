import React, { Component } from "react";

class TodoList extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center align-items-center container">
          <div className="mb-3">
            <div className="input-group">
              <h1 className="display-2">ToDo List</h1>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center container">
          <form className="mb-3">
            <div className="input-group">
              <input
                type="text"
                name="todoTask"
                className="form-control"
                placeholder="Enter your task here"
                autoComplete="off"
              ></input>
              <button type="submit" className="btn btn-primary ml-2">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
