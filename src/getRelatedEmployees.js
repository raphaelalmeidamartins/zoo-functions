const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const subordinates = data.employees
      .filter((employee) => employee.managers.includes(managerId));
    return subordinates.map((sub) => `${sub.firstName} ${sub.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
