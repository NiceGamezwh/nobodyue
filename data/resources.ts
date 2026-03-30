/**
 * 资源数据配置文件
 * 
 * ============ 上新资源指南 ============
 * 
 * 在 resources 数组中添加新对象即可上新，格式如下：
 * 
 * {
 *   id: "my-resource-id",           // 唯一ID，用于URL（英文小写+横线，不能重复）
 *   title: "资源名称",               // 资源标题（会被搜索）
 *   description: "详细描述...",      // 资源描述（会被搜索）
 *   category: "blueprints",         // 分类ID，可选值见下方 categories 数组
 *   tags: ["标签1", "标签2"],        // 标签数组（会被搜索）
 *   images: [                       // 图片数组，第一张为封面
 *     "/images/xxx.jpg",            // 本地图片放 public/images/ 文件夹
 *     "https://xxx.com/xxx.jpg",    // 也支持外部链接
 *   ],
 *   downloadUrl: "https://pan.xxx", // 下载链接（需激活码才能看到）
 *   demoUrl: "https://xxx.com",     // 演示/预览链接（所有用户可见）
 *   version: "1.0.0",               // 资源版本号
 *   ueVersion: "5.3+",              // 支持的虚幻引擎版本
 *   fileSize: "500 MB",             // 文件大小
 *   createdAt: "2024-03-15",        // 发布日期
 *   featured: true,                 // 是否在首页推荐（true/false）
 * }
 * 
 * ============ 搜索说明 ============
 * 用户搜索时会匹配：title、description、tags 这三个字段
 * 
 */

// 分类定义
export const categories = [
  { id: "blueprints", name: "蓝图", color: "bg-blue-500" },
  { id: "materials", name: "材质", color: "bg-green-500" },
  { id: "models", name: "模型", color: "bg-orange-500" },
  { id: "environments", name: "环境", color: "bg-teal-500" },
  { id: "vfx", name: "特效", color: "bg-pink-500" },
  { id: "audio", name: "音频", color: "bg-yellow-500" },
  { id: "ui", name: "UI", color: "bg-indigo-500" },
  { id: "plugins", name: "插件", color: "bg-red-500" },
  { id: "tutorials", name: "教程", color: "bg-cyan-500" },
] as const

export type Category = (typeof categories)[number]["id"]

// 资源类型定义
export interface Resource {
  id: string
  title: string
  description: string
  category: Category
  tags: string[]
  images: string[]
  downloadUrl: string     // 下载链接（需激活码才能看到）
  demoUrl: string         // 演示链接（所有用户可见）
  version: string         // 资源版本号
  ueVersion: string
  fileSize: string
  createdAt: string       // 发布日期
  featured: boolean
}

