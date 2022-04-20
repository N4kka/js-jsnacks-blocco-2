//Ask the user for a number and print the cube of the number choosen
//Declaration
const userNumber = parseInt(prompt("Dimmi un numero"));
let userNumberCube = '';
let i = 1;

//Elaboration
while (i <= userNumber) {
    userNumberCube = Math.pow(i, 3);
    console.log(i, userNumberCube);
    i++;
}