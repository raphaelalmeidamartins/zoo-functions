const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const countObj = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) countObj.child += 1;
    if (entrant.age >= 18 && entrant.age < 50) countObj.adult += 1;
    if (entrant.age >= 50) countObj.senior += 1;
  });
  return countObj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const classification = countEntrants(entrants);
  let acc = 0;
  acc += classification.child * data.prices.child;
  acc += classification.adult * data.prices.adult;
  acc += classification.senior * data.prices.senior;
  return acc;
}

module.exports = { calculateEntry, countEntrants };
