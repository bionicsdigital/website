"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  FileText,
  Loader2,
  Send,
  UploadCloud,
} from "lucide-react";
import { useRef, useState } from "react";
import type { ComponentType, HTMLAttributes } from "react";
import type { MotionProps } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { jobs, cultureBenefits } from "@/data/careers";
import {
  careerApplicationSchema,
  maxResumeSize,
  resumeTypes,
  type CareerApplication,
} from "@/lib/careers";
import SubmissionReviewDialog from "@/components/forms/SubmissionReviewDialog";

const processSteps = [
  "Apply",
  "Resume Screening",
  "HR Discussion",
  "Technical Interview",
  "Final Interview",
  "Offer Letter",
];
const MotionP = motion.p as unknown as ComponentType<
  HTMLAttributes<HTMLParagraphElement> & MotionProps
>;
const MotionH1 = motion.h1 as unknown as ComponentType<
  HTMLAttributes<HTMLHeadingElement> & MotionProps
>;
const MotionArticle = motion.article as unknown as ComponentType<
  HTMLAttributes<HTMLElement> & MotionProps
>;
const MotionDiv = motion.div as unknown as ComponentType<
  HTMLAttributes<HTMLDivElement> & MotionProps
>;
const careerInitialValues: CareerApplication = {
  fullName: "", mobile: "", email: "", city: "", state: "", country: "India",
  qualification: "", college: "", currentCompany: "", currentDesignation: "",
  totalExperience: "", relevantExperience: "", currentCtc: "", expectedCtc: "",
  noticePeriod: "", linkedinUrl: "", portfolioUrl: "", position: "", coverLetter: "", website: "",
};

