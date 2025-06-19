export interface Investment {
    title: string;
    description?: string;
    href: string;
    imageSrc: string;
    category: InvestmentCategory;
}

export enum InvestmentCategory {
    EducationSkillsMedia = "Education, Skills and Media",
    Healthcare = "Healthcare",
    SAAS = "SAAS",
    TransportMobility = "Transport & Mobility",
    ProfessionalServices = "Professional Services",
    Retail = "Retail",
}