'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

type FaqItem = {
    question: string
    answer: string
}

type ProductFAQProps = {
    title: string
    description?: string
    items: FaqItem[]
}

export default function ProductFAQ({ title, description, items }: ProductFAQProps) {
    return (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-8 lg:px-10 lg:py-20">
            <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">FAQ</p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
                {description ? <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-lg sm:leading-8">{description}</p> : null}
            </div>

            <div className="mt-7 space-y-3 sm:mt-10 sm:space-y-4">
                {items.map((item) => (
                    <Disclosure key={item.question} as="div" className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                        {({ open }) => (
                            <>
                                <DisclosureButton className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5">
                                    <span className="text-base font-semibold text-slate-900 sm:text-lg">{item.question}</span>
                                    <ChevronDown className={`h-5 w-5 shrink-0 text-emerald-600 transition ${open ? 'rotate-180' : ''}`} />
                                </DisclosureButton>
                                <DisclosurePanel className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6 sm:pb-6">
                                    {item.answer}
                                </DisclosurePanel>
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>
        </section>
    )
}
