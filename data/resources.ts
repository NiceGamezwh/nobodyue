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
      // 1. MAE Beech Forest
    {
      id: "MAE-Beech-Forest",
      title: "MAE山毛榉森林",
      description: "使用摄影测量和光度植被技术制作的高品质山毛榉森林资源包。所有树木均经过优化,至少包含3级LOD和公告牌(替代物)。高密度森林具有良好的性能优化,所有3D扫描模型均配备与地形和其他3D模型的软混合材质设置。功能包括:AAA级品质森林、动态光照、程序化植被生成、自动坡度混合、蓝图风力系统、4x4演示地图、展示地图、像素深度偏移阴影功能、地形软混合设置。资源列表:8棵山毛榉树,2棵山毛榉幼树,4棵山毛榉树苗,1个枯死山毛榉树干,2个蜂斗菜,2个款冬,4个绿色嚏根草,15棵雄蕨,3棵西方蕨,7块岩石,10块小岩石,4张地图。",
      category: "environments",
      tags: ["森林", "山毛榉", "摄影测量", "植被", "自然环境", "树木", "地形", "程序化生成"],
      images: [
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmdKf5kiD3djn2JrqVrRBdiqbexHTeezZYapTuYonvQVoV/1.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmdKf5kiD3djn2JrqVrRBdiqbexHTeezZYapTuYonvQVoV/2.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmdKf5kiD3djn2JrqVrRBdiqbexHTeezZYapTuYonvQVoV/3.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmdKf5kiD3djn2JrqVrRBdiqbexHTeezZYapTuYonvQVoV/4.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmdKf5kiD3djn2JrqVrRBdiqbexHTeezZYapTuYonvQVoV/5.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmdKf5kiD3djn2JrqVrRBdiqbexHTeezZYapTuYonvQVoV/6.jpg",
      ],
      downloadUrl: "https://pan.baidu.com/s/1DA6mWLjw0MyB4MdOP2copw?pwd=abh6",
      demoUrl: "https://www.fab.com/listings/e8f4e844-fc25-4f8a-80cd-6e03c6bff2f9",
      version: "1.0",
      ueVersion: "4.26 - 5.5",
      fileSize: "9.49 GB",
      createdAt: "2026-04-01",
      featured: false,
    },

    // 2. Stylized Medieval House
    {
      id: "Stylized-Medieval-House",
      title: "风格化中世纪房屋",
      description: "这个资源包包含了一套用于创建风格化中世纪房屋的小型场景集。包含丰富的模块化建筑资产和高质量道具,适用于奇幻风格的中世纪游戏环境搭建。所有资产均经过优化,可直接用于游戏开发。由AleksandrIvanov制作,评分5.0/5,支持虚幻引擎和UEFN格式。",
      category: "environments",
      tags: ["风格化", "中世纪", "房屋", "奇幻", "模块化", "场景", "建筑"],
      images: [
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmcWurg7LZ8nzRkuTDSHonXHHnQqsNmaKcfSrBDaB85hdg/1.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmcWurg7LZ8nzRkuTDSHonXHHnQqsNmaKcfSrBDaB85hdg/2.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmcWurg7LZ8nzRkuTDSHonXHHnQqsNmaKcfSrBDaB85hdg/3.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmcWurg7LZ8nzRkuTDSHonXHHnQqsNmaKcfSrBDaB85hdg/4.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmcWurg7LZ8nzRkuTDSHonXHHnQqsNmaKcfSrBDaB85hdg/5.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmcWurg7LZ8nzRkuTDSHonXHHnQqsNmaKcfSrBDaB85hdg/6.jpg",
      ],
      downloadUrl: "https://pan.baidu.com/s/1YXuVyoxhRuDWJnPfoDAD5g?pwd=ss5k",
      demoUrl: "https://www.fab.com/listings/f7272cd1-389a-4776-96e4-26fb9c439e5f",
      version: "1.0",
      ueVersion: "4.20 - 5.5",
      fileSize: "483 MB",
      createdAt: "2026-04-01",
      featured: false,
    },

    // 3. Modular Sci-Fi Treatment Station Environment
    {
      id: "Modular-Sci-Fi-Treatment-Station-Environment",
      title: "模块化科幻处理站环境",
      description: "用于在虚幻引擎中快速搭建科幻处理站场景的资源包,可以为你的项目创建精美的环境,并添加你自己的个人风格。所有资产都是模块化的,用户可以轻松修改,所有组件都经过精心设计,能够完美地组合在一起。评分4.4/5,适合科幻类游戏和影视项目使用。",
      category: "environments",
      tags: ["科幻", "模块化", "处理站", "室内环境", "太空", "场景"],
      images: [
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmXeZbBnvnHxHpD8JLT2MAj9XLQtYtAFeGYQs9A8Cz8ZDt/1.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmXeZbBnvnHxHpD8JLT2MAj9XLQtYtAFeGYQs9A8Cz8ZDt/2.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmXeZbBnvnHxHpD8JLT2MAj9XLQtYtAFeGYQs9A8Cz8ZDt/3.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmXeZbBnvnHxHpD8JLT2MAj9XLQtYtAFeGYQs9A8Cz8ZDt/4.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmXeZbBnvnHxHpD8JLT2MAj9XLQtYtAFeGYQs9A8Cz8ZDt/5.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmXeZbBnvnHxHpD8JLT2MAj9XLQtYtAFeGYQs9A8Cz8ZDt/6.jpg",
      ],
      downloadUrl: "https://pan.baidu.com/s/1hTmB9MG7JNFjMlxPuqNF6g?pwd=8m3k",
      demoUrl: "https://www.fab.com/listings/d8ac4186-78f7-43c7-b21c-04b4dc0901a2",
      version: "1.0",
      ueVersion: "4.26 - 5.5",
      fileSize: "1.41 GB",
      createdAt: "2026-04-01",
      featured: false,
    },

    // 4. Sci-Fi Corridor - Low Poly Environment
    {
      id: "Sci-Fi-Corridor-Low-Poly-Environment",
      title: "科幻走廊-低多边形环境",
      description: "这款科幻室内资源包包含道具和模块化建筑构件,你可以创建自己的走廊/工业/赛博朋克/未来主义/实验室游戏环境,达到AAA级品质。该环境包采用低多边形风格,配有颜色纹理图集,是低多边形系列的一部分。包含250+个模型:墙壁、地板、天花板、柱子、门、电缆、楼梯、围栏、风扇、发电机、灯具、管道、架子、显示器等。粒子系统包括光束、灰尘、雾气、闪电、烟雾、火花、蒸汽。蓝图包括电缆样条线、门、风扇、发电机、舱口。提供颜色纹理和替代颜色变体纹理。包含大量演示场景和总览地图。贴花包括标志、符号、贴纸、文字、数字。",
      category: "environments",
      tags: ["科幻", "走廊", "低多边形", "模块化", "赛博朋克", "未来主义", "室内环境", "工业"],
      images: [
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmaiXP1pAWKs16V837EwzbXQSkdwPXurKWFij3nrzZBMVn/1.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmaiXP1pAWKs16V837EwzbXQSkdwPXurKWFij3nrzZBMVn/2.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmaiXP1pAWKs16V837EwzbXQSkdwPXurKWFij3nrzZBMVn/3.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmaiXP1pAWKs16V837EwzbXQSkdwPXurKWFij3nrzZBMVn/4.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmaiXP1pAWKs16V837EwzbXQSkdwPXurKWFij3nrzZBMVn/5.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmaiXP1pAWKs16V837EwzbXQSkdwPXurKWFij3nrzZBMVn/6.jpg",
      ],
      downloadUrl: "https://pan.baidu.com/s/13buxQSVnKLwSym9sXHbCqg?pwd=st22",
      demoUrl: "https://www.fab.com/listings/2b0e86b8-e287-4c65-b9c4-e43865e2f2c7",
      version: "1.0",
      ueVersion: "5.0 - 5.4",
      fileSize: "295 MB",
      createdAt: "2026-04-01",
      featured: false,
    },

    // 5. Low Poly Rainforest Pack
    {
      id: "Low-Poly-Rainforest-Pack",
      title: "低多边形热带雨林资源包",
      description: "包含44个热带树木、灌木、道具和模块化小屋。包括4棵棕榈树,3棵竹子,2棵大树,1棵蕨类植物,3棵地面棕榈,5种地面植物,3种草,2种大叶植物,1个树根,1条藤蔓(样条线启用),1块岩石,15个模块化小屋组件,3段绳桥(样条线启用),以及2个循环自然音效。所有树木共用一个叶片材质图集和一个树皮材质图集,支持PBR反照率、法线、AO/粗糙度贴图,包含风动画效果。提供移动端材质版本,包含碰撞体和LOD。树木面数76-1840三角面,地面植物面数18-270三角面。",
      category: "environments",
      tags: ["低多边形", "热带雨林", "树木", "植物", "模块化小屋", "棕榈树", "竹子", "移动端适配"],
      images: [
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmSjRXn1Ug73Qkkq7xvT8RtdomVooCgPJ7sruSruGGVCjq/1.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmSjRXn1Ug73Qkkq7xvT8RtdomVooCgPJ7sruSruGGVCjq/2.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmSjRXn1Ug73Qkkq7xvT8RtdomVooCgPJ7sruSruGGVCjq/3.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmSjRXn1Ug73Qkkq7xvT8RtdomVooCgPJ7sruSruGGVCjq/4.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmSjRXn1Ug73Qkkq7xvT8RtdomVooCgPJ7sruSruGGVCjq/5.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmSjRXn1Ug73Qkkq7xvT8RtdomVooCgPJ7sruSruGGVCjq/6.jpg",
      ],
      downloadUrl: "https://pan.baidu.com/s/1_cRuOnqQ9JvE90ttUJ6sUA?pwd=tiah",
      demoUrl: "https://www.fab.com/listings/97bdb315-30a9-46cd-b0f5-77254c52fa56",
      version: "1.0",
      ueVersion: "4.15 - 4.27",
      fileSize: "539 MB",
      createdAt: "2026-04-01",
      featured: false,
    },

    // 6. Suburbs - City Pack
    {
      id: "Suburbs-City-Pack",
      title: "郊区-城市资源包",
      description:"这个资源包拥有你创建大型郊区/住宅区/社区/城镇区域所需的一切,可以快速且轻松地构建城市场景！工具/蓝图具有直观的UI、详细的文档和全方位的艺术控制。包含大量3D模型、材质、蓝图和其他资产,让你的工作更加轻松,节省数百小时的工作量。你可以非常轻松地自定义几乎所有材质。区域基于纽约市——布鲁克林、布朗克斯、曼哈顿及周边地区的住宅区。包含17个主材质（非常容易自定义）、442个材质实例、4个材质参数集合和2个材质函数。蓝图涵盖道路、人行道、屋顶/地板、交通灯、贴花、横幅、背景建筑、模块化建筑、围栏和电线。",
      category: "environments",
      tags: ["城市", "郊区", "住宅区", "社区", "纽约", "模块化建筑", "蓝图工具", "街道"],
      images: [
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmQGsfERiYg3UA5RD4ZvxMgPjjYbrmxXQQWWNJdC5ruZaB/1.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmQGsfERiYg3UA5RD4ZvxMgPjjYbrmxXQQWWNJdC5ruZaB/2.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmQGsfERiYg3UA5RD4ZvxMgPjjYbrmxXQQWWNJdC5ruZaB/3.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmQGsfERiYg3UA5RD4ZvxMgPjjYbrmxXQQWWNJdC5ruZaB/4.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmQGsfERiYg3UA5RD4ZvxMgPjjYbrmxXQQWWNJdC5ruZaB/5.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmQGsfERiYg3UA5RD4ZvxMgPjjYbrmxXQQWWNJdC5ruZaB/6.jpg",
      ],
      downloadUrl: "https://pan.baidu.com/s/1g19eMK6zOwL-uOrS7PQT0g?pwd=rm94",
      demoUrl: "https://www.fab.com/listings/e0a47000-a60c-487e-b432-c22f6f345760",
      version: "1.0",
      ueVersion: "5.1 - 5.7",
      fileSize: "2.72 GB",
      createdAt: "2026-04-01",
      featured: false,
    },

    // 7. Stone Church
    {
      id: "Stone-Church",
      title: "石头教堂",
      description: "这是一个高质量的石头教堂环境资源包,包含精细的教堂建筑模型和内部装饰。所有模型均经过精心制作,适合用于中世纪、奇幻或历史题材的游戏和影视项目。资源包含详细的建筑结构、室内装饰、彩色玻璃窗、石墙纹理以及周围的环境道具,可以快速搭建逼真的教堂场景。",
      category: "environments",
      tags: ["教堂", "石头建筑", "中世纪", "建筑", "室内", "奇幻", "历史"],
      images: [
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmZASxn7zSRmmX7PPpAwruJHXT4XLRQP3GbKH97D7kyKg8/1.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmZASxn7zSRmmX7PPpAwruJHXT4XLRQP3GbKH97D7kyKg8/2.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmZASxn7zSRmmX7PPpAwruJHXT4XLRQP3GbKH97D7kyKg8/3.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmZASxn7zSRmmX7PPpAwruJHXT4XLRQP3GbKH97D7kyKg8/4.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmZASxn7zSRmmX7PPpAwruJHXT4XLRQP3GbKH97D7kyKg8/5.jpg",
        "https://tomato-total-lark-322.mypinata.cloud/ipfs/QmZASxn7zSRmmX7PPpAwruJHXT4XLRQP3GbKH97D7kyKg8/6.jpg",
      ],
      downloadUrl: "https://pan.baidu.com/s/1uiiJH4Ks2Mqex_HOE9iAVw?pwd=4cyk",
      demoUrl: "https://www.fab.com/listings/c2d7ff21-92af-48ca-9111-914454a682b7",
      version: "1.0",
      ueVersion: "5.0 - 5.5",
      fileSize: "735 MB",
      createdAt: "2026-04-01",
      featured: false,
    },


    {
    id: "Mars-Rover-Simulator",
    title: "火星探测车模拟器",
    description: "驾驶火星探测车，穿越火星尘土飞扬的红色平原和岩石嶙峋的山谷。如果您曾梦想探索火星表面，这款模拟器将为您带来逼真的体验，包括精细的探测车机械结构、沉浸式的环境和交互式系统。这款插件采用优化的工作流程设计，可在各种设备上流畅运行，同时还能呈现真实太空任务的视觉效果和体验。从车轮下可变形的地形到电影级的探测车镜头，这款插件包兼具教育性和娱乐性。",
    category: "models",
    tags: ["模型", "火星", "模拟器", "火星探测车"],
    images: [
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeifqdh3o6edvc7yb4ahqhehyzvdniy7wiioxmm4d5ph6jffavq74ci/1.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeifqdh3o6edvc7yb4ahqhehyzvdniy7wiioxmm4d5ph6jffavq74ci/2.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeifqdh3o6edvc7yb4ahqhehyzvdniy7wiioxmm4d5ph6jffavq74ci/3.jpg",
    ],
    downloadUrl: "  https://pan.baidu.com/s/18Ibty3yrWZyQDJGRqM69aQ?pwd=zdrc",
    demoUrl: "https://www.fab.com/listings/fd2038df-c7bc-4c1e-8137-b5cae69e68cb",
    version: "1.0",
    ueVersion: "4.26 - 5.7",
    fileSize: "1.8 GB",
    createdAt: "2026-03-31",
    featured: true,
  },
    {
    id: "Garden-Flowers-Pack",
    title: "鲜花花朵42种花卉道具素材",
    description: "您将获得 42 个可用于游戏的花园花卉素材：玫瑰 （6 种变体）  445 - 6057 个三角形。牡丹 （7 种变体）  1601 - 8740 个三角形。攀援玫瑰 （16 种变体）497 - 5774 个三角形。海葵 （7 种变体）  126 - 593 个三角形。海葵组（6 种变体）  318 - 1326 个三角形",
    category: "models",
    tags: ["模型", "道具", "鲜花", "花朵", "花卉"],
    images: [
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeih6gmxewjkrb2rucub2mvfo2b3xwunp5rdqk6nk266q6kupib5amu/1.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeih6gmxewjkrb2rucub2mvfo2b3xwunp5rdqk6nk266q6kupib5amu/2.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeih6gmxewjkrb2rucub2mvfo2b3xwunp5rdqk6nk266q6kupib5amu/3.jpg",
    ],
    downloadUrl: "  https://pan.baidu.com/s/1upg_JUcFV9MPji9_GQosNA?pwd=t014",
    demoUrl: "https://www.fab.com/listings/3efda6b5-448f-4174-94d9-c19d81bbb0c2",
    version: "1.0",
    ueVersion: "4.27 - 5.6",
    fileSize: "33 MB",
    createdAt: "2026-03-31",
    featured: true,
  },
    {
    id: "Ultimate-Fire-Pack",
    title: "终极火焰大火燃烧特效包",
    description: "终极火焰特效包 Vol 1，由 ActionVFX 和 Undertone FX, Inc. 出品。ActionVFX拍摄了一些业内最好的火焰特效素材，这些素材曾在无数电影、电视节目和广告中出现过。现在，我们与实时特效专家Undertone FX, Inc.合作，将这段素材导入虚幻引擎。所有纹理均已预先制作成 4K 无缝循环，粒子系统、材质和蓝图也已设置完毕，为您带来前所未有的顶级实时火焰特效，而且使用起来非常便捷，只需拖放即可。Niagara 版本的粒子效果通过蓝图公开了大量参数，因此您可以快速轻松地自定义每个放置的火焰，包括风、烟雾、余烬和生成率。无论您是否有特效经验，这些火焰效果都应该很容易上手。无论您是从事虚拟制作、游戏设计、环境美术还是经验丰富的实时视觉特效艺术家，此素材包都旨在供您使用。所有主要纹理均采用基于光流的运动矢量纹理制作，因此如果您的游戏需要支持慢动作或时间膨胀，火焰将能够完美地进行插值。该材质包的主要火焰纹理共有四种尺寸（超小型、小型、中型、大型），每种尺寸又有四种变体。尼亚加拉系统默认允许每团火焰在四种变体中随机显示，您也可以明确指定所需的变体。因此，如果您要将火焰组合在一起，可以精确指定纹理分布，从而避免重复图案。蓝图和尼亚加拉系统版本之间已关联了 54 个自定义参数，因此每个放置的实例都可以独一无二，避免重复模式。您可以调整光照、扭曲、环境余烬、爆裂余烬和风力。您还可以通过蓝图设置密度、速度、亮度、比例、湍流以及更多参数，从而自定义每个放置的火焰实例。凭借ActionVFX和Undertone FX的综合专业知识和创新能力，我们致力于提供突破游戏开发和虚拟制作极限的素材",
    category: "vfx",
    tags: ["特效", "美术", "火焰", "火"],
    images: [
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeih2y7tst3ahtjotlf6cxfvinupk7ivy2ceyxlrpidjdzgvxcexgfm/1.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeih2y7tst3ahtjotlf6cxfvinupk7ivy2ceyxlrpidjdzgvxcexgfm/2.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeih2y7tst3ahtjotlf6cxfvinupk7ivy2ceyxlrpidjdzgvxcexgfm/3.jpg",
    ],
    downloadUrl: "  https://pan.baidu.com/s/1ER4FrMtDseNgJFV9Xc1J6g?pwd=axim",
    demoUrl: "https://www.fab.com/listings/a6f69c9d-e848-4d9f-8393-560dab1f17de",
    version: "1.0",
    ueVersion: "5.3 – 5.7",
    fileSize: "2.18 GB",
    createdAt: "2026-03-31",
    featured: true,
  },
    {
    id: "Ocean-ology-Legacy",
    title: "最新版写实海洋波浪动态水插件",
    description: "专业海洋模拟，针对真实游戏硬件进行了优化，历经 7 年以上开发，100% C++ 性能，积极支持和更新，专为玩家实际拥有的 GPU 而打造。《海洋学遗产》提供专业的海洋模拟体验，即使在 GTX 1080 / RTX 3060 级别的硬件上也能流畅运行，这些 GPU 在实际 PC 游戏硬件调查中占据主导地位。我们绝不妥协于质量，也绝不容忍性能上的不足。",
    category: "plugins",
    tags: ["插件", "海洋环境", "水体", "海洋", "波浪"],
    images: [
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeifncjqg46hdndhniyxewdo7cczd6rjdbnmltq6ajp6rdfss4yw7xa/1.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeifncjqg46hdndhniyxewdo7cczd6rjdbnmltq6ajp6rdfss4yw7xa/2.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeifncjqg46hdndhniyxewdo7cczd6rjdbnmltq6ajp6rdfss4yw7xa/3.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeifncjqg46hdndhniyxewdo7cczd6rjdbnmltq6ajp6rdfss4yw7xa/4.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeifncjqg46hdndhniyxewdo7cczd6rjdbnmltq6ajp6rdfss4yw7xa/5.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeifncjqg46hdndhniyxewdo7cczd6rjdbnmltq6ajp6rdfss4yw7xa/6.jpg",
    ],
    downloadUrl: "  https://pan.baidu.com/s/15Zdbs8Ym_-9-6UUOJdLNyw?pwd=ks7e",
    demoUrl: "https://www.fab.com/listings/1cd1f62e-0fa3-48bf-bc60-f0e06010fce3",
    version: "3.9.0",
    ueVersion: "4.26 - 5.7",
    fileSize: "5-10 GB",
    createdAt: "2026-03-31",
    featured: true,
  },
    {
    id: "Stylized-Sci-Fi-Modern-City",
    title: "风格化的科幻现代城市",
    description: "“风格化科幻现代城市”是一款高质量的模块化资源包，包含各种易于组装的模块化建筑模型和道具。您可以快速切换网格和材质，从而丰富和完善您的游戏环境。",
    category: "environments",
    tags: ["场景", "环境", "风格化", "科幻现代", "城市"],
    images: [
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeibsgfvibtmgoko6dj77i2ctwpk5r2fqhd733rxwryiqpamvkbfepy/1.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeibsgfvibtmgoko6dj77i2ctwpk5r2fqhd733rxwryiqpamvkbfepy/2.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeibsgfvibtmgoko6dj77i2ctwpk5r2fqhd733rxwryiqpamvkbfepy/3.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeibsgfvibtmgoko6dj77i2ctwpk5r2fqhd733rxwryiqpamvkbfepy/4.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeibsgfvibtmgoko6dj77i2ctwpk5r2fqhd733rxwryiqpamvkbfepy/5.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeibsgfvibtmgoko6dj77i2ctwpk5r2fqhd733rxwryiqpamvkbfepy/6.jpg",
    ],
    downloadUrl: "  https://pan.baidu.com/s/1YkYA7VdCyup15i7XUpPATg?pwd=u0a0",
    demoUrl: "https://www.fab.com/listings/f1613842-fb15-469f-b53b-1c6ae84c96cc",
    version: "1.0",
    ueVersion: "5.0 – 5.7",
    fileSize: "3.41 GB",
    createdAt: "2026-03-31",
    featured: true,
  },
    {
    id: "Chinese-Temple",
    title: "古老中国寺庙环境场景",
    description: "风景如画的地点，一座古老的寺庙被白雪皑皑的竹林和雄伟的群山环绕。精致的建筑、绝妙的光影效果和自然元素营造出一种静谧神秘的氛围。是奇幻、冒险或武侠题材项目的理想之选。",
    category: "environments",
    tags: ["场景", "环境", "古代", "中国", "寺庙"],
    images: [
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeicslh6o35uekm6v34yvoykaffwkopfmeq4gucm6cj73phb7mwop6y/1.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeicslh6o35uekm6v34yvoykaffwkopfmeq4gucm6cj73phb7mwop6y/2.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeicslh6o35uekm6v34yvoykaffwkopfmeq4gucm6cj73phb7mwop6y/3.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeicslh6o35uekm6v34yvoykaffwkopfmeq4gucm6cj73phb7mwop6y/4.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeicslh6o35uekm6v34yvoykaffwkopfmeq4gucm6cj73phb7mwop6y/5.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeicslh6o35uekm6v34yvoykaffwkopfmeq4gucm6cj73phb7mwop6y/6.jpg",
    ],
    downloadUrl: "  https://pan.baidu.com/s/1IQFEAzltFkaGGXg8meNpJQ?pwd=limi",
    demoUrl: "https://www.fab.com/listings/19ba7573-3bda-49cd-a951-ad965366ec46",
    version: "1.0",
    ueVersion: "5.3 – 5.7",
    fileSize: "1.7 GB",
    createdAt: "2026-03-31",
    featured: true,
  },
  {
    id: "Fluid-Flux",
    title: "流体通量",
    description: "实时浅水模拟——流体数据修改器、波浪生成器和可扩展接口，流体表面渲染——焦散、潮湿、水下、水线、平流泡沫、平流波浪、与海洋融合、动态音频检测。流体交互——简单、廉价的波纹求解器，能够随角色移动，并已优化至绝对最低限度，海浪混合——单次渲染即可完成可平铺的海洋高度图纹理，尼亚加拉瀑布环境互动——高质量特效、弹跳的动画植物、角色游泳、船只 ，简洁、高效、对GPU友好的实现，接口设计遵循KISS（Keep It Simple, Stupid，保持简单）原则。小巧紧凑，占用内存少。一种用于生成超快速静态网格的工具，其中流动贴图已嵌入顶点颜色中。先进的流体状态管理。Niagara流体异步读取系统，用于对蓝图中的高度和流体流量进行采样。动态音频分析仪。声源位置根据流体运动进行定位。四个示例地图——海滩、岛屿、河流和静态河流，采用基于速度的流体流动平流方法，适用于泡沫、焦散和波。水体横截面渲染图，基于波浪剖面技术的大规模非模拟海岸线（最大可达 10x10 公里）及波浪破碎带，基于尼亚加拉的无限网格渲染，水彩画提供高级散布设置和画笔绘制功能，水下基于SLW材质模式，并可适应一天中不同的时间段。独特的水下容积玻璃系统",
    category: "environments",
    tags: ["场景", "环境", "水体", "海洋"],
    images: [
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeibr36batebp4givzelydsg2nj22gf6avbzq2wmedp2sg2aa54vbrq/1.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeibr36batebp4givzelydsg2nj22gf6avbzq2wmedp2sg2aa54vbrq/2.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeibr36batebp4givzelydsg2nj22gf6avbzq2wmedp2sg2aa54vbrq/3.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeibr36batebp4givzelydsg2nj22gf6avbzq2wmedp2sg2aa54vbrq/4.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeibr36batebp4givzelydsg2nj22gf6avbzq2wmedp2sg2aa54vbrq/5.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeibr36batebp4givzelydsg2nj22gf6avbzq2wmedp2sg2aa54vbrq/6.jpg",
    ],
    downloadUrl: "  https://pan.baidu.com/s/19px2dXg80kENoIuklwwZuA?pwd=wj1g",
    demoUrl: "https://www.fab.com/listings/196c70cd-1283-4249-bf6b-c3019d1cbe11",
    version: "3.0",
    ueVersion: "4.26 – 4.27 和 5.0 – 5.7",
    fileSize: "320 MB",
    createdAt: "2026-03-26",
    featured: true,
  },
  {
    id: "Medieval-Environment",
    title: "中世纪环境（山地中世纪、中世纪教堂、中世纪墓地）",
    description: "Freshcan 3D 与 Yunus Emre Yaman 合作打造的“山地中世纪环境包”将带您沉浸于令人叹为观止的中世纪世界。这款“山地中世纪村庄包”专为创建引人入胜的中世纪游戏关卡和中世纪电影场景而设计，包含高质量的中世纪素材，例如雄伟的中世纪教堂、真实的中世纪房屋以及充满氛围的中世纪墓地。使用模块化的中世纪建筑套件，轻松打造您的奇幻世界，并用各种精细的道具丰富您的场景。2x2公里的景观底座展现了白雪皑皑的山峰、照片扫描的岩石以及茂盛的树木和植被，确保呈现视觉效果惊艳且逼真的环境。无论您是在打造史诗般的中世纪冒险故事，还是电影级杰作，此软件包都能为您提供在虚幻引擎 5 中实现您的愿景所需的一切。",
    category: "environments",
    tags: ["场景", "环境", "模块化环境", "山地", "教堂", "墓地", "中世纪"],
    images: [
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeibijorx5bjvin2bhypdrkcfzqnjlrhlpeoej5xyaakudk5jaa7jvu/1.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeibijorx5bjvin2bhypdrkcfzqnjlrhlpeoej5xyaakudk5jaa7jvu/2.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeibijorx5bjvin2bhypdrkcfzqnjlrhlpeoej5xyaakudk5jaa7jvu/3.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeibijorx5bjvin2bhypdrkcfzqnjlrhlpeoej5xyaakudk5jaa7jvu/4.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeibijorx5bjvin2bhypdrkcfzqnjlrhlpeoej5xyaakudk5jaa7jvu/5.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeibijorx5bjvin2bhypdrkcfzqnjlrhlpeoej5xyaakudk5jaa7jvu/6.jpg",
    ],
    downloadUrl: "  https://pan.baidu.com/s/1Tjwd0mIcVVaUdUY3xMLUkA?pwd=gs3c",
    demoUrl: "https://www.fab.com/listings/8c4e8d0c-9a21-4999-88b2-b969c6d12c2a",
    version: "1.0",
    ueVersion: "5.2 - 5.7",
    fileSize: "4.59 GB",
    createdAt: "2026-03-26",
    featured: true,
  },
  {
    id: "Ancient-Temple-Ruins-Modular-Environment",
    title: "古代寺庙遗址 - 模块化环境",
    description: "该项目需要 Nanite 和 Lumen，素材的面数密度极高，因此需要高端 PC。项目以第三人称角色控制器运行，帧率在 30fps 到 40fps 之间，采用 Epic 可扩展性预设、70% 渲染比例和启用时间超分辨率 (TSR)。网格中不包含光照贴图或LOD。RTX 2080显卡，Threadripper 1950x处理器，64GB DDR4内存，1440p分辨率，固态硬盘。",
    category: "environments",
    tags: ["场景", "环境", "模块化环境", "遗址", "寺庙", "古代"],
    images: [
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeieloxwevbl7jcauj3ypam5aohdpevc5ijmwncuhmcvcmoycxtgzpy/1.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeieloxwevbl7jcauj3ypam5aohdpevc5ijmwncuhmcvcmoycxtgzpy/2.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeieloxwevbl7jcauj3ypam5aohdpevc5ijmwncuhmcvcmoycxtgzpy/3.jpg",
    ],
    downloadUrl: "  https://pan.baidu.com/s/1lmvye-mFn4yi8kfuxGwzww?pwd=netd",
    demoUrl: "https://www.fab.com/listings/460311fc-fd70-4660-ac6f-1d5aac245f5c",
    version: "1.0",
    ueVersion: "5.2 - 5.7",
    fileSize: "2.63 GB",
    createdAt: "2026-03-30",
    featured: true,
  },
  {
    id: "Scrapopolis-Steampunk-village",
    title: "废料城——蒸汽朋克村庄",
    description: "使用Scrapopolis ，步入一个铜质蒸汽朋克世界。Scrapopolis是一个完全模块化、支持 PBR 的资源包，适用于电影和游戏。游戏特色包括：锈迹斑斑的机械构成的阴暗村庄、岩石遍布的沼泽地形、程序生成的水坑、手工制作的体积雾和烟雾/云。优化的性能、自定义碰撞和模块化灵活性使其成为打造工业或后末日场景的理想选择",
    category: "environments",
    tags: ["场景", "环境", "蒸汽朋克", "村庄", "废土", "末世"],
    images: [
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeiat42oizjhdbvbnywy43jgw36merhsiuoziebbh54dh7whaf5r5lu/1.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeiat42oizjhdbvbnywy43jgw36merhsiuoziebbh54dh7whaf5r5lu/2.jpg",
      "https://olive-electrical-wombat-971.mypinata.cloud/ipfs/bafybeiat42oizjhdbvbnywy43jgw36merhsiuoziebbh54dh7whaf5r5lu/3.jpg",
    ],
    downloadUrl: " https://pan.baidu.com/s/1sQGaoIManPhL0W5UOgmsLQ?pwd=m4jv",
    demoUrl: "https://www.fab.com/listings/fa19fa3a-62e4-4528-82dc-19bc66521f3b",
    version: "1.0",
    ueVersion: "5.1 - 5.7",
    fileSize: "572 MB",
    createdAt: "2026-03-30",
    featured: true,
  },
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
    fileSize: "1.44 GB",
    createdAt: "2026-03-30",
    featured: true,
  },
  {
    id: "Stone-Golem",
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
