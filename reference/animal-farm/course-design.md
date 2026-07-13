# 英文原著阅读 · Animal Farm 课程设计（修正版 v2.0）

> 基于对抗式审查意见修正：教学审查(1) + 学术审查(1) + 技术审查(1)

## 一、总体定位

- **所属板块：** 日常训练馆（groupId: "daily"）
- **Collection ID:** "animal-farm-reading"
- **板块名称：** 英文原著阅读 · Animal Farm
- **板块副标题：** George Orwell 经典寓言 · 分级精读
- **标签：** 英文原著 | Animal Farm | 精读 | 词汇积累 | 文学素养
- **目标受众：** CET-4 水平（≈4000-4500 词汇），阅读可口语弱，中国研究生
- **实际词汇难度：B2-C1 级别，标注 CET-6+ 级词**
- **Collection 注册至 course-catalog.js：**
  ```javascript
  {
    id: "animal-farm-reading",
    groupId: "daily",
    kind: "英文原著阅读",
    title: "Animal Farm 精读课",
    subtitle: "George Orwell 经典寓言 · 分级精读",
    description: "全 10 章逐章精读，每节课 35-40 分钟。从词汇到主题，带你完整读完一本英文原著。",
    quickOpen: "start lessons/0005-AnimalFarm-导读.html",
    meta: ["11 节课", "词汇积累", "文学素养"],
  }
  ```

## 二、教学理念（修正版）

### 双轨并行 + 任务分级
每节课两条线同时走，但**在不同阶段采用不同任务类型**：

| 阶段 | 章节 | 任务类型 | 语言线重点 | 内容线重点 |
|------|------|---------|-----------|-----------|
| Phase 1 (建立信心) | 导读 + Ch.I-III | **信息定位型** | 高频词汇、基础语法 | "谁·做了什么·为什么" |
| Phase 2 (深入理解) | Ch.IV-VII | **推断理解型** | 词汇扩展、句式分析 | 角色动机、权力变化追踪 |
| Phase 3 (批判评价) | Ch.VIII-X | **批判评价型** | 高阶词汇、反讽理解 | 寓言映射、主题总结 |

### 每节课的三段式阅读（黄金标准）
每段精读前加**微预测任务**（1 句引导），避免被动阅读：
```
Pre-reading: "读之前猜猜这段话会说什么？"
While-reading: 原文精读 + 注释
Post-reading: "你发现了吗？" + 词汇检索
```

### 口语三阶段产出
```
Mechanical → Controlled → Free
用句型框架 → 模仿示范回答 → 开放讨论
```

## 三、历史人物映射表（新增）

每节课需在文化注释中提及，导读课集中呈现：

| 动物/角色 | 历史映射 | 备注 |
|-----------|---------|------|
| Old Major | 马克思/列宁 | 革命理论创始人，提出意识形态 |
| Napoleon | 斯大林 | 篡权、大清洗、个人崇拜、修改历史 |
| Snowball | 托洛茨基 | 理想主义者、被驱逐、被污名化为"叛徒" |
| Squealer | 莫洛托夫/宣传机器 | 为暴政辩护的舆论工具、篡改数据 |
| Boxer | 工人阶级/普罗大众 | 被剥削至死仍忠诚 |
| Clover | 善良但软弱的民众 | 看到不公但无力反抗 |
| Benjamin | 知识分子的犬儒主义 | 看透一切但选择沉默 |
| Moses | 俄罗斯东正教会 | "Sugarcandy Mountain" = 宗教天堂 |
| Mr. Jones | 沙皇尼古拉二世 | 无能腐败的旧统治者 |
| Pilkington | 英美资本主义 | 表面中立实则自私 |
| Frederick | 纳粹德国 | 狡诈、背信弃义 |
| Battle of Cowshed | 俄国内战 | 革命保卫战 |
| Battle of Windmill | 二战/斯大林格勒 | 惨胜但代价巨大 |

## 四、全书文学元素追踪（新增）

