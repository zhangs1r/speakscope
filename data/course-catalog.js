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
    },
    {
      id: "animal-farm-reading",
      groupId: "daily",
      kind: "英文原著阅读",
      title: "Animal Farm 精读课",
      subtitle: "George Orwell 经典寓言 · 分级精读",
      description: "全 10 章逐章带读，分 19 节课（上/下篇），逐段英中对照 + TTS 发音。从第一个段落到最后一个词，带你完整读完一本英文原著。",
      quickOpen: "start lessons/0006-AnimalFarm-Ch1-P1-Gathering.html",
      meta: ["19 节课", "全文带读", "文学素养"]
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
    },
    // ── Animal Farm 精读课（0005-0024：全文带读版）──
    {
      id: "0005",
      path: "lessons/0005-AnimalFarm-导读.html",
      collection: "animal-farm-reading",
      title: "走进 Animal Farm",
      subtitle: "George Orwell 经典寓言 · 阅读前准备课",
      emoji: "📖",
      duration: "35-40 分钟",
      tags: ["英文原著", "Animal Farm", "导读"],
      description: "认识 George Orwell、理解政治寓言、了解全书角色和七诫设定、制定阅读计划。含 8 个核心词汇和阅读方法指导。"
    },
    {
      id: "0006",
      path: "lessons/0006-AnimalFarm-Ch1-P1-Gathering.html",
      collection: "animal-farm-reading",
      title: "Ch.I 夜色中的集会（上）",
      subtitle: "动物们陆续登场——每一个角色都有寓意",
      emoji: "📖",
      duration: "25-30 分钟",
      tags: ["英文原著", "Animal Farm", "Ch.I", "全文带读"],
      description: "逐段精读第一章前半：从 Jones 醉倒到动物们在谷仓集合，Boxer、Benjamin、Mollie 等角色首次登场。含 11 段原文+翻译+音频。"
    },
    {
      id: "0007",
      path: "lessons/0007-AnimalFarm-Ch1-P2-Speech.html",
      collection: "animal-farm-reading",
      title: "Ch.I 革命演讲（下）",
      subtitle: "「Comrades! Rebellion!」——Old Major 点燃革命火种",
      emoji: "📖",
      duration: "25-30 分钟",
      tags: ["英文原著", "Animal Farm", "Ch.I", "全文带读"],
      description: "逐段精读第一章后半：Major 的演讲全文、「Beasts of England」革命歌曲、老鼠投票、枪声打断了集会。"
    },
    {
      id: "0008",
      path: "lessons/0008-AnimalFarm-Ch2-P1-Animalism.html",
      collection: "animal-farm-reading",
      title: "Ch.II 动物主义的诞生（上）",
      subtitle: "Snowball、Napoleon、Squealer 登场",
      emoji: "📖",
      duration: "25-30 分钟",
      tags: ["英文原著", "Animal Farm", "Ch.II", "全文带读"],
      description: "逐段精读第二章前半：Major 去世、三头猪发展 Animalism、Moses 的糖果山故事、动物们对革命的怀疑。"
    },
    {
      id: "0009",
      path: "lessons/0009-AnimalFarm-Ch2-P2-Rebellion.html",
      collection: "animal-farm-reading",
      title: "Ch.II 起义成功（下）",
      subtitle: "Jones 被驱逐，七诫上墙",
      emoji: "📖",
      duration: "25-30 分钟",
      tags: ["英文原著", "Animal Farm", "Ch.II", "全文带读"],
      description: "逐段精读第二章后半：饥饿引发的起义、Jones 逃跑、七诫被写在墙上、农场改名 Animal Farm。"
    },
    {
      id: "0010",
      path: "lessons/0010-AnimalFarm-Ch3-P1-Harvest.html",
      collection: "animal-farm-reading",
      title: "Ch.III 丰收的季节（上）",
      subtitle: "Boxer 的英雄时刻——「I will work harder!」",
      emoji: "📖",
      duration: "25-30 分钟",
      tags: ["英文原著", "Animal Farm", "Ch.III", "全文带读"],
      description: "逐段精读第三章前半：丰收的喜悦、Boxer 成为所有人的榜样、动物们体验劳动的幸福。"
    },
    {
      id: "0011",
      path: "lessons/0011-AnimalFarm-Ch3-P2-Slogans.html",
      collection: "animal-farm-reading",
      title: "Ch.III 口号与特权（下）",
      subtitle: "「Four legs good, two legs bad」——但猪已经开始喝牛奶了",
      emoji: "📖",
      duration: "25-30 分钟",
      tags: ["英文原著", "Animal Farm", "Ch.III", "全文带读"],
      description: "逐段精读第三章后半：委员会制度、口号诞生、猪秘密独占牛奶和苹果、Squealer 的诡辩。"
    },
    {
      id: "0012",
      path: "lessons/0012-AnimalFarm-Ch4-Battle.html",
      collection: "animal-farm-reading",
      title: "Ch.IV 牛棚之战",
      subtitle: "Snowball 的英雄时刻——人类第一次反攻",
      emoji: "📖",
      duration: "25-30 分钟",
      tags: ["英文原著", "Animal Farm", "Ch.IV", "全文带读"],
      description: "逐段精读第四章全文（较短章节）：消息传遍乡间、两位人类邻居、Snowball 的军事部署、牛棚之战、英雄勋章。"
    },
    {
      id: "0013",
      path: "lessons/0013-AnimalFarm-Ch5-P1-Mollie.html",
      collection: "animal-farm-reading",
      title: "Ch.V 风车之争论（上）",
      subtitle: "Mollie 的叛逃与 Snowball 的蓝图",
      emoji: "📖",
      duration: "25-30 分钟",
      tags: ["英文原著", "Animal Farm", "Ch.V", "全文带读"],
      description: "逐段精读第五章前半：Mollie 选择缎带而非革命、冬天来临、Snowball 与 Napoleon 的路线之争、风车蓝图。"
    },
    {
      id: "0014",
      path: "lessons/0014-AnimalFarm-Ch5-P2-Coup.html",
      collection: "animal-farm-reading",
      title: "Ch.V Napoleon 政变（下）",
      subtitle: "狗来了——民主被废除",
      emoji: "📖",
      duration: "25-30 分钟",
      tags: ["英文原著", "Animal Farm", "Ch.V", "全文带读"],
      description: "逐段精读第五章后半：Napoleon 用狗发动政变、Snowball 被逐、全体会议被废除、「Four legs good」被滥用。全书最关键转折点。"
    },
    {
      id: "0015",
      path: "lessons/0015-AnimalFarm-Ch6-P1-Windmill.html",
      collection: "animal-farm-reading",
      title: "Ch.VI 风车重建（上）",
      subtitle: "Boxer 的新口号——「Napoleon is always right」",
      emoji: "📖",
      duration: "25-30 分钟",
      tags: ["英文原著", "Animal Farm", "Ch.VI", "全文带读"],
      description: "逐段精读第六章前半：动物们艰苦重建风车、Boxer 更加拼命的工作、新口号诞生、Sunday 加班制度的引入。"
    },
    {
      id: "0016",
      path: "lessons/0016-AnimalFarm-Ch6-P2-Trade.html",
      collection: "animal-farm-reading",
      title: "Ch.VI 与人类交易（下）",
      subtitle: "第一个七诫被篡改——「不得睡床铺被单」",
      emoji: "📖",
      duration: "25-30 分钟",
      tags: ["英文原著", "Animal Farm", "Ch.VI", "全文带读"],
      description: "逐段精读第六章后半：Napoleon 宣布与人类贸易、Boxer 搬巨石、卖鸡蛋引起不满、第一条七诫被秘密修改。"
    },
    {
      id: "0017",
      path: "lessons/0017-AnimalFarm-Ch7-P1-Famine.html",
      collection: "animal-farm-reading",
      title: "Ch.VII 饥荒与恐惧（上）",
      subtitle: "寒冬、谎言与母鸡的反抗",
      emoji: "📖",
      duration: "25-30 分钟",
      tags: ["英文原著", "Animal Farm", "Ch.VII", "全文带读"],
      description: "逐段精读第七章前半：严冬、食物短缺、用沙子伪装粮食、Squealer 的数据操纵、母鸡反抗被残酷镇压。"
    },
    {
      id: "0018",
      path: "lessons/0018-AnimalFarm-Ch7-P2-Purge.html",
      collection: "animal-farm-reading",
      title: "Ch.VII 大清洗（下）",
      subtitle: "「Beasts of England」被废除——革命记忆被抹去",
      emoji: "📖",
      duration: "25-30 分钟",
      tags: ["英文原著", "Animal Farm", "Ch.VII", "全文带读"],
      description: "逐段精读第七章后半：强迫认罪、公开处决、Snowball 被污蔑为叛徒、Boxer 的困惑、「Beasts of England」被废除。"
    },
    {
      id: "0019",
      path: "lessons/0019-AnimalFarm-Ch8-P1-Forgery.html",
      collection: "animal-farm-reading",
      title: "Ch.VIII 假钞与炸药（上）",
      subtitle: "Frederick 的欺骗与风车的毁灭",
      emoji: "📖",
      duration: "25-30 分钟",
      tags: ["英文原著", "Animal Farm", "Ch.VIII", "全文带读"],
      description: "逐段精读第八章前半：Napoleon 的个人崇拜达到顶峰、Frederick 用假钞购买木材、风车被炸药摧毁。"
    },
    {
      id: "0020",
      path: "lessons/0020-AnimalFarm-Ch8-P2-Battle.html",
      collection: "animal-farm-reading",
      title: "Ch.VIII 风车之战（下）",
      subtitle: "惨胜、醉酒与更多的七诫篡改",
      emoji: "📖",
      duration: "25-30 分钟",
      tags: ["英文原著", "Animal Farm", "Ch.VIII", "全文带读"],
      description: "逐段精读第八章后半：动物惨胜夺回废墟、Napoleon 醉酒、七诫再被修改（#5「饮酒→过量」#6「杀生→无故」）。"
    },
    {
      id: "0021",
      path: "lessons/0021-AnimalFarm-Ch9-P1-Decline.html",
      collection: "animal-farm-reading",
      title: "Ch.IX Boxer 的倒下（上）",
      subtitle: "蹄伤、虚假的养老金承诺与猪的特权",
      emoji: "📖",
      duration: "25-30 分钟",
      tags: ["英文原著", "Animal Farm", "Ch.IX", "全文带读"],
      description: "逐段精读第九章前半：Boxer 的蹄伤、退休年龄的虚假承诺、食物短缺、养猪场扩大、猪学会穿绿缎带。"
    },
    {
      id: "0022",
      path: "lessons/0022-AnimalFarm-Ch9-P2-Knacker.html",
      collection: "animal-farm-reading",
      title: "Ch.IX 屠马场（下）",
      subtitle: "Benjamin 发现了真相——但为时已晚",
      emoji: "📖",
      duration: "25-30 分钟",
      tags: ["英文原著", "Animal Farm", "Ch.IX", "全文带读"],
      description: "逐段精读第九章后半：Boxer 倒下、屠马场的车来了、Benjamin 发现真相、Squealer 的虚假悼词、Boxer 被遗忘。全书最令人心碎的章节。"
    },
    {
      id: "0023",
      path: "lessons/0023-AnimalFarm-Ch10-P1-Forgotten.html",
      collection: "animal-farm-reading",
      title: "Ch.X 被遗忘的过去（上）",
      subtitle: "革命被遗忘，猪学会用后腿走路",
      emoji: "📖",
      duration: "25-30 分钟",
      tags: ["英文原著", "Animal Farm", "Ch.X", "全文带读"],
      description: "逐段精读第十章前半：岁月流逝、Snowball 和 Boxer 被遗忘、风车赚钱但动物没变富、猪开始用后腿走路。"
    },
    {
      id: "0024",
      path: "lessons/0024-AnimalFarm-Ch10-P2-Final.html",
      collection: "animal-farm-reading",
      title: "Ch.X 终极变形（下）",
      subtitle: "「从猪到人，已无法分辨」——全书最震撼的结尾",
      emoji: "📖",
      duration: "25-30 分钟",
      tags: ["英文原著", "Animal Farm", "Ch.X", "全文带读"],
      description: "逐段精读第十章后半：Napoleon 与人类打牌、七诫只剩一条、「有些动物更平等」、最终场景——人猪不分。全书完结。"
    }
  ],
  references: [
    { path: "reference/scope-keywords.html", title: "SCoPE 论文关键词汇表", emoji: "🔬", description: "论文核心术语中英对照 + 发音提示 + 例句，适合 oral presentation 前熟记。" },
    { path: "reference/conference-phrases.html", title: "会议英语高频工具箱", emoji: "🎯", description: "开场白、过渡句、数据展示、Q&A 应对等 oral presentation 高频句式速查。" },
    { path: "reference/ai-coach-prompts.html", title: "AI 陪练指令模板库", emoji: "🤖", description: "5 种 AI 陪练用法：润色、纠音、模拟观众、刁难提问、时间管理。一键复制 Prompt 模板。", new: true },
    { path: "reference/daily-expressions-cheatsheet.html", title: "日常地道表达速查表", emoji: "📖", description: "高频母语表达（keep tabs on 等）场景分类速查。系列课程配套资料。" },
    { path: "reference/animal-farm/full.txt", title: "Animal Farm 全文", emoji: "📚", description: "George Orwell 原著全文 TXT，共 10 章，约 30000 词。" }
  ],
  learningRecords: [],
  siteLinks: [
    { title: "IAI 2026 会议官网", url: "http://iai.neu.edu.cn/", emoji: "🌐", description: "第八届工业人工智能国际会议，8.19-22 沈阳。" },
    { title: "SCoPE 论文（MinerU 导出）", url: "https://github.com/zhangs1r/speakscope", emoji: "📄", description: "论文完整 Markdown 版本（项目中引用）。" }
  ]
};
