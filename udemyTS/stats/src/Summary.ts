import { MatchData } from "./MatchData"
import { WinsAnalysis } from "./analyzers/WinsAnalysis"
import { HtmlReport } from "./reportTargets/HtmlReport"
// We don't have to use export an interface, objects implicitly have access to interfaces.
export interface Analyzer {
    run(matches: MatchData[]): string
}

export interface OutputTarget {
    print(report: string): void
}

export class Summary {
    static winsAnalysisWithHtmlReport(team: string): Summary {
        return new Summary(
            new WinsAnalysis(team),
            new HtmlReport()
        )
    }
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches)
        this.outputTarget.print(output)
    }
}
// With composition, like this. You are passing types of the reference classes to the parent class constructor
// So, when you instantiate an instance of the parent class, you need to pass in new instances (objects) of the reference classes

// new Summary(new WinsAnalysis(), new ConsoleReport())
