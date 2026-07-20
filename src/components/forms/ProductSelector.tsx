'use client'

import { useMemo } from 'react'
import type { OrderFormValues } from '@/components/forms/OrderSummary'
import { products } from '@/components/forms/products-data'

export default function ProductSelector({
    formData,
    setFormData,
    errors,
}: {
    formData: OrderFormValues
    setFormData: React.Dispatch<React.SetStateAction<OrderFormValues>>
    errors: Record<string, string>
}) {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = products.find((product) => product.name === event.target.value)
        if (!selected) return

        setFormData((current) => ({ ...current, product: selected.name, unitPrice: selected.price }))
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
                        {products.map((product) => <option key={product.id} value={product.name}>{product.name}</option>)}
                    </select>
                    {errors.product ? <p className="mt-1 text-xs text-red-600">{errors.product}</p> : null}
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="quantity">Quantity *</label>
                    <input id="quantity" name="quantity" type="number" min="1" value={formData.quantity} onChange={(event) => setFormData((current) => ({ ...current, quantity: Number(event.target.value) }))} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" />
                    {errors.quantity ? <p className="mt-1 text-xs text-red-600">{errors.quantity}</p> : null}
                </div>
            </div>
        </div>
    )
}
