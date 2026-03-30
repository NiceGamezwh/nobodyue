"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { categories, Category } from "@/data/resources"
import { Search, X } from "lucide-react"

interface ResourceFilterProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedCategory: Category | "all"
  onCategoryChange: (category: Category | "all") => void
}

export function ResourceFilter({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}: ResourceFilterProps) {
  return (
    <div className="space-y-4">
      {/* 搜索框 */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="搜索资源名称、描述或标签..."
          className="pl-12 pr-10 h-12 border-2 border-black rounded-xl text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* 分类筛选 */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === "all" ? "default" : "outline"}
          onClick={() => onCategoryChange("all")}
          className={`rounded-xl border-2 border-black font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${
            selectedCategory === "all"
              ? "bg-black text-white"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          全部
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => onCategoryChange(category.id)}
            className={`rounded-xl border-2 border-black font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${
              selectedCategory === category.id
                ? `${category.color} text-white border-black`
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  )
}
