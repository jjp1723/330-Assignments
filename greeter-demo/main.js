'use strict';

//Junk
function addThem1(num1, num2){ return num1 + num2; }
const addThem2 = (num1, num2) => { return num1 + num2; };
const addThem3 = (num1, num2) => num1 + num2;

console.log("addThem1(1, 1) = " + addThem1(1, 1));
console.log("addThem2(1, 1) = " + addThem2(1, 1));
console.log("addThem3(1, 1) = " + addThem3(31, 1));

const doubleIt1 = (num) => { return num * 2; };
const doubleIt2 = (num) => num * 2;
    
// 1 - get a reference to the button
// 2 - add a click event to button that calls a `sayHello` function (sayHello was renamed to 'greet')
document.querySelector("#btn-hello").onclick = function(){greet("Hello ");};
document.querySelector("#btn-goodbye").onclick = () => greet("Goodbye ");

// 3 - create a `greet` function
function greet(greeting)
{
    console.log(greeting + " ");
    // 3A - get first and last name of person from the <input>
    const firstname = document.querySelector("#input-firstname");
    const lastname = document.querySelector("#input-lastname");
    const name1 = firstname.value || "Johnny";
    const name2 = lastname.value || "Appleseed";
    // 3B - get a reference to the #output <p>
    const output = document.querySelector("#output");
    // 3C - update HTML of #output <p>
    output.innerHTML = greeting + " " + name1 + " " + name2;
}