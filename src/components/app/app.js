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
      {name: "John S.", salary: 800, increase: false, rise: true, id: 1},
      {name: "Alex M.", salary: 3000, increase: false, rise: false, id: 2},
      {name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3},
      {name: "Mike W.", salary: 6000, increase: true, rise: false, id: 4}
    ],
    maxId: 5,
   
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
      rise: false,
      id: state.maxId
    })
    
    return {
      data: newData,
      maxId: state.maxId + 1
    }
  })
}

 onToggleIncrease = (id) => {
  this.setState(({data}) => ({
    data: data.map( item => {
      if (item.id === id) {
        return {...item, increase: !item.increase} 
      }
      return item;
    })
  }))
 }

onToggleRise = (id) => {
   this.setState(({data}) => {
    const index = data.findIndex(elem => elem.id === id);
    const old = data[index];
    const newItem = {...old, rise: !old.rise}
    const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    return {
      data: newArr
    }
  })
}


render() {
  const employees = this.state.data.length;
  const increase = this.state.data.filter(item => item.increase === true).length;
  console.log(employees,increase)
  return (
    
    <div className="app">
      <AppInfo
      employees={employees}
      increase={increase}/>
      
      <div className="search-panel">
         <SearchPanel/>
         <AppFilter/>
      </div>

      <EmployeesList 
      data={this.state.data}
      onDelete={this.deleteItem}
      onToggleIncrease={this.onToggleIncrease}
      onToggleRise={this.onToggleRise}/>
      <EmployeesAddForm
      onAdd={this.addItem}/>
    </div>
  )
}

}

export default App;