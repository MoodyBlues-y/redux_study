import React, { Component } from "react";
import { connect } from "react-redux";
import { addPerson } from "../../redux/actions/person";
import { nanoid } from "nanoid";

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode?.value;
    const age = this.ageNode?.value;
    const personObj = { id: nanoid(), name, age };
    this.props.addPerson(personObj);
    this.nameNode.value = "";
    this.ageNode.value = "";
  };
  render() {
    return (
      <div>
        <h2>我是Person组件，当前求和为：{this.props.sum}</h2>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="请输入名字"
        />
        &nbsp;
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="请输入年龄"
        />
        <br />
        <br />
        <button onClick={this.addPerson}>点我添加人员</button>
        <ul>
          {this.props.persons.map((p) => {
            return (
              <li key={p.id}>
                {p.name}--{p.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    //@ts-ignore
    persons: state.persons,
    sum: state.sum,
  }),
  { addPerson }
)(Person);
