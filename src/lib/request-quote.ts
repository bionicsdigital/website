import { isValidPhoneNumber } from 'libphonenumber-js'
import { z } from 'zod'

export type RequestQuotePayload = {
  plantType: string
  industry: string
  product: string
  plantCapacity: string
  companyName: string
  contactPerson: string
  email: string
  phone: string
  country: string
  state: string
  city: string
  additionalRequirements: string
}

export const quoteProducts = [
  'Aerobic Bioculture',
  'Anaerobic Bioculture',
  'ETP Bioculture',
  'STP Bioculture',
  'Sugar & Distillery Bioculture',
  'Organic Compost Bioculture',
]

export const quotePlantTypes = ['ETP', 'STP', 'CETP', 'Anaerobic Digester', 'Composting Plant', 'Other'] as const
export const quoteIndustries = ['Sugar', 'Distillery', 'Textile', 'Dye Processing', 'Food & Beverage', 'Dairy', 'Pharmaceutical', 'Chemical', 'Pulp & Paper', 'Municipal', 'Hospitality', 'Other'] as const

export const quoteRequestSchema = z.object({
  plantType: z.enum(quotePlantTypes),
  industry: z.enum(quoteIndustries),
  product: z.string().refine(value => quoteProducts.includes(value), 'Invalid product'),
  plantCapacity: z.string().trim().min(1).max(120),
  companyName: z.string().trim().min(2).max(160),
  contactPerson: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160).transform(value => value.toLowerCase()),
  phone: z.string().trim().min(8).max(40).refine(value => isValidPhoneNumber(value), 'Invalid phone'),
  country: z.string().trim().min(2).max(100),
  state: z.string().trim().min(1).max(100),
  city: z.string().trim().max(100),
  additionalRequirements: z.string().trim().max(2000),
  website: z.string().max(0).optional(),
}).strict()

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export const requiredQuoteFields: Array<keyof RequestQuotePayload> = [
  'plantType',
  'industry',
  'product',
  'plantCapacity',
  'companyName',
  'contactPerson',
  'email',
  'phone',
  'country',
  'state',
]

export function sanitizeInput(value: unknown, maxLength = 500) {
  if (typeof value !== 'string') return ''
  return value.replace(/\0/g, '').trim().slice(0, maxLength)
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export function sanitizeQuotePayload(input: Partial<RequestQuotePayload>) {
  return {
    plantType: sanitizeInput(input.plantType, 120),
    industry: sanitizeInput(input.industry, 120),
    product: sanitizeInput(input.product, 160),
    plantCapacity: sanitizeInput(input.plantCapacity, 120),
    companyName: sanitizeInput(input.companyName, 160),
    contactPerson: sanitizeInput(input.contactPerson, 120),
    email: sanitizeInput(input.email, 160).toLowerCase(),
    phone: sanitizeInput(input.phone, 40),
    country: sanitizeInput(input.country, 100),
    state: sanitizeInput(input.state, 100),
    city: sanitizeInput(input.city, 100),
    additionalRequirements: sanitizeInput(input.additionalRequirements, 2000),
  } satisfies RequestQuotePayload
}

export function validateQuotePayload(payload: RequestQuotePayload) {
  const errors: Partial<Record<keyof RequestQuotePayload, string>> = {}

  for (const field of requiredQuoteFields) {
    if (!payload[field]) errors[field] = 'This field is required.'
  }

  if (payload.email && !emailRegex.test(payload.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  const phoneValue = payload.phone.trim()
  const indiaDigits = phoneValue.startsWith('+91')
    ? phoneValue.replace(/^\+91/, '').replace(/\D/g, '')
    : ''

  if (!payload.phone) {
    errors.phone = 'Please enter your phone number.'
  } else if (phoneValue.startsWith('+91') && indiaDigits.length !== 10) {
    errors.phone = 'Please enter a valid 10 digit mobile number.'
  } else if (!isValidPhoneNumber(payload.phone)) {
    errors.phone = 'This phone number is not valid.'
  }

  if (payload.product && !quoteProducts.includes(payload.product)) {
    errors.product = 'Please select a valid product.'
  }

  return errors
}
