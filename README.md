# SpeakScope · 🎤 英语口语备战系统

从 IAI 2026 英文 oral presentation 出发，用 4 周集中突破会议口语，之后转入长期口语能力提升。每一课都配好了与 AI 陪练（元宝 AI）的配合方案。

## 项目简介

SpeakScope 是**英语口语备战项目**，仿 PaperLesson 结构，纯静态 HTML 网站，通过 GitHub Pages 部署。

- **初始目标**：IAI 2026（第八届工业人工智能国际会议）oral presentation
- **论文**：SCoPE — A Prompting Framework for Chemical Information Extraction
- **学习者画像**：CET-4 水平（阅读无障碍，口语输出卡顿），有 AI 口语陪练
- **策略**：70% 讲稿排练 + 30% Q&A 预演

## 网站结构

```
.
├── index.html                     # 🌐 主页（含倒计时 + 备战路线）
├── shared/
│   └── theme.css                  # 🎨 暖色主题（PaperLesson 同款）
├── data/
│   └── course-catalog.js          # 📋 主页数据源
├── lessons/
│   ├── 0001-课程总览与备战地图.html
│   └── assets/audio/              # 🔊 TTS 音频文件（31 个）
├── reference/
│   ├── scope-keywords.html        # 🔬 SCoPE 论文关键词汇表
│   └── conference-phrases.html    # 🎯 会议高频用语工具箱
└── README.md
```

## 口语训练方法

### 四阶段备战法

| 阶段 | 时间 | 核心任务 | AI 陪练用法 |
|:----|:----|:---------|:-----------|
| ① 稿子落地 | 会前 4-5 周 | 论文内容转英文口头讲稿 | 润色师 + 纠音师 |
| ② 逐段排练 | 会前 2-3 周 | 一段一段练到肌肉记忆 | 模拟观众 + 纠音师 |
| ③ Q&A 预演 | 会前 1 周 | 预判问题、准备答案 | 刁难提问者 |
| ④ 全真彩排 | 会前 3 天 | 计时+录音回听+导师过稿 | 时间管家 + 模拟观众 |

### AI 陪练五种用法

1. 📝 **润色师**：写一段英文讲稿，让 AI 改得更口语化
2. 👂 **纠音师**：读一句话，AI 指出发音问题
3. 🎤 **模拟观众**：完整讲一段，AI 计时+反馈
4. ❓ **刁难提问者**：AI 扮演观众随机提问
5. 📊 **时间管家**：AI 掐时间，反馈哪里超时

## 在线浏览

- **GitHub Pages**: https://zhangs1r.github.io/speakscope/

## 关联项目

- **PaperLesson** (论文精读课程): https://zhangs1r.github.io/paperlesson/
  - SCoPE 论文精读课程（0095-0099）与本项目配套使用
  - 建议先学完 PaperLesson 中的论文理解课程，再进入 SpeakScope 进行口语输出训练

## 技术亮点

- **TTS 音频嵌入**：31 个美式发音音频，点击 🔊 按钮即播，支持暂停
- **课程自包含**：所有学习内容直接放在课程页面中，无需跳转
- **数据驱动主页**：新增课程只需更新 `course-catalog.js`

## 本地预览

```bash
cd /home/zjq/speakscope
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```

## 部署

```bash
cd /home/zjq/speakscope
git add -A
git commit -m "feat: 添加 [课程名]"
git push origin main
# GitHub Actions 自动部署到 Pages
```
