'use client'

import { useMemo, useState } from 'react'
import type { OrderFormValues } from '@/components/forms/OrderSummary'

const indianStates = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana', 'Maharashtra', 'Gujarat', 'Uttar Pradesh', 'Rajasthan', 'West Bengal', 'Delhi', 'Haryana', 'Punjab', 'Odisha', 'Bihar', 'Madhya Pradesh', 'Chhattisgarh', 'Jharkhand', 'Assam', 'Uttarakhand', 'Himachal Pradesh', 'Goa', 'Pondicherry', 'Sikkim', 'Arunachal Pradesh', 'Meghalaya', 'Nagaland', 'Tripura', 'Manipur', 'Mizoram']

const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/

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
    const fieldClassName = 'w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100'

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setFormData((current) => ({ ...current, [name]: value }))
        setErrors((current) => ({ ...current, [name]: '' }))

        if (name === 'gstNumber') {
            const trimmed = value.toUpperCase()
            setFormData((current) => ({ ...current, gstNumber: trimmed }))
            if (trimmed && !gstRegex.test(trimmed)) {
                setErrors((current) => ({ ...current, gstNumber: 'GST number format is invalid.' }))
            }
        }
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
                    <input id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} className={fieldClassName} />
                    {errors.companyName ? <p className="mt-1 text-xs text-red-600">{errors.companyName}</p> : null}
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="gstNumber">GST Number *</label>
                    <input id="gstNumber" name="gstNumber" value={formData.gstNumber} onChange={handleChange} className={fieldClassName} placeholder="22AAAAA0000A1Z5" />
                    {errors.gstNumber ? <p className="mt-1 text-xs text-red-600">{errors.gstNumber}</p> : null}
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
                    <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="country">Country</label>
                    <select id="country" name="country" value={formData.country} onChange={handleChange} className={fieldClassName}>
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
                        <select id="state" name="state" value={formData.state} onChange={handleChange} className={fieldClassName}>
                            <option value="">Select state</option>
                            {indianStates.map((value) => <option key={value} value={value}>{value}</option>)}
                        </select>
                    ) : (
                        <input id="state" name="state" value={formData.state} onChange={handleChange} className={fieldClassName} placeholder="Enter state" />
                    )}
                    {errors.state ? <p className="mt-1 text-xs text-red-600">{errors.state}</p> : null}
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="city">City</label>
                    <input id="city" name="city" value={formData.city} onChange={handleChange} className={fieldClassName} />
                </div>

                <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="address">Address</label>
                    <textarea id="address" name="address" value={formData.address} onChange={handleChange} rows={3} className={fieldClassName} />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="pincode">Pincode</label>
                    <input id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} className={fieldClassName} />
                </div>
            </div>
        </div>
    )
}
