const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const selectedEmployee = data.employees.find((employee) => employee.id === id);
  const oldestAnimals = data.species
    .find((specie) => specie.id === selectedEmployee.responsibleFor[0]).residents
    .reduce((oldest, current) => {
      if (oldest.age > current.age) return oldest;
      return current;
    }, 0);
  return [...Object.values(oldestAnimals)];
}

module.exports = getOldestFromFirstSpecies;
