/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  function generateDomainNames(pronouns, adjectives, nouns) {
    let domainNames = [];

    for (let p of pronouns) {
      for (let a of adjectives) {
        for (let n of nouns) {
          domainNames.push(`${p}${a}${n}.com`);
        }
      }
    }

    return domainNames;
  }

  let domains = generateDomainNames(pronoun, adj, noun);

  console.log(domains);

  //console.log("Hello Rigo from the console!");
};
