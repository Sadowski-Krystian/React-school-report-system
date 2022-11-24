import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
export default class CaseForm extends Component{
  constructor(args){
    super(args)
    this.state = {
      case: "",
      unit: "",
      student: "",
      notes: ""
    }
    this.doChange = this.doChange.bind(this)
    this.doSubmit = this.doSubmit.bind(this)
  }

  doChange(e){
    const tar = e.target
    const val = tar.type === 'checkbox' ? tar.checked : tar.value
    const name = tar.name
    this.setState({[name]: val})
  }

  doSubmit(e){
    e.preventDefault()
    console.table(this.state)
  }



  render(){
    return (
      <div className="FormPage">
        <header className="Form-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>System zgłoszeń</h1>
        </header>
        <form className='Case-form' onSubmit={this.doSubmit}>
          <label>Sprawa
            <input onChange={this.doChange} type="text" name="case"/>
          </label>
          <label>Klasa
            <input onChange={this.doChange} type="text" name="unit"/>
          </label>
          <label>Uczeń
            <input onChange={this.doChange} type="text" name="student"/>
          </label>
          <label>Uwagi
            <textarea name='notes'
            value={this.state.notes}
            onChange={this.doChange} />
          </label>
          <input type="submit" name="setBtn" value="zgłoś"/>
        </form>
      </div>
    );
  }
}