### "Beasts of England" 的跨章追踪
这是全书最核心的重复性文学元素，需逐课标注：
- Ch.I: 由 Old Major 首次唱出（相当于《国际歌》）
- Ch.II-VI: 每次会议结束必唱，象征革命理想
- Ch.VII: 被 Napoleon 正式废除，代之以赞颂 Napoleon 的诗
- Ch.X: 被动物们秘密哼唱，象征地下抵抗

### 七诫被逐条篡改的追踪表（视觉化工具）
需在课程中设计可追踪的"七诫修改记录"：
| 原版七诫 | 被修改版 | 修改章节 |
|----------|---------|---------|
| 1. 两脚行走的是敌人 | 未修改 | — |
| 2. 四脚行走的是朋友 | 未修改 | — |
| 3. 不得穿衣服 | 未修改 | — |
| 4. 不得睡床 | 不得睡床**铺被单** | Ch.VI |
| 5. 不得饮酒 | 不得饮酒**过量** | Ch.VIII |
| 6. 不得杀生 | 不得杀生**无故** | Ch.VIII |
| 7. 所有动物一律平等 | **但有些动物更平等** | Ch.X |

## 五、课程总览（修正版·11 节课）

每课实际时长 **35-40 分钟**（核心 25 分钟 + 可选拓展 10-15 分钟）。

| 课号 | 章节 | 标题 | 核心词汇量 | 🔵:🟡 比例 | 任务类型 |
|------|------|------|-----------|------------|---------|
| 0005 | 导读 | 走进 Animal Farm | ~8 词 | 5:3 | 信息定位 |
| 0006 | Ch.I | Old Major's Dream | ~15 词 | 8:7 | 信息定位 |
| 0007 | Ch.II | The Rebellion | ~15 词 | 8:7 | 信息定位 |
| 0008 | Ch.III | The Golden Age | ~15 词 | 8:7 | 信息定位 |
| 0009 | Ch.IV | The Battle of the Cowshed | ~15 词 | 8:7 | 推断理解 |
| 0010 | Ch.V | Napoleon's Coup | ~18 词 | 9:9 | 推断理解 |
| 0011 | Ch.VI | The Windmill | ~15 词 | 8:7 | 推断理解 |
| 0012 | Ch.VII | The Purge | ~18 词 | 9:9 | 推断理解 |
| 0013 | Ch.VIII | The Battle of the Windmill | ~18 词 | 9:9 | 批判评价 |
| 0014 | Ch.IX | Boxer's Fall | ~15 词 | 8:7 | 批判评价 |
| 0015 | Ch.X | The Final Transformation | ~15 词 | 8:7 | 批判评价 |

## 六、每节课的标准结构（修正版）

### 0. Hero 区域（~1 min）
- 标题 + emoji + 副标题
- 元信息（⏱ 35-40 分钟、所属系列、难度标签）
- "返回主页"链接

### 1. 🎬 本章概览（3 min）
- **读前激活**："在读之前，猜猜这章的关键冲突是什么？"
- 中文一句话总结本章核心内容
- 故事地图：关键事件时间线
- 本节学习目标（2-3 条，可量化）
- 历史映射提示：这章对应哪段历史？

### 2. 🔍 阅读引导（新增环节，2 min）
每段精读前设置 1 个微预测任务：
> "下面这段里，你会看到动物们第一次______。读到的时候注意观察______。"

### 3. 📖 原文精读（12-15 min）
- 精选本章 3-4 个关键段落
- 每段采用**三段式**：
  - **Pre-reading**：1 句引导问题（激活图式）
  - **While-reading**：原文 + 中文翻译 + 词汇高亮 + 文化注释 + TTS
  - **Post-reading**："你发现了吗？"观察性问题
- 文中生词用 **🔵 必会 / 🟡 认识** 双色高亮

### 4. 🔑 关键词汇（8-10 min）—— 增加检索练习
- 15-18 个本章核心词汇/短语
- 每个词：
  ```
  🔵/🟡 单词 [音标] 🔊
  原文例句（文章中出现的句子）
  中文释义
  ```
