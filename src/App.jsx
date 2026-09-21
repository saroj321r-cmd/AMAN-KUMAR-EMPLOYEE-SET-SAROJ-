import {useState} from 'react'
import EmployeeData from "./data/employee.json"
import Employee from './components/Employee'
import "./App.css";


function App() {
  const [employee, setemployee] = useState(EmployeeData);
  const totalemployee=employee.length;
  const availableemployee=employee.filter((employee)=>employee.available).length;
  const unavailableemployee=employee.filter((employee)=>!employee.available).length;
  const changeStatus=(id)=>{
    const newemployee = employee.map((employee) => {
      if(employee.id===id)
      {
        return{
          ...employee,
          available: !employee.available


        }
      }
      return employee;

  });

  setemployee(newemployee);
}


  


  return (
    <div>
      <h1 className='app'>Employee  DATA SET </h1>
      <h2>Totalemployee:{totalemployee}</h2>
      <h2>Availableemployee:{availableemployee}</h2>
      <h2>Unavailableemployee : {unavailableemployee}</h2>
      {availableemployee === 0 && (
  <h2>No Employee are currently available.</h2>
)}









      {employee.map((employee)=>(
        <Employee key={employee.id} employee={employee}
        changeStatus={changeStatus} />

      ))}



    </div>



  )
}

export default App