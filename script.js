// DATAMUSE API STUFF
// const api = {
//   url: "api.datamuse.com/words/",
// }

// document.getElementById("generate").addEventListener("click", generateName)

// function generateName(params) {
//   fetch(`${api.url}`)
// }

var noun = document.getElementById("noun");
var verb = document.getElementById("verb");
var adjective = document.getElementById("adjective");

function randomAdjective() {
  return adjectives[Math.floor(Math.random() * adjectives.length)];
}
function randomNoun() {
  return nouns[Math.floor(Math.random() * nouns.length)];
}
// var randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
// var randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

// var bandName = "Band Name"

document.getElementById("generate").addEventListener("click", generateName)

// function getCheckboxState() {
//   if (noun.checked == true && adjectives.checked == true)  {
//     bandName.replace("Band", randomAdjective)
//     bandName.replace("Name", randomNoun)
//   } else if (noun.checked == true && adjective.checked == false) {
//     bandName.replace("Band", randomNoun)
//     bandName.replace("Name", "")
//   } else if (adjective.checked == true && noun.checked == false) {
//     bandName.replace("Band", "")
//     bandName.replace("Name", "randomAdjective")
//   }

//   console.log(bandName);
// }

function generateName() {
  document.getElementById("first-word").innerText = randomAdjective();  
  document.getElementById("second-word").innerText = randomNoun();  
}
