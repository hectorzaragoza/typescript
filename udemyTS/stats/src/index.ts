import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

// An issue with this is that our source of data is hardcoded in here.
// We can alternatively, create a csvFileReader class...which could include two properties and one method, filename, data, read()

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv')
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()
// matchReader.matches
const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport())

summary.buildAndPrintReport(matchReader.matches)