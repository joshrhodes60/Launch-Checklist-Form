// Write your JavaScript code here!
window.addEventListener("load", function () {
   
   const json = fetch("https://handlers.education.launchcode.org/static/planets.json")
   .then((response) => response.json()
   .then((json) => {
   const div = document.getElementById("missionTarget");
      div.innerHTML = `
      <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[0].name}</li>
         <li>Diameter: ${json[0].diameter}</li>
         <li>Star: ${json[0].star}</li>
         <li>Distance from Earth: ${json[0].distance}</li>
         <li>Number of Moons: ${json[0].moons}</li>
      </ol>
      <img src="${json[0].image}">
      
      `
   }
   ))
   
   
     
// })
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      
      event.preventDefault();
      document.getElementById("faultyItems").style.visibility = "visible";
      let launchStatus = document.getElementById("launchStatus");
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
    
    

      const fuelAmount = fuelLevel.value;
      const cargoAmount =cargoMass.value ;

      let pilotStatus = document.getElementById("pilotStatus");
      pilotStatus.innerHTML=`Pilot ${pilotName.value} is ready for launch.`;
      copilotStatus.innerHTML=`Co-pilot ${copilotName.value} is ready for launch. `;
      // fuelStatus.innerHTML=`Fuel Level (L) ${fuelAmount} Fuel level high enough for launch.`;
      // cargoStatus.innerHTML=`Cargo Mass (kg) ${cargoAmount} Cargo mass low enough for launch.`;

      if (pilotName.value === "" || copilotName.value === "") {
         alert("All fields are required!");
         // stop the form submission
         event.preventDefault();

      } else if (fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         // stop the form submission

         }else if (isNaN(fuelAmount ) ){
            alert("Make sure to enter valid information for each field");
         }else if(isNaN(cargoAmount )){
            alert("Make sure to enter valid information for each field");
         }else if(!isNaN(pilotName.value) || !isNaN(copilotName.value)){
            alert("Make sure to enter valid information for each field") 
      }

      else if (fuelAmount < 10000){
      fuelStatus.innerHTML=`Fuel Level (L) ${fuelAmount} not enough fuel for the journey.`;
      launchStatus.innerHTML= `Shuttle not ready for launch `
      launchStatus.style.color="red";

   

   } else if(cargoAmount >= 10000){
      cargoStatus.innerHTML = `Cargo Mass (kg) ${cargoAmount} too much mass for the shuttle to take off.`
      launchStatus.innerHTML = `Shuttle not ready for launch.`
      launchStatus.style.color = "red";

   } else{ 
      cargoStatus.innerHTML = `Cargo Mass (kg) ${cargoAmount} Cargo mass low enough for launch.`
      launchStatus.innerHTML= `Shuttle is ready for launch.`
      fuelStatus.innerHTML=`Fuel Level (L) ${fuelAmount}  enough fuel for the journey.`;
      launchStatus.style.color="green";
   }

   
   

   });
});   
  


// /* This block of code shows how to format the HTML once you fetch some planetary JSON!
// <h2>Mission Destination</h2>
// <ol>
//    <li>Name: ${}</li>
//    <li>Diameter: ${}</li>
//    <li>Star: ${}</li>
//    <li>Distance from Earth: ${}</li>
//    <li>Number of Moons: ${}</li>
// </ol>
// <img src="${}">
// */
