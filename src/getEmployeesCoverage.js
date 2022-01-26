const data = require('../data/zoo_data');

function generateEmployeeObj(obj) {
  const arraySpecies = obj.responsibleFor
    .map((specieId) => data.species.find((specie) => specie.id === specieId).name);
  return {
    id: obj.id,
    fullName: `${obj.firstName} ${obj.lastName}`,
    species: [...arraySpecies],
    locations: arraySpecies
      .map((currSpecie) => data.species.find((specie) => specie.name === currSpecie).location),
  };
}

function generateArrayAllEmployees() {
  return data.employees.reduce((acc, em) => {
    const newArray = [];
    newArray.push(generateEmployeeObj(em));
    return [...acc, ...newArray];
  }, []);
}

function findEmployee(obj) {
  return data.employees
    .find((em) => [em.firstName, em.lastName].includes(obj.name) || em.id === obj.id);
}

function getEmployeesCoverage(obj) {
  if (!obj) {
    return generateArrayAllEmployees();
  }
  if (obj.name || obj.id) {
    const selectedEmployee = findEmployee(obj);
    if (!selectedEmployee) throw new Error('Informações inválidas');
    return generateEmployeeObj(selectedEmployee);
  }
}

module.exports = getEmployeesCoverage;
