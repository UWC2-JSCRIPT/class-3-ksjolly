
const RESULT_VALUES = {
  w: 3,
  d: 1,
  l: 0
}

/**
 * Takes a single result string and (one of 'w', 'l', or 'd') 
 * and returns the point value
 * 
 * @param {string} result 
 * @returns {number} point value
 */
const getPointsFromResult = function getPointsFromResult(result) {
  return RESULT_VALUES[result];
}

// Create getTotalPoints function which accepts a string of results
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won

const getTotalPoints = (results) => {
  const ar = results.split("");
  o = {};
  ar.forEach(w => w.split('').forEach(e => o[e] = (o[e] || 0)+1));
  const sum = o['w'] * 3 + o['d'] * 1;
  // console.log('Sum is: ', sum);
  return sum;

}


// Check getTotalPoints
console.log(getTotalPoints('wwdl')); // should equal 7

// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"

const orderTeams = function() {
  const args = Array.from(arguments);
  args.forEach(function(input) {
    const points = getTotalPoints(input.results);
    console.log(`${input.name} : ${points}`);
  });
}

// Check orderTeams
orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' }
);
// should log the following to the console:
// Sounders: 7
// Galaxy: 4