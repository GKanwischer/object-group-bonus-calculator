$(document).ready(readyNow);

let isWhite = true;

function readyNow(){
  $("button").on('click' , buttonClick)
  setInterval(buttonFlash, 750);
}

// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here

/*
Those who have a rating of a 2 or below should not receive a bonus.
Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
If their employee number is 4 digits long, this means they have been with the company for longer than 15 years, and should receive an additional 5%.
However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
No bonus can be above 13% or below 0% total.
*/
  const maxBonusPercent = 1.130000001;
  let bonusPercent = 1.0;

  // Check ratings
  if ( employee.reviewRating <= 2) {
    // Do nothing, git gud you slob.
  } else if (employee.reviewRating === 3) {
    bonusPercent = 1.04;
  } else if (employee.reviewRating === 4) {
    bonusPercent = 1.06;
  } else if (employee.reviewRating === 5) {
    bonusPercent = 1.1;
  }
  // Check ID length
  if( employee.employeeNumber.length <= 4) {
    bonusPercent += 0.05;
  }

  // Check if employee is earning too much.
  if ( employee.annualSalary > 65000 && bonusPercent > 1.0) {
    bonusPercent -= 0.01;
  }

  // Check if bonus is too high
  if ( bonusPercent > maxBonusPercent) {
    bonusPercent = maxBonusPercent;
  }

  // Round down bonus amount to the nearest dollar.
  let comp = bonusPercent * employee.annualSalary;
  let bonus = (bonusPercent - 1) * employee.annualSalary;

  bonus = Math.floor(bonus);
  comp = Math.floor(comp);
  // return new object with bonus results
  return {name: employee.name, bonusPercentage: bonusPercent, totalCompensation: comp, totalBonus: bonus};
}
/*
The name property should contain the employee's name.
The bonusPercentage property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
The totalCompensation property should be the adjusted annual compensation (base annual + bonus)
The totalBonus should be the employee's total bonus rounded to the nearest dollar.
*/

console.log("Testing that the function actually works correctly.");
for ( let employee of employees ) { // TODO: Can add `let` here
  console.log(calculateIndividualEmployeeBonus(employee));
}


function drawRaiseList (raiseArray) {
  let list = $("#payed"); // TODO: remove extraneous space
  list.empty();

  for ( let raise of raiseArray ) {
    list.append(`<li>${raise.name} - Percent bonus: ${Math.floor((raise.bonusPercentage - 1) * 100)}%. Total compensation: $${raise.totalCompensation}. Total bonus: $${raise.totalBonus}</li>`);
  }
}


function buttonClick () {
  // TODO : Add function to create list of raises.
  const raises = raisinLoop(employees); // TODO: Add const here
  
  drawRaiseList(raises);
}


function raisinLoop (employeesToBePayedVeryMuch) {
  const returnList = [];
  for (let employee of employeesToBePayedVeryMuch){
    returnList.push(calculateIndividualEmployeeBonus(employee))
    console.log(returnList[returnList.length-1]);
  }
  return returnList;
}


function buttonFlash () {
  const button = $('button'); // TODO: missing `const`

  // TODO: instead of a global variable, check out
  // the `.toggleClass()` function in jQuery.
  if ( isWhite ) {
    button.css("color", "yellow");
    isWhite = false;
  } else {
    button.css("color", 'white');
    isWhite = true;
  }
}
