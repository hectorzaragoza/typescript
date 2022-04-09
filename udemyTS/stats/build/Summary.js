"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
// With composition, like this. You are passing types of the reference classes to the parent class constructor
// So, when you instantiate an instance of the parent class, you need to pass in new instances (objects) of the reference classes
// new Summary(new WinsAnalysis(), new ConsoleReport())