- **检索练习（新增）：** 词汇列表下方设置 "遮释义→回忆" 环节：
  > "不看中文，你能说出下面这些词的意思吗？—— [列表只展示英文]"
  点击展开答案。

### 5. 💬 口语练习（10-12 min）—— 三阶段结构
- **Mechanical（句型框架）：** "I think _____ because the text says _____."
- **Controlled（示范回答）：** 提供一个 model response → 学生模仿
- **Free（开放讨论）：** 2-3 个自由讨论题
- **跟读段落：** 带节奏标记（/ 停顿处）+ TTS 音频
- **AI 陪练 Prompt：** 可复制给元宝 AI 的对话模板

### 6. 📝 课后练习（默认展开 2 个核心练习）
- **词汇填空**（5 题，本章核心词）
- **阅读理解选择题**（3 题）
- 写作任务（用 3-5 个新学的词写一段话）→ 折叠可选

### 7. 🏠 底部导航
- 返回主页 + 上一课 / 下一课 链接
- `<script src="../shared/lesson-tools.js"></script>`

## 七、每章关键词汇表（修正版·含学术审查修正）

### Lesson 0005 — 导读课
| 词汇 | 等级 | 说明 |
|------|------|------|
| allegory | 🔵 | 寓言 |
| satire | 🟡 | 讽刺 |
| rebellion | 🔵 | 造反 |
| tyranny | 🔵 | 暴政 |
| comrades | 🔵 | 同志们 |
| revolution | 🟡 | 革命 |
| propaganda | 🟡 | 宣传 |
| manifesto | 🔵 | 宣言 |

### Lesson 0006 — Chapter I: Old Major's Dream
| 词汇 | 等级 | 说明 |
|------|------|------|
| comrades | 🔵 | 同志们（全书高频称呼） |
| slavery | 🔵 | 奴隶制（核心主题词） |
| rebellion | 🔵 | 造反（本章点题） |
| miserable | 🟡 | 悲惨的 |
| laborious | 🟡 | 辛苦的 |
| ensconced | 🟡 | 安坐、安顿 |
| majestic | 🟡 | 威严的 |
| benevolent | 🟡 | 慈祥的 |
| cynical | 🟡 | 愤世嫉俗的 |
| tremendous | 🔵 | 巨大的、惊人的 |
| steady | 🟡 | 稳定的、可靠的 |
| manifest | 🔵 | 明确宣告（manifesto 的动词形式） |
| tyranny | 🔵 | 暴政 |
| Beasts of England | 🔵 | 《英格兰之兽》（革命歌曲名） |
|*slogan* | 🟡 | 口号 |

### Lesson 0007 — Chapter II: The Rebellion
| 词汇 | 等级 | 说明 |
|------|------|------|
| Animalism 🔴NEW | 🔵 | 动物主义（意识形态核心） |
| rebellion | 🔵 | 造反 |
| expel | 🔵 | 驱逐 |
| elaborate | 🔵 | 精心阐述 |
| vivacious | 🟡 | 活泼的、活跃的 |
| persuasive | 🔵 | 有说服力的 |
| abolish | 🔵 | 废除 |
| principle | 🔵 | 原则 |
| resolution | 🔵 | 决议 |
| counteract | 🟡 | 对抗、抵制 |
| apathy | 🟡 | 冷漠 |
| treachery | 🟡 | 背叛 |
| Seven Commandments | 🔵 | 七诫 |
| Sugarcandy Mountain | 🟡 | 糖果山（宗教寓言） |
|*expulsion* | 🟡 | 驱逐（名词） |

