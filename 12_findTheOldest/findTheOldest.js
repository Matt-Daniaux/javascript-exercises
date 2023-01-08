const findTheOldest = function(array) {
    const ordered = array.sort(function (a, b) {
        const currentYear = (new Date()).getFullYear()
        
        let yearOfDeathA = a.yearOfDeath || currentYear;
        let yearOfDeathB = b.yearOfDeath || currentYear;
        
        let aPerson = yearOfDeathA - a.yearOfBirth;
        let bPerson = yearOfDeathB - b.yearOfBirth;
        
        if (aPerson > bPerson) { 
            return -1
        } else{ 
            return 1};  
    });

    console.table(ordered)
    //console.table(ordered)
    return ordered[0]

};

/*const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
findTheOldest(people)*/



// Do not edit below this line
module.exports = findTheOldest;
