"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Resource, getCategoryInfo } from "@/data/resources"
import { useActivation } from "@/hooks/use-activation"
import { ActivationDialog } from "@/components/activation-dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Calendar,
  Download,
  ExternalLink,
  Gamepad2,
  HardDrive,
  Lock,
  Play,
  Star,
  Tag,
} from "lucide-react"

interface ResourceDetailProps {
  resource: Resource
}

export function ResourceDetail({ resource }: ResourceDetailProps) {
  const { isActivated, isLoading } = useActivation()
  const [activeImage, setActiveImage] = useState(0)

  const categoryInfo = getCategoryInfo(resource.category)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* 头部 */}
      <header className="border-b-4 border-black bg-white/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button
                  variant="outline"
                  className="rounded-xl border-2 border-black font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  返回
                </Button>
              </Link>
              <span className="font-bold hidden sm:inline text-lg">NobodyUE</span>
            </div>
            <ActivationDialog />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* 左侧内容 */}
          <div className="space-y-6">
            {/* 图片展示 */}
            <div className="space-y-4">
              <div className="relative aspect-video rounded-2xl border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <Image
                  src={resource.images[activeImage]}
                  alt={resource.title}
                  fill
                  className="object-cover"
                  priority
                />
                {resource.featured && (
                  <div className="absolute top-4 left-4 bg-yellow-400 text-black px-4 py-2 rounded-xl border-2 border-black font-bold flex items-center gap-2">
                    <Star className="h-5 w-5 fill-current" />
                    精选推荐
                  </div>
                )}
              </div>

              {/* 缩略图 */}
              {resource.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {resource.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative w-24 h-16 rounded-xl border-3 overflow-hidden flex-shrink-0 transition-all ${
                        activeImage === index
                          ? "border-black ring-2 ring-blue-500 ring-offset-2"
                          : "border-black/30 hover:border-black"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${resource.title} - 图片 ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 描述 */}
            <div className="bg-white/60 backdrop-blur-sm border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-xl font-black mb-4">资源介绍</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {resource.description}
              </p>
            </div>

            {/* 标签 */}
            <div className="bg-white/60 backdrop-blur-sm border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                <Tag className="h-5 w-5" />
                标签
              </h2>
              <div className="flex flex-wrap gap-2">
                {resource.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="rounded-xl border-2 border-black px-4 py-1.5 text-sm font-bold bg-gray-100 text-black hover:bg-gray-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧信息面板 */}
          <div className="space-y-6">
            {/* 基本信息卡片 */}
            <div className="bg-white/80 backdrop-blur-sm border-4 border-black rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sticky top-28">
              {/* 标题 */}
              <div className="mb-4">
                <div className={`inline-block ${categoryInfo?.color} text-white px-3 py-1 rounded-lg border-2 border-black font-bold text-sm mb-3`}>
                  {categoryInfo?.name}
                </div>
                <h1 className="text-2xl sm:text-3xl font-black leading-tight">
                  {resource.title}
                </h1>
              </div>

              {/* 元信息 */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-100 rounded-xl p-3 border-2 border-black">
                  <p className="text-xs text-gray-500 mb-1">虚幻引擎版本</p>
                  <p className="font-black text-lg">{resource.ueVersion}</p>
                </div>
                <div className="bg-gray-100 rounded-xl p-3 border-2 border-black">
                  <p className="text-xs text-gray-500 mb-1">资源版本</p>
                  <p className="font-black text-lg">v{resource.version}</p>
                </div>
                <div className="bg-gray-100 rounded-xl p-3 border-2 border-black">
                  <p className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                    <HardDrive className="h-3 w-3" />
                    文件大小
                  </p>
                  <p className="font-black text-lg">{resource.fileSize}</p>
                </div>
                <div className="bg-gray-100 rounded-xl p-3 border-2 border-black">
                  <p className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    发布日期
                  </p>
                  <p className="font-black text-lg">{resource.createdAt}</p>
                </div>
              </div>

              {/* 演示链接 - 所有用户可见 */}
              <div className="mb-4">
                <a
                  href={resource.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-xl border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all gap-2">
                    <Play className="h-5 w-5" />
                    查看演示
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              </div>

              {/* 下载按钮 */}
              {isLoading ? (
                <div className="bg-gray-200 rounded-xl p-6 border-2 border-black text-center">
                  <p className="font-bold text-gray-500">加载中...</p>
                </div>
              ) : isActivated ? (
                <div className="space-y-3">
                  <a
                    href={resource.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full h-14 bg-green-500 hover:bg-green-600 text-white rounded-xl border-2 border-black font-black text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all gap-2">
                      <Download className="h-5 w-5" />
                      立即下载
                    </Button>
                  </a>
                  <p className="text-xs text-center text-gray-500">
                    点击将跳转至下载页面
                  </p>
                </div>
              ) : (
                <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6 text-center">
                  <Lock className="h-10 w-10 mx-auto text-orange-500 mb-3" />
                  <h3 className="font-black text-lg mb-2">需要激活码</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    请输入激活码以查看下载链接
                  </p>
                  <ActivationDialog />
                </div>
              )}
            </div>

            {/* 相关提示 */}
            <div className="bg-blue-50 border-4 border-blue-200 rounded-2xl p-4">
              <p className="text-sm text-blue-700">
                <strong>提示：</strong>
                下载资源后请仔细阅读附带的使用说明文档，确保正确导入虚幻引擎项目。
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
