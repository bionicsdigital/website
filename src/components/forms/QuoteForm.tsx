'use client'

import { useMemo, useState } from 'react'
import { AlertCircle, CheckCircle2, Mail, PhoneCall, Sparkles } from 'lucide-react'
import type { QuoteFormValues } from '@/components/forms/QuoteModal'

const plantTypes = ['ETP', 'STP', 'CETP', 'Anaerobic Digester', 'Composting Plant', 'Other']
const industries = ['Sugar', 'Distillery', 'Textile & Dye', 'Food & Beverage', 'Dairy', 'Pharmaceutical', 'Chemical', 'Pulp & Paper', 'Leather', 'Petrochemical', 'Municipal', 'Hospitality', 'Cement', 'Power', 'Other']
const products = ['Nanozyme Bioculture']
const indianStates = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana', 'Maharashtra', 'Gujarat', 'Uttar Pradesh', 'Rajasthan', 'West Bengal', 'Delhi', 'Haryana', 'Punjab', 'Odisha', 'Bihar', 'Madhya Pradesh', 'Chhattisgarh', 'Jharkhand', 'Assam', 'Uttarakhand', 'Himachal Pradesh', 'Goa', 'Pondicherry', 'Sikkim', 'Arunachal Pradesh', 'Meghalaya', 'Nagaland', 'Tripura', 'Manipur', 'Mizoram']

const validateEmail = (value: string) => /.+@.+\..+/.test(value)
const validatePhone = (value: string) => /^[0-9+\-()\s]{7,15}$/.test(value)

export default function QuoteForm({
    formData,
    setFormData,
    onSubmit,
    showSuccess,
    onClose,
}: {
    formData: QuoteFormValues
    setFormData: React.Dispatch<React.SetStateAction<QuoteFormValues>>
    onSubmit: () => void
    showSuccess: boolean
    onClose: () => void
}) {
    const [errors, setErrors] = useState<Record<string, string>>({})

    const isIndia = formData.country === 'India'

    const fieldClassName = 'w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100'

    const validateForm = () => {
        const nextErrors: Record<string, string> = {}

        if (!formData.plantType) nextErrors.plantType = 'Plant type is required.'
        if (!formData.industry) nextErrors.industry = 'Industry is required.'
        if (!formData.product) nextErrors.product = 'Product is required.'
        if (!formData.plantCapacity) nextErrors.plantCapacity = 'Plant capacity is required.'
        if (!formData.companyName) nextErrors.companyName = 'Company name is required.'
        if (!formData.contactPerson) nextErrors.contactPerson = 'Contact person is required.'
        if (!formData.email) nextErrors.email = 'Email is required.'
        else if (!validateEmail(formData.email)) nextErrors.email = 'Please enter a valid email.'
        if (!formData.phone) nextErrors.phone = 'Phone is required.'
        else if (!validatePhone(formData.phone)) nextErrors.phone = 'Please enter a valid phone number.'
        if (!formData.country) nextErrors.country = 'Country is required.'
        if (!formData.state) nextErrors.state = 'State is required.'

        setErrors(nextErrors)
        return Object.keys(nextErrors).length === 0
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!validateForm()) return
        onSubmit()
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setFormData((current) => ({ ...current, [name]: value }))
        setErrors((current) => ({ ...current, [name]: '' }))
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
                        Quote request submitted successfully.
                    </div>
                    <p className="mt-2 text-emerald-700">A technical consultant will contact you shortly.</p>
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
                        <select id="plantType" name="plantType" value={formData.plantType} onChange={handleChange} className={fieldClassName}>
                            <option value="">Select plant type</option>
                            {plantTypes.map((value) => <option key={value} value={value}>{value}</option>)}
                        </select>
                        {errors.plantType ? <p className="mt-1 text-xs text-red-600">{errors.plantType}</p> : null}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="industry">Industry *</label>
                        <select id="industry" name="industry" value={formData.industry} onChange={handleChange} className={fieldClassName}>
                            <option value="">Select industry</option>
                            {industries.map((value) => <option key={value} value={value}>{value}</option>)}
                        </select>
                        {errors.industry ? <p className="mt-1 text-xs text-red-600">{errors.industry}</p> : null}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="product">Product *</label>
                        <select id="product" name="product" value={formData.product} onChange={handleChange} className={fieldClassName}>
                            {products.map((value) => <option key={value} value={value}>{value}</option>)}
                        </select>
                        {errors.product ? <p className="mt-1 text-xs text-red-600">{errors.product}</p> : null}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="plantCapacity">Plant Capacity *</label>
                        <input id="plantCapacity" name="plantCapacity" value={formData.plantCapacity} onChange={handleChange} placeholder="100 KLD" className={fieldClassName} />
                        {errors.plantCapacity ? <p className="mt-1 text-xs text-red-600">{errors.plantCapacity}</p> : null}
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
                        <input id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} className={fieldClassName} />
                        {errors.companyName ? <p className="mt-1 text-xs text-red-600">{errors.companyName}</p> : null}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="contactPerson">Contact Person *</label>
                        <input id="contactPerson" name="contactPerson" value={formData.contactPerson} onChange={handleChange} className={fieldClassName} />
                        {errors.contactPerson ? <p className="mt-1 text-xs text-red-600">{errors.contactPerson}</p> : null}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">Email *</label>
                        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className={fieldClassName} />
                        {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="phone">Phone *</label>
                        <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className={fieldClassName} />
                        {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone}</p> : null}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="country">Country *</label>
                        <select id="country" name="country" value={formData.country} onChange={handleChange} className={fieldClassName}>
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
                        {errors.country ? <p className="mt-1 text-xs text-red-600">{errors.country}</p> : null}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="state">State *</label>
                        {isIndia ? (
                            <select id="state" name="state" value={formData.state} onChange={handleChange} className={fieldClassName}>
                                <option value="">Select state</option>
                                {indianStates.map((value) => <option key={value} value={value}>{value}</option>)}
                            </select>
                        ) : (
                            <input id="state" name="state" value={formData.state} onChange={handleChange} placeholder="Enter state or province" className={fieldClassName} />
                        )}
                        {errors.state ? <p className="mt-1 text-xs text-red-600">{errors.state}</p> : null}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="city">City</label>
                        <input id="city" name="city" value={formData.city} onChange={handleChange} className={fieldClassName} />
                    </div>
                </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <PhoneCall size={16} className="text-emerald-600" />
                    Additional Requirements
                </div>
                <textarea id="additionalRequirements" name="additionalRequirements" rows={4} value={formData.additionalRequirements} onChange={handleChange} className={fieldClassName + ' mt-4'} placeholder="Share any technical, compliance, timeline or process requirements." />
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
                <button type="button" onClick={onClose} className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">Cancel</button>
                <button type="submit" className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">Submit Quote Request</button>
            </div>
        </form>
    )
}
