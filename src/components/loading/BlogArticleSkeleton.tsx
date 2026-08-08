import Skeleton from '@/components/ui/Skeleton'

export default function BlogArticleSkeleton() {
  return (
    <main className="min-h-screen bg-slate-50 pb-16 pt-28" aria-busy="true" aria-label="Loading technical article">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Skeleton variant="text" className="h-4 w-44" />
        <div className="mt-8 mx-auto max-w-5xl">
          <Skeleton variant="text" className="h-4 w-32" />
          <Skeleton variant="text" className="mt-5 h-10 w-[92%] sm:h-14" />
          <Skeleton variant="text" className="mt-3 h-10 w-[68%] sm:h-14" />
          <div className="mt-6 flex gap-4">
            <Skeleton variant="text" className="h-4 w-28" />
            <Skeleton variant="text" className="h-4 w-20" />
          </div>
          <Skeleton className="mt-8 aspect-[16/9] w-full rounded-[1.5rem] sm:rounded-[2rem]" />
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1fr)_16rem]">
          <article className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8">
            {Array.from({ length: 4 }, (_, block) => (
              <div key={block} className={block ? 'mt-9' : ''}>
                <Skeleton variant="text" className="h-7 w-[55%]" />
                <div className="mt-5 space-y-3">
                  <Skeleton variant="text" className="w-full" />
                  <Skeleton variant="text" className="w-[96%]" />
                  <Skeleton variant="text" className="w-[88%]" />
                  <Skeleton variant="text" className="w-[72%]" />
                </div>
              </div>
            ))}
          </article>
          <aside className="hidden lg:block">
            <div className="rounded-3xl border border-slate-200 bg-white p-5">
              <Skeleton variant="text" className="h-5 w-36" />
              <div className="mt-5 space-y-4">
                <Skeleton variant="text" className="w-full" />
                <Skeleton variant="text" className="w-[82%]" />
                <Skeleton variant="text" className="w-[90%]" />
                <Skeleton variant="text" className="w-[68%]" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
