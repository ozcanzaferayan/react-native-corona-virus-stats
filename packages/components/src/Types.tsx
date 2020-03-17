export interface MainNumbers {
    coronavirusCases?: string;
    deaths?: string;
    recovered?: string;
}

export interface ActiveCases {
    currentlyInfectedPatients?: string;
    inMildCondition?: string;
    inMildConditionPercent?: string;
    seriousOrCritical?: string;
    seriousOrCriticalPercent?: string;
}

export interface ClosedCases {
    casesWhichHadAnOutcome?: string;
    recoveredDischarged?: string;
    recoveredDischargedPercent?: string;
    deaths?: string;
    deathsPercent?: string;
}

export interface ActiveCasesGraphData {
    categories?: string;
    data?: number;
}

export interface ClosedCasesGraphData {
    categories?: string;
    deathRate?: number;
    recoveryRate?: number;
}

export interface TotalCasesGraphData {
    categories?: string;
    data?: number;
}

export interface TotalDeathsGraphData {
    categories?: string;
    data?: number;
}

export interface CountryData {
    country?: string;
    totalCases?: string;
    newCases?: string;
    totalDeaths?: string;
    newDeaths?: string;
    totalRecovered?: string;
    activeCases?: string;
    criticalCases?: string;
    totalCasesIn1m?: string;
}

