// enum - enumeration
// it is an object that stores closely related values
// An enum is for the most part, to signal to other engineers that this is a collection of closely related values
// When you create an enum, you also create a new type of that enums name, in this case, type of MatchResult
export enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}
