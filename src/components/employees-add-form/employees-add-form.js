import { Component } from 'react'
import './employees-add-form.css';

class EmployeesAddForm extends Component  {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      salary: ''
    }

  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

    onSubmit = (e) => {
      e.preventDefault();
    }

  
  render() {
    const {name, salary} = this.state;
    const {onAdd} = this.props;
  return (
 
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form
        className="add-form d-flex"
        onSubmit={this.onSubmit}>
        <input type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
          name='name'
          onChange={this.onValueChange}
          value={name} />
        <input type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?" 
          name='salary'
          onChange={this.onValueChange}
          value={salary}/>

        <button type="submit"
          className="btn btn-outline-light"
          onClick={() => onAdd(name, salary)}>Добавить</button>
      </form>
    </div>
  )
}
}
export default EmployeesAddForm;