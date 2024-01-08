"use strict";
        
const words1 = ["Acute", "Aft", "Anti-matter", "Bipolar", "Cargo", "Command", "Communication", "Computer", "Deuterium", "Dorsal", "Emergency", "Engineering", "Environmental", "Flight", "Fore", "Guidance", "Heat", "Impulse", "Increased", "Inertial", "Infinite", "Ionizing", "Isolinear", "Lateral", "Linear", "Matter", "Medical", "Navigational", "Optical", "Optimal", "Optional", "Personal", "Personnel", "Phased", "Reduced", "Science", "Ship's", "Shuttlecraft", "Structural", "Subspace", "Transporter", "Ventral"];

const words2 = ["Propulsion", "Dissipation", "Sensor", "Improbability", "Buffer", "Graviton", "Replicator", "Matter", "Anti-matter", "Organic", "Power", "Silicon", "Holographic", "Transient", "Integrity", "Plasma", "Fusion", "Control", "Access", "Auto", "Destruct", "Isolinear", "Transwarp", "Energy", "Medical", "Environmental", "Coil", "Impulse", "Warp", "Phaser", "Operating", "Photon", "Deflector", "Integrity", "Control", "Bridge", "Dampening", "Display", "Beam", "Quantum", "Baseline", "Input"];

const words3 = ["Chamber", "Interface", "Coil", "Polymer", "Biosphere", "Platform", "Thruster", "Deflector", "Replicator", "Tricorder", "Operation", "Array", "Matrix", "Grid", "Sensor", "Mode", "Panel", "Storage", "Conduit", "Pod", "Hatch", "Regulator", "Display", "Inverter", "Spectrum", "Generator", "Cloud", "Field", "Terminal", "Module", "Procedure", "System", "Diagnostic", "Device", "Beam", "Probe", "Bank", "Tie-In", "Facility", "Bay", "Indicator", "Cell"];

//randomarrayelement function to avoid duplicated code
function randomarrayelement(array)
{
    return array[Math.floor(Math.random() * array.length)];
}

//generator function generates a string of technobabble using one word from each 'words' array and updates the #output element
// function generator()
// {
//     document.querySelector("#output").innerHTML = randomarrayelement(words1) + " " + randomarrayelement(words2) + " " + randomarrayelement(words3);
// }

//generate5 function that will generate 5 strings of technobabble
// function generate5()
// {
//     document.querySelector("#output").innerHTML = randomarrayelement(words1) + " " + randomarrayelement(words2) + " " + randomarrayelement(words3) + "<br/>";
//     document.querySelector("#output").innerHTML += randomarrayelement(words1) + " " + randomarrayelement(words2) + " " + randomarrayelement(words3) + "<br/>";
//     document.querySelector("#output").innerHTML += randomarrayelement(words1) + " " + randomarrayelement(words2) + " " + randomarrayelement(words3) + "<br/>";
//     document.querySelector("#output").innerHTML += randomarrayelement(words1) + " " + randomarrayelement(words2) + " " + randomarrayelement(words3) + "<br/>";
//     document.querySelector("#output").innerHTML += randomarrayelement(words1) + " " + randomarrayelement(words2) + " " + randomarrayelement(words3);
// }

//generateTechno function that will generate a varying amout of technobabble based on the input
function generateTechno(num)
{
    document.querySelector("#output").innerHTML = "";
    for(let iteration = 0; iteration < num; iteration++)
    {
        document.querySelector("#output").innerHTML += randomarrayelement(words1) + " " + randomarrayelement(words2) + " " + randomarrayelement(words3) + "<br/>";
    }
}

generateTechno(1);

document.querySelector("#my-button").addEventListener("click", function(){generateTechno(1)});
document.querySelector("#my-5-button").addEventListener("click", function(){generateTechno(5)});