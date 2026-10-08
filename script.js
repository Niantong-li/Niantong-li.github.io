const translations = {
  zh: {
    skip: '跳至主要内容', navExperience: '经历', navResearch: '研究', navContact: '联系',
    portraitAlt: '李念潼个人肖像',
    heroIntro: '你好，我是李念潼 Natalia。是一位毕业于中央圣马丁，拥有4年影像创作与3年艺术设计背景的多模态模型数据与评测研究员。目前就职于 Alibaba，服务 Qwen 团队，目前研究聚焦于多模态模型的数据训练与评测。<br><br>我的工作处在创作与技术的交叉点：将审美、叙事、镜头语言和风格表现转化为清晰的评测标准与可执行的数据策略。致力于将艺术创作者的专业判断转化为模型可学习、可度量、可持续提升的能力。',
    viewResearch: '查看研究成果', getInTouch: '联系我', directContact: '联系方式', location: '上海 / 杭州',
    aboutLabel: '关于', aboutTitle: '艺术训练带来判断力。<br>数据体系让判断可规模化。',
    aboutP1: '我毕业于伦敦艺术大学中央圣马丁艺术与设计学院，兼具 4 年影像创作与 3 年艺术设计背景。目前研究聚焦于多模态模型的数据训练与评测。',
    aboutP2: '我的工作处在创作与技术的交叉点：将审美、叙事、镜头语言和风格表现转化为清晰的评测标准与可执行的数据策略。',
    years: ' 年', statArt: '艺术多模态背景', statData: '定向数据推动采集', statWin: '模型能力胜率提升', statDownloads: 'Benchmark 下载',
    experienceLabel: '经历', experienceTitle: 'Experience', experienceIntro: '围绕评测体系、模型问题探查与定向数据供给，构建持续高效的数据闭环。', experienceKittyAlt: '和粉色发财方块坐在一起的 Hello Kitty',
    filmDate: '2025.12 — 至今', aliShanghai: '阿里巴巴 · 上海', filmDesc: '联合北电齐虹导演与虎鲸文娱，建立影视工业级生成视频评测标准。',
    filmOne: '<strong>1,000</strong> 条专业评测数据', filmTwo: '<strong>400</strong> 部电影、20 种类型片', filmThree: '<strong>100+</strong> 专业艺术家生态', filmFour: '支持模型达到业界 <strong>Top 3</strong>',
    qwenDate: '2025.06 — 至今', qwenRole: 'Qwen-Image 图像模型<br>评测与数据研究员', qwenDesc: '主导“评测—探查—供给”数据闭环，持续推动基础模型能力提升。',
    qwenOne: '评测精准定位 <strong>30+</strong> 模型薄弱子项', qwenTwo: '定向构造训练数据，模型持续提升', qwenThree: '国内第一梯队水平',
    bytedanceBeijing: '字节跳动 · 北京', doubaoRole: 'Seed大模型数据与评测研究员', doubaoDesc: '搭建文生图与图像编辑评测体系，支持 Seedream 模型迭代。',
    doubaoOne: '<strong>30+</strong> 文生图标注项目', doubaoTwo: '<strong>120</strong> 人数据标注团队', doubaoThree: '<strong>500 万+</strong> 多模态训练数据', doubaoFour: '负责准确率、产量与人效',
    researchLabel: '代表研究', researchTitle: '代表研究', exploreProject: '查看项目详情',
     qwenBenchIntro: '从生成走向创作——全球首个创作者导向的全面文生图评测基准，联合 80+ 影视、设计与艺术领域专业人士共同构建。',
     qwenbenchKittyAlt: '戴着光环和翅膀的 Hello Kitty',
     benchDl: '全网下载 100W+',
     qwenBenchPosterAlt: 'Qwen-Image-Bench 学术海报', qwenBenchPosterCap: '学术海报 · 完整评测框架',
     qwenBenchSocialAlt: 'Qwen-Image-Bench 中文宣传海报', qwenBenchSocialCap: '中文宣传海报 · 创作者导向评测基准',
     exploreBench: '查看项目', exploreFilm: '查看项目',
     filmBenchIntro: '面向电影工业的生成视频评测基准，联合北京电影学院齐虹导演与虎鲸文娱，以真实影视工业标准衡量生成视频。',
     filmbenchKittyAlt: '使用粉色笔记本电脑的 Hello Kitty',
     filmBenchSub: '影视创作级视频生成评测基准',
     filmBenchTag: '北京电影学院齐虹教授导演团队 × 虎鲸文娱 Moku 实验室 × 晓天衡宇 联合出品',
     filmIntroText: '<p>当 AI 视频生成模型进入专业影视创作流，AI 生成短剧甚至登上戛纳电影节舞台时，我们该如何评测一个视频模型的<em>真实影视创作能力</em>？</p><p>目前业界评测基准大多局限于基础运动连贯性与简单提示词对齐。然而真实影视制作中，模型需要的是<em>视听语言美学知识</em>、<em>严谨的时序空间逻辑</em>以及<em>精准的角色表演控制能力</em>。</p><p>FilmBench 是影视创作级评测基准，包含 <em>35 个细粒度视听语言考点</em>，并配套开源视听语言自动化评估算子。</p>',
     filmStat1: '细粒度视听语言考点', filmStat2: '真实电影', filmStat3: '电影类型片', filmStat4: '三层级维度体系', filmStat5: '与人工评分一致性',
     filmFeatTitle: '核心特色',
     filmFeat1H: '真实影片反向工程 Prompt', filmFeat1P: '每条 Prompt 都来源于精彩影视片库的真实电影镜头。',
     filmFeat2H: '307 影片 × 20 类型片', filmFeat2P: '取自 307 部电影，横跨 20 种电影类型片，覆盖全球电影文化。',
     filmFeat3H: '单镜头 + 多镜头覆盖', filmFeat3P: '600+ 多镜头核心，扩展至约 2,400 镜头组。',
     filmFeat4H: '学院派 3-12-35 三级分类', filmFeat4P: '评测维度植根电影学院视听语言体系，顶尖导演亲自把关。',
     filmFeat5H: '影视级自动评估 Agent', filmFeat5P: '“影视级专家化 Agent”，每个三级维度分别打分（ρ=0.92）。',
     filmFeat6H: '细粒度可诊断性', filmFeat6P: '子指标独立打分 → 短板定位 → 三大瓶颈结论 → 训练数据指引。',
     filmPipelineAlt: 'FilmBench 评测集构建流程图', filmPipelineCap: '评测集构建流程图',
     filmBadgeFilms: '400 部电影 · 20 种类型片',
    qwenProject: 'Qwen-Image-2.0 技术报告核心贡献者，参与打造统一高保真图像生成与精准图像编辑能力的新一代基础模型。', technicalReport: '技术报告',
    benchProject: '全球首个创作者导向的全面图像生成评测基准，由 80+ 影视、设计与艺术专家共同构建。',
    filmProject: '面向电影工业的生成视频评测体系，从运镜、景别、表演、动效、光影和音效等专业维度衡量模型。',
    educationLabel: '教育', educationTitle: 'Education', school: '中央圣马丁艺术与设计学院', degree: '伦敦艺术大学 · 硕士', educationKittyAlt: '坐在书桌前学习的 Hello Kitty', studentCardAlt: '李念潼的伦敦艺术大学学生卡', studentCardCaption: '中央圣马丁 · 学生卡',
    edgeLabel: '独特优势', edgeTitle: '独特优势', edgeIntro: '七年艺术多模态背景，让专业审美判断成为数据与模型之间的接口。',
    edgeOneTitle: '艺术 × 数据', edgeOneBody: '快速识别图像与视频模型质量问题，挖掘能力薄弱点并制定预训练数据策略。',
    edgeTwoTitle: '头部模型经验', edgeTwoBody: '支持国内头部生图模型 Qwen-Image 与豆包 Seedream。',
    edgeThreeTitle: '品牌与叙事', edgeThreeBody: '拥有 4 年品牌营销经验，曾为首届 Inside LVMH 集团管培生，擅长运营与讲故事。',
    contactTitle: '谈谈模型，<br>也谈谈创作。', contactPhoneKittyAlt: '拿着粉色电话的 Hello Kitty', wechatQrAlt: '李念潼的微信二维码', backTop: '回到顶部 ↑'
  }
};

