import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
  super(props);
  
  this.state = {
     data: [
      {name: "John S.", salary: 800, increase: false, id: 1},
      {name: "Alex M.", salary: 3000, increase: false, id: 2},
      {name: "Carl W.", salary: 5000, increase: false, id: 3},
      {name: "Mike W.", salary: 6000, increase: true, id: 4}
    ],
    maxId: 5
  }
}
 
deleteItem = (id) => {
  this.setState(state => {
    return {
      data: state.data.filter(elem => elem.id !== id)
    }
  })
}

addItem = (name, salary) =>{
  this.setState(state => {
const newData = Object.assign([], state.data);
newData.push({
  name: name,
  salary: salary,
  increase: false,
  id: state.maxId
})
return {
  data: newData,
  maxId: state.maxId + 1
}
  })
}
 
render() {
  return (
    <div className="app">
      <AppInfo/>
      
      <div className="search-panel">
         <SearchPanel/>
         <AppFilter/>
      </div>

      <EmployeesList 
      data={this.state.data}
      onDelete={this.deleteItem}/>
      <EmployeesAddForm
      onAdd={this.addItem}/>
    </div>
  )
}

}

export default App;