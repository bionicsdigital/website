'use client'

import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import type { Country } from 'react-phone-number-input'
import { isValidPhoneNumber } from 'libphonenumber-js'
import { AlertCircle } from 'lucide-react'
import type { OrderFormValues } from '@/components/forms/OrderSummary'
import { emailRegex } from '@/lib/request-quote'

const indianStates = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana', 'Maharashtra', 'Gujarat', 'Uttar Pradesh', 'Rajasthan', 'West Bengal', 'Delhi', 'Haryana', 'Punjab', 'Odisha', 'Bihar', 'Madhya Pradesh', 'Chhattisgarh', 'Jharkhand', 'Assam', 'Uttarakhand', 'Himachal Pradesh', 'Goa', 'Pondicherry', 'Sikkim', 'Arunachal Pradesh', 'Meghalaya', 'Nagaland', 'Tripura', 'Manipur', 'Mizoram']

const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/

const fieldClassName = 'w-full rounded-xl border bg-white px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100'

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

function phoneError(phone: string) {
    const phoneValue = phone.trim()
    const indiaDigits = phoneValue.startsWith('+91')
        ? phoneValue.replace(/^\+91/, '').replace(/\D/g, '')
        : ''

    if (!phoneValue) return 'Phone is required.'
    if (phoneValue.startsWith('+91') && indiaDigits.length !== 10) return 'Please enter a valid 10 digit mobile number.'
    if (!isValidPhoneNumber(phoneValue)) return 'This phone number is not valid.'
    return ''
}

export default function CompanyForm({
    formData,
    setFormData,
    errors,
    setErrors,
}: {
    formData: OrderFormValues
    setFormData: React.Dispatch<React.SetStateAction<OrderFormValues>>
    errors: Record<string, string>
    setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
}) {
    const [phoneCountry, setPhoneCountry] = useState<Country>('IN')
    const livePhoneError = phoneError(formData.phone)
    const visibleErrors: Record<string, string> = { ...errors }
    if (livePhoneError) visibleErrors.phone = livePhoneError

    const clearError = (name: keyof OrderFormValues) => {
        setErrors((current) => {
            const next = { ...current }
            delete next[name]
            return next
        })
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        const key = name as keyof OrderFormValues

        setFormData((current) => ({ ...current, [name]: value }))
        clearError(key)

        if (name === 'email' && value && !emailRegex.test(value.trim())) {
            setErrors((current) => ({ ...current, email: 'Please enter a valid email address.' }))
        }

        if (name === 'gstNumber') {
            const trimmed = value.toUpperCase()
            setFormData((current) => ({ ...current, gstNumber: trimmed }))
            if (trimmed && !gstRegex.test(trimmed)) {
                setErrors((current) => ({ ...current, gstNumber: 'GST number format is invalid.' }))
            }
        }
    }

    const handlePhoneChange = (value?: string) => {
        const nextValue = value ?? ''
        const allDigits = nextValue.replace(/\D/g, '')
        const isIndiaNumber = allDigits.startsWith('91')
        const indiaDigits = isIndiaNumber ? allDigits.slice(2) : ''
        const normalizedValue =
            isIndiaNumber && indiaDigits.length > 10
                ? `+91${indiaDigits.slice(0, 10)}`
                : nextValue

        setFormData((current) => ({ ...current, phone: normalizedValue }))
        clearError('phone')
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
        clearError('phone')
    }

    return (
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div>
                <h2 className="text-lg font-semibold text-slate-900">Company Information</h2>
                <p className="mt-1 text-sm text-slate-600">Provide buyer details for documentation and payment processing.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="companyName">Company Name *</label>
                    <input id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} className={`${fieldClassName} ${fieldStateClass(formData.companyName, visibleErrors.companyName)}`} />
                    <ErrorText message={visibleErrors.companyName} />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="gstNumber">GST Number *</label>
                    <input id="gstNumber" name="gstNumber" value={formData.gstNumber} onChange={handleChange} className={`${fieldClassName} ${fieldStateClass(formData.gstNumber, visibleErrors.gstNumber)}`} placeholder="22AAAAA0000A1Z5" />
                    <ErrorText message={visibleErrors.gstNumber} />
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
                        flags={flags}
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
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="country">Country</label>
                    <select id="country" name="country" value={formData.country} onChange={handleChange} className={`${fieldClassName} ${fieldStateClass(formData.country)}`}>
                        <option value="India">India</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="UAE">UAE</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="state">State *</label>
                    {formData.country === 'India' ? (
                        <select id="state" name="state" value={formData.state} onChange={handleChange} className={`${fieldClassName} ${fieldStateClass(formData.state, visibleErrors.state)}`}>
                            <option value="">Select state</option>
                            {indianStates.map((value) => <option key={value} value={value}>{value}</option>)}
                        </select>
                    ) : (
                        <input id="state" name="state" value={formData.state} onChange={handleChange} className={`${fieldClassName} ${fieldStateClass(formData.state, visibleErrors.state)}`} placeholder="Enter state" />
                    )}
                    <ErrorText message={visibleErrors.state} />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="city">City</label>
                    <input id="city" name="city" value={formData.city} onChange={handleChange} className={`${fieldClassName} ${fieldStateClass(formData.city)}`} />
                </div>

                <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="address">Address</label>
                    <textarea id="address" name="address" value={formData.address} onChange={handleChange} rows={3} className={`${fieldClassName} ${fieldStateClass(formData.address)}`} />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="pincode">Pincode</label>
                    <input id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} className={`${fieldClassName} ${fieldStateClass(formData.pincode)}`} />
                </div>
            </div>
        </div>
    )
}
