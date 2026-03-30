"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Resource, getCategoryInfo } from "@/data/resources"
import { Calendar, HardDrive, Play, Star, Tag } from "lucide-react"

interface ResourceCardProps {
  resource: Resource
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const categoryInfo = getCategoryInfo(resource.category)

  return (
    <Link href={`/resource/${resource.id}`}>
      <div className="group bg-white/60 backdrop-blur-sm border-4 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 h-full flex flex-col">
        {/* 封面图 */}
        <div className="relative aspect-video overflow-hidden border-b-4 border-black">
          <Image
            src={resource.images[0]}
            alt={resource.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {resource.featured && (
            <div className="absolute top-3 left-3 bg-yellow-400 text-black px-3 py-1 rounded-lg border-2 border-black font-bold text-sm flex items-center gap-1">
              <Star className="h-4 w-4 fill-current" />
              推荐
            </div>
          )}
          <div className={`absolute top-3 right-3 ${categoryInfo?.color} text-white px-3 py-1 rounded-lg border-2 border-black font-bold text-sm`}>
            {categoryInfo?.name}
          </div>
          <div className="absolute bottom-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-lg border-2 border-black font-bold text-xs flex items-center gap-1">
            <Play className="h-3 w-3" />
            演示
          </div>
        </div>

        {/* 内容 */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-black mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {resource.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-1">
            {resource.description}
          </p>

          {/* 标签 */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {resource.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="rounded-lg border-2 border-black text-xs font-bold"
              >
                {tag}
              </Badge>
            ))}
            {resource.tags.length > 3 && (
              <Badge
                variant="outline"
                className="rounded-lg border-2 border-black text-xs font-bold"
              >
                +{resource.tags.length - 3}
              </Badge>
            )}
          </div>

          {/* 元信息 */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 pt-3 border-t-2 border-black/10">
            <span className="flex items-center gap-1">
              <Tag className="h-3 w-3" />
              <span className="font-bold text-black">v{resource.version}</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="font-bold text-black">UE {resource.ueVersion}</span>
            </span>
            <span className="flex items-center gap-1">
              <HardDrive className="h-3 w-3" />
              {resource.fileSize}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {resource.createdAt}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
