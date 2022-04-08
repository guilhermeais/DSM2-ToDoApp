import axios from 'axios'
const URL = 'http://localhost:3003/api/todos'

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
    this.handleRemove = this.handleRemove.bind(this)
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.handleSearch = this.handleSearch.bind(this)


    this.refresh()
  }

   refresh(description = ''){
    const searchRegex = description? `/${description}/`: ''

    axios.get(`${URL}`, {
      params: {
        sort: '-createdAt',
        description__regex: searchRegex
      }
    }).then(res => this.setState({...this.state, description: '', list: res.data})).
    catch(error => console.error(error))
  
  }

  handleChange(value){
    this.setState({...this.state, description: value})
  }

  handleAdd(){
    const description = this.state.description
    axios.post(`${URL}`, { description }).then(res => {
      console.log(res.data)
      this.refresh();
    })
    .catch(error => console.error(error))
  }  

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
    .then(res=>{
      console.log('Resultado: ', res)
    })
    .catch(e => {
      console.error(e)
    })
    .finally(() => {
      this.refresh()
    })
  }

  handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, {...todo, done: true})
    .then(res => this.refresh())
  }

  handleMarkAsPending(todo){
    axios.put(`${URL}/${todo._id}`, {...todo, done: false})
    .then(res => this.refresh())
  }

  handleSearch(value){
    console.log(value.target)
    this.refresh(value)
  }

  render() {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm 
        description={this.state.description} 
        handleChange={this.handleChange}  
        handleAdd={this.handleAdd}
        handleSearch={this.handleSearch}
        ></TodoForm>
        <TodoList 
        handleRemove={this.handleRemove}
        list={this.state.list}
        handleMarkAsDone={this.handleMarkAsDone}
        handleMarkAsPending={this.handleMarkAsPending}
        >

        </TodoList>
      </div>
    );
  }
}