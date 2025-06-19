import { Investment, InvestmentCategory } from "@/lib/interfaces/investment";
import pangoLogo from '@/app/images/investment-logos/pango-logo.png'
import boxMediaLogo from '@/app/images/investment-logos/boxmedia-logo.webp'
import unSchoolLogo from '@/app/images/investment-logos/unschool-logo.png'
import signUpMediaLogo from '@/app/images/investment-logos/signupmedia-logo.svg'
import scanLogo from '@/app/images/investment-logos/scan-logo.svg'
import thermologyHealthLogo from '@/app/images/investment-logos/thermologyhealth-logo.webp'
import mvHealthLogo from '@/app/images/investment-logos/mvhealth-logo.svg'
import littleBrushesLogo from '@/app/images/investment-logos/littlebrushies-logo.webp'
import autogenAiLogo from '@/app/images/investment-logos/autogenai-logo.png'
import stackfixLogo from '@/app/images/investment-logos/stackfix-logo.svg'
import pactioLogo from '@/app/images/investment-logos/pactio-logo.png'
import foundyLogo from '@/app/images/investment-logos/foundy-logo.png'
import beelineLogo from '@/app/images/investment-logos/beeline-logo.svg'
import greenLithiumLogo from '@/app/images/investment-logos/greenlithium-logo.svg'
import starshipLogo from '@/app/images/investment-logos/starship-logo.svg'
import ampliaCapitalLogo from '@/app/images/investment-logos/ampliacapital-logo.png'
import yolkLogo from '@/app/images/investment-logos/yolk-logo.webp'
import aasaanWillLogo from '@/app/images/investment-logos/aasaanwill-logo.svg'
import asterixHealthLogo from '@/app/images/investment-logos/asterixhealth-logo.png'

export const investments: Investment[] = [
    {
        title: "Pango",
        description: "Pango is a platform that allows you to create and manage your own AI agents.",
        href: "https://pango.education/",
        imageSrc: pangoLogo.src,
        category: InvestmentCategory.EducationSkillsMedia,
    },
    {
        title: "Box Media",
        description: "Box Media is a technology-first company dedicated to transforming how industries distribute, monetize, and scale knowledge assets through advanced automation, blockchain integration, and innovative content infrastructure.",
        href: "https://www.boxplay.io/",
        imageSrc: boxMediaLogo.src,
        category: InvestmentCategory.EducationSkillsMedia,
    },
    {
        title: "UnSchool",
        description: "Intern with a well-established corporate space that will add value to your resume and can help you get placed with bigger opportunities.",
        href: "https://unschool.in/",
        imageSrc: unSchoolLogo.src,
        category: InvestmentCategory.EducationSkillsMedia,
    },
    {
        title: "SignUp Media",
        description: "SignUp Mediais revolutionizing media accessibility for the Deaf community.",
        href: "https://www.signupmedia.com/",
        imageSrc: signUpMediaLogo.src,
        category: InvestmentCategory.EducationSkillsMedia,
    },
    {
        title: "Scan.com",
        description: "At Scan.com, we're delivering the highest standards of care, and making medical imaging accessible to patients and clinicians across the country.",
        href: "https://scan.com/",
        imageSrc: scanLogo.src,
        category: InvestmentCategory.Healthcare,
    },
    {
        title: "Thermology Health",
        description: "Thermology Health, a spinout from the UK's National Metrology Institute, the National Physical Laboratory (NPL), is transforming diagnostic healthcare through thermal imaging.",
        href: "https://thermologyhealth.com/",
        imageSrc: thermologyHealthLogo.src,
        category: InvestmentCategory.Healthcare,
    },
    {
        title: "MV.Health",
        description: "Clinically-proven devices that adapt to the body & deliver targeted vibrations to address major Uro-Gyn issues.",
        href: "https://mv.health/",
        imageSrc: mvHealthLogo.src,
        category: InvestmentCategory.Healthcare,
    },
    {
        title: "Little Brushies",
        description: "Reimagining dental wellness for babies and young children",
        href: "https://littlebrushies.com/",
        imageSrc: littleBrushesLogo.src,
        category: InvestmentCategory.Healthcare,
    },
    {
        title: "Asterix Health",
        description: "The modern workforce solution for UK healthcare. Asterix Health improves access and lowers costs for primary care providers. ",
        href: "https://www.asterix.health/",
        imageSrc: asterixHealthLogo.src,
        category: InvestmentCategory.Healthcare,
    },
    {
        title: "AutogenAI",
        description: "Harness the power of augmented intelligence to write high-quality, winning bids, tenders, proposals and grants faster than ever.",
        href: "https://autogenai.com/",
        imageSrc: autogenAiLogo.src,
        category: InvestmentCategory.SAAS,
    },
    {
        title: "Stackfix",
        description: "Find the right software, tested by real experts. We test and rate every tool, so you don't have to.",
        href: "https://www.stackfix.com/",
        imageSrc: stackfixLogo.src,
        category: InvestmentCategory.SAAS,
    },
    {
        title: "Pactio",
        description: "AI-native finance workflows, built inside Microsoft Office.",
        href: "https://www.pactio.io/",
        imageSrc: pactioLogo.src,
        category: InvestmentCategory.SAAS,
    },
    {
        title: "Foundy",
        description: "Foundy leverages expert advisors, advanced AI technology and a database of over 1 million transactions to provide business owners and corporate finance firms the most optimal route to a successful acquisition",
        href: "https://foundy.com/",
        imageSrc: foundyLogo.src,
        category: InvestmentCategory.SAAS,
    },
    {
        title: "Beeline",
        description: "Our story started in 2015 when our co-founders Tom and Mark got lost on their bicycles. They spotted a gap in the market for a simple navigation product that gives people on two wheels (whether that is a bicycle or a motorcycle!) all the information they need for a safe and enjoyable ride; nothing more.",
        href: "https://beeline.co/",
        imageSrc: beelineLogo.src,
        category: InvestmentCategory.TransportMobility,
    },
    {
        title: "Green Lithium",
        description: "We are advancing a low-carbon, flexible output lithium project that will address the £14bn European market by unlocking the critical minerals supply shortfall holding back the continent’s battery and EV production",
        href: "https://greenlithium.co.uk/",
        imageSrc: greenLithiumLogo.src,
        category: InvestmentCategory.TransportMobility,
    },
    {
        title: "Starship",
        description: "We're revolutionising last-mile delivery, making it affordable and sustainable on a global scale.",
        href: "https://www.starship.xyz/",
        imageSrc: starshipLogo.src,
        category: InvestmentCategory.TransportMobility,
    },
    {
        title: "Amplia Capital",
        description: "We are dedicated to consolidating businesses that specialize in providing accounting, tax, payroll, and HR services to small and medium enterprises. ",
        href: "https://www.ampliacapital.co.uk/",
        imageSrc: ampliaCapitalLogo.src,
        category: InvestmentCategory.SAAS,
    },
    {
        title: "Yolk",
        description: "Another day, another blandwich. Another drab, grab-and-go meal. Somewhere along the way, the high street sucked the fun out of food.",
        href: "https://www.yolklondon.com/",
        imageSrc: yolkLogo.src,
        category: InvestmentCategory.Retail,
    },
    {
        title: "aasaan will",
        description: "India's favorite Will writing service. Save 90% in time and cost. Ensure your life's work is protected and cherished. Get your Will in 3 simple steps.",
        href: "https://www.aasaanwill.com/",
        imageSrc: aasaanWillLogo.src,
        category: InvestmentCategory.Retail,
    }

];