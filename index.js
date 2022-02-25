// Write your solution in this file!
let employee = {
    name: "",
    streetAddress: "",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee};
    newObj[key] = value; 
return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
return employee; 
}

function deleteFromEmployeeByKey(employee, key){
    const newObject = {...employee};
    delete newObject.name, newObject.streetAddress;
return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name, employee.streetAddress;
return employee;
}