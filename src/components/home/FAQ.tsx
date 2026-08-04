'use client'

import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import SectionHeading from './SectionHeading'

const questions = [
  {
    question: 'What is Nanozyme Bioculture?',
    answer:
      'Nanozyme Bioculture is a scientifically developed microbial formulation designed to enhance biological wastewater treatment by improving the degradation of organic pollutants and maintaining stable plant performance.',
  },
  {
    question: 'Can Nanozyme Bioculture be used in both ETP and STP plants?',
    answer:
      'Yes. Our formulations are customized based on wastewater characteristics and are suitable for ETPs, STPs, CETPs, anaerobic digesters and various industrial wastewater treatment applications.',
  },
  {
    question: 'How does Nanozyme Bioculture help reduce COD and BOD?',
    answer:
      'Application-specific microbial cultures accelerate the biological degradation of biodegradable pollutants, resulting in faster and more stable COD and BOD reduction.',
  },
  {
    question: 'Does Nanozyme Bioculture increase sludge generation?',
    answer:
      'No. Nanozyme Bioculture promotes efficient biological conversion and typically supports lower sludge generation when the treatment plant is properly operated.',
  },
  {
    question: 'How do I choose the right product for my plant?',
    answer:
      'Our technical experts evaluate your wastewater analysis, treatment process, operational challenges and performance goals before recommending the most suitable Nanozyme solution.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="bg-gradient-to-b from-slate-50 to-sky-50/30 py-10 lg:py-16"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Everything You Need to Know About Nanozyme Bioculture"
        />

        <div className="mt-8 space-y-3 lg:mt-10">
          {questions.map((item, index) => (
            <div
              key={item.question}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:border-sky-300
                hover:shadow-lg
              "
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-4
                  px-6
                  py-4
                  lg:py-5
                  text-left
                "
                aria-expanded={open === index}
              >
                <span className="text-base font-semibold text-slate-900 lg:text-lg">
                  {item.question}
                </span>

                <ChevronDown
                  size={22}
                  className={`shrink-0 text-blue-600 transition-transform duration-300 ${
                    open === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <p className="px-6 pb-5 text-sm leading-7 text-slate-600 lg:pb-6 lg:text-base">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
