/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "a"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon", "dog"];
  let extention = [".com", ".net", ".us", ".ru"];

  for (let pronoun of pronoun) {
    for (let adj of adj) {
      for (let noun of noun) {
        for (let extention of extention) {
          console.log(`${pronoun}${adj}${noun}${extention}`);
        }
      }
    }
  }
};
