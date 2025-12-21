let messsages = [
    "Hi",
    "Ugh",
    "I do something",
    "IAIEFWOIFIHWEHDSJOIAREKJDX",
    "Shoutout to my:",
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "I HATE i mean LOVE YOU",
    "Kasane teto",
    "didyoudoyourduolingostreak?",
    "print(`hi`) ",
    "NEver gonna give you up <:)",
    "Don't you wanna battle to win a prize?",
    "But what is the prize?",
    "A BFDI"
]
var button = document.getElementById(`btds`)
var random

button.onclick = function show(){
    random = Math.floor(Math.random() * messsages.length);

    button.textContent = messsages[random];
}