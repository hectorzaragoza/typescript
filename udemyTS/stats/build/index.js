"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
// An issue with this is that our source of data is hardcoded in here.
// We can alternatively, create a csvFileReader class...which could include two properties and one method, filename, data, read()
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
// enum - enumeration
// it is an object that stores closely related values
// An enum is for the most part, to signal to other engineers that this is a collection of closely related values
// When you create an enum, you also create a new type of that enums name, in this case, type of MatchResult
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United on ${manUnitedWins} games in the 2019 Premier League Season.`);
