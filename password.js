function obfuscate (string) {
var letterA = /a/gi;
var letterE = /e/gi;
var letterO = /o/gi;
var letterL = /l/gi;


if (string.includes("a") ||
string.includes("e") ||
string.includes("o") ||
string.includes("l")) {
console.log(string.replace(letterA, 4).replace(letterE, 3).replace(letterO, 0).replace(letterL, 1));
  } else {
  console.log("error");
  }
  }

console.log(obfuscate("aeoltestestae"));
