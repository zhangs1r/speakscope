window.SPEAKSCOPE_DATA = {
  featuredCollectionId: "conference-prep",
  groups: [
    {
      id: "conference",
      kind: "会议备战馆",
      title: "国际会议 Oral Presentation 备战",
      emoji: "🎤",
      description: "针对 IAI 2026 英文 oral presentation 的专项训练。从讲稿准备、逐段排练到 Q&A 预演，在有限时间内做最有效的口语输出训练。",
      meta: ["倒计时备战", "论文讲稿", "全真模拟"]
    },
    {
      id: "daily",
      kind: "日常训练馆",
      title: "日常口语能力训练",
      emoji: "🗣️",
      description: "会议结束后转入长期口语提升。涵盖日常对话、影子跟读、话题输出训练，目标是自然交流与脱离字幕看剧。",
      meta: ["长期积累", "语音语调", "听力提升"]
    },
    {
      id: "reference",
      kind: "速查馆",
      title: "口语速查与工具箱",
      emoji: "📖",
      description: "高频会议用语、论文关键词汇、发音速查、口语模板等可随时查阅的参考资料。",
      meta: ["速查表", "高频用语", "术语表"]
    }
  ],
  collections: [
    {
      id: "conference-prep",
      groupId: "conference",
      kind: "会议备战",
      title: "IAI 2026 · SCoPE 论文备战",
      subtitle: "Structured and Constrained Prompting Extractor",
      description: "8 月 19-22 日沈阳 IAI 2026 国际会议 oral presentation 专项训练。覆盖讲稿落地、逐段排练、Q&A 预演、全真模拟四阶段。",
      quickOpen: "start lessons/0001-课程总览与备战地图.html",
      meta: ["7 节课", "~3-4 周", "SCoPE 论文"]
    },
    {
      id: "daily-expressions",
      groupId: "daily",
      kind: "日常地道表达",
      title: "地道英语表达系列",
      subtitle: "从真实全英文工作场景中拆出的高频地道表达",
      description: "基于抖音博主「暂暂未命名」的全英文工作场景分享，每期拆解一个母语者天天在用地道表达。学完就能直接用，不限场景。",
      quickOpen: "start lessons/0002-地道表达-Keep-Tabs-On.html",
      meta: ["持续更新", "地道表达", "场景应用"]
    }
  ],
  lessons: [
    {
      id: "0001",
      path: "lessons/0001-课程总览与备战地图.html",
      collection: "conference-prep",
      title: "课程总览与备战地图",
      subtitle: "口语学习全局 + 会议倒计时计划",
      emoji: "🗺️",
      duration: "15 分钟阅读",
      tags: ["总览", "计划"],
      description: "先看清全局：4 周备战路线图、每天练什么、跟 AI 陪练怎么配合、怎么衡量自己进步了。"
    },
    {
      id: "0002",
      path: "lessons/0002-地道表达-Keep-Tabs-On.html",
      collection: "daily-expressions",
      title: "地道表达 #1：Keep tabs on",
      subtitle: "母语者每天都在用的「监控与跟踪」表达",
      emoji: "🗣️",
      duration: "20 分钟",
      tags: ["地道表达", "高频短语", "keep tabs on"],
      description: "从真实全英文工作场景学会「keep tabs on something to make sure something」这个万能结构——工作汇报、日常聊天都能用。含 TTS 跟读音频。"
    },
    {
      id: "0003",
      path: "lessons/0003-地道表达-For-Here-Take-Away-To-Go.html",
      collection: "daily-expressions",
      title: "地道表达 #2：For here / Take away / To go",
      subtitle: "在国外餐厅想打包但不会说？这节给你讲透",
      emoji: "🍽️",
      duration: "20 分钟",
      tags: ["地道表达", "餐厅英语", "for here", "to go"],
      description: "「for here = 堂食」「take away = 打包带走」「to go 也可以」——从一张小红书截图出发，彻底搞懂在国外餐厅点餐打包的所有英语表达。含 TTS 跟读音频。"
    },
    {
      id: "0004",
      path: "lessons/0004-地道表达-高频情绪口语7连.html",
      collection: "daily-expressions",
      title: "地道表达 #3：高频情绪口语 7 连",
      subtitle: "从抖音合拍视频串讲 7 个最自然的情绪回应",
      emoji: "🗣️",
      duration: "25 分钟",
      tags: ["地道表达", "情绪回应", "got it", "no biggie"],
      description: "「我知道了→Got it」「不要紧→No biggie」「我请客→It's on me」——从抖音合拍短视频出发，拆解 7 个最常用的中文口头禅怎么用英语脱口而出。含场景串烧对话、发音要点和 AI 陪练 Prompt。"
    }
  ],
  references: [
    { path: "reference/scope-keywords.html", title: "SCoPE 论文关键词汇表", emoji: "🔬", description: "论文核心术语中英对照 + 发音提示 + 例句，适合 oral presentation 前熟记。" },
    { path: "reference/conference-phrases.html", title: "会议英语高频工具箱", emoji: "🎯", description: "开场白、过渡句、数据展示、Q&A 应对等 oral presentation 高频句式速查。" },
    { path: "reference/ai-coach-prompts.html", title: "AI 陪练指令模板库", emoji: "🤖", description: "5 种 AI 陪练用法：润色、纠音、模拟观众、刁难提问、时间管理。一键复制 Prompt 模板。", new: true },
    { path: "reference/daily-expressions-cheatsheet.html", title: "日常地道表达速查表", emoji: "📖", description: "高频母语表达（keep tabs on 等）场景分类速查。系列课程配套资料。", new: true }
  ],
  learningRecords: [],
  siteLinks: [
    { title: "IAI 2026 会议官网", url: "http://iai.neu.edu.cn/", emoji: "🌐", description: "第八届工业人工智能国际会议，8.19-22 沈阳。" },
    { title: "SCoPE 论文（MinerU 导出）", url: "https://github.com/zhangs1r/speakscope", emoji: "📄", description: "论文完整 Markdown 版本（项目中引用）。" }
  ]
};
