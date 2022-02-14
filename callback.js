
const userData = (empID, callback )=>{
    
    setTimeout(()=>{
        let data={
            name: 'james bond'
        };
        
    callback(data);
    
    
    },2000);


}

const Username = userData(111, (val) =>{
   console.log(val);
});
//console.log(Username);


//tables

//empId, name   var empID = getEmpID('vishal')

// empID , address  getAddress(empID)
























