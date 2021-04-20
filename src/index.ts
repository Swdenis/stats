import { WinsAnalysis } from "./analyzers/WinsAnalysis"
import { CsvFileReader } from "./CsvFileReader"
import { MatchReader } from "./MatchReader"
import { ConsoleReport } from "./reportTargets/ConsoleReport"
import { HtmlReport } from "./reportTargets/HtmlReport"
import { Summary } from "./Summary"


const matchReader = MatchReader.fromCsv('football.csv')
const summary = Summary.winsAnalysisWithHtmlReport('Main United')

matchReader.load()
summary.buildAndPrintReport(matchReader.matches)