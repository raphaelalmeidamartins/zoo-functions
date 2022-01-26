const data = require('../data/zoo_data');

function getMonday() {
  const newObj = {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
  return newObj;
}

function getDay(scheduleObj, day) {
  const dayObj = {};
  dayObj[day] = scheduleObj[day];
  return dayObj;
}

function getAnimal(animal) {
  return data.species
    .find((specie) => specie.name === animal).availability;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  const arrayAnimais = data.species.map((specie) => specie.name);
  const arrayDays = Object.keys(data.hours);
  const schedule = arrayDays.reduce((finalObj, day) => {
    const newObj = {};
    newObj[day] = {
      officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition: data.species
        .filter((specie) => specie.availability.includes(day))
        .map((specie) => specie.name),
    };
    return Object.assign(finalObj, newObj);
  }, {});
  if (scheduleTarget === 'Monday') return getMonday();
  if (arrayDays.includes(scheduleTarget)) return getDay(schedule, scheduleTarget);
  if (arrayAnimais.includes(scheduleTarget)) return getAnimal(scheduleTarget);
  return Object.assign(schedule, getMonday());
}

module.exports = getSchedule;
