let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (driver) => {
    return driver.slice(0,2)
}
const returnLastTwoDrivers = (driver) => {
    return driver.slice(2, 4)
}
const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (value) => {
    return function(fare){
        return fare * value
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, functionDriver){
    return functionDriver(arrayOfDrivers);
}