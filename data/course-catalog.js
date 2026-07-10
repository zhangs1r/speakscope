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
    }
  ],
  references: [
    { path: "reference/scope-keywords.html", title: "SCoPE 论文关键词汇表", emoji: "🔬", description: "论文核心术语中英对照 + 发音提示 + 例句，适合 oral presentation 前熟记。" },
    { path: "reference/conference-phrases.html", title: "会议英语高频工具箱", emoji: "🎯", description: "开场白、过渡句、数据展示、Q&A 应对等 oral presentation 高频句式速查。" }
  ],
  learningRecords: [],
  siteLinks: [
    { title: "IAI 2026 会议官网", url: "http://iai.neu.edu.cn/", emoji: "🌐", description: "第八届工业人工智能国际会议，8.19-22 沈阳。" },
    { title: "SCoPE 论文（MinerU 导出）", url: "https://github.com/zhangs1r/speakscope", emoji: "📄", description: "论文完整 Markdown 版本（项目中引用）。" }
  ]
};