### Lesson 0008 — Chapter III: The Golden Age
| 词汇 | 等级 | 说明 |
|------|------|------|
| harvest | 🔵 | 收获 |
| toil | 🔵 | 辛苦劳作 |
| motto | 🔵 | 座右铭（"I will work harder"） |
| **Four legs good, two legs bad** 🔴NEW | 🔵 | 全书最著名的口号之一 |
| supervise | 🟡 | 监督、管理 |
| admiration | 🔵 | 钦佩 |
| voluntary | 🟡 | 自愿的（出现频率低） |
| parasitical | 🟡 | 寄生的 |
| literacy | 🟡 | 读写能力（扫盲运动） |
| hoist→🔴从 Ch.II 移来 | 🟡 | 升起（旗帜） |
| committees | 🟡 | 委员会 |
| resolution | 🟡 | 决议（复现词） |
|*dignity* | 🟡 | 尊严 |
|*clever* | 🟡 | 聪明的 |
|*leadership* | 🟡 | 领导地位 |

### Lesson 0009 — Chapter IV: The Battle of the Cowshed
| 词汇 | 等级 | 说明 |
|------|------|------|
| invasion | 🔵 | 入侵 |
| repulse | 🟡 | 击退 |
| valor | 🟡 | 英勇 |
| propaganda | 🔵 | 宣传 |
| distorted | 🟡 | 扭曲的 |
| circulate | 🟡 | 传播 |
| neighbouring | 🟡 | 邻近的 |
| monument | 🟡 | 纪念碑 |
|*cowshed* | 🟡 | 牛棚 |
|*defensive* | 🔵 | 防御的 |
|*tactics* | 🟡 | 战术 |
|*heroism* | 🟡 | 英雄主义（Snowball 此时被视为英雄——注意这个说法会变哦！） |
|*rumour* | 🟡 | 谣言 |
|*cannibalism* | 🟡 | 同类相食（人类散布的谣言） |
|*triumph* | 🟡 | 胜利 |

### Lesson 0010 — Chapter V: Napoleon's Coup
| 词汇 | 等级 | 说明 |
|------|------|------|
| coup | 🔵 | 政变（本章标题词） |
| consolidate | 🔵 | 巩固（权力） |
| propaganda | 🔵 | 宣传（复现词） |
| controversy | 🔵 | 争论（风车之争） |
| dispute | 🔵 | 争执 |
| banish/exile | 🟡 | 放逐（Snowball 被驱逐） |
| usurp | 🟡 | 篡权 |
| abolish | 🟡 | 废除（会议被取消） |
|*Mollie* 🔴NEW | 🟡 | 莫丽（叛逃的白色母马）——涉及"革命 vs 个人欲望"主题 |
|*windmill* 🔴NEW | 🔵 | 风车（本章核心冲突） |
|*enormous* | 🟡 | 巨大的（狗） |
|*slogan* | 🟡 | 口号 |
|*committee* | 🟡 | 委员会（替代了全体会议） |
|*scheme* | 🟡 | 方案、计划 |
|*innovation* | 🟡 | 创新（Snowball 的各项计划） |
|*vote* | 🟡 | 投票（最终被取消） |
|*four legs good* | 🔵 | 四腿好（被羊反复喊的口号） |
|*ratify* | 🟡 | 批准 |

### Lesson 0011 — Chapter VI: The Windmill
| 词汇 | 等级 | 说明 |
|------|------|------|
| sabotage | 🔵 | 蓄意破坏（Snowball 被指控） |
| exploitation | 🔵 | 剥削 |
| ration | 🔵 | 配给、定量 |
| override | 🟡 | 凌驾于……之上 |
| trade | 🔵 | 交易（与人类贸易） |
| consent | 🟡 | 同意（表面的） |
| deceive | 🟡 | 欺骗 |
| policy | 🔵 | 政策 |
| sacrifice | 🔵 | 牺牲 |
|*commandments amended* | 🔵 | 诫命被篡改（第七条："不得饮酒 → 不得饮酒过量"） |
|*categorically* | 🟡 | 明确地、断然地 |
|*unanimous* | 🟡 | 一致同意的（虚假的")" |
|*arrangement* | 🟡 | 安排 |
|*reduction* | 🟡 | 减少（被重新定义为"重新调整"） |
|*strictly voluntary* | 🔵 | 严格自愿的（反讽——不自愿就扣口粮） |

