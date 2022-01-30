const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees
    .find((employee) => [employee.firstName, employee.lastName].includes(employeeName));
}

module.exports = getEmployeeByName;
