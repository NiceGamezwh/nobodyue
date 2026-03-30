"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { resources, categories, Category } from "@/data/resources"
import { ResourceCard } from "@/components/resource-card"
import { ResourceFilter } from "@/components/resource-filter"
import { ActivationDialog } from "@/components/activation-dialog"
import { useActivation } from "@/hooks/use-activation"
import { Package, Sparkles } from "lucide-react"

export default function HomePage() {
  const { isActivated, isLoading } = useActivation()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all")

  // 获取推荐资源
  const featuredResources = useMemo(() => {
    return resources.filter((r) => r.featured)
  }, [])

  // 筛选资源
  const filteredResources = useMemo(() => {
    let result = resources

    // 分类筛选
    if (selectedCategory !== "all") {
      result = result.filter((r) => r.category === selectedCategory)
    }

    // 搜索筛选
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (r) =>
          r.title.toLowerCase().includes(query) ||
          r.description.toLowerCase().includes(query) ||
          r.tags.some((t) => t.toLowerCase().includes(query))
      )
    }

    return result
  }, [searchQuery, selectedCategory])

  // 统计信息
  const stats = useMemo(() => {
    return {
      total: resources.length,
      byCategory: categories.map((c) => ({
        ...c,
        count: resources.filter((r) => r.category === c.id).length,
      })),
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* 头部 */}
      <header className="border-b-4 border-black bg-white/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 sm:h-16 sm:w-16 relative">
                <Image
                  src="/images/nobodyue-logo.jpg"
                  alt="NobodyUE Logo"
                  fill
                  className="object-cover rounded-lg border-2 border-black"
                />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black tracking-tight">NobodyUE</h1>
                <p className="text-xs text-gray-500 hidden sm:block">虚幻引擎精品资源库</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 bg-white/50 px-4 py-2 rounded-xl border-2 border-black">
                <Package className="h-4 w-4" />
                <span className="font-bold">{stats.total} 个资源</span>
              </div>
              <ActivationDialog />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* 欢迎横幅 */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black mb-2 flex items-center gap-2">
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8" />
                虚幻引擎精品资源库
              </h2>
              <p className="text-white/90 max-w-xl">
                精选蓝图、材质、模型、特效等高质量资源，助力你的游戏开发之旅。
                {!isActivated && !isLoading && (
                  <span className="block mt-2 font-bold text-yellow-300">
                    使用激活码解锁全部下载链接
                  </span>
                )}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {stats.byCategory.slice(0, 4).map((c) => (
                <div
                  key={c.id}
                  className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/30 text-sm font-bold"
                >
                  {c.name}: {c.count}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 推荐资源 */}
        {selectedCategory === "all" && !searchQuery && featuredResources.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-black mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              精选推荐
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {featuredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </section>
        )}

        {/* 筛选器 */}
        <section className="mb-6">
          <ResourceFilter
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </section>

        {/* 资源列表 */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl sm:text-2xl font-black">
              {selectedCategory === "all"
                ? "全部资源"
                : categories.find((c) => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-sm text-gray-500 font-bold">
              共 {filteredResources.length} 个资源
            </span>
          </div>

          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="bg-white/60 backdrop-blur-sm border-4 border-black rounded-2xl p-12 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <Package className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-black mb-2">未找到匹配的资源</h3>
              <p className="text-gray-500">
                尝试调整搜索关键词或选择其他分类
              </p>
            </div>
          )}
        </section>
      </main>

      {/* 页脚 */}
      <footer className="border-t-4 border-black bg-white/70 backdrop-blur-md mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">NobodyUE</span>
            </div>
            <p className="text-sm text-gray-500">
              精选虚幻引擎开发资源，助力独立游戏开发
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
