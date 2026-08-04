'use client'

import { useState } from 'react'
import type { OrderFormValues } from '@/components/forms/OrderSummary'
import { products } from '@/components/forms/products-data'

export default function ProductSelector({
    formData,
    setFormData,
    errors,
    setErrors,
}: {
    formData: OrderFormValues
    setFormData: React.Dispatch<React.SetStateAction<OrderFormValues>>
    errors: Record<string, string>
    setErrors?: React.Dispatch<React.SetStateAction<Record<string, string>>>
}) {
    const [quantityInput, setQuantityInput] = useState(formData.quantity > 0 ? String(formData.quantity) : '')

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = products.find((product) => product.name === event.target.value)
        if (!selected) return

        setFormData((current) => ({ ...current, product: selected.name, unitPrice: selected.price }))
        setErrors?.((current) => {
            const next = { ...current }
            delete next.product
            return next
        })
    }

    return (
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div>
                <h2 className="text-lg font-semibold text-slate-900">Product Selection</h2>
                <p className="mt-1 text-sm text-slate-600">Choose the product and quantity for your order request.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="product">Product *</label>
                    <select id="product" name="product" value={formData.product} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100">
                        <option value="">Select product</option>
                        {products.map((product) => <option key={product.id} value={product.name}>{product.name}</option>)}
                    </select>
                    {errors.product ? <p className="mt-1 text-xs text-red-600">{errors.product}</p> : null}
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="quantity">Quantity *</label>
                    <input id="quantity" name="quantity" type="number" min="0" step="1" value={quantityInput} placeholder="Enter quantity" onChange={(event) => { const value = event.target.value; const parsedValue = Number(value); setQuantityInput(value); setFormData((current) => ({ ...current, quantity: value !== '' && Number.isFinite(parsedValue) ? Math.max(0, parsedValue) : 0 })); setErrors?.((current) => { const next = { ...current }; delete next.quantity; return next }) }} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" />
                    {errors.quantity ? <p className="mt-1 text-xs text-red-600">{errors.quantity}</p> : null}
                </div>
            </div>
        </div>
    )
}
