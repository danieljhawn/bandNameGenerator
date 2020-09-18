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
var bandName = "";
var listOfNames = [];

function randomAdjective() {
  return adjectives[Math.floor(Math.random() * adjectives.length)];
}
function randomNoun() {
  return nouns[Math.floor(Math.random() * nouns.length)];
}

var firstWord = "walrus"
var secondWord = "flamingo"

document.getElementById("generate").addEventListener("click", generateName)

function generateName() {
  if (noun.checked == true && adjective.checked == true)  {
    firstWord = randomAdjective();
    secondWord = randomNoun();
  };
  
  var bandName = (firstWord + " " + secondWord)
  console.log(bandName);
  document.getElementById("generatedName").innerText = bandName;
  listOfNames.push(bandName);
  console.log(listOfNames);
}