### Lesson 0012 — Chapter VII: The Purge
| 词汇 | 等级 | 说明 |
|------|------|------|
| purge | 🔵 | 清洗（本章标题词） |
| confess | 🔵 | 坦白、认罪（被迫的） |
| execute | 🔵 | 处决 |
| terror | 🔵 | 恐怖 |
| famine | 🔵 | 饥荒 |
| conceal | 🔵 | 隐瞒 |
| rebel | 🟡 | 反叛（名词/动词） |
| infanticide | 🟡 | 杀婴（人类散布的谣言） |
|*torture* | 🟡 | 折磨 |
|*treason* | 🔵 | 叛国（Snowball 被污蔑为叛徒） |
|*brainwash* | 🟡 | 洗脑 |
|*slay* | 🟡 | 杀戮（过去式 slew） |
|*desperate* | 🟡 | 绝望的 |
|*starvation* | 🔵 | 饥饿 |
|*Beasts of England abolished* | 🔵 | 《英格兰之兽》被废除（重大转折） |
|*re-education* | 🟡 | 再教育 |
|*pulverised* | 🟡 | 粉碎的 |

### Lesson 0013 — Chapter VIII: The Battle of the Windmill
| 词汇 | 等级 | 说明 |
|------|------|------|
| forgery 🔴NEW | 🔵 | 伪造（假钞事件） → 替代原设计的"more equal"（应在 Ch.X） |
| explosives 🔴NEW | 🔵 | 炸药（风车被炸毁） |
| bombard | 🟡 | 轰炸 |
| demolish | 🔵 | 摧毁、拆毁 |
| blast | 🟡 | 爆炸 |
| deception | 🔵 | 欺骗（Frederick 的背叛） |
| whisky 🔴NEW | 🟡 | 威士忌（Napoleon 醉酒事件） |
| propaganda | 🔵 | 宣传（复现词） |
| retribute | 🟡 | 报复 |
|*artillery* | 🟡 | 大炮（人类带来的） |
|*feast* | 🟡 | 盛宴 |
|*speeches* | 🟡 | 演讲 |
|*titles* | 🟡 | 称号（Napoleon 的个人崇拜头衔） |
|*retinue* | 🟡 | 随从（狗的随扈） |
|*cockerel* | 🟡 | 小公鸡（Napoleon 的号手） |
|*gun salute* | 🟡 | 鸣枪致敬 |
|*birthday* | 🟡 | 生日（个人崇拜的一部分） |

### Lesson 0014 — Chapter IX: Boxer's Fall
| 词汇 | 等级 | 说明 |
|------|------|------|
| overwork 🔴NEW | 🔵 | 过度劳作（替代"martyr"——Boxer 不是殉道者，是被过度剥削的受害者） |
| exploitation | 🔵 | 剥削（复现词） |
| deception 🔴NEW | 🔵 | 欺骗（Boxer 被卖往屠马场的真相被掩盖） |
| knacker | 🟡 | 屠马商（关键文化词） |
| collapse | 🔵 | 崩溃、倒下 |
| pension | 🟡 | 养老金（从未兑现的承诺） |
| ambition | 🟡 | 抱负 |
|*retirement* | 🟡 | 退休（虚假承诺） |
|*poultice* | 🟡 | 膏药（Clover 给 Boxer 敷药） |
|*vet* | 🟡 | 兽医（被 Napoleon 宣称请来了"兽医"） |
|*superannuated* | 🟡 | 老迈的、退休的 |
|*stall* | 🟡 | 马厩 |
|*loyalty* | 🔵 | 忠诚 |
|*betrayal* | 🔵 | 背叛 |
|*farewell* | 🟡 | 告别 |

