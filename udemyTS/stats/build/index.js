"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// An issue with this is that our source of data is hardcoded in here.
// We can alternatively, create a csvFileReader class...which could include two properties and one method, filename, data, read()
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
// matchReader.matches
// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport())
// summary.buildAndPrintReport(matchReader.matches)
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
