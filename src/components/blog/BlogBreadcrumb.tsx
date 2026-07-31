import PageBreadcrumb from '@/components/ui/PageBreadcrumb'

export default function BlogBreadcrumb({ title }: { title: string }) {
  return <PageBreadcrumb items={[{ label: 'Blogs', href: '/blogs' }, { label: title }]} />
}
