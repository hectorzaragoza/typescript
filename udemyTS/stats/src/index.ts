import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

// An issue with this is that our source of data is hardcoded in here.
// We can alternatively, create a csvFileReader class...which could include two properties and one method, filename, data, read()

const reader = new MatchReader('football.csv');
reader.read();

let manUnitedWins = 0;

for (let match of reader.data) {
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United on ${manUnitedWins} games in the 2019 Premier League Season.`)