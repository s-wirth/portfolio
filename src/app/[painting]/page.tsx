export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ painting: string }>
}) {
  const { painting } = await params
 
  return (
    <div>
      <h1>{painting}</h1>
    </div>
  )
}