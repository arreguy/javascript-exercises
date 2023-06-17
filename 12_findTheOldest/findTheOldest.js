const findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => {
        if (!currentPerson.yearOfDeath) {
            currentPerson.yearOfDeath = new Date().getFullYear();
        }
        return (currentPerson.yearOfDeath - currentPerson.yearOfBirth) > (oldestPerson.yearOfDeath - oldestPerson.yearOfBirth) ? currentPerson : oldestPerson;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
