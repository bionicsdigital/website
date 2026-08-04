"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { CheckCircle2, Loader2, X } from "lucide-react";

export type ReviewSection = {
  title: string;
  rows: Array<{ label: string; value: string }>;
};

export default function SubmissionReviewDialog({
  open,
  onClose,
  title,
  description,
  sections,
  confirmLabel,
  isSubmitting,
  onConfirm,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  sections: ReviewSection[];
  confirmLabel: string;
  isSubmitting: boolean;
  onConfirm: () => void;
}) {
  return (
    <Dialog
      open={open}
      onClose={isSubmitting ? () => {} : onClose}
      className="relative z-[100]"
    >
      <DialogBackdrop className="fixed inset-0 bg-slate-950/65 backdrop-blur-sm" />
      <div className="fixed inset-0 overflow-y-auto p-4 sm:p-6">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-6">
              <div>
                <DialogTitle className="text-xl font-bold text-slate-950">
                  {title}
                </DialogTitle>
                <p className="mt-1 text-sm text-slate-600">{description}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                aria-label="Close review"
                className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 disabled:opacity-50"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-[65vh] space-y-4 overflow-y-auto p-5 sm:p-6">
              {sections.map((section) => (
                <section
                  key={section.title}
                  className="overflow-hidden rounded-2xl border border-slate-200"
                >
                  <h3 className="bg-slate-50 px-4 py-3 text-sm font-bold text-slate-900">
                    {section.title}
                  </h3>
                  <dl className="divide-y divide-slate-100">
                    {section.rows.map((row) => (
                      <div
                        key={row.label}
                        className="grid gap-1 px-4 py-3 text-sm sm:grid-cols-[180px_1fr]"
                      >
                        <dt className="font-semibold text-slate-500">
                          {row.label}
                        </dt>
                        <dd className="whitespace-pre-wrap break-words text-slate-900">
                          {row.value || "—"}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              ))}
            </div>
            <div className="flex flex-col-reverse gap-3 border-t border-slate-200 bg-slate-50 px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-50"
              >
                Edit Details
              </button>
              <button
                type="button"
                onClick={onConfirm}
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-700 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <CheckCircle2 className="h-4 w-4" />
                )}
                {isSubmitting ? "Sending…" : confirmLabel}
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
