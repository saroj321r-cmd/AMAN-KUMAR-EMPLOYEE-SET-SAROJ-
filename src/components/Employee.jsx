import React from 'react'

function Employee({employee,changeStatus}) {
  let ex;
  if(employee.experience>=5){
    ex="SENIOR";

  }
  else{
    ex= "JUNIOR";
  }

  
  return (
    <div className='employee-card'><h1>{employee.name}({ex})</h1>
    <p>Department:{employee.department}</p>
    <p>Designation:{employee.designation}</p>
    <p>Experience:{employee.experience}</p>
    <p>Status: {employee.available ? "Available":"Busy"}</p>
    <p>{ex}</p>
    
    <button  onClick={()=>changeStatus(employee.id)}>
            {employee.available ? "available": "unavailable"}</button>

    
    
    
    </div>
  )
}

export default Employee