import { notFound } from 'next/navigation'
export default async function Layout({ params, children }: { params: Promise<{ id: string }>; children: React.ReactNode }) {
  const { id } = await params
  console.log('in layout')
  if (id === 'test') {
    notFound()
  }
  return children
}
