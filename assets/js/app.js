var firstName;
var lastName;
var age;
var job;
// Receive the values from input
firstName = prompt("Enter Your First Name: ");
lastName = prompt("Enter Your Last Name: ");
job = prompt("What is Your Profession? ")
age = prompt("Enter Your Age: ");
// Display the result on console from input
console.log("Here is your Profile ")
console.log("Full Name: " + firstName + " " + lastName);
console.log("Profession : " + job);
console.log("Age : " + age + " " + "years old");
let familyMember = new Array();
//number of family
let numberOfFamily;
numberOfFamily = prompt("Number of Family ? ");
//Receiving the family number
for (var i = 0; i < parseInt(numberOfFamily); i++) {
    familyMember[i] = prompt("Your Family Members " + (i + 1));
}

console.log("Family Members ");
//Displaying the family member with foreach
familyMember.forEach(function(member) {
    console.log("Family Member " + (i + 1) + " : " + member);
});