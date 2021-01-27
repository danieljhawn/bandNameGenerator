// DATAMUSE API STUFF
// const api = {
//   url: "api.datamuse.com/words/",
// }

// document.getElementById("generate").addEventListener("click", generateName)

// function generateName(params) {
//   fetch(`${api.url}`)
// }

// checkboxes
var noun = document.getElementById("noun");
var verb = document.getElementById("verb");
var adjective = document.getElementById("adjective");
var displayList = document.querySelector('#list');

var bandName = "";
var listOfNames = [];

var firstWord = ""
var secondWord = ""

// pick a random adjective or noun
function randomAdjective() {
  return adjectives[Math.floor(Math.random() * adjectives.length)];
}
function randomNoun() {
  return nouns[Math.floor(Math.random() * nouns.length)];
}

document.getElementById("generate").addEventListener("click", generateName)

function generateName() {
  firstWord = randomAdjective();
  secondWord = randomNoun();
  
  let bandName = (firstWord + " " + secondWord)
  console.log(bandName);
  document.getElementById("generatedName").innerText = bandName;
  listOfNames.unshift(bandName);
  console.log(listOfNames);

  // add name to list of names generates
  displayList.innerHTML = '<ul>' + listOfNames.map(function (name) {
    return '<li>' + name + '<li>';
  }).join('') + '</ul>';
}