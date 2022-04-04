"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResult = void 0;
// enum - enumeration
// it is an object that stores closely related values
// An enum is for the most part, to signal to other engineers that this is a collection of closely related values
// When you create an enum, you also create a new type of that enums name, in this case, type of MatchResult
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
