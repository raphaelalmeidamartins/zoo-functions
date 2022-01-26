const data = require('../data/zoo_data');

function returnAnimalsArray(specieName, sorted, sex) {
  const arrayAnimals = data.species
    .find((specie) => specie.name === specieName).residents
    .filter((animal) => {
      if (sex) return animal.sex === sex;
      return animal;
    }).map((animal) => animal.name);
  if (sorted) return arrayAnimals.sort();
  return arrayAnimals;
}

function returnObjectWithNames(classification, sorted, sex) {
  const regions = Object.keys(classification);
  return regions.reduce((finalObject, region) => {
    const newClassification = {};
    const regionSpecies = classification[region]
      .map((currentSpecie) => {
        const newObj = {};
        newObj[currentSpecie] = returnAnimalsArray(currentSpecie, sorted, sex);
        return newObj;
      });
    newClassification[region] = regionSpecies;
    return Object.assign(finalObject, newClassification);
  }, {});
}

function getAnimalMap(options) {
  const regions = [...new Set(data.species.map((specie) => specie.location))];
  const classification = regions.reduce((finalObject, region) => {
    const newObj = {};
    newObj[region] = data.species
      .filter((specie) => specie.location === region)
      .map((specie) => specie.name);
    return Object.assign(finalObject, newObj);
  }, {});
  if (options && options.includeNames) {
    return returnObjectWithNames(classification, options.sorted, options.sex);
  }
  return classification;
}

module.exports = getAnimalMap;