### Lesson 0015 — Chapter X: The Final Transformation
| 词汇 | 等级 | 说明 |
|------|------|------|
| indistinguishable | 🔵 | 难以区分的（终局关键——猪和人已无法分辨） |
| transformation | 🔵 | 转变（猪→人的完全转变） |
| *more equal* 🔴从 Ch.VIII 移来 | 🔵 | 更平等（全书最著名的反讽："有些动物更平等"） |
| prosperity | 🟡 | 繁荣（虚假的） |
|*seven commandments reduced* | 🔵 | 七诫被压缩为一条 |
|*tyranny returns* | 🔵 | 暴政回归 |
|*card playing* | 🟡 | 打牌（Napoleon 与人类打牌——对应德黑兰会议） |
|*walking on hind legs* | 🔵 | 用后腿行走（猪的最終蜕变） |
|*whip* | 🟡 | 鞭子（猪拿起了鞭子） |
|*bargain* | 🟡 | 讨价还价 |
|*forgotten* | 🟡 | 被遗忘的（Snowball、Boxer 都被遗忘） |
|*secretly hums* | 🟡 | 秘密哼唱（"Beasts of England" 在地下流传） |
|*Manor Farm* | 🔵 | 庄园农场（回到起点——农场改回了原名） |
|*indistinguishable* | 🟡 | 无法分辨的（人猪不分） |

## 八、Orwell 写作风格教学要点（新增）

导读课和第 10 课（Ch.IX-X）需讲解：

1. **简洁清晰（clear, lucid prose）**：看似儿童读物，实为政治讽刺
2. **反讽与讽刺（irony & satire）**：通过动物视角揭露人类政治
3. **寓言体裁（fable）**：用简单故事承载深刻政治评论
4. **第三人称有限视角**：读者知道动物的想法，但不知道猪的真实意图
5. **象征与预表（symbolsim & foreshadowing）**：Boxer 倒下预示无产阶级的牺牲

## 九、TTS 音频方案（修正版·技术审查修正）

### 目录结构
```
lessons/assets/audio/animal-farm/
├── 0005-intro-orwell.mp3
├── 0005-key-allegory.mp3
├── 0006-key-comrades.mp3
├── 0006-passage-opening.mp3
├── 0006-shadowing.mp3
├── ...
```

### 命名规范
`{lessonId}-{type}-{semantic-name}.mp3`
- `0005` = 课程 ID
- `key` = 关键词 / `passage` = 精选段落 / `shadowing` = 跟读示范
- `semantic-name` = 英文语义名（单词本身或段落标识）

### 生成方式
使用现成脚本：`scripts/gen-af-audio.py`（已写好），支持 `--all` 批量并行。

## 十、HTML 课程页面规范

- 引用 `../shared/theme.css` 作为主题样式
- 引用 `../shared/lesson-tools.js`（在 `</body>` 前）
- 在页面内联定义 `playAudio()` 函数（后续可提取到共享文件）
- 音频路径：`assets/audio/animal-farm/{lessonId}-{type}-{name}.mp3`
- 使用现有关键词汇 CSS 类名（`.en-big`、`.word-cell`、`.phrase-en`）
- 课后练习核心部分**默认展开**（不藏在 `<details>` 中）
- tags 包含：`["英文原著", "Animal Farm", "精读", "Ch.I/II/..."]`

## 十一、设计注意事项

1. ⏱ 实际时长约 35-40 分钟，标注为 35-40 / 核心 25
2. 🗣️ 口语练习采用 Mechanical → Controlled → Free 三阶段
3. 🧠 词汇模块加检索练习（遮释义→回忆→确认）
4. 📖 每段精读前加微预测任务
5. 📝 课后练习核心部分默认展开
6. 🎧 TTS 音频路径统一从 `assets/audio/animal-farm/` 引用
7. 🏛️ 每课标注历史映射关系（表格形式）
8. 🎵 "Beasts of England" 和七诫修改作为跨章追踪线索
9. 🔵:🟡 比例控制在 8:7 到 9:9 之间
10. 课后练习的写作/拓展部分可以折叠，但词汇填空和阅读理解默认可见