export default function CareersPage() {
  const [openJob, setOpenJob] = useState<string | null>(null);
  const [resume, setResume] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState("");
  const [pendingApplication, setPendingApplication] =
    useState<CareerApplication | null>(null);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CareerApplication>({
    resolver: zodResolver(careerApplicationSchema),
    defaultValues: careerInitialValues,
  });

  const applyFor = (position: string) => {
    setValue("position", position, { shouldValidate: true });
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onSubmit = async (values: CareerApplication) => {
    if (!resume) {
      setResumeError("Please upload your resume.");
      return;
    }
    setPendingApplication(values);
    setIsReviewOpen(true);
  };

  const confirmApplication = async () => {
    if (!resume || !pendingApplication) return;
    setIsSending(true);
    const formData = new FormData();
    Object.entries(pendingApplication).forEach(([key, value]) =>
      formData.append(key, value ?? ""),
    );
    formData.append("resume", resume);
    try {
      const response = await fetch("/api/careers/apply", {
        method: "POST",
        body: formData,
      });
      const result = await response.json().catch(() => null);
      if (!response.ok) {
        toast.error(result?.message || "Could not submit your application.");
        return;
      }
      toast.success(
        "Application confirmed. A copy has been sent to your email.",
      );
      setIsReviewOpen(false);
      setPendingApplication(null);
      reset(careerInitialValues);
      setResume(null);
      setResumeError("");
    } catch {
      toast.error("Could not submit your application. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const careerReviewSections = pendingApplication
    ? [
        {
          title: "Personal Details",
          rows: [
            { label: "Full Name", value: pendingApplication.fullName },
            { label: "Mobile", value: pendingApplication.mobile },
            { label: "Email", value: pendingApplication.email },
            {
              label: "Location",
              value: [
                pendingApplication.city,
                pendingApplication.state,
                pendingApplication.country,
              ]
                .filter(Boolean)
                .join(", "),
            },
          ],
        },
        {
          title: "Application Details",
          rows: [
            { label: "Position", value: pendingApplication.position },
            { label: "Qualification", value: pendingApplication.qualification },
            { label: "College", value: pendingApplication.college },
            {
              label: "Total Experience",
              value: pendingApplication.totalExperience,
            },
            {
              label: "Relevant Experience",
              value: pendingApplication.relevantExperience,
            },
            {
              label: "Current Company",
              value: pendingApplication.currentCompany,
            },
            {
              label: "Designation",
              value: pendingApplication.currentDesignation,
            },
            { label: "Current CTC", value: pendingApplication.currentCtc },
            { label: "Expected CTC", value: pendingApplication.expectedCtc },
            { label: "Notice Period", value: pendingApplication.noticePeriod },
            { label: "LinkedIn", value: pendingApplication.linkedinUrl },
            { label: "Portfolio", value: pendingApplication.portfolioUrl },
            { label: "Resume", value: resume?.name || "" },
          ],
        },
        {
          title: "Cover Letter",
          rows: [{ label: "Message", value: pendingApplication.coverLetter }],
        },
      ]
    : [];

  const inputClass =
    "mt-1 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100";
  const field = (
    name: keyof CareerApplication,
    label: string,
    options?: { type?: string; required?: boolean; placeholder?: string },
  ) => (
    <label className="block text-sm font-semibold text-slate-700">
      {label}
      {options?.required && <span className="text-blue-600"> *</span>}
      <input
        type={options?.type || "text"}
        placeholder={options?.placeholder}
        {...register(name)}
        className={inputClass}
      />
      {errors[name]?.message && (
        <span className="mt-1 block text-xs font-medium text-red-600">
          {String(errors[name]?.message)}
        </span>
      )}
    </label>
  );

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 px-4 pb-10 pt-28 text-white sm:px-8 lg:pb-12 lg:pt-32">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_30%,#38bdf8_0,transparent_28%),radial-gradient(circle_at_85%_25%,#22d3ee_0,transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl">
          <MotionP
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[.22em] text-cyan-300"
          >
            Careers at Bionics
          </MotionP>
          <MotionH1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl"
          >
            Join Bionics Enviro Tech
          </MotionH1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-lg sm:leading-7">
            Help build the future of Nanozyme Bioculture and Wastewater
            Treatment Technology.
          </p>
          <a
            href="#open-positions"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-blue-900 shadow-xl transition hover:-translate-y-1"
          >
            View Open Positions <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-700">
            Why work with us
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            Meaningful work. Modern tools. Real growth.
          </h2>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cultureBenefits.map(({ title, text, icon: Icon }, index) => (
            <MotionArticle
              key={title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className={`flex items-center gap-3 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm sm:block ${index % 2 ? "flex-row-reverse text-right sm:text-left" : "text-left"}`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-slate-900 sm:mt-3">{title}</h3>
                <p className="mt-0.5 text-xs leading-5 text-slate-600 sm:mt-1 sm:text-sm sm:leading-6">
                  {text}
                </p>
              </div>
            </MotionArticle>
          ))}
        </div>
      </section>

      <section
        id="open-positions"
        className="scroll-mt-24 bg-white px-4 py-8 sm:px-8 lg:py-10"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-700">
            Open positions
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            Find where you can make an impact
          </h2>
          <div className="mt-6 space-y-2.5">
            {jobs.map((job) => {
              const Icon = job.icon;
              const open = openJob === job.slug;
              return (
                <article
                  key={job.slug}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenJob(open ? null : job.slug)}
                    aria-expanded={open}
                    className="flex w-full items-start gap-3 p-4 text-left sm:gap-4 sm:p-5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-base font-bold text-slate-950 sm:text-lg">
                        {job.title}
                      </span>
                      <span className="mt-1 flex flex-wrap gap-x-2 gap-y-1 text-[11px] font-semibold text-slate-600 sm:text-xs">
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.department}</span>
                        <span>•</span>
                        <span>{job.employmentType}</span>
                        <span>•</span>
                        <span>{job.experience}</span>
                      </span>
                    </span>
                    <ChevronDown
                      className={`mt-1 h-5 w-5 shrink-0 transition ${open ? "rotate-180 text-blue-700" : "text-slate-400"}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <MotionDiv
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-slate-100 px-5 pb-6 pt-5 sm:px-6">
                          <p className="text-sm leading-7 text-slate-600">
                            {job.summary}
                          </p>
                          <div className="mt-5 grid gap-5 md:grid-cols-2">
                            <div>
                              <h4 className="font-bold text-slate-900">
                                Responsibilities
                              </h4>
                              <ul className="mt-3 space-y-2">
                                {job.responsibilities.map((item) => (
                                  <li
                                    key={item}
                                    className="flex gap-2 text-sm text-slate-600"
                                  >
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900">
                                Requirements
                              </h4>
                              <ul className="mt-3 space-y-2">
                                {job.requirements.map((item) => (
                                  <li
                                    key={item}
                                    className="flex gap-2 text-sm text-slate-600"
                                  >
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="mt-6 flex flex-wrap gap-3">
                            <button
                              onClick={() => applyFor(job.title)}
                              className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-800"
                            >
                              Apply Now <ArrowRight className="h-4 w-4" />
                            </button>
                            <button
                              disabled
                              title="Job-description downloads will be available soon"
                              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-400"
                            >
                              <FileText className="h-4 w-4" /> Download JD —
                              Soon
                            </button>
                          </div>
                        </div>
                      </MotionDiv>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-700">
            Our hiring process
          </p>
          <h2 className="mt-2 text-3xl font-black text-slate-950">
            Clear at every step
          </h2>
        </div>
        <div className="mt-6 grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {processSteps.map((step, index) => (
            <div
              key={step}
              className={`relative flex items-center gap-3 rounded-2xl border border-blue-100 bg-white p-3 shadow-sm sm:block sm:p-4 sm:text-center ${index % 2 ? "flex-row-reverse text-right sm:text-center" : "text-left"}`}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white sm:mx-auto">
                {index + 1}
              </span>
              <p className="text-sm font-bold text-slate-800 sm:mt-3">{step}</p>
              {index < processSteps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-cyan-500 lg:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section
        ref={formRef}
        id="apply"
        className="scroll-mt-24 bg-white px-4 py-8 sm:px-8 lg:py-10"
      >
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-700">
              Application form
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">
              Start your next chapter
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Share your profile securely. Required fields are marked with an
              asterisk.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:rounded-3xl sm:p-6"
            noValidate
          >
            <input
              {...register("website")}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <div className="grid gap-3.5 md:grid-cols-2 md:gap-4">
              {field("fullName", "Full Name", { required: true })}
              {field("mobile", "Mobile Number", {
                required: true,
                type: "tel",
              })}
              {field("email", "Email Address", {
                required: true,
                type: "email",
              })}
              {field("city", "City", { required: true })}
              {field("state", "State", { required: true })}
              {field("country", "Country", { required: true })}
              {field("qualification", "Highest Qualification", {
                required: true,
              })}
              {field("college", "College", { required: true })}
              {field("currentCompany", "Current Company")}
              {field("currentDesignation", "Current Designation")}
              {field("totalExperience", "Total Experience", {
                required: true,
                placeholder: "e.g. 3 years",
              })}
              {field("relevantExperience", "Relevant Experience", {
                required: true,
              })}
              {field("currentCtc", "Current CTC")}
              {field("expectedCtc", "Expected CTC")}
              {field("noticePeriod", "Notice Period", { required: true })}
              {field("linkedinUrl", "LinkedIn URL", { type: "url" })}
              {field("portfolioUrl", "Portfolio URL (optional)", {
                type: "url",
              })}
              <label className="block text-sm font-semibold text-slate-700">
                Post Applied For <span className="text-blue-600">*</span>
                <select {...register("position")} className={inputClass}>
                  <option value="">Select a position</option>
                  {jobs.map((job) => (
                    <option key={job.slug} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>
                {errors.position?.message && (
                  <span className="mt-1 block text-xs font-medium text-red-600">
                    {errors.position.message}
                  </span>
                )}
              </label>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="block text-sm font-semibold text-slate-700">
                Resume <span className="text-blue-600">*</span>
                <span className="mt-1 flex min-h-24 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-blue-200 bg-white p-3 text-center hover:border-blue-400">
                  <UploadCloud className="h-5 w-5 text-blue-700" />
                  <span className="mt-1.5 text-sm font-medium text-slate-700">
                    {resume?.name || "Upload PDF, DOC or DOCX"}
                  </span>
                  <span className="mt-0.5 text-xs text-slate-500">
                    Maximum 10 MB
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="sr-only"
                    onChange={(event) => {
                      const file = event.target.files?.[0] || null;
                      if (!file) return;
                      if (
                        !resumeTypes.includes(file.type) ||
                        file.size > maxResumeSize
                      ) {
                        setResume(null);
                        setResumeError("Use PDF, DOC or DOCX up to 10 MB.");
                        return;
                      }
                      setResume(file);
                      setResumeError("");
                    }}
                  />
                </span>
                {resumeError && (
                  <span className="mt-1 block text-xs font-medium text-red-600">
                    {resumeError}
                  </span>
                )}
              </label>
              <label className="block text-sm font-semibold text-slate-700">
                Cover Letter
                <textarea
                  {...register("coverLetter")}
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us why this opportunity interests you."
                />
              </label>
            </div>
            <button
              disabled={isSubmitting}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {isSubmitting ? "Preparing…" : "Review Application"}
            </button>
          </form>
        </div>
      </section>
      <SubmissionReviewDialog
        open={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
        title="Review Your Application"
        description="Please verify your information and résumé before sending your application."
        sections={careerReviewSections}
        confirmLabel="Confirm & Send Application"
        isSubmitting={isSending}
        onConfirm={confirmApplication}
      />
    </main>
  );
}
