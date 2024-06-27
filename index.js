// Write your solution in this file!

// Define the initial employee object
let employee = {
    name: "Sam"
};

// Non-destructive: returns a new employee object with updatedkey-value
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value }; // Return a new object with the updated key-value pair
}

// Destructive: updates the employee object directly
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Directly updates the employee object
    return employee;
}

// Non-destructive: returns a new employee object without the specified key
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}; // Creates a clone of the employee object
    delete newEmployee[key]; // Deletes the key from the cloned object
    return newEmployee; // Returns the new employee object without the deleted key
}

// Destructive: removes the key from the employee object directly
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Directly deletes the key from the employee object
    return employee; // Returns the modified employee object
}

