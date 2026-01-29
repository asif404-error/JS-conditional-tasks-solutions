/*
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let fare = 800;
let students = false;
let age = 25;

if (age < 10) {
  console.log("Free for children.");
}

else if (students) {
  const discount = (fare * 50) / 100;
  const payAmount = fare - discount;
  console.log(payAmount);
}

else if (age >= 60) {
    const discount = (fare * 15) / 100;
    const payAmount = fare - discount;
    console.log(payAmount);
}

else {
  console.log("Regular Ticket Fare 800tk");
}
