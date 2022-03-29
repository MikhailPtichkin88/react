import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleRise, onToggleIncrease}) => {
  
    const elements = data.map(item => {
      const {id, ...itemProps} = item;
      return (
        <EmployeesListItem 
        key={id} {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleIncrease={() => onToggleIncrease(id)}
        onToggleRise={() => onToggleRise(id)}/>  //name={item.name} salary={item.salary} increase={item.increase}
      )
    })

    return  (
      <ul className="app-list list-group">
          {elements}
      </ul>
    
  )
}
export default EmployeesList;