import type { LucideIcon } from 'lucide-react'
import { Bot, BrainCircuit, BriefcaseBusiness, Calculator, Megaphone, UsersRound } from 'lucide-react'

export type Job = {
  slug: string
  title: string
  department: string
  location: string
  employmentType: string
  experience: string
  summary: string
  responsibilities: string[]
  requirements: string[]
  icon: LucideIcon
}

export const jobs: Job[] = [
  {
    slug: 'human-resources-specialist', title: 'Human Resources Specialist', department: 'People & Culture', location: 'Tamil Nadu / On-site', employmentType: 'Full-time', experience: '2–5 years', icon: UsersRound,
    summary: 'Build a trusted, high-performing workplace through thoughtful hiring, employee support and compliant HR operations.',
    responsibilities: ['Manage recruitment and onboarding', 'Support employee relations and engagement', 'Coordinate performance management', 'Maintain policies, records and statutory compliance'],
    requirements: ["Bachelor's degree in HR, Business or related field", 'Relevant HR experience', 'Microsoft Office proficiency', 'Hindi fluency is mandatory'],
  },
  {
    slug: 'sales-marketing-manager', title: 'Sales & Marketing Manager', department: 'Sales & Marketing', location: 'Pan India / Travel', employmentType: 'Full-time', experience: '3–7 years', icon: Megaphone,
    summary: 'Develop markets and create durable customer relationships for advanced wastewater-treatment solutions.',
    responsibilities: ['Lead generation and client qualification', 'Marketing strategy and sales planning', 'Client meetings and solution presentations', 'Market research, pipeline reporting and forecasting'],
    requirements: ["Bachelor's degree", 'Strong communication and presentation skills', 'Wastewater-industry experience preferred', 'Target ownership; performance incentives apply'],
  },
  {
    slug: 'business-development-manager', title: 'Business Development Manager', department: 'Business Development', location: 'Pan India / Travel', employmentType: 'Full-time', experience: '3–7 years', icon: BriefcaseBusiness,
    summary: 'Turn industrial treatment challenges into commercial opportunities and long-term partnerships.',
    responsibilities: ['Lead generation and sales planning', 'Negotiation and client acquisition', 'Coordinate marketing initiatives', 'Maintain forecasts, reports and opportunity pipelines'],
    requirements: ["Bachelor's degree", 'Demonstrated B2B sales experience', 'Strong negotiation and relationship skills', 'Environmental-industry experience preferred'],
  },
  {
    slug: 'accounts-receivable-specialist', title: 'Accounts Receivable Specialist', department: 'Finance', location: 'Tamil Nadu / On-site', employmentType: 'Full-time', experience: '1–4 years', icon: Calculator,
    summary: 'Maintain accurate receivables, disciplined collections and clear financial reporting.',
    responsibilities: ['Generate and verify customer invoices', 'Manage collections and customer follow-up', 'Perform ledger and bank reconciliation', 'Prepare ageing and collection reports'],
    requirements: ['Degree in Accounting, Finance or Commerce', 'MS Excel and accounting-software proficiency', 'Hindi and English communication', 'Accuracy and strong follow-up discipline'],
  },
  {
    slug: 'telecaller', title: 'Telecaller', department: 'Inside Sales', location: 'Tamil Nadu / On-site', employmentType: 'Full-time', experience: '0–3 years', icon: Megaphone,
    summary: 'Connect prospective customers with the right technical team through clear, professional communication.',
    responsibilities: ['Cold calling and lead qualification', 'Client follow-up and appointment coordination', 'Accurate CRM entry', 'WhatsApp Business and email communication'],
    requirements: ['Hindi speaking is mandatory', 'Tamil and English preferred', 'Good communication and MS Office skills', 'Sales experience preferred'],
  },
  {
    slug: 'ai-data-entry-executive', title: 'AI Data Entry Executive', department: 'Research & Operations', location: 'Tamil Nadu / On-site', employmentType: 'Full-time', experience: '0–3 years', icon: Bot,
    summary: 'Build reliable market intelligence using careful research, clean data and modern AI tools.',
    responsibilities: ['Google and industry research', 'Collect company and verified contact data', 'Data cleaning, email verification and spreadsheet management', 'Generate structured research reports'],
    requirements: ['Graduate with strong computer knowledge', 'Fast, accurate typing and internet research skills', 'MS Excel, Word and Google Sheets', 'Experience with ChatGPT, Gemini, Claude, Perplexity or Copilot', 'High attention to detail'],
  },
]

export const jobTitles = jobs.map((job) => job.title)

export const cultureBenefits = [
  { title: 'Innovation', text: 'Solve real environmental challenges.', icon: BrainCircuit },
  { title: 'Research Driven', text: 'Work where science guides decisions.', icon: BrainCircuit },
  { title: 'Career Growth', text: 'Build responsibility as we scale.', icon: BriefcaseBusiness },
  { title: 'Learning Culture', text: 'Learn continuously across functions.', icon: UsersRound },
  { title: 'Healthy Workplace', text: 'Collaborative, respectful teamwork.', icon: UsersRound },
  { title: 'Latest AI Tools', text: 'Use modern tools to work smarter.', icon: Bot },
  { title: 'Pan India Exposure', text: 'Work with industries across India.', icon: BriefcaseBusiness },
  { title: 'Environmental Impact', text: 'Help make wastewater treatment better.', icon: BrainCircuit },
]
