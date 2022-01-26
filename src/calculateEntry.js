const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const classification = entrants.map((entrant) => {
    if (entrant.age < 18) return 'child';
    if (entrant.age >= 18 && entrant.age < 50) return 'adult';
    if (entrant.age >= 50) return 'senior';
    return entrant;
  });
  return classification.reduce((accumulator, current) => {
    const acc = accumulator;
    acc[current] += 1;
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
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
