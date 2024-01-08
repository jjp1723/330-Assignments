"use strict";

//The three arrays that will be used to store babble
let words1;
let words2;
let words3;

//The xml file all the babble words are stored in
const url = "data/babble-data.xml";
const xhr = new XMLHttpRequest();

//Loading babble words from the xml file
xhr.onload = (e) => { 
    console.log(`In onload - HTTP Status Code = ${e.target.status}`);
    const xml = e.target.responseXML;
    
    //Checking for broken xml
    if(!xml) // if(xml == null)
    {   
        document.querySelector("#output").innerHTML = "XML is null!";
        return;
    }
    
    //Splitting the xml content into three arrays
    words1 = xml.querySelector("wordlist[cid='firstwords']").textContent.split(",");
    words2 = xml.querySelector("wordlist[cid='secondwords']").textContent.split(",");
    words3 = xml.querySelector("wordlist[cid='thirdwords']").textContent.split(",");
    
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