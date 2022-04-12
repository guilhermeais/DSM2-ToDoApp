import axios from 'axios'
const URL = 'http://localhost:3003/api/persons'
import moment from 'moment'

import React, { Component } from "react";
import PageHeader from '../template/pageHeader';

import RegisterForm from './registerForm';
import RegisterList from './registerList';

export default class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
     name: '',
     persons: []
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSetEditing = this.handleSetEditing.bind(this)
    this.handleChangePerson = this.handleChangePerson.bind(this)
    this.handleCancelEdit = this.handleCancelEdit.bind(this)
    this.handleSavePerson = this.handleSavePerson.bind(this)
    this.handleClearSearch = this.handleClearSearch.bind(this)

    this.refresh()
  }

   refresh(name = ''){
    const searchRegex = name? `/${name}/`: ''

    axios.get(`${URL}`, {
      params: {
        sort: 'name',
        name__regex: searchRegex
      }
    }).then(res => {
      let persons = res.data
      function formatDate(date){
        return moment(date).format('[Dia] DD [do mês] MM [do ano] YYYY[, às] HH:mm')
      }

      if(persons){
        persons = persons.map(person => ({...person, createdAt: formatDate(person.createdAt), editing: false}))
      }

      this.setState({...this.state, name: '', persons})})
    .catch(error => console.error(error))
  
  }

  handleChange(value){
    this.setState({...this.state, name: value})
  }

  handleChangePerson(newValue, person) {
    const persons = this.state.persons
    const idxPersonEditing = persons.findIndex(p => person.id === p.id)
    if(idxPersonEditing !== -1){
      persons[idxPersonEditing].name = newValue
      this.setState({...this.state, persons})
    }
  }

  handleAdd(){
    const name = this.state.name
    axios.post(`${URL}`, { name }).then(res => {
      console.log(res.data)
      this.refresh();
    })
    .catch(error => console.error(error))
  }  

  handleRemove(person) {
    axios.delete(`${URL}/${person._id}`)
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

  handleSearch(value){
    const search = this.state.name
    this.refresh(search)
  }

  handleSetEditing(person) {
    const persons = this.state.persons
    const idxPersonEditing = persons.findIndex(p => person.id === p.id)
    if(idxPersonEditing !== -1){
      persons[idxPersonEditing].editing = true
      this.setState({...this.state, persons})
    }
  }

  _getPersonById(id){
    return axios.get(`${URL}/${id}`).then(({data})=>data).catch(error => console.error(error))
  }
  handleCancelEdit(person) {
    this._getPersonById(person._id).then(databasePerson => {
      const persons = this.state.persons
      const idxPersonEditing = persons.findIndex(p => person.id === p.id)
      if(idxPersonEditing !== -1){
        let person = persons[idxPersonEditing]
        person = Object.assign(person, databasePerson)
        person.editing = false
        this.setState({...this.state, persons})
      }
    })
    
  }

  handleClearSearch() {
    this.setState({...this.state, name: ''})
  }

  handleSavePerson(person){
    const { name } = person 
    axios.put(`${URL}/${person._id}`, {name})
    .then(res => {
      console.log('Resultado: ', res)
    })
    .catch(e => {
      console.error(e)
    })
    .finally(() => {
      this.refresh()
    })
  }

  render() {
    return (
      <div>
        <PageHeader name='Cadastro' small='Pessoas' />
        <RegisterForm 
        handleClearSearch={this.handleClearSearch}
        name={this.state.name} 
        handleChange={this.handleChange}  
        handleAdd={this.handleAdd}
        handleSearch={this.handleSearch}
        ></RegisterForm>
        <RegisterList 
        handleSetEditing={this.handleSetEditing}
        handleChange={this.handleChangePerson}
        handleCancelEdit={this.handleCancelEdit}
        handleRemove={this.handleRemove}
        handleSavePerson={this.handleSavePerson}
        list={this.state.persons}
        >

        </RegisterList>
      </div>
    );
  }
}