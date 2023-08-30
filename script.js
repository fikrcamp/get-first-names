function getFirstNames(namesArray) {
  const firstNames = namesArray.map(nameGroup => nameGroup[0]);
  return firstNames;
}

const names = [["Ahmed","Aisha","Amina"],["Jaamac","Khadijah","Layla"],["Mohamed","Ali"]];
const firstNames = getFirstNames(names);
console.log(firstNames); // Output: ["Ahmed","Jaamac","Mohamed"]