// ==========================================
// 资源数据 - 在这里添加新资源
// ==========================================
export const resources: Resource[] = [
  {
    id: "Stylized-Spruce-Forest",
    title: "风格化云杉林场景",
    description: "风格化的云杉林，包含优化资源、风系统、程序化季节和可绘制的自动材质。使用材质实例和全局材质参数集合即可轻松自定义。",
    category: "environments",
    tags: ["场景", "环境", "树林", "风格化"],
    images: [
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeidvebef6j6x2w5cfajqseqm66idf2ye7ldgnvwkdpr5vl2nlku56q/1.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeidvebef6j6x2w5cfajqseqm66idf2ye7ldgnvwkdpr5vl2nlku56q/2.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeidvebef6j6x2w5cfajqseqm66idf2ye7ldgnvwkdpr5vl2nlku56q/3.jpg",
    ],
    downloadUrl: " https://pan.baidu.com/s/10zoQ-Xz_cLjj7Qp7na7xEw?pwd=6mey",
    demoUrl: "https://www.fab.com/listings/40699a53-2920-41a6-8753-3c004eaa9b92",
    version: "3.6",
    ueVersion: "4.27 和 5.0 – 5.7",
    fileSize: "138.78 MB",
    createdAt: "2026-03-30",
    featured: true,
  },
  {
    id: "Stone Golem",
    title: "石像鬼",
    description: "石像鬼，高度 3.2 米",
    category: "models",
    tags: ["角色", "第三人称"],
    images: [
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeic7hnhgmx73hvuhia43ndnlzu5xosgga3pk5zbjtwxu3lpnbg4xuu/02dcee72-0988-4378-ba15-b2ad5785f4fc.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeic7hnhgmx73hvuhia43ndnlzu5xosgga3pk5zbjtwxu3lpnbg4xuu/4ee1978c-7ec7-4a2b-870f-fc0b7adcadc8.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeic7hnhgmx73hvuhia43ndnlzu5xosgga3pk5zbjtwxu3lpnbg4xuu/d1ab22fb-c795-470e-b279-0d997169f084.jpg",
    ],
    downloadUrl: " https://pan.baidu.com/s/1F5SMj5AJUOQVFDhVlkdJuA?pwd=44pn",
    demoUrl: "https://www.fab.com/listings/89b16c3a-47ea-486e-ac09-bc2237af93f9",
    version: "3.0",
    ueVersion: "4.26 - 5.7",
    fileSize: "138.78 MB",
    createdAt: "2026-03-30",
    featured: true,
  },
  {
    id: "ultra-dynamic-sky",
    title: "动态天空系统蓝图",
    description: "Ultra Dynamic Sky 是一款天空系统，其设计理念是比大多数天空解决方案更动态、更自然，提供高度的灵活性和自定义选项，并采用速度快、操作简单的界面。",
    category: "blueprints",
    tags: ["蓝图",  "天空系统"],
    images: [
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeibhnv565homistcvmcjbnexlqay3keb64pw6u6b4gmvxufg6vjcgq/1.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeibhnv565homistcvmcjbnexlqay3keb64pw6u6b4gmvxufg6vjcgq/2.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeibhnv565homistcvmcjbnexlqay3keb64pw6u6b4gmvxufg6vjcgq/3.jpg",
    ],
    downloadUrl: "https://pan.baidu.com/s/1iXZvEWp9G9lsex47smYstg?pwd=6s5o",
    demoUrl: "https://www.fab.com/listings/84fda27a-c79f-49c9-8458-82401fb37cfb",
    version: "9.3",
    ueVersion: "4.25-5.7",
    fileSize: "425 MB",
    createdAt: "2026-03-30",
    featured: true,
  },
  {
    id: "advanced-locomotion-system",
    title: "高级运动系统 V4",
    description: "一套完整的角色运动蓝图系统，支持行走、跑步、跳跃、攀爬、游泳等多种运动状态。包含完整的状态机设置和动画混合树，可直接应用于第三人称游戏开发。系统经过高度优化，适合各种规模的项目。",
    category: "blueprints",
    tags: ["角色", "运动", "动画", "第三人称", "状态机"],
    images: [
      "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1552820728-8b83bb6b2b0c?w=800&h=450&fit=crop",
    ],
    downloadUrl: "https://example.com/download/locomotion-v4",
    demoUrl: "https://www.youtube.com/watch?v=example1",
    version: "4.0.0",
    ueVersion: "5.3+",
    fileSize: "256 MB",
    createdAt: "2024-03-15",
    featured: true,
  },
  {
    id: "stylized-forest-pack",
    title: "风格化森林资产包",
    description: "包含超过200个风格化森林资产，包括各种树木、灌木、花草、岩石和地形材质。所有资产均为低多边形风格，适合卡通或手绘风格的游戏项目。",
    category: "environments",
    tags: ["森林", "风格化", "低多边形", "自然", "植被"],
    images: [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=450&fit=crop",
    ],
    downloadUrl: "https://example.com/download/stylized-forest",
    demoUrl: "https://sketchfab.com/models/forest-example",
    version: "2.0.0",
    ueVersion: "5.1+",
    fileSize: "1.2 GB",
    createdAt: "2024-02-20",
    featured: true,
  },
  {
    id: "pbr-material-collection",
    title: "PBR材质合集 - 100+材质",
    description: "专业级PBR材质合集，包含金属、木材、石材、布料、皮革等多种类型。所有材质均为4K分辨率，支持实例化和参数调节。",
    category: "materials",
    tags: ["PBR", "4K", "金属", "木材", "石材"],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&h=450&fit=crop",
    ],
    downloadUrl: "https://example.com/download/pbr-materials",
    demoUrl: "https://www.sketchfab.com/models/pbr-materials-demo",
    version: "1.5.0",
    ueVersion: "5.0+",
    fileSize: "4.5 GB",
    createdAt: "2024-01-10",
    featured: false,
  },
  {
    id: "modular-scifi-kit",
    title: "模块化科幻建筑套件",
    description: "一套完整的科幻风格模块化建筑套件，包含墙壁、地板、天花板、门窗、管道等组件。支持快速搭建科幻场景，适合FPS或科幻题材游戏。",
    category: "models",
    tags: ["科幻", "模块化", "建筑", "室内", "FPS"],
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&h=450&fit=crop",
    ],
    downloadUrl: "https://example.com/download/scifi-kit",
    demoUrl: "https://sketchfab.com/models/scifi-kit-demo",
    version: "3.1.0",
    ueVersion: "5.2+",
    fileSize: "890 MB",
    createdAt: "2024-03-01",
    featured: true,
  },
  {
    id: "magic-vfx-pack",
    title: "魔法特效包 - 50种特效",
    description: "包含50种高质量魔法特效，涵盖火焰、冰霜、闪电、治愈、召唤等类型。每种特效都有循环和单次两种版本，支持颜色自定义。",
    category: "vfx",
    tags: ["魔法", "粒子", "特效", "Niagara", "RPG"],
    images: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop",
    ],
    downloadUrl: "https://example.com/download/magic-vfx",
    demoUrl: "https://www.youtube.com/watch?v=magic-vfx-demo",
    version: "1.2.0",
    ueVersion: "5.1+",
    fileSize: "520 MB",
    createdAt: "2024-02-05",
    featured: false,
  },
  {
    id: "inventory-system",
    title: "完整背包系统",
    description: "功能完善的RPG背包系统，支持物品堆叠、拖放、快捷栏、装备系统、物品分类等功能。包含完整的UI和蓝图实现，可直接集成到项目中。",
    category: "blueprints",
    tags: ["背包", "RPG", "UI", "物品", "装备"],
    images: [
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop",
    ],
    downloadUrl: "https://example.com/download/inventory-system",
    demoUrl: "https://www.youtube.com/watch?v=inventory-demo",
    version: "2.5.0",
    ueVersion: "5.3+",
    fileSize: "180 MB",
    createdAt: "2024-03-10",
    featured: true,
  },
  {
    id: "ambient-music-pack",
    title: "环境音乐包 - 30首",
    description: "30首高质量环境音乐，涵盖森林、沙漠、城市、地下城、战斗等场景。所有音轨都支持无缝循环，适合各种游戏类型。",
    category: "audio",
    tags: ["音乐", "环境", "BGM", "循环", "氛围"],
    images: [
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=450&fit=crop",
    ],
    downloadUrl: "https://example.com/download/ambient-music",
    demoUrl: "https://soundcloud.com/ambient-music-demo",
    version: "1.0.0",
    ueVersion: "4.27+",
    fileSize: "650 MB",
    createdAt: "2023-12-15",
    featured: false,
  },
  {
    id: "medieval-ui-kit",
    title: "中世纪风格UI套件",
    description: "完整的中世纪风格UI套件，包含按钮、面板、图标、字体、边框等元素。支持UMG和Slate两种方式，附带详细的使用文档。",
    category: "ui",
    tags: ["中世纪", "UI套��", "图标", "UMG", "RPG"],
    images: [
      "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=800&h=450&fit=crop",
    ],
    downloadUrl: "https://example.com/download/medieval-ui",
    demoUrl: "https://www.youtube.com/watch?v=medieval-ui-demo",
    version: "1.3.0",
    ueVersion: "5.0+",
    fileSize: "320 MB",
    createdAt: "2024-01-25",
    featured: false,
  },
  {
    id: "dialogue-plugin",
    title: "对话系统插件",
    description: "功能强大的对话系统插件，支持分支对话、条件判断、变量系统、本地化等功能。附带可视化编辑器，无需编程即可创建复杂对话。",
    category: "plugins",
    tags: ["对话", "剧情", "可视化", "本地化", "RPG"],
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop",
    ],
    downloadUrl: "https://example.com/download/dialogue-plugin",
    demoUrl: "https://www.youtube.com/watch?v=dialogue-demo",
    version: "2.0.0",
    ueVersion: "5.2+",
    fileSize: "45 MB",
    createdAt: "2024-02-28",
    featured: true,
  },
  {
    id: "ue5-basics-tutorial",
    title: "UE5入门到精通视频教程",
    description: "从零开始学习虚幻引擎5的完整视频教程，包含基础操作、蓝图编程、材质制作、关卡设计等内容。共50集，适合初学者。",
    category: "tutorials",
    tags: ["教程", "入门", "蓝图", "视频", "初学者"],
    images: [
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=450&fit=crop",
    ],
    downloadUrl: "https://example.com/download/ue5-tutorial",
    demoUrl: "https://www.bilibili.com/video/ue5-tutorial",
    version: "1.0.0",
    ueVersion: "5.3",
    fileSize: "15 GB",
    createdAt: "2024-03-05",
    featured: false,
  },
]

// ==========================================
// 激活码配置 - 在这里添加激活码
// ==========================================
export const activationCodes = [
  "UE-ASSET-2024",
  "VIP-MEMBER-001",
  "PREMIUM-ACCESS",
  // 添加更多激活码...
]

// 辅助函数
export function getResourceById(id: string): Resource | undefined {
  return resources.find((r) => r.id === id)
}

export function getResourcesByCategory(category: Category): Resource[] {
  return resources.filter((r) => r.category === category)
}

export function getFeaturedResources(): Resource[] {
  return resources.filter((r) => r.featured)
}

export function searchResources(query: string): Resource[] {
  const lowerQuery = query.toLowerCase()
  return resources.filter(
    (r) =>
      r.title.toLowerCase().includes(lowerQuery) ||
      r.description.toLowerCase().includes(lowerQuery) ||
      r.tags.some((t) => t.toLowerCase().includes(lowerQuery))
  )
}

export function getCategoryInfo(categoryId: Category) {
  return categories.find((c) => c.id === categoryId)
}
