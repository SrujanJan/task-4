fetch("https://rawcdn.githack.com/kmitprojectschool/sem12022/788c820e40a750fecb30433c8d346457b7859abc/employee.json").then((data) => {
  // console.log(data)
  return data.json()
}).then((objectdata) => {
  // console.log(objectdata[0].Name)
  // console.log(objectdata.Employees[0].Name)
  let tabledata = ""
  for (let i = 0; i < objectdata.Employees.length; i++) {
    // tabledata+=objectdata.Employees[i].Name+"\t"
    
    tabledata += `<tr>
      <td scope="col">${objectdata.Employees[i].Name}</td>
      <td scope="col">${objectdata.Employees[i].Address}</td>
      <td scope="col">${objectdata.Employees[i].Salary}</td>
      <td scope="col">${objectdata.Employees[i].DateOfJoining}</td>
    </tr>`
  }
  // using map function

  // objectdata.Employees.map((values)=>{
  //    tabledata+=`<tr>
  //     <td scope="col">${values.Name}</td>
  //     <td scope="col">${values.Address}</td>
  //     <td scope="col">${values.Salary}</td>
  //     <td scope="col">${values.DateOfJoining}</td>
  //   </tr>`
  // })


  document.getElementById("tablebody").innerHTML = tabledata
  function salrayentry() {
  
  let salarytable = ""
  for (let i = 0; i < objectdata.Employees.length; i++) {
    if (objectdata.Employees[i].Salary > 50000) {
      salarytable += `<tr>
          <td scope="col">${objectdata.Employees[i].Name}</td>
           <td scope="col">${objectdata.Employees[i].Salary}</td>
         
          </tr>
        `
    }
  }
   document.getElementById("tablebodysalary").innerHTML = salarytable
}
  document.getElementById("salary").addEventListener("click", salrayentry);
 function decemberentry() {
   let decembtable = ""
  for (let i = 0; i < objectdata.Employees.length; i++) {
    let si=objectdata.Employees[i].DateOfJoining
    if(si.slice(3,5)=='12'){
     decembtable+= `<tr>
          <td scope="col">${objectdata.Employees[i].Name}</td>
           <td scope="col">${objectdata.Employees[i].DateOfJoining}</td>
         
          </tr>
        `
    }
  }
   document.getElementById("tablebodydecember").innerHTML = decembtable

 }
  document.getElementById("december").addEventListener("click", decemberentry);

})


// document.getElementsByClassName("salary").addEventListener("click", salrayentry);