'use client'

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import QuoteForm from '@/components/forms/QuoteForm'
import { toast } from 'react-hot-toast'

export type QuoteFormValues = {
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

const initialValues: QuoteFormValues = {
    plantType: '',
    industry: '',
    product: '',
    plantCapacity: '',
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: 'India',
    state: 'Tamil Nadu',
    city: '',
    additionalRequirements: '',
}

export default function QuoteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    const [formData, setFormData] = useState(initialValues)
    const [showSuccess, setShowSuccess] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        if (!open) {
            setFormData(initialValues)
            setShowSuccess(false)
            setIsSubmitting(false)
        }
    }, [open])

    useEffect(() => {
        if (!open) return

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose()
        }

        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [open, onClose])

    const handleQuoteSubmit = async () => {
        if (isSubmitting) return

        setIsSubmitting(true)

        try {
            const response = await fetch('/api/request-quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                toast.error('Something went wrong. Please try again.')
                return
            }

            setShowSuccess(true)
            setFormData(initialValues)
            toast.success('Thank you! Our technical team will contact you shortly.')
        } catch {
            toast.error('Something went wrong. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const dialogClassName = useMemo(() => {
        return 'fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-slate-950/60 px-0 py-0 sm:px-4 sm:py-6'
    }, [])

    return (
        <Dialog open={open} onClose={onClose} className="relative z-[100]">
            <div className={dialogClassName} />

            <div className="fixed inset-0 z-[101] flex items-end justify-center sm:items-center">
                <DialogPanel className="w-full max-w-2xl overflow-hidden rounded-t-3xl border border-slate-200 bg-white shadow-2xl sm:rounded-3xl">
                    <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-7">
                        <div>
                            <DialogTitle className="text-lg font-semibold text-slate-900">Request Quote</DialogTitle>
                            <p className="mt-1 text-sm text-slate-600">Tell us about your plant and we will get back with a technical recommendation.</p>
                        </div>
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                            aria-label="Close quote form"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    <div className="max-h-[80vh] overflow-y-auto px-5 py-5 sm:px-7 sm:py-7">
                        <QuoteForm
                            formData={formData}
                            setFormData={setFormData}
                            onSubmit={handleQuoteSubmit}
                            showSuccess={showSuccess}
                            onClose={onClose}
                            isSubmitting={isSubmitting}
                        />
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}
