"use strict";

const myCounter = 0;

const car = {
    "make":"ford",
    "model":"Pinto",
    "cylinders":4,
    "model":"Escort",
    "speed":"fast"
}

if (car.cylinders == 4)
{
    car.speed = "slow";
}
else
{
    car.speed = "not slow";
    myCounter++;
}

if(car.model = "Pinto")
{
    console.log("It's a Pinto");
}

console.log("The " + `${car.model}` + " is " + `${car.speed}`);
console.log("myCounter = " , myCounter);