'use client'

import { useMemo, useState } from 'react'
import { toast } from 'react-hot-toast'
import CompanyForm from '@/components/forms/CompanyForm'
import GSTSummary from '@/components/forms/GSTSummary'
import OrderSummary from '@/components/forms/OrderSummary'
import ProductSelector from '@/components/forms/ProductSelector'
import type { OrderFormValues } from '@/components/forms/OrderSummary'

const initialValues: OrderFormValues = {
    companyName: '',
    gstNumber: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: 'India',
    state: 'Tamil Nadu',
    city: '',
    address: '',
    pincode: '',
    product: 'Nanozyme Bioculture',
    quantity: 1,
    unitPrice: 1000,
}

export default function BuyProductPage() {
    const [formData, setFormData] = useState(initialValues)
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const subtotal = formData.quantity * formData.unitPrice
    const isTamilNadu = formData.state === 'Tamil Nadu'
    const cgst = isTamilNadu ? subtotal * 0.09 : 0
    const sgst = isTamilNadu ? subtotal * 0.09 : 0
    const igst = isTamilNadu ? 0 : subtotal * 0.18
    const grandTotal = subtotal + cgst + sgst + igst

    const validateForm = () => {
        const nextErrors: Record<string, string> = {}

        if (!formData.companyName) nextErrors.companyName = 'Company is required.'
        if (!formData.gstNumber) nextErrors.gstNumber = 'GST number is required.'
        else if (!/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(formData.gstNumber.toUpperCase())) nextErrors.gstNumber = 'GST number format is invalid.'
        if (!formData.contactPerson) nextErrors.contactPerson = 'Contact person is required.'
        if (!formData.email) nextErrors.email = 'Email is required.'
        if (!formData.phone) nextErrors.phone = 'Phone is required.'
        if (!formData.state) nextErrors.state = 'State is required.'
        if (!formData.product) nextErrors.product = 'Product is required.'
        if (!formData.quantity || formData.quantity < 1) nextErrors.quantity = 'Quantity must be at least 1.'

        setErrors(nextErrors)
        return Object.keys(nextErrors).length === 0
    }

    const handlePlaceOrder = () => {
        if (!validateForm()) return

        setIsSubmitting(true)
        console.log('Place order', formData)
        // TODO: Payment Gateway
        // TODO: Razorpay
        // TODO: Stripe
        // TODO: Cashfree
        setTimeout(() => {
            setIsSubmitting(false)
            toast.success('Redirecting to payment...')
        }, 600)
    }

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Buy Product</p>
                    <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Place Your Bulk Order</h1>
                    <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600">Professional B2B ordering experience for industrial buyers, with configurable pricing and tax calculation.</p>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="space-y-6">
                        <CompanyForm formData={formData} setFormData={setFormData} errors={errors} setErrors={setErrors} />
                        <ProductSelector formData={formData} setFormData={setFormData} errors={errors} />
                    </div>

                    <div className="space-y-6">
                        <OrderSummary formData={formData} subtotal={subtotal} cgst={cgst} sgst={sgst} igst={igst} grandTotal={grandTotal} onPlaceOrder={handlePlaceOrder} isSubmitting={isSubmitting} />
                        <GSTSummary subtotal={subtotal} cgst={cgst} sgst={sgst} igst={igst} grandTotal={grandTotal} state={formData.state} />
                    </div>
                </div>
            </div>
        </main>
    )
}
