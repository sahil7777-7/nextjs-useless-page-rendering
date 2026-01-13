export default async function Layout({ params, children }: { params: Promise<{ id: string }>; children: React.ReactNode }) {
  const { id } = await params
  console.log('in layout')
  if (id === 'test') {
    return <div>Not displaying page</div>
  }
  return children
}