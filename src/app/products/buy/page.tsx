"use client";

import { useState } from "react";
import { isValidPhoneNumber } from "libphonenumber-js";
import { toast } from "react-hot-toast";
import CompanyForm from "@/components/forms/CompanyForm";
import GSTSummary from "@/components/forms/GSTSummary";
import OrderSummary from "@/components/forms/OrderSummary";
import ProductSelector from "@/components/forms/ProductSelector";
import type { OrderFormValues } from "@/components/forms/OrderSummary";
import ScrollToTop from "@/components/home/ScrollToTop";
import SubmissionReviewDialog from "@/components/forms/SubmissionReviewDialog";
import { emailRegex } from "@/lib/request-quote";

const initialValues: OrderFormValues = {
  companyName: "",
  gstNumber: "",
  contactPerson: "",
  email: "",
  phone: "",
  country: "India",
  state: "Tamil Nadu",
  city: "",
  address: "",
  pincode: "",
  product: "",
  quantity: 0,
  unitPrice: 0,
};

export default function BuyProductPage() {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const subtotal = formData.quantity * formData.unitPrice;
  const isTamilNadu =
    formData.country === "India" && formData.state === "Tamil Nadu";
  const cgst = isTamilNadu ? subtotal * 0.025 : 0;
  const sgst = isTamilNadu ? subtotal * 0.025 : 0;
  const igst = isTamilNadu ? 0 : subtotal * 0.05;
  const grandTotal = subtotal + cgst + sgst + igst;

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};

    if (!formData.companyName) nextErrors.companyName = "Company is required.";
    if (!formData.gstNumber) nextErrors.gstNumber = "GST number is required.";
    else if (
      !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(
        formData.gstNumber.toUpperCase(),
      )
    )
      nextErrors.gstNumber = "GST number format is invalid.";
    if (!formData.contactPerson)
      nextErrors.contactPerson = "Contact person is required.";
    if (!formData.email) nextErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email.trim()))
      nextErrors.email = "Please enter a valid email address.";
    const phoneValue = formData.phone.trim();
    const indiaDigits = phoneValue.startsWith("+91")
      ? phoneValue.replace(/^\+91/, "").replace(/\D/g, "")
      : "";
    if (!phoneValue) nextErrors.phone = "Phone is required.";
    else if (phoneValue.startsWith("+91") && indiaDigits.length !== 10)
      nextErrors.phone = "Please enter a valid 10 digit mobile number.";
    else if (!isValidPhoneNumber(phoneValue))
      nextErrors.phone = "This phone number is not valid.";
    if (!formData.state) nextErrors.state = "State is required.";
    if (!formData.product) nextErrors.product = "Product is required.";
    if (!formData.quantity || formData.quantity < 1)
      nextErrors.quantity = "Quantity must be at least 1.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) return;

    setIsReviewOpen(true);
  };

  const confirmOrder = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok) {
        toast.error(result?.message || "Could not place the order.");
        return;
      }
      setIsReviewOpen(false);
      toast.success("Order confirmed. A copy has been sent to your email.");
    } catch {
      toast.error("Could not place the order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatCurrency = (value: number) =>
    `₹${Math.round(value).toLocaleString("en-IN")}`;
  const reviewSections = [
    {
      title: "Company Information",
      rows: [
        { label: "Company", value: formData.companyName },
        { label: "GST Number", value: formData.gstNumber },
        { label: "Contact Person", value: formData.contactPerson },
        { label: "Email", value: formData.email },
        { label: "Phone", value: formData.phone },
        {
          label: "Address",
          value: [
            formData.address,
            formData.city,
            formData.state,
            formData.pincode,
            formData.country,
          ]
            .filter(Boolean)
            .join(", "),
        },
      ],
    },
    {
      title: "Order Summary",
      rows: [
        { label: "Product", value: formData.product },
        { label: "Unit Price", value: formatCurrency(formData.unitPrice) },
        { label: "Quantity", value: String(formData.quantity) },
        { label: "Subtotal", value: formatCurrency(subtotal) },
        ...(isTamilNadu
          ? [
              { label: "CGST 2.5%", value: formatCurrency(cgst) },
              { label: "SGST 2.5%", value: formatCurrency(sgst) },
            ]
          : [{ label: "IGST 5%", value: formatCurrency(igst) }]),
        { label: "Grand Total", value: formatCurrency(grandTotal) },
      ],
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
              Buy Product
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Place Your Bulk Order
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Professional B2B ordering experience for industrial buyers, with
              configurable pricing and tax calculation.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <CompanyForm
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                setErrors={setErrors}
              />
              <ProductSelector
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                setErrors={setErrors}
              />
            </div>

            <div className="space-y-6">
              <OrderSummary
                formData={formData}
                subtotal={subtotal}
                cgst={cgst}
                sgst={sgst}
                igst={igst}
                grandTotal={grandTotal}
                onPlaceOrder={handlePlaceOrder}
                isSubmitting={isSubmitting}
              />
              <GSTSummary
                subtotal={subtotal}
                cgst={cgst}
                sgst={sgst}
                igst={igst}
                grandTotal={grandTotal}
                state={formData.state}
              />
            </div>
          </div>
        </div>
      </main>
      <SubmissionReviewDialog
        open={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
        title="Review Your Order"
        description="Please verify these details before confirming your order."
        sections={reviewSections}
        confirmLabel="Confirm & Place Order"
        isSubmitting={isSubmitting}
        onConfirm={confirmOrder}
      />
      <ScrollToTop />
    </>
  );
}
