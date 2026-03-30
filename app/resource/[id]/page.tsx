import { notFound } from "next/navigation"
import { resources, getResourceById } from "@/data/resources"
import { ResourceDetail } from "@/components/resource-detail"

// 生成静态路径
export function generateStaticParams() {
  return resources.map((resource) => ({
    id: resource.id,
  }))
}

interface ResourcePageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { id } = await params
  const resource = getResourceById(id)

  if (!resource) {
    notFound()
  }

  return <ResourceDetail resource={resource} />
}
