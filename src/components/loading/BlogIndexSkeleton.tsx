import Skeleton from '@/components/ui/Skeleton'

function BlogCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
      <Skeleton className="aspect-[5/3] w-full !rounded-none sm:h-52" />
      <div className="p-5 sm:p-6">
        <Skeleton variant="text" className="h-3 w-24" />
        <Skeleton variant="text" className="mt-4 h-5 w-[88%]" />
        <Skeleton variant="text" className="mt-2 h-5 w-[65%]" />
        <div className="mt-5 space-y-2">
          <Skeleton variant="text" className="w-full" />
          <Skeleton variant="text" className="w-[92%]" />
          <Skeleton variant="text" className="w-[72%]" />
        </div>
        <div className="mt-5 flex gap-4">
          <Skeleton variant="text" className="h-3 w-24" />
          <Skeleton variant="text" className="h-3 w-16" />
        </div>
        <Skeleton variant="text" className="mt-6 h-4 w-28" />
      </div>
    </div>
  )
}

export default function BlogIndexSkeleton() {
  return (
    <main className="min-h-screen bg-slate-50" aria-busy="true" aria-label="Loading technical articles">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900">
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-28 sm:px-8 lg:px-10 lg:pb-14 lg:pt-32">
          <Skeleton variant="text" className="h-8 w-60 bg-slate-200" />
          <Skeleton variant="text" className="mt-5 h-10 w-[88%] max-w-3xl bg-slate-200 sm:h-14" />
          <Skeleton variant="text" className="mt-3 h-10 w-[65%] max-w-2xl bg-slate-200" />
          <Skeleton variant="text" className="mt-5 h-4 w-[72%] max-w-xl bg-slate-200" />
          <Skeleton variant="text" className="mt-2 h-4 w-[54%] max-w-md bg-slate-200" />
          <Skeleton className="mt-7 h-11 w-40 rounded-full bg-slate-200" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <Skeleton variant="text" className="h-3 w-24" />
        <Skeleton variant="text" className="mt-3 h-8 w-72 max-w-[85%] sm:h-10 sm:w-96" />
        <Skeleton variant="text" className="mt-8 h-4 w-24" />
        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => <BlogCardSkeleton key={index} />)}
        </div>
      </section>
    </main>
  )
}
