/**
 * shared/lesson-tools.js — SpeakScope localStorage 学习工具
 *
 * 功能：
 *   1. 标记已学 ✅
 *   2. 滚动位置保存/恢复
 *   3. 行内生词收藏 ⭐（自动扫描英文表达加收藏按钮，支持 toggle 和状态持久化）
 *   4. 底部备选收藏按钮（prompt 输入）
 *
 * 所有 localStorage 操作均包裹 try-catch，不会阻塞页面渲染。
 * ============================================================ */

(function () {
  'use strict';

  // 只在 speakscope 域名/路径下运行
  if (!/speakscope/i.test(window.location.hostname) && !/speakscope/i.test(window.location.pathname)) {
    return;
  }

  // ─── 工具函数 ────────────────────────────────────────────────

  /** 安全读取 localStorage，异常时返回默认值 */
  function safeGet(key, fallback) {
    try { const v = localStorage.getItem(key); return v !== null ? v : fallback; }
    catch (_) { return fallback; }
  }

  /** 安全写入 localStorage */
  function safeSet(key, val) {
    try { localStorage.setItem(key, val); } catch (_) {}
  }

  /** 安全解析 JSON */
  function safeParse(str, fallback) {
    try { return JSON.parse(str); } catch (_) { return fallback; }
  }

  /** 获取今天的日期字符串 YYYY-MM-DD（本地时区） */
  function todayStr() {
    var d = new Date();
    return d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
  }

  // ─── Lesson ID 检测 ──────────────────────────────────────────

  function detectLessonId() {
    try {
      var m = window.location.pathname.match(/\/(\d{4})[-/]/);
      if (m) return m[1];

      var t = document.title;
      m = t.match(/第\s*(\d{4})\s*课/);
      if (m) return m[1];

      m = t.match(/\b(\d{4})\b/);
      if (m) return m[1];
    } catch (_) {}
    return null;
  }

  var lessonId = detectLessonId();
  if (!lessonId) return;

  // ─── 1. 标记已学 ─────────────────────────────────────────────

  function getDoneSet() {
    var raw = safeGet('speakscope_done', '[]');
    return new Set(safeParse(raw, []));
  }

  function saveDoneSet(arr) {
    safeSet('speakscope_done', JSON.stringify(arr));
  }

  function isDone() {
    return getDoneSet().has(lessonId);
  }

  function toggleDone() {
    var set = getDoneSet();
    var arr;
    if (set.has(lessonId)) {
      set.delete(lessonId);
      arr = Array.from(set);
      doneBtn.textContent = '✅ 标记为已学';
      doneBtn.classList.remove('done');
    } else {
      set.add(lessonId);
      arr = Array.from(set);
      doneBtn.textContent = '✅ 已学 ✓';
      doneBtn.classList.add('done');
    }
    saveDoneSet(arr);
    recordTally(lessonId);
  }

  function recordTally(id) {
    try {
      var tally = safeParse(safeGet('speakscope_vtally', '{}'), {});
      tally[id] = todayStr();
      safeSet('speakscope_vtally', JSON.stringify(tally));
    } catch (_) {}
  }

  // ─── 2. 滚动位置保存/恢复 ─────────────────────────────────────

  function saveScroll() {
    try {
      localStorage.setItem('speakscope_scroll_' + lessonId, String(window.scrollY));
    } catch (_) {}
  }

  function restoreScroll() {
    try {
      var saved = localStorage.getItem('speakscope_scroll_' + lessonId);
      if (saved !== null) {
        var pos = parseInt(saved, 10);
        if (!isNaN(pos)) {
          setTimeout(function () { window.scrollTo(0, pos); }, 100);
        }
      }
    } catch (_) {}
  }

  // ─── 3. 生词收藏 ──────────────────────────────────────────────

  function getVocabList() {
    return safeParse(safeGet('speakscope_vocab', '[]'), []);
  }

  function saveVocabList(list) {
    safeSet('speakscope_vocab', JSON.stringify(list));
  }

  /** 查找 speakscope_vocab 中 phrase 字段完全匹配的项，返回第一个匹配项或 null */
  function findSavedVocab(text) {
    var list = getVocabList();
    for (var i = 0; i < list.length; i++) {
      if (list[i].phrase === text) {
        return list[i];
      }
    }
    return null;
  }

  /** 删除 speakscope_vocab 中第一条 phrase 匹配的项，返回 true 表示删除了 */
  function deleteVocabByPhrase(text) {
    var list = getVocabList();
    var idx = -1;
    for (var i = 0; i < list.length; i++) {
      if (list[i].phrase === text) {
        idx = i;
        break;
      }
    }
    if (idx === -1) return false;
    list.splice(idx, 1);
    saveVocabList(list);
    return true;
  }

  function saveVocab(phrase, meaning, note) {
    var list = getVocabList();
    list.push({
      id: 'v_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
      lessonId: lessonId,
      phrase: phrase,
      meaning: meaning || '',
      note: note || '',
      timestamp: new Date().toISOString()
    });
    saveVocabList(list);
  }

  /** 显示底部小提示（toast） */
  function showToast(msg, duration) {
    duration = duration || 2000;
    var el = document.createElement('div');
    el.textContent = msg;
    el.style.cssText =
      'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);' +
      'background:#444466;color:#EDEDEE;padding:8px 18px;border-radius:20px;' +
      'font-size:0.85rem;z-index:10000;box-shadow:0 2px 10px rgba(0,0,0,0.3);' +
      'opacity:1;transition:opacity 0.3s ease;';
    document.body.appendChild(el);
    setTimeout(function () {
      el.style.opacity = '0';
      setTimeout(function () { if (el.parentNode) document.body.removeChild(el); }, 300);
    }, duration);
  }

  // ─── 行内收藏按钮 ──────────────────────────────────────────────

  function addInlineVocabButtons() {
    var selectors = '.en-big, .phrase-en, .word-cell, .scene-en, .expression-card .en-big';
    var elements = document.querySelectorAll(selectors);
    if (!elements.length) return;

    // 注入按钮样式（只一次）
    if (!document.getElementById('ss-inline-vocab-style')) {
      var style = document.createElement('style');
      style.id = 'ss-inline-vocab-style';
      style.textContent =
        '.ss-vocab-inline-btn{' +
        'display:inline-flex;align-items:center;justify-content:center;' +
        'width:22px;height:22px;padding:0;margin:0 0 0 4px;' +
        'border:1px solid var(--border);background:var(--paper);border-radius:4px;' +
        'cursor:pointer;font-size:12px;line-height:1;' +
        'vertical-align:middle;transition:all 0.15s;' +
        '}' +
        '.ss-vocab-inline-btn:hover{' +
        'background:var(--accent-dim);border-color:var(--accent-light);' +
        '}' +
        '.ss-vocab-inline-btn.saved{' +
        'background:rgba(90,158,111,0.12);border-color:var(--success);' +
        '}';
      document.head.appendChild(style);
    }

    elements.forEach(function (el) {
      // 跳过已装饰的元素
      if (el.querySelector('.ss-vocab-inline-btn') ||
          (el.nextElementSibling && el.nextElementSibling.classList.contains('ss-vocab-inline-btn'))) {
        return;
      }

      var text = (el.textContent || '').trim();
      if (!text || !/[a-zA-Z]/.test(text)) return;

      // 页面加载时检查是否已收藏
      var existing = findSavedVocab(text);
      var isSaved = existing !== null;

      var btn = document.createElement('button');
      btn.className = 'ss-vocab-inline-btn';
      if (isSaved) {
        btn.textContent = '✅';
        btn.classList.add('saved');
        btn.title = '点击取消收藏';
      } else {
        btn.textContent = '⭐';
        btn.title = '收藏此表达';
      }
      btn.setAttribute('aria-label', '收藏此表达');

      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        var currentlySaved = btn.classList.contains('saved');

        if (currentlySaved) {
          // 已收藏 → 删除
          if (deleteVocabByPhrase(text)) {
            btn.textContent = '⭐';
            btn.classList.remove('saved');
            btn.title = '收藏此表达';
            showToast('🗑️ 已取消收藏 "' + text + '"');
          }
        } else {
          // 未收藏 → 保存
          saveVocab(text, '', '行内收藏');
          btn.textContent = '✅';
          btn.classList.add('saved');
          btn.title = '点击取消收藏';
          showToast('✅ 已收藏 "' + text + '"');
        }
      });

      el.parentNode.insertBefore(btn, el.nextSibling);
    });
  }

  // ─── 4. 构建 UI ──────────────────────────────────────────────

  var doneBtn;

  function buildUI() {
    var footer = document.querySelector('.footer-nav');
    if (!footer) return;

    var toolbar = document.createElement('div');
    toolbar.className = 'ss-lesson-tools';
    toolbar.style.cssText =
      'display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;padding:12px 16px;' +
      'background:var(--paper);border:1px solid var(--border-light);' +
      'border-radius:8px;align-items:center;';

    // ── 标记已学按钮 ──
    doneBtn = document.createElement('button');
    doneBtn.id = 'ss-done-btn';
    doneBtn.style.cssText =
      'padding:8px 16px;border:1px solid var(--border);border-radius:6px;' +
      'cursor:pointer;font-size:0.9rem;background:var(--paper);' +
      'transition:all 0.15s;';
    doneBtn.onmouseover = function () { this.style.borderColor = 'var(--accent-light)'; };
    doneBtn.onmouseout = function () { this.style.borderColor = 'var(--border)'; };
    doneBtn.onclick = toggleDone;

    if (isDone()) {
      doneBtn.textContent = '✅ 已学 ✓';
      doneBtn.classList.add('done');
      doneBtn.style.background = 'var(--accent-dim)';
      doneBtn.style.borderColor = 'var(--accent-light)';
    } else {
      doneBtn.textContent = '✅ 标记为已学';
    }

    toolbar.appendChild(doneBtn);

    // ── 底部备选收藏按钮（prompt 对话框） ──
    var vocabBtn = document.createElement('button');
    vocabBtn.id = 'ss-vocab-btn';
    vocabBtn.textContent = '⭐ 收藏自定义表达';
    vocabBtn.style.cssText =
      'padding:8px 16px;border:1px solid var(--border);border-radius:6px;' +
      'cursor:pointer;font-size:0.9rem;background:var(--paper);' +
      'transition:all 0.15s;';
    vocabBtn.onmouseover = function () { this.style.borderColor = 'var(--accent-light)'; };
    vocabBtn.onmouseout = function () { this.style.borderColor = 'var(--border)'; };
    vocabBtn.onclick = function () {
      var phrase = prompt('请输入要收藏的英语表达：');
      if (!phrase || !phrase.trim()) return;
      phrase = phrase.trim();
      var meaning = prompt('请输入中文释义（可选）：');
      saveVocab(phrase, meaning || '', '手动收藏');
      showToast('✅ 已收藏 "' + phrase + '"');
    };
    toolbar.appendChild(vocabBtn);

    footer.parentNode.insertBefore(toolbar, footer);
  }

  // ─── 5. 初始化 ────────────────────────────────────────────────

  function init() {
    buildUI();
    addInlineVocabButtons();
    restoreScroll();

    setInterval(saveScroll, 3000);

    window.addEventListener('beforeunload', saveScroll);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
