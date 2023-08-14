// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  // Here is the HTML formatting for our mission target div.
  document.getElementById("missionTarget").innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src= "${imageUrl}">
  `
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission() {
  const launchStatus = document.getElementById("launchStatus");
  const pilotStatus = document.getElementById("pilotStatus");
  const copilotStatus = document.getElementById("copilotStatus");
  const fuelStatus = document.getElementById("fuelStatus");
  const cargoStatus = document.getElementById("cargoStatus");

  if (
    validateInput(pilot.value) === "Empty" ||
    validateInput(copilot.value) === "Empty" ||
    validateInput(fuelLevel.value) === "Empty" ||
    validateInput(cargoStatus.value) === "Empty"
  ) {
    window.alert("All fields are required!");
  } else if (
    validateInput(pilot.value) === "Not a Number" ||
    validateInput(copilot.value) === "Not a Number" ||
    validateInput(fuelLevel.value) === "Is a Number" ||
    validateInput(cargoStatus.value) === "Is a Number"
  ) {
    window.alert("Make sure to enter valid information for each field.");
  } else {
    if (cargoLevel.value <= 10000 && fuelLevel.value <= 10000) {
      launchStatus.style.color = "rgb(65, 159, 106)";
      list.style.visibility = "hidden";
      launchStatus.innerHTML = "Shuttle is Ready for Launch";
    } else {
      list.style.visibility = "visible";
      launchStatus.style.color = rgb(199, 37, 78);
      pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";

      if (fuelLevel.value > 10000) {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
      } else {
        fuelStatus.innerHTML = "Fuel level too low for launch";
      }
      if (cargoLevel.value < 10000) {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
      } else {
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
      }
    }
  }
}
async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
