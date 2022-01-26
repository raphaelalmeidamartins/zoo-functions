const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalSpecie = data.species.find((specie) => specie.name === animal);
  return animalSpecie.residents
    .every((currAnimal) => currAnimal.age >= age);
}

module.exports = getAnimalsOlderThan;
