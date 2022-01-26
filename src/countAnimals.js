const data = require('../data/zoo_data');

function countAnimals(animal) {
  const totalAnimais = data.species.reduce((objAcc, currSpecie) => {
    const newObject = {};
    const specie = currSpecie.name;
    newObject[specie] = currSpecie.residents.length;
    return Object.assign(objAcc, newObject);
  }, {});
  if (!animal) return totalAnimais;
  if (!animal.sex) return totalAnimais[animal.specie];
  return data.species.find((specie) => specie.name === animal.specie)
    .residents.reduce((accumulator, current) => {
      let acc = accumulator;
      if (current.sex === animal.sex) acc += 1;
      return acc;
    }, 0);
}

module.exports = countAnimals;
