import React, { Component } from "react";

class TodoList extends Component {
  state = {};
  render() {
    return (
      <div className="jumbotron jumbotron-fluid py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-4 mt-5">
              <h1 className="display-4">ToDo List</h1>
              <input type="text" placeholder="Enter your task here"></input>
              <button className="btn btn-primary ml-2">Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
