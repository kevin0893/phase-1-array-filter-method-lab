// Code your solution here
// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
 //

// findMatching function
function findMatching(drivers, name) {
    return drivers.filter(driver =>
      driver.toLowerCase() === name.toLowerCase()
    );
  }
  
  // fuzzyMatch function
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver =>
      driver.toLowerCase().startsWith(letters.toLowerCase())
    );
  }
  
  // matchName function
  function matchName(drivers, name) {
    return drivers.filter(driver =>
      driver.name.toLowerCase() === name.toLowerCase()
    );
  }
  