const englishContent = new Map();
document.querySelectorAll('[data-i18n], [data-i18n-html], [data-i18n-alt]').forEach((element) => {
  const key = element.dataset.i18n || element.dataset.i18nHtml || element.dataset.i18nAlt;
  englishContent.set(key, element.dataset.i18nAlt ? element.getAttribute('alt') : element.innerHTML);
});

const languageButtons = document.querySelectorAll('.language-button');

function setLanguage(language) {
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = language === 'zh'
    ? '李念潼 Natalia · 多模态模型数据与评测'
    : 'Niantong Li · Multimodal AI & Creative Evaluation';

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = language === 'zh' ? translations.zh[key] : englishContent.get(key);
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const key = element.dataset.i18nHtml;
    element.innerHTML = language === 'zh' ? translations.zh[key] : englishContent.get(key);
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const key = element.dataset.i18nAlt;
    element.setAttribute('alt', language === 'zh' ? translations.zh[key] : englishContent.get(key));
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
setLanguage('en');

document.querySelectorAll('[data-card-href]').forEach((card) => {
  const openCard = () => {
    const target = card.dataset.cardHref;
    if (target.startsWith('#')) {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(target, '_blank', 'noopener,noreferrer');
    }
  };
  card.addEventListener('click', (event) => {
    if (!event.target.closest('a')) openCard();
  });
  card.addEventListener('keydown', (event) => {
    if (event.target.closest('a')) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openCard();
    }
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 65}ms`;
  revealObserver.observe(element);
});

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav-links a')];
const sectionObserver = new IntersectionObserver((entries) => {
  const visibleSection = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visibleSection) return;
  navLinks.forEach((link) => link.classList.toggle('active', link.hash === `#${visibleSection.target.id}`));
}, { rootMargin: '-20% 0px -65%', threshold: [0, 0.2, 0.5] });
sections.forEach((section) => sectionObserver.observe(section));
