"use strict";

//The three arrays that will be used to store babble
let words1;
let words2;
let words3;

//The csv file all the babble words are stored in
const url = "data/babble-data.csv";
const xhr = new XMLHttpRequest();

//Loading babble words from the csv file
xhr.onload = (e) => { 
    console.log(`In onload - HTTP Status Code = ${e.target.status}`);
    const csv = e.target.responseText;
    console.log(`Success - the file length is ${csv.length}`);
    
    //Splitting the csv text into three arrays
    [words1, words2, words3] = csv.split("\n");
    words1 = words1.split(",");
    words2 = words2.split(",");
    words3 = words3.split(",");
    
    //Generating babble after the page loads
    generateTechno(1);
};

xhr.onerror = e => console.log(`In onerror - HTTP Status Code = ${e.target.status}`);
xhr.open("GET", url);
xhr.send();

//randomarrayelement function to avoid duplicated code
function randomarrayelement(array)
{
    return array[Math.floor(Math.random() * array.length)];
}

//generateTechno function that will generate a varying amout of technobabble based on the input
function generateTechno(num)
{
    document.querySelector("#output").innerHTML = "";
    for(let iteration = 0; iteration < num; iteration++)
    {
        document.querySelector("#output").innerHTML += randomarrayelement(words1) + " " + randomarrayelement(words2) + " " + randomarrayelement(words3) + "<br/>";
    }
}

//Adding functionality to the buttons
document.querySelector("#my-button").addEventListener("click", function(){generateTechno(1)});
document.querySelector("#my-5-button").addEventListener("click", function(){generateTechno(5)});