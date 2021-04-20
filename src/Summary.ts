import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { MatchData } from "./MatchData";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
    run(matches: MatchData[]): string
}

export interface OutputTarget {
    print(report: string): void
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    static winsAnalysisWithHtmlReport(teamName: string): Summary {
        const analyzer = new WinsAnalysis(teamName)
        const reporter = new HtmlReport()
        return new Summary(analyzer,reporter)
    }

    buildAndPrintReport(matches: MatchData[]) {
        const output = this.analyzer.run(matches)
        this.outputTarget.print(output)
    }
}