'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

type FAQItem = {
    question: string
    answer: string
}

type FAQSectionProps = {
    eyebrow: string
    title: string
    description?: string
    items: FAQItem[]
}

export default function FAQSection({ eyebrow, title, description, items }: FAQSectionProps) {
    return (
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">{eyebrow}</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
                {description ? <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p> : null}
            </div>

            <div className="mt-10 space-y-4">
                {items.map((item) => (
                    <Disclosure key={item.question} as="div" className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                        {({ open }) => (
                            <>
                                <DisclosureButton className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                                    <span className="text-lg font-semibold text-slate-900">{item.question}</span>
                                    <ChevronDown className={`h-5 w-5 shrink-0 text-emerald-600 transition ${open ? 'rotate-180' : ''}`} />
                                </DisclosureButton>
                                <DisclosurePanel className="px-6 pb-6 text-sm leading-7 text-slate-600">{item.answer}</DisclosurePanel>
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>
        </section>
    )
}
