import { WinsAnalysis } from "./analyzers/WinsAnalysis"
import { CsvFileReader } from "./CsvFileReader"
import { MatchReader } from "./MatchReader"
import { MatchResult } from "./MatchResult"
import { ConsoleReport } from "./reportTargets/ConsoleReport"
import { Summary } from "./Summary"

const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const analyzer = new WinsAnalysis('Man United')
const reporter = new ConsoleReport()

const summary = new Summary(analyzer,reporter)

summary.buildAndPrintReport(matchReader.matches)