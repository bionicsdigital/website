'use client'

import { useEffect, useMemo, useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import type { Country } from 'react-phone-number-input'
import { isValidPhoneNumber } from 'libphonenumber-js'
import { AlertCircle, CheckCircle2, Loader2, Mail, PhoneCall, Sparkles } from 'lucide-react'
import type { QuoteFormValues } from '@/components/forms/QuoteModal'
import { emailRegex, quoteProducts } from '@/lib/request-quote'

const plantTypes = ['ETP', 'STP', 'CETP', 'Anaerobic Digester', 'Composting Plant', 'Other']
const industries = ['Sugar', 'Distillery', 'Textile & Dye', 'Food & Beverage', 'Dairy', 'Pharmaceutical', 'Chemical', 'Pulp & Paper', 'Municipal', 'Hospitality', 'Other']
const indianStates = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana', 'Maharashtra', 'Gujarat', 'Uttar Pradesh', 'Rajasthan', 'West Bengal', 'Delhi', 'Haryana', 'Punjab', 'Odisha', 'Bihar', 'Madhya Pradesh', 'Chhattisgarh', 'Jharkhand', 'Assam', 'Uttarakhand', 'Himachal Pradesh', 'Goa', 'Pondicherry', 'Sikkim', 'Arunachal Pradesh', 'Meghalaya', 'Nagaland', 'Tripura', 'Manipur', 'Mizoram']

type FormErrors = Partial<Record<keyof QuoteFormValues, string>>

const requiredFields: Array<keyof QuoteFormValues> = [
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

const fieldClassName = 'w-full rounded-xl border bg-white px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100'

function validateQuoteForm(formData: QuoteFormValues) {
    const nextErrors: FormErrors = {}

    for (const field of requiredFields) {
        if (!formData[field].trim()) nextErrors[field] = 'This field is required.'
    }

    if (!formData.email.trim()) nextErrors.email = 'Email is required.'
    else if (!emailRegex.test(formData.email.trim())) nextErrors.email = 'Please enter a valid email address.'

    const phoneValue = formData.phone.trim()
    const indiaDigits = phoneValue.startsWith('+91')
        ? phoneValue.replace(/^\+91/, '').replace(/\D/g, '')
        : ''

    if (!formData.phone.trim()) nextErrors.phone = 'Please enter your phone number.'
    else if (phoneValue.startsWith('+91') && indiaDigits.length !== 10) nextErrors.phone = 'Please enter a valid 10 digit mobile number.'
    else if (!isValidPhoneNumber(formData.phone)) nextErrors.phone = 'This phone number is not valid.'

    if (formData.product && !quoteProducts.includes(formData.product)) {
        nextErrors.product = 'Please select a valid product.'
    }

    return nextErrors
}

function fieldStateClass(value: string, error?: string) {
    if (error) return 'border-red-300 focus:border-red-500 focus:ring-red-100'
    if (value.trim()) return 'border-emerald-200 focus:border-emerald-500 focus:ring-emerald-100'
    return 'border-slate-200'
}

function ErrorText({ message }: { message?: string }) {
    if (!message) return null

    return (
        <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
            <AlertCircle className="h-3.5 w-3.5" />
            {message}
        </p>
    )
}

export default function QuoteForm({
    formData,
    setFormData,
    onSubmit,
    showSuccess,
    onClose,
    isSubmitting,
}: {
    formData: QuoteFormValues
    setFormData: React.Dispatch<React.SetStateAction<QuoteFormValues>>
    onSubmit: () => Promise<void>
    showSuccess: boolean
    onClose: () => void
    isSubmitting: boolean
}) {
    const [errors, setErrors] = useState<FormErrors>({})
    const [submitted, setSubmitted] = useState(false)
    const [phoneCountry, setPhoneCountry] = useState<Country>('IN')

    useEffect(() => {
        if (showSuccess) {
            setErrors({})
            setSubmitted(false)
        }
    }, [showSuccess])

    const isIndia = formData.country === 'India'
    const liveErrors = useMemo(() => validateQuoteForm(formData), [formData])
    const isFormValid = Object.keys(liveErrors).length === 0

    const visibleErrors = { ...errors, ...liveErrors }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSubmitted(true)

        if (!isFormValid) {
            setErrors(liveErrors)
            return
        }

        setErrors({})
        await onSubmit()
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setFormData((current) => ({ ...current, [name]: value }))
        setErrors((current) => {
            const next = { ...current }
            delete next[name as keyof QuoteFormValues]
            return next
        })
    }

    const handlePhoneChange = (value?: string) => {
        const nextValue = value ?? ''
        const allDigits = nextValue.replace(/\D/g, '')
        const isIndiaNumber = allDigits.startsWith('91')
        const indiaDigits = isIndiaNumber
            ? allDigits.slice(2)
            : ''
        const normalizedValue =
            isIndiaNumber && indiaDigits.length > 10
                ? `+91${indiaDigits.slice(0, 10)}`
                : nextValue

        setFormData((current) => ({ ...current, phone: normalizedValue }))
        setErrors((current) => {
            const next = { ...current }
            delete next.phone
            return next
        })
    }

    const handlePhoneKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (phoneCountry !== 'IN') return
        if (!/^\d$/.test(event.key)) return

        const input = event.currentTarget
        const hasSelection = input.selectionStart !== input.selectionEnd
        const indiaDigits = formData.phone.replace(/\D/g, '').replace(/^91/, '')

        if (!hasSelection && indiaDigits.length >= 10) {
            event.preventDefault()
        }
    }

    const handlePhonePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
        if (phoneCountry !== 'IN') return

        const pastedDigits = event.clipboardData.getData('text').replace(/\D/g, '')
        if (!pastedDigits) return

        const currentDigits = formData.phone.replace(/\D/g, '').replace(/^91/, '')
        const input = event.currentTarget
        const selectedDigits = input.value
            .slice(input.selectionStart ?? 0, input.selectionEnd ?? 0)
            .replace(/\D/g, '').replace(/^91/, '')
        const availableDigits = Math.max(10 - (currentDigits.length - selectedDigits.length), 0)

        event.preventDefault()

        if (availableDigits === 0) return

        const nextDigits = `${currentDigits}${pastedDigits.slice(0, availableDigits)}`.slice(0, 10)
        setFormData((current) => ({ ...current, phone: `+91${nextDigits}` }))
        setErrors((current) => {
            const next = { ...current }
            delete next.phone
            return next
        })
    }

    const summary = useMemo(() => {
        return [
            { label: 'Plant', value: formData.plantType || 'Pending' },
            { label: 'Industry', value: formData.industry || 'Pending' },
            { label: 'Capacity', value: formData.plantCapacity || 'Pending' },
        ]
    }, [formData.industry, formData.plantCapacity, formData.plantType])

    return (
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            {showSuccess ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                    <div className="flex items-center gap-2 font-semibold">
                        <CheckCircle2 size={18} />
                        Thank you! Our technical team will contact you shortly.
                    </div>
                </div>
            ) : null}

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <Sparkles size={16} className="text-emerald-600" />
                    Project Details
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="plantType">Plant Type *</label>
                        <select id="plantType" name="plantType" value={formData.plantType} onChange={handleChange} className={`${fieldClassName} ${fieldStateClass(formData.plantType, visibleErrors.plantType)}`}>
                            <option value="">Select plant type</option>
                            {plantTypes.map((value) => <option key={value} value={value}>{value}</option>)}
                        </select>
                        <ErrorText message={visibleErrors.plantType} />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="industry">Industry *</label>
                        <select id="industry" name="industry" value={formData.industry} onChange={handleChange} className={`${fieldClassName} ${fieldStateClass(formData.industry, visibleErrors.industry)}`}>
                            <option value="">Select industry</option>
                            {industries.map((value) => <option key={value} value={value}>{value}</option>)}
                        </select>
                        <ErrorText message={visibleErrors.industry} />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="product">Product *</label>
                        <select id="product" name="product" value={formData.product} onChange={handleChange} className={`${fieldClassName} ${fieldStateClass(formData.product, visibleErrors.product)}`}>
                            <option value="">Select product</option>
                            {quoteProducts.map((value) => <option key={value} value={value}>{value}</option>)}
                        </select>
                        <ErrorText message={visibleErrors.product} />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="plantCapacity">Plant Capacity *</label>
                        <input id="plantCapacity" name="plantCapacity" value={formData.plantCapacity} onChange={handleChange} placeholder="100 KLD" className={`${fieldClassName} ${fieldStateClass(formData.plantCapacity, visibleErrors.plantCapacity)}`} />
                        <ErrorText message={visibleErrors.plantCapacity} />
                    </div>
                </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <Mail size={16} className="text-emerald-600" />
                    Contact Information
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="companyName">Company Name *</label>
                        <input id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} className={`${fieldClassName} ${fieldStateClass(formData.companyName, visibleErrors.companyName)}`} />
                        <ErrorText message={visibleErrors.companyName} />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="contactPerson">Contact Person *</label>
                        <input id="contactPerson" name="contactPerson" value={formData.contactPerson} onChange={handleChange} className={`${fieldClassName} ${fieldStateClass(formData.contactPerson, visibleErrors.contactPerson)}`} />
                        <ErrorText message={visibleErrors.contactPerson} />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">Email *</label>
                        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className={`${fieldClassName} ${fieldStateClass(formData.email, visibleErrors.email)}`} />
                        <ErrorText message={visibleErrors.email} />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="phone">Phone *</label>
                        <ErrorText message={visibleErrors.phone} />
                        <PhoneInput
                            id="phone"
                            name="phone"
                            defaultCountry="IN"
                            international
                            limitMaxLength
                            countryCallingCodeEditable={false}
                            onCountryChange={(country) => setPhoneCountry(country ?? 'IN')}
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            numberInputProps={{
                                onKeyDown: handlePhoneKeyDown,
                                onPaste: handlePhonePaste,
                                inputMode: 'numeric',
                            }}
                            className={`quote-phone-input ${fieldStateClass(formData.phone, visibleErrors.phone)}`}
                            disabled={isSubmitting}
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="country">Country *</label>
                        <select id="country" name="country" value={formData.country} onChange={handleChange} className={`${fieldClassName} ${fieldStateClass(formData.country, visibleErrors.country)}`}>
                            <option value="India">India</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="UAE">UAE</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Australia">Australia</option>
                            <option value="Canada">Canada</option>
                            <option value="Other">Other</option>
                        </select>
                        <ErrorText message={visibleErrors.country} />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="state">State *</label>
                        {isIndia ? (
                            <select id="state" name="state" value={formData.state} onChange={handleChange} className={`${fieldClassName} ${fieldStateClass(formData.state, visibleErrors.state)}`}>
                                <option value="">Select state</option>
                                {indianStates.map((value) => <option key={value} value={value}>{value}</option>)}
                            </select>
                        ) : (
                            <input id="state" name="state" value={formData.state} onChange={handleChange} placeholder="Enter state or province" className={`${fieldClassName} ${fieldStateClass(formData.state, visibleErrors.state)}`} />
                        )}
                        <ErrorText message={visibleErrors.state} />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="city">City</label>
                        <input id="city" name="city" value={formData.city} onChange={handleChange} className={`${fieldClassName} ${fieldStateClass(formData.city)}`} />
                    </div>
                </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <PhoneCall size={16} className="text-emerald-600" />
                    Message
                </div>
                <textarea id="additionalRequirements" name="additionalRequirements" rows={4} value={formData.additionalRequirements} onChange={handleChange} className={`${fieldClassName} mt-4 ${fieldStateClass(formData.additionalRequirements)}`} placeholder="Share any technical, compliance, timeline or process requirements." />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-800">Request Summary</div>
                <div className="mt-3 space-y-2 text-sm text-slate-600">
                    {summary.map((item) => (
                        <div key={item.label} className="flex items-center justify-between rounded-lg bg-white px-3 py-2">
                            <span>{item.label}</span>
                            <span className="font-medium text-slate-800">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                <button type="button" onClick={onClose} className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100" disabled={isSubmitting}>Cancel</button>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-300" disabled={!isFormValid || isSubmitting}>
                    {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                </button>
            </div>
        </form>
    )
}
