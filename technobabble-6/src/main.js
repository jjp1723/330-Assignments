"use strict";

//The three arrays that will be used to store babble
let words1;
let words2;
let words3;

//The json file all the babble words are stored in
const url = "data/babble-data.json";
const xhr = new XMLHttpRequest();

//Loading babble words from the json file
xhr.onload = (e) => { 
    console.log(`In onload - HTTP Status Code = ${e.target.status}`);
    
    //Testing if the json file is valid
    let json;
    try
    {
        json = JSON.parse(e.target.responseText);
    }
    catch
    {
        document.querySelector("#output").innerHTML = "BAD JSON!";
        return;
    }
    
    //Splitting the json content into three arrays
    const keys = Object.keys(json)
    words1 = json[keys[0]].wordlist;
    words2 = json[keys[1]].wordlist;
    words3 = json[keys[2]].wordlist;
    
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