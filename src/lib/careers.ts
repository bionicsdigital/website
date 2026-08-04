import { z } from 'zod'
import { jobTitles } from '@/data/careers'

const optionalUrl = z.union([z.literal(''), z.string().url('Enter a valid URL')])

export const careerApplicationSchema = z.object({
  fullName: z.string().trim().min(2, 'Full name is required').max(120),
  mobile: z.string().trim().min(8, 'Enter a valid mobile number').max(25),
  email: z.string().trim().email('Enter a valid email address').max(160),
  city: z.string().trim().min(2, 'City is required').max(100),
  state: z.string().trim().min(2, 'State is required').max(100),
  country: z.string().trim().min(2, 'Country is required').max(100),
  qualification: z.string().trim().min(2, 'Qualification is required').max(160),
  college: z.string().trim().min(2, 'College is required').max(180),
  currentCompany: z.string().trim().max(160),
  currentDesignation: z.string().trim().max(120),
  totalExperience: z.string().trim().min(1, 'Total experience is required').max(50),
  relevantExperience: z.string().trim().min(1, 'Relevant experience is required').max(50),
  currentCtc: z.string().trim().max(50),
  expectedCtc: z.string().trim().max(50),
  noticePeriod: z.string().trim().min(1, 'Notice period is required').max(80),
  linkedinUrl: optionalUrl,
  portfolioUrl: optionalUrl,
  position: z.string().refine((value) => jobTitles.includes(value), 'Select a valid position'),
  coverLetter: z.string().trim().max(3000),
  website: z.string().max(0).optional(),
})

export type CareerApplication = z.infer<typeof careerApplicationSchema>
export const resumeTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
export const maxResumeSize = 10 * 1024 * 1024
