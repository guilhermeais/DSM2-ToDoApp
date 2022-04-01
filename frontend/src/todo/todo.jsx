import React, { Component } from "react";
import PageHeader from '../template/pageHeader';

import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {
      description: '',
      list: []
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
   
  }
  handleChange(value){
    console.log(value)
    this.setState({...this.state, description: value})
  }
  handleAdd(){
    alert(1)
  }  
  render() {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm description={this.state.description} handleChange={this.handleChange} handleAdd={this.handleAdd}></TodoForm>
        <TodoList></TodoList>
      </div>
    );
  }
}