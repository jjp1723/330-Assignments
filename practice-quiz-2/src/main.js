window.onload = () => {
    document.querySelector("h1").innerHTML = "Demo Page";

    const sayHello = () => console.log("Hi!");
    
    document.querySelector("#my-button").onclick = sayHello;
};