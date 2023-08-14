// Write your JavaScript code here!

const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let planetPicker = pickPlanet(listedPlanets);
       addDestinationInfo(document, planetPicker.name, planetPicker.diameter, planetPicker.star, planetPicker.distance, planetPicker.moons, planetPicker.imageUrl);
    });
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let testForm = document.querySelector("form");
      let list = document.getElementById("faultyItems"); 
      let pilot = document.querySelector("input[name=pilotName]"); 
      let copilot = document.querySelector("input[copilotName]"); 
      let fuelLevel = document.querySelector("input[fuelLevel]");
      let cargoLevel = document.querySelector("input[cargoMass]");

      testForm.addEventListener("submit", function(e) {
        e.preventDefault();
        formsSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
      });
   
});