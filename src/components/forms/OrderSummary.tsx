'use client'

import { ArrowRight, Package, ReceiptText } from 'lucide-react'
import { products } from '@/components/forms/products-data'

export type OrderFormValues = {
    companyName: string
    gstNumber: string
    contactPerson: string
    email: string
    phone: string
    country: string
    state: string
    city: string
    address: string
    pincode: string
    product: string
    quantity: number
    unitPrice: number
}

const initialState: OrderFormValues = {
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

export default function OrderSummary({
    formData,
    subtotal,
    cgst,
    sgst,
    igst,
    grandTotal,
    onPlaceOrder,
    isSubmitting,
}: {
    formData: OrderFormValues
    subtotal: number
    cgst: number
    sgst: number
    igst: number
    grandTotal: number
    onPlaceOrder: () => void
    isSubmitting: boolean
}) {
    const selectedProduct = products.find((product) => product.name === formData.product) ?? products[0]

    return (
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5 text-white shadow-xl">
            <div className="flex items-center gap-2">
                <ReceiptText size={18} />
                <h2 className="text-lg font-semibold">Order Summary</h2>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="flex items-center justify-between text-sm text-slate-200">
                    <span>Product</span>
                    <span className="font-medium text-white">{selectedProduct.name}</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-slate-200">
                    <span>Unit Price</span>
                    <span className="font-medium text-white">₹{selectedProduct.price.toLocaleString()}</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-slate-200">
                    <span>Quantity</span>
                    <span className="font-medium text-white">{formData.quantity}</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-slate-200">
                    <span>Subtotal</span>
                    <span className="font-medium text-white">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-slate-200">
                    <span>Tax</span>
                    <span className="font-medium text-white">₹{(cgst + sgst + igst).toLocaleString()}</span>
                </div>
                <div className="mt-4 border-t border-white/10 pt-3 text-base font-semibold">
                    <div className="flex items-center justify-between">
                        <span>Grand Total</span>
                        <span>₹{grandTotal.toLocaleString()}</span>
                    </div>
                </div>
            </div>

            <button type="button" onClick={onPlaceOrder} className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400" disabled={isSubmitting}>
                <Package size={16} />
                {isSubmitting ? 'Processing...' : 'Place Order'}
            </button>
            <p className="text-sm text-slate-300">Secure checkout and payment gateway integration will be added in the next phase.</p>
        </div>
    )
}
