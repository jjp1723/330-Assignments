import {xhrGetFile} from "./ajax.js";

//console.log("app page loaded");

const baseURL = "https://dog.ceo/api/breed/";
const endURL = "/images/random";
let limitParam = "2";
let breedParam = "affenpinscher";

//UI references
let btnClearAll = null,
    btnSearch = null,
    elementCardHolder = null,
    elementStatus = null,
    fieldBreed = null,
    fieldLimit = null;

//A function that reconstructs the dogURL everytime it is called
const dogURL = () => `${baseURL}${breedParam}${endURL}/${limitParam}`;

let allDogs = [];

const init = () => {
    btnClearAll = document.querySelector("#btn-clear-all");
    btnSearch = document.querySelector("#btn-search");
    elementCardHolder = document.querySelector("#element-card-holder");
    elementStatus = document.querySelector("#element-status");
    fieldBreed = document.querySelector("#field-breed");
    fieldLimit = document.querySelector("#field-limit");

    // Event Handlers
    btnSearch.onclick = (evt) => {
        console.log(`downloading ${dogURL()}`);
        xhrGetFile(dogURL(), showResults);
        evt.target.classList.add("is-loading");
    };
};

const showResults = (evt) => {
    btnSearch.classList.remove("is-loading");
    const jsonText = evt.target.responseText;

    console.log(jsonText);

    let json;
    try
    {
        json = JSON.parse(jsonText);
    }
    catch(err)
    {
        console.log(`ERROR: ${err}`);
        elementCardHolder.innerHTML = `<div class="box">There was some kind of error!</div>`;
    }

    const urlArray = json.message;
    if( urlArray && Array.isArray(urlArray) && urlArray.length > 0 )
    {
        const html = json.message.map(url => `<div><img src="${url}" alt="dog"></div>`).join("");
        elementCardHolder.innerHTML = `<div class="box">${html}</div>`;
    }
    else
    {
        elementCardHolder.innerHTML = `<div class="box">No Results Found!  :(</div>`;
    }
};

init();