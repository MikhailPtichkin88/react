import './app-info.css';

const AppInfo = ({employees, increase}) => {
 
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>  
      <h2>Общее число сотрудников: {employees}</h2>
      <h3>Премию получат: {increase}</h3>
    </div>
  )
}

export default AppInfo;