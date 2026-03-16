import { inject } from "@vercel/analytics";
import "./styles.css";

inject({
  mode: import.meta.env.PROD ? "production" : "development",
});

const translations = {
  en: {
    meta: {
      title: "Beyond Perception | Custom AI Automation, Software Development & IT Services",
      description:
        "Beyond Perception provides custom AI automation, tailored software development, workflow integration, and IT services for businesses that need smarter operations.",
      keywords:
        "Beyond Perception, custom AI automation, AI automation services, custom software development, workflow automation, business systems, AI solutions, IT services, tailored software, operational intelligence",
    },
    brand: {
      name: "Beyond Perception",
      tagline: "Intelligent Systems Studio",
      homeAria: "Beyond Perception home",
    },
    navigation: {
      menuAria: "Open menu",
      solutions: "Solutions",
      services: "Services",
      industries: "Industries",
      work: "Work",
      about: "About",
      contact: "Contact",
      demo: "Book a Demo",
    },
    language: {
      switcher: "Language switcher",
    },
    hero: {
      eyebrow: "Custom AI Automation / Software Development / Business IT Services",
      title: "Beyond Perception builds custom AI automation and IT systems around your business.",
      body:
        "We design and build custom AI automation, tailored software, and business IT systems for growing companies, turning real internal workflows into scalable tools, apps, and operating infrastructure.",
      primaryCta: "Book a Demo",
      secondaryCta: "Explore Solutions",
      metrics: {
        time: "Workflow Time Saved",
        platforms: "Connected Platforms",
        launch: "Launch Window",
        launchUnit: "Weeks",
      },
      core: {
        label: "AI CONTROL CORE",
        title: "Operational Intelligence",
        body: "Reviews / Approvals / Dashboards / Messaging / Integrations",
      },
      orbits: {
        reviews: "Review Automation",
        ops: "Internal Ops",
        portals: "Smart Portals",
        assistants: "AI Assistants",
      },
    },
    capabilities: {
      eyebrow: "Core Capabilities",
      title: "Built for companies that need customized systems, not off-the-shelf software.",
      body:
        "Four focused capabilities turn fragmented tools, repetitive workflows, and disconnected software into fully custom operating systems.",
      cards: {
        automation: {
          title: "AI Automation",
          body: "Automate repetitive business tasks, triggers, notifications, approvals, and follow-up logic.",
        },
        systems: {
          title: "Custom Business Systems",
          body: "Design custom internal tools for CRM, HR, approvals, client workflows, dashboards, and operating visibility.",
        },
        apps: {
          title: "Smart Apps",
          body: "Ship customer and team-facing portals, web apps, and mobile-ready experiences with clear business purpose.",
        },
        integration: {
          title: "Integration Design",
          body: "Connect platforms, consolidate data, and turn isolated tasks into one coherent workflow chain.",
        },
      },
    },
    process: {
      eyebrow: "Execution Model",
      title: "From manual work to intelligent operations.",
      body: "We keep the process commercial, structured, and measurable from discovery to rollout.",
      steps: {
        understand: {
          title: "Understand your workflow",
          body: "Map current operations, identify manual bottlenecks, and isolate high-value automation targets.",
        },
        design: {
          title: "Design the automation logic",
          body: "Define rules, triggers, handoffs, and exception handling that fit how the business already runs.",
        },
        build: {
          title: "Build your custom solution",
          body: "Develop the app, workflow, dashboards, integrations, or assistant required for execution.",
        },
        scale: {
          title: "Launch, optimize, scale",
          body: "Deploy, observe adoption, refine edge cases, and extend automation to adjacent business functions.",
        },
      },
    },
    systems: {
      eyebrow: "Solution Views",
      title: "Scenario-based systems, not generic feature lists.",
      body: "Each solution area is framed around a concrete operational use case and the workflow behind it.",
      tablistAria: "Solution categories",
      tabs: {
        reviews: "Review Automation",
        operations: "Internal Operations",
        approval: "Approval Workflows",
        portals: "Smart Portals",
        assistant: "AI Assistants",
      },
      panes: {
        reviews: {
          chip: "Customer Communication",
          title: "Automated review collection with internal escalation logic",
          card1: { label: "Trigger", body: "Order completed" },
          card2: { label: "Workflow", body: "Message sent, sentiment scored, follow-up routed" },
          card3: { label: "Protect the brand", body: "Low-rating responses are diverted to internal recovery before public posting." },
        },
        operations: {
          chip: "Operations Control",
          title: "Internal workflows that remove admin friction across the team",
          card1: { label: "Modules", body: "Attendance, timesheets, notifications, reporting" },
          card2: { label: "Visibility", body: "Live status boards replace scattered updates and manual chasing." },
          card3: { label: "Outcome", body: "Faster approvals, cleaner records, fewer dropped internal tasks." },
        },
        approval: {
          chip: "Approval Logic",
          title: "Structured routing for leave, budgets, onboarding, and operational sign-off",
          card1: { label: "Routing", body: "Rules-based approval chains with escalation thresholds" },
          card2: { label: "Audit Trail", body: "Every handoff, decision, and exception stays visible in one place." },
          card3: { label: "Outcome", body: "Manual follow-up drops while accountability improves across departments." },
        },
        portals: {
          chip: "Portal Experience",
          title: "Client and staff portals that centralize forms, updates, and next actions",
          card1: { label: "Access", body: "Secure dashboards for documents, tasks, messages, and progress visibility" },
          card2: { label: "Automation", body: "Form submissions trigger downstream actions automatically." },
          card3: { label: "Outcome", body: "Less email confusion and stronger client experience across service delivery." },
        },
        assistant: {
          chip: "AI Support Layer",
          title: "Assistants that classify requests, answer business questions, and surface data",
          card1: { label: "Channels", body: "Web chat, internal workspaces, email intake, service desks" },
          card2: { label: "Capabilities", body: "Summaries, lookups, triage, routing, and context-aware responses" },
          card3: { label: "Outcome", body: "Teams spend less time searching and more time executing decisions." },
        },
      },
    },
    visuals: {
      eyebrow: "System Views",
      title: "Approvals, tasks, and follow-up running in one system.",
      body: "From intake to routing to completion, every step stays visible and moves without manual chasing.",
      cards: {
        dashboard: {
          alt: "Automation dashboard preview",
          chip: "Operations Console",
          title: "Leave approvals, service updates, and internal tasks managed from a single workspace.",
          body: "Owners, statuses, and next actions stay clear across the whole team.",
        },
        flow: {
          alt: "Workflow automation map preview",
          chip: "Workflow Engine",
          title: "Submissions trigger routing, reminders, escalation, and updates automatically.",
          body: "The process keeps moving without forwarding emails or checking progress by hand.",
        },
      },
    },
    industries: {
      eyebrow: "Industry Fit",
      title: "Designed for growing teams across real operating environments.",
      cards: {
        services: {
          title: "Professional Services",
          body: "Intake, approvals, reporting, delivery tracking, and client communication flows.",
        },
        retail: {
          title: "Retail",
          body: "Order handling, review systems, support automation, and inventory-linked notifications.",
        },
        health: {
          title: "Healthcare & Clinics",
          body: "Administrative workflows, bookings, reminders, forms, and internal coordination layers.",
        },
        hospitality: {
          title: "Hospitality",
          body: "Guest communication, service recovery, scheduling, and operational handoff management.",
        },
        logistics: {
          title: "Logistics",
          body: "Movement visibility, request routing, milestone alerts, and exception handling systems.",
        },
        education: {
          title: "Education & Training",
          body: "Enrollment, learner progress, communication workflows, and staff-facing portal experiences.",
        },
      },
    },
    partners: {
      eyebrow: "Partner Work",
      title: "Selected partner work grounded in real operations.",
      body: "We work with businesses that need automation to improve execution, reduce manual coordination, and create cleaner operating flows.",
      card: {
        chip: "Partner Highlight",
        title: "Nuctech Sydney",
        body: "Delivered a fully custom internal employee work management system for Nuctech Sydney, including automated leave requests and approval flows.",
        metric1: {
          label: "System",
          value: "Internal work management",
        },
        metric2: {
          label: "Automation",
          value: "Leave request workflow",
        },
        metric3: {
          label: "Delivery",
          value: "Fully custom-built",
        },
      },
      proof: {
        alt: "Operational dashboard visual",
        chip: "System View",
        title: "Custom employee operations systems built around real internal workflows.",
        body: "The solution was designed around Nuctech Sydney's actual staff management and leave handling process, not an off-the-shelf template.",
      },
    },
    cases: {
      eyebrow: "Selected Outcomes",
      title: "Operational results presented as system transformations.",
      labels: {
        problem: "Problem",
        solution: "Solution",
        outcome: "Outcome",
      },
      cards: {
        retail: {
          tag: "Retail Operations",
          title: "Review workflow redesigned around automation and recovery.",
          problem: "Manual review chasing led to low response rates and no internal handling for negative feedback.",
          solution: "Built an automated request flow with sentiment branching and team escalation.",
          outcome: "Faster follow-up, stronger review volume, and centralized brand protection.",
        },
        services: {
          tag: "Professional Services",
          title: "Internal approvals moved from inbox chaos to a structured workflow hub.",
          problem: "Budget and leave requests were delayed by email bottlenecks and inconsistent records.",
          solution: "Deployed a custom approval system with rule-based routing and audit trails.",
          outcome: "Manual admin reduced, approval speed improved, and visibility increased across leadership.",
        },
        education: {
          tag: "Education",
          title: "Student operations consolidated into one portal and automation layer.",
          problem: "Enrollment, reminders, and status updates were split across spreadsheets and manual follow-up.",
          solution: "Built a staff dashboard and portal with automated communication sequences.",
          outcome: "Better response time, clearer ownership, and one source of operational truth.",
        },
      },
    },
    value: {
      eyebrow: "Why Beyond Perception",
      title: "A practical partner for custom AI, automation, software development, and IT services.",
      cards: {
        practical: {
          title: "Practical AI",
          body: "We deploy AI to solve workflow constraints, not to decorate a pitch deck.",
        },
        custom: {
          title: "Custom-Built",
          body: "Every system is shaped around your actual process architecture instead of generic templates or packaged software.",
        },
        chain: {
          title: "Automation + App + Integration",
          body: "We optimize the full operational chain, not isolated features.",
        },
        scale: {
          title: "Modern, Scalable Systems",
          body: "What gets launched is designed to expand as the business adds new workflows and teams.",
        },
      },
    },
    seo: {
      eyebrow: "Custom AI and IT Services",
      title: "Clear English SEO copy for automation, customization, AI, and IT services.",
      body: "Beyond Perception delivers custom AI automation services, tailored software development, workflow integration, and practical IT services for growing businesses.",
      cards: {
        automation: {
          title: "AI Automation Services",
          body: "We design AI automation for approvals, routing, follow-up, review requests, reporting, and repetitive operational tasks.",
        },
        software: {
          title: "Custom Software Development",
          body: "We build tailored internal tools, web apps, dashboards, and portals that match the way your company actually works.",
        },
        it: {
          title: "Business IT Services",
          body: "We connect platforms, structure data, and improve operational visibility so teams can run cleaner systems with fewer manual gaps.",
        },
        custom: {
          title: "Customized AI Systems",
          body: "Every Beyond Perception solution is customized around workflow logic, integrations, approvals, and business-specific execution rules.",
        },
      },
    },
    faq: {
      eyebrow: "SEO FAQ",
      title: "Questions that connect the Beyond Perception brand with AI and IT services.",
      body: "These answers reinforce what Beyond Perception provides: custom AI automation, customized software, and business IT services.",
      items: {
        one: {
          question: "What AI automation services does Beyond Perception provide?",
          answer: "Beyond Perception delivers custom AI automation for approvals, review requests, dashboards, reporting, portals, follow-up workflows, and internal operational systems.",
        },
        two: {
          question: "Does Beyond Perception build custom software and business IT systems?",
          answer: "Yes. We build tailored internal software, workflow systems, staff portals, client portals, dashboards, and integrated business tools instead of forcing generic software onto unique operations.",
        },
        three: {
          question: "Who uses Beyond Perception's AI and IT services?",
          answer: "Growing companies across professional services, retail, healthcare, hospitality, logistics, and education use Beyond Perception when off-the-shelf tools no longer fit their workflows.",
        },
      },
    },
    manifesto: {
      eyebrow: "Brand Statement",
      title: "Beyond Perception. Beyond manual work. Beyond basic automation.",
      body: "We design custom AI systems, automation, software, and IT services for businesses ready to scale with precision.",
    },
    cta: {
      eyebrow: "Start the Conversation",
      title: "Ready to automate smarter?",
      body: "Tell us how your business works. We'll identify what can be automated, customized, integrated, or rebuilt with AI and modern business IT systems.",
      primary: "Book a Consultation",
      secondary: "Start Your Project",
    },
    footer: {
      summary: "Custom AI automation, software development, and IT services for real business operations.",
      navigationLabel: "Navigation",
      contactLabel: "Reach Out",
      linkedin: "LinkedIn",
    },
  },
  zh: {
    meta: {
      title: "Beyond Perception | 面向真实业务的智能系统",
      description:
        "Beyond Perception 为成长型企业打造 AI 自动化、工作流智能与定制化业务系统。",
    },
    brand: {
      name: "Beyond Perception",
      tagline: "智能系统工作室",
      homeAria: "返回 Beyond Perception 首页",
    },
    navigation: {
      menuAria: "打开菜单",
      solutions: "解决方案",
      services: "服务",
      industries: "行业",
      work: "案例成果",
      about: "关于我们",
      contact: "联系我们",
      demo: "预约演示",
    },
    language: {
      switcher: "语言切换",
    },
    hero: {
      eyebrow: "完全客制化 AI 系统 / 工作流智能 / 企业自动化",
      title: "围绕你的业务流程打造的完全客制化 AI 系统。",
      body:
        "我们为成长型企业设计并开发完全客制化的 AI 系统，把真实内部流程转化为自动化、应用与运营工具，减少人工并支撑持续扩展。",
      primaryCta: "预约演示",
      secondaryCta: "查看方案",
      metrics: {
        time: "流程节省时间",
        platforms: "已连接平台",
        launch: "典型上线周期",
        launchUnit: "周",
      },
      core: {
        label: "AI 控制核心",
        title: "运营智能中枢",
        body: "评价 / 审批 / 看板 / 消息 / 集成",
      },
      orbits: {
        reviews: "评价自动化",
        ops: "内部运营",
        portals: "智能门户",
        assistants: "AI 助手",
      },
    },
    capabilities: {
      eyebrow: "核心能力",
      title: "不是套现成软件，而是搭建真正贴合业务的客制化系统。",
      body: "四项核心能力，把分散工具和重复流程整合成可执行、可扩展的完全客制化运营系统。",
      cards: {
        automation: {
          title: "AI 自动化",
          body: "自动处理重复业务任务、触发逻辑、通知、审批与后续跟进流程。",
        },
        systems: {
          title: "定制业务系统",
          body: "围绕 CRM、人事、审批、客户流程、管理看板等内部运营需求搭建完全客制化系统。",
        },
        apps: {
          title: "智能应用",
          body: "为员工或客户交付有明确业务目标的门户、Web 应用与移动端体验。",
        },
        integration: {
          title: "集成与流程设计",
          body: "打通平台、整合数据，把孤立任务串成一条完整自动化链路。",
        },
      },
    },
    process: {
      eyebrow: "执行方式",
      title: "从人工操作，走向智能运营。",
      body: "我们用清晰、商业化、可衡量的方式推进项目，从调研到上线保持一致节奏。",
      steps: {
        understand: {
          title: "理解你的工作流",
          body: "梳理现有运营方式，找出人工瓶颈，并识别最有价值的自动化机会点。",
        },
        design: {
          title: "设计自动化逻辑",
          body: "定义规则、触发条件、交接方式和异常处理，让系统贴合真实业务。",
        },
        build: {
          title: "构建定制方案",
          body: "开发所需的应用、工作流、看板、接口集成或 AI 助手。",
        },
        scale: {
          title: "上线、优化、扩展",
          body: "部署后持续观察使用效果，修正边界场景，并向更多业务环节延展。",
        },
      },
    },
    systems: {
      eyebrow: "方案视图",
      title: "按真实业务场景设计，而不是罗列泛化功能。",
      body: "每个方案模块都围绕一个具体运营场景展开，强调流程如何真正跑起来。",
      tablistAria: "解决方案分类",
      tabs: {
        reviews: "评价自动化",
        operations: "内部运营",
        approval: "审批流程",
        portals: "智能门户",
        assistant: "AI 助手",
      },
      panes: {
        reviews: {
          chip: "客户沟通",
          title: "自动化获取评价，并内置差评分流与处理逻辑",
          card1: { label: "触发点", body: "订单完成" },
          card2: { label: "流程", body: "自动发送消息、识别反馈倾向、路由后续处理" },
          card3: { label: "品牌保护", body: "低评分反馈会先流向内部处理，再决定是否公开引导。" },
        },
        operations: {
          chip: "运营控制",
          title: "降低行政摩擦的内部流程系统",
          card1: { label: "模块", body: "考勤、工时、通知、报表" },
          card2: { label: "可视化", body: "实时状态面板替代零散更新和人工追问。" },
          card3: { label: "结果", body: "审批更快、记录更清晰、内部任务更少遗漏。" },
        },
        approval: {
          chip: "审批逻辑",
          title: "覆盖请假、预算、入职与运营签核的结构化审批链路",
          card1: { label: "路由", body: "基于规则的审批路径与升级阈值" },
          card2: { label: "审计轨迹", body: "每一次交接、决策和异常都在同一处清晰可追踪。" },
          card3: { label: "结果", body: "人工催办减少，跨部门责任边界更清楚。" },
        },
        portals: {
          chip: "门户体验",
          title: "把表单、更新与下一步动作统一到客户和员工门户中",
          card1: { label: "访问方式", body: "安全的仪表盘统一承载文档、任务、消息与进度状态" },
          card2: { label: "自动化", body: "表单提交后可自动触发后续业务动作。" },
          card3: { label: "结果", body: "减少邮件混乱，提升服务交付过程中的客户体验。" },
        },
        assistant: {
          chip: "AI 支撑层",
          title: "可分类请求、回答业务问题并调取数据的 AI 助手",
          card1: { label: "渠道", body: "网站聊天、内部工作台、邮件入口、服务台" },
          card2: { label: "能力", body: "总结、查询、分流、路由与结合上下文的应答" },
          card3: { label: "结果", body: "团队花更少时间找信息，把更多时间用在执行上。" },
        },
      },
    },
    visuals: {
      eyebrow: "系统场景",
      title: "审批、任务、客户跟进，在一套系统里协同运转。",
      body: "从请求进入、自动路由到结果完成，每个节点都清晰可见，不再靠人工追进。",
      cards: {
        dashboard: {
          alt: "自动化仪表盘预览图",
          chip: "运营工作台",
          title: "请假审批、服务进度与内部任务统一进入同一个工作界面。",
          body: "负责人、当前状态和下一步动作都能一屏看到。",
        },
        flow: {
          alt: "工作流自动化链路预览图",
          chip: "自动化链路",
          title: "表单提交后自动分发、提醒、升级与回写更新。",
          body: "减少转发邮件和重复确认，让流程自己往前跑。",
        },
      },
    },
    industries: {
      eyebrow: "行业适配",
      title: "为真实业务场景中的成长型团队设计。",
      cards: {
        services: {
          title: "专业服务业",
          body: "客户录入、审批、报表、交付跟踪与客户沟通流程自动化。",
        },
        retail: {
          title: "零售",
          body: "订单处理、评价管理、客服自动化和库存联动通知。",
        },
        health: {
          title: "医疗与诊所",
          body: "行政流程、预约提醒、表单流转与内部协同能力建设。",
        },
        hospitality: {
          title: "餐旅服务",
          body: "客户沟通、服务补救、排班与运营交接管理。",
        },
        logistics: {
          title: "物流",
          body: "过程可视化、请求分流、节点提醒与异常处理系统。",
        },
        education: {
          title: "教育与培训",
          body: "报名、学习进度、沟通流程与面向员工的门户体验。",
        },
      },
    },
    partners: {
      eyebrow: "合作伙伴",
      title: "用真实合作项目建立网站信任感。",
      body: "我们服务的是需要把自动化真正落进业务流程里的团队，重点是执行效率、协同质量和运营清晰度。",
      card: {
        chip: "合作案例",
        title: "Nuctech Sydney",
        body: "为 Nuctech Sydney 搭建了完全客制化的内部员工工作管理系统，并实现请假申请与审批流程自动化。",
        metric1: {
          label: "系统类型",
          value: "内部工作管理",
        },
        metric2: {
          label: "自动化内容",
          value: "请假申请流程",
        },
        metric3: {
          label: "交付方式",
          value: "完全客制化",
        },
      },
      proof: {
        alt: "运营仪表盘视觉图",
        chip: "系统视图",
        title: "围绕真实内部流程搭建，而不是套用现成模板。",
        body: "这套系统聚焦员工日常工作管理与请假处理流程，按 Nuctech Sydney 的实际运作方式定制开发。",
      },
    },
    cases: {
      eyebrow: "成果案例",
      title: "用系统改造的结果来呈现业务价值。",
      labels: {
        problem: "问题",
        solution: "方案",
        outcome: "结果",
      },
      cards: {
        retail: {
          tag: "零售运营",
          title: "围绕自动化回访与负面反馈处理，重构评价流程。",
          problem: "依赖人工追评，回收率低，且差评没有内部优先处理机制。",
          solution: "构建自动评价请求流程，并按反馈倾向分支升级到团队处理。",
          outcome: "跟进速度更快、评价量提升、品牌风险得到集中管理。",
        },
        services: {
          tag: "专业服务业",
          title: "把混乱的邮箱审批，升级成结构化的工作流中枢。",
          problem: "预算和请假审批依赖邮件流转，处理缓慢且记录不一致。",
          solution: "部署定制审批系统，加入规则路由与完整审计轨迹。",
          outcome: "行政工作量下降，审批效率提升，管理层可视化更强。",
        },
        education: {
          tag: "教育",
          title: "把学员运营整合进统一门户与自动化引擎。",
          problem: "报名、提醒和状态更新分散在表格与手工跟进中。",
          solution: "搭建员工看板与门户，并配置自动化沟通序列。",
          outcome: "响应更快、责任更清晰、运营信息回到单一真实来源。",
        },
      },
    },
    value: {
      eyebrow: "为什么选择 Beyond Perception",
      title: "用企业级思考方式，做务实可落地的系统建设。",
      cards: {
        practical: {
          title: "务实 AI",
          body: "我们用 AI 解决真实流程问题，而不是为了展示概念。",
        },
        custom: {
          title: "按流程定制",
          body: "每一套系统都围绕企业真实流程架构展开，而不是套模板或买现成软件来硬套。",
        },
        chain: {
          title: "自动化 + 应用 + 集成",
          body: "我们优化的是整条运营链路，而不是单点功能。",
        },
        scale: {
          title: "现代且可扩展",
          body: "上线的不是一次性工具，而是可随团队和流程一起扩展的平台。",
        },
      },
    },
    manifesto: {
      eyebrow: "品牌主张",
      title: "Beyond Perception，不止于人工，不止于基础自动化。",
      body: "我们为准备扩张的企业设计真正可运行的智能系统。",
    },
    cta: {
      eyebrow: "开启对话",
      title: "准备更聪明地自动化了吗？",
      body: "告诉我们你的业务如何运作，我们会帮你识别哪些环节适合自动化、优化或用 AI 重构。",
      primary: "预约咨询",
      secondary: "启动项目",
    },
    footer: {
      summary: "为真实业务运营打造智能系统。",
      navigationLabel: "页面导航",
      contactLabel: "联系方式",
      linkedin: "领英",
    },
  },
};

const chatbotCopy = {
  en: {
    launcherTitle: "AI Consultant",
    launcherSubtitle: "Instant replies",
    badge: "Front-end demo",
    title: "AI Consultation Bot",
    subtitle: "Ask about workflows, pricing, dashboards, approvals, or integrations.",
    openAria: "Open AI consultant",
    closeAria: "Close AI consultant",
    inputLabel: "Ask the AI consultant",
    placeholder: "Ask about your workflow, team, or system idea...",
    send: "Send",
    intro:
      "Hi, I can answer common consultation questions on this page. Ask about automation, approvals, portals, dashboards, pricing, integrations, or industry-specific use cases.",
    suggestions: [
      "What can you automate?",
      "Can you build approval workflows?",
      "Can you connect to our CRM?",
      "How does pricing work?",
      "We run a clinic or retail team. What fits?",
    ],
    replies: {
      greeting: {
        text:
          "Hi, I can help you explore automation scope, approvals, dashboards, portals, pricing, integrations, and AI assistant ideas. If you tell me what your team does today, I can point to the best starting use case.",
        actionLabel: "Start the conversation",
      },
      thanks: {
        text:
          "You're welcome. If you want, the next useful step is to describe one manual process that takes too much time, causes delays, or creates repeated follow-up work.",
        actionLabel: "Share one workflow",
      },
      planning: {
        text:
          "For pricing and timeline together, the main driver is scope. A narrow pilot with one workflow can usually be planned much faster than a multi-team system with several integrations. The clearest estimate comes from mapping the trigger, steps, approvals, and final outcome.",
        actionLabel: "Request a scoped estimate",
      },
      automation: {
        text:
          "We usually help with repetitive workflows like approvals, lead intake, customer follow-up, review collection, internal reporting, onboarding, and staff portals. If you describe your current process, we can suggest a suitable automation path.",
        actionLabel: "Email your workflow",
      },
      approvals: {
        text:
          "Yes. Approval workflows are a strong fit for automation, especially for leave, budgets, onboarding, purchase requests, and internal sign-off. The usual structure is rules-based routing, visible status, reminders, and a clean audit trail.",
        actionLabel: "Discuss approval flow",
      },
      dashboards: {
        text:
          "Yes. A dashboard layer is useful when teams need live visibility instead of chasing updates across email, chat, and spreadsheets. Typical views include status tracking, exception alerts, approvals in queue, workload summaries, and reporting snapshots.",
        actionLabel: "Talk about dashboards",
      },
      reviews: {
        text:
          "Review and feedback workflows are a good automation use case. A common setup is: trigger after service or delivery, send the request automatically, branch high and low sentiment differently, and route negative responses for internal recovery before they become a public issue.",
        actionLabel: "Plan a review workflow",
      },
      portals: {
        text:
          "Yes. Client and staff portals work well when you need forms, updates, documents, tasks, and next actions in one place. They are especially useful when email threads are messy and people need a clear place to check status or submit requests.",
        actionLabel: "Explore portal options",
      },
      integration: {
        text:
          "Yes. These projects are often designed to connect with CRM systems, forms, email, messaging platforms, spreadsheets, calendars, and internal dashboards. The exact integration pattern depends on your current stack, data structure, and where decisions need to happen.",
        actionLabel: "Share your stack",
      },
      pricing: {
        text:
          "Pricing depends on scope, number of workflows, interface requirements, and integration depth. The practical first step is usually to separate a small pilot from a larger systems build, so the budget matches the business value of the first release.",
        actionLabel: "Request a quote",
      },
      timeline: {
        text:
          "A first release can often be scoped and launched in a few weeks, depending on workflow complexity, integrations, and review cycles. The fastest path is to outline what triggers the process, who handles each step, and what result the system must produce.",
        actionLabel: "Ask for a timeline",
      },
      assistant: {
        text:
          "Yes, a lightweight assistant can be added for consultation, intake triage, FAQs, internal support, or request routing. This demo is front-end only, but later it can be connected to a real AI API, internal systems, and business data.",
        actionLabel: "Discuss AI assistant",
      },
      retail: {
        text:
          "For retail teams, common opportunities include order follow-up, customer support triage, review automation, inventory-linked notifications, escalation rules, and manager dashboards. The strongest wins usually come from reducing repetitive admin and missed follow-up.",
        actionLabel: "Talk retail workflows",
      },
      healthcare: {
        text:
          "For clinics and healthcare teams, common fits include bookings, reminders, intake forms, admin routing, internal approvals, and staff coordination dashboards. The right design usually focuses on reducing admin load while keeping handoffs visible and controlled.",
        actionLabel: "Discuss clinic workflows",
      },
      education: {
        text:
          "For education and training teams, strong use cases include enrollment intake, reminders, learner progress updates, internal approvals, and student or staff portals. A good system usually replaces spreadsheet tracking and fragmented communication.",
        actionLabel: "Explore education workflows",
      },
      logistics: {
        text:
          "For logistics or field operations, strong fits include request routing, movement visibility, milestone alerts, exception handling, and status dashboards. The goal is usually to make operational state visible quickly without manual chasing.",
        actionLabel: "Discuss logistics flow",
      },
      team: {
        text:
          "This type of system can work for both smaller teams and growing multi-department operations. The key factor is not company size by itself, but whether repeated work, delays, and handoff confusion are slowing the business down.",
        actionLabel: "Explain your team setup",
      },
      security: {
        text:
          "Security, permissions, and access control can be designed into the workflow from the start. Typical requirements include role-based visibility, approval boundaries, audit trails, and restricting who can view or change operational data.",
        actionLabel: "Raise security requirements",
      },
      contact: {
        text:
          "The best next step is to send a short summary of your business workflow, pain points, team size, and preferred outcome. That gives enough context to suggest the right automation, app, dashboard, or portal design.",
        actionLabel: "Contact Beyond Perception",
      },
      fallback: {
        text:
          "I can help with automation scope, dashboards, approvals, portals, integrations, timing, pricing, and AI assistant ideas. If you share your current workflow or business problem, I can give a more relevant direction.",
        actionLabel: "Send project details",
      },
    },
  },
  zh: {
    launcherTitle: "AI 咨询助手",
    launcherSubtitle: "即时回复",
    badge: "前端演示",
    title: "AI 咨询 Bot",
    subtitle: "可以先问流程自动化、审批、报表、对接、报价或行业场景。",
    openAria: "打开 AI 咨询助手",
    closeAria: "关闭 AI 咨询助手",
    inputLabel: "向 AI 咨询助手提问",
    placeholder: "例如：我们想自动化审批和客户跟进",
    send: "发送",
    intro:
      "你好，我可以先回答常见咨询问题。你可以直接问流程自动化、审批、门户、报表、系统对接、报价周期，或者具体行业场景。",
    suggestions: [
      "你们能自动化什么？",
      "可以做审批流程吗？",
      "可以对接 CRM 或现有系统吗？",
      "报价大概怎么计算？",
      "我们是诊所/零售团队，适合做什么？",
    ],
    replies: {
      greeting: {
        text:
          "你好，我可以先帮你判断自动化范围，比如审批、报表、门户、系统对接、报价周期和 AI 助手场景。如果你愿意，可以直接说一下你们现在最耗时间的人工流程。",
        actionLabel: "开始沟通",
      },
      thanks: {
        text:
          "不客气。如果你愿意，下一步最有价值的是直接描述一个最卡的人工流程，例如谁发起、谁处理、哪里容易拖延、最后要产出什么结果。",
        actionLabel: "说明一个流程",
      },
      planning: {
        text:
          "如果你同时关心报价和周期，核心还是看范围。单一流程的小型试点，通常会比多部门、多系统集成的项目更快也更容易控预算。最有效的方式是先梳理触发点、处理节点、审批逻辑和最终结果。",
        actionLabel: "获取范围评估",
      },
      automation: {
        text:
          "我们通常会处理重复性较高的业务流程，例如审批、客户录入、客户跟进、评价收集、内部报表、入职流程、员工门户等。如果你描述一下现在的流程，我可以先给出适合的自动化方向。",
        actionLabel: "发送业务流程",
      },
      approvals: {
        text:
          "可以。审批流程很适合自动化，尤其是请假、预算、采购、入职、内部签核这类场景。常见做法是规则路由、状态可视化、自动提醒，以及完整的审计记录。",
        actionLabel: "讨论审批流程",
      },
      dashboards: {
        text:
          "可以。报表或管理看板适合用来替代分散在邮件、聊天和表格里的状态更新。常见内容包括流程状态、异常提醒、待审批列表、工作量汇总和阶段性数据视图。",
        actionLabel: "讨论看板报表",
      },
      reviews: {
        text:
          "评价和反馈流程也很适合自动化。典型做法是服务完成后自动触发评价请求，再根据反馈倾向做不同分流，把负面反馈优先路由到内部处理，而不是直接放到公开平台。",
        actionLabel: "规划评价流程",
      },
      portals: {
        text:
          "可以。客户门户或员工门户适合把表单、文档、任务、更新和下一步动作集中到一个地方。尤其当邮件往来太乱、大家经常不知道当前状态时，这类方案会很有效。",
        actionLabel: "了解门户方案",
      },
      integration: {
        text:
          "可以。这类项目通常会和 CRM、表单、邮箱、消息工具、表格、日历、内部后台等系统做连接。具体方案取决于你现在在用什么工具、数据怎么流转、以及关键决策节点在哪里。",
        actionLabel: "告诉我们现有系统",
      },
      pricing: {
        text:
          "报价主要取决于范围、流程数量、界面需求和集成深度。比较实用的做法通常是先区分“小范围试点”还是“完整业务系统”，这样预算会更贴近第一阶段的实际价值。",
        actionLabel: "获取报价",
      },
      timeline: {
        text:
          "首期版本通常可以在几周内完成，但会取决于流程复杂度、是否需要系统对接，以及内部确认周期。最快的方式是先列出触发点、处理步骤、参与角色和目标结果。",
        actionLabel: "咨询项目周期",
      },
      assistant: {
        text:
          "可以，网站咨询、线索分流、FAQ、内部支持、请求分派这类场景都适合加轻量 AI 助手。现在这个版本是纯前端演示，后续也可以再接真实 AI 接口、内部系统和业务数据。",
        actionLabel: "讨论 AI 助手",
      },
      retail: {
        text:
          "如果你们是零售团队，常见机会包括订单跟进、客服分流、评价自动化、库存联动通知、升级规则和门店管理看板。通常最先见效的是减少重复行政工作和漏跟进。",
        actionLabel: "讨论零售流程",
      },
      healthcare: {
        text:
          "如果你们是诊所或医疗服务团队，常见适配场景包括预约提醒、表单录入、行政分流、内部审批和员工协同看板。重点通常是降低行政负担，同时保证交接可见、流程可控。",
        actionLabel: "讨论诊所流程",
      },
      education: {
        text:
          "如果你们是教育或培训团队，常见场景包括报名录入、提醒通知、学员进度更新、内部审批，以及学生或员工门户。好的系统通常会替代分散表格和碎片化沟通。",
        actionLabel: "讨论教育流程",
      },
      logistics: {
        text:
          "如果你们是物流或现场运营团队，常见适配场景包括请求路由、节点状态可视化、里程碑提醒、异常处理和运营看板。目标通常是快速看清业务状态，减少人工追问。",
        actionLabel: "讨论物流流程",
      },
      team: {
        text:
          "这种系统既适合小团队，也适合正在扩张的多部门组织。关键不只是公司规模，而是你们是否已经因为重复工作、交接混乱和跟进延迟而影响效率。",
        actionLabel: "说明团队情况",
      },
      security: {
        text:
          "权限、安全和可见性边界都可以在一开始就设计进去。常见要求包括角色权限、审批边界、操作留痕，以及限制谁能查看或修改关键业务数据。",
        actionLabel: "说明安全要求",
      },
      contact: {
        text:
          "建议你直接发送一段简短说明：业务是做什么的、团队规模如何、现在最卡的流程在哪里、希望达到什么结果。这样更容易快速判断适合哪种自动化或系统方案。",
        actionLabel: "联系 Beyond Perception",
      },
      fallback: {
        text:
          "我可以先回答自动化范围、审批、报表、门户、系统对接、项目周期、报价和 AI 助手方向。如果你愿意，可以直接说一下现在的业务流程或问题场景。",
        actionLabel: "发送项目需求",
      },
    },
  },
};

const topbar = document.querySelector("[data-topbar]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const revealItems = [...document.querySelectorAll(".reveal")];
const counters = [...document.querySelectorAll("[data-counter]")];
const tabs = [...document.querySelectorAll(".system-tab")];
const panes = [...document.querySelectorAll(".system-pane")];
const langButtons = [...document.querySelectorAll("[data-lang-toggle]")];
const translatableNodes = [...document.querySelectorAll("[data-i18n]")];
const translatableAttrs = [...document.querySelectorAll("[data-i18n-attr]")];
const descriptionMeta = document.querySelector('meta[name="description"]');
const keywordsMeta = document.querySelector('meta[name="keywords"]');
const canvas = document.querySelector(".particle-field");
const heroVisual = document.querySelector(".control-core");
const chatbotShell = document.querySelector("[data-chatbot]");
const chatbotOpenButton = document.querySelector("[data-chat-open]");
const chatbotCloseButton = document.querySelector("[data-chat-close]");
const chatbotPanel = document.querySelector("[data-chat-panel]");
const chatbotMessages = document.querySelector("[data-chat-messages]");
const chatbotSuggestions = document.querySelector("[data-chat-suggestions]");
const chatbotForm = document.querySelector("[data-chat-form]");
const chatbotInput = document.querySelector("[data-chat-input]");
const chatbotSubmit = document.querySelector("[data-chat-submit]");

const chatState = {
  history: [],
  isTyping: false,
  suggestionsExpanded: false,
};

let chatbotInactivityTimer = 0;

const getValue = (source, path) =>
  path.split(".").reduce((value, key) => (value && key in value ? value[key] : undefined), source);

const applyLanguage = (lang) => {
  const locale = translations[lang] ?? translations.en;

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.body.dataset.lang = lang;
  document.title = locale.meta.title;

  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", locale.meta.description);
  }

  if (keywordsMeta && typeof locale.meta.keywords === "string") {
    keywordsMeta.setAttribute("content", locale.meta.keywords);
  }

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const value = getValue(locale, key);
    if (typeof value === "string") {
      node.textContent = value;
    }
  });

  translatableAttrs.forEach((node) => {
    const mappings = node.dataset.i18nAttr.split(",");
    mappings.forEach((mapping) => {
      const [attribute, key] = mapping.split(":");
      const value = getValue(locale, key);
      if (attribute && typeof value === "string") {
        node.setAttribute(attribute.trim(), value);
      }
    });
  });

  langButtons.forEach((button) => {
    const active = button.dataset.langToggle === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  currentLanguage = lang;
  syncChatbotUI();
  window.localStorage.setItem("bp-language", lang);
};

const savedLanguage = window.localStorage.getItem("bp-language");
const initialLanguage = savedLanguage && savedLanguage in translations ? savedLanguage : "en";
let currentLanguage = initialLanguage;

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langToggle);
  });
});

applyLanguage(initialLanguage);

function getChatLocale() {
  return chatbotCopy[currentLanguage] ?? chatbotCopy.en;
}

function renderTypingIndicator() {
  const item = document.createElement("article");
  item.className = "chatbot-message bot typing";

  const bubble = document.createElement("div");
  bubble.className = "chatbot-bubble";

  const dots = document.createElement("div");
  dots.className = "chatbot-typing";
  dots.innerHTML = "<span></span><span></span><span></span>";

  bubble.append(dots);
  item.append(bubble);
  return item;
}

function renderChatHistory() {
  if (!chatbotMessages) {
    return;
  }

  const fragment = document.createDocumentFragment();

  chatState.history.forEach((message) => {
    const item = document.createElement("article");
    item.className = `chatbot-message ${message.role}`;

    const bubble = document.createElement("div");
    bubble.className = "chatbot-bubble";

    const text = document.createElement("p");
    text.textContent = message.text;
    bubble.append(text);

    if (message.actionLabel) {
      const action = document.createElement("a");
      action.className = "chatbot-message-action";
      action.href = "mailto:katherine@beyondperceptiontech.com";
      action.textContent = message.actionLabel;
      bubble.append(action);
    }

    item.append(bubble);
    fragment.append(item);
  });

  if (chatState.isTyping) {
    fragment.append(renderTypingIndicator());
  }

  chatbotMessages.replaceChildren(fragment);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function addChatMessage(message) {
  chatState.history.push(message);
  renderChatHistory();
}

function seedChatConversation() {
  if (chatState.history.length > 0) {
    return;
  }

  const locale = getChatLocale();
  addChatMessage({ role: "bot", text: locale.intro, kind: "greeting" });
}

function renderChatSuggestions() {
  if (!chatbotSuggestions) {
    return;
  }

  const locale = getChatLocale();
  chatbotSuggestions.replaceChildren();

  locale.suggestions.forEach((suggestion) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chatbot-suggestion";
    button.textContent = suggestion;
    button.addEventListener("click", () => {
      openChatbot();
      sendChatMessage(suggestion);
    });
    chatbotSuggestions.append(button);
  });

  syncChatSuggestionsState();
}

function syncChatSuggestionsState() {
  if (!chatbotSuggestions) {
    return;
  }

  const hasSuggestions = chatbotSuggestions.childElementCount > 0;
  const hidden = !hasSuggestions;

  chatbotSuggestions.classList.toggle("is-hidden", hidden);
  chatbotSuggestions.classList.toggle("is-expanded", !hidden && chatState.suggestionsExpanded);
}

function setChatSuggestionsExpanded(expanded) {
  chatState.suggestionsExpanded = expanded;
  syncChatSuggestionsState();
}

function clearChatbotInactivityTimer() {
  if (!chatbotInactivityTimer) {
    return;
  }

  window.clearTimeout(chatbotInactivityTimer);
  chatbotInactivityTimer = 0;
}

function resetChatbotInactivityTimer() {
  if (!chatbotShell || !chatbotShell.classList.contains("is-open")) {
    return;
  }

  clearChatbotInactivityTimer();
  chatbotInactivityTimer = window.setTimeout(() => {
    closeChatbot();
  }, 30000);
}

function syncChatbotUI() {
  if (!chatbotShell || !chatbotOpenButton || !chatbotPanel) {
    return;
  }

  const locale = getChatLocale();
  const launchTitle = chatbotOpenButton.querySelector("strong");
  const launchSubtitle = chatbotOpenButton.querySelector(".chatbot-launch-copy span");
  const badge = chatbotPanel.querySelector(".chatbot-badge");
  const title = chatbotPanel.querySelector(".chatbot-heading h2");
  const subtitle = chatbotPanel.querySelector(".chatbot-heading p");
  const label = chatbotForm?.querySelector("label");

  if (launchTitle) {
    launchTitle.textContent = locale.launcherTitle;
  }

  if (launchSubtitle) {
    launchSubtitle.textContent = locale.launcherSubtitle;
  }

  if (badge) {
    badge.textContent = locale.badge;
  }

  if (title) {
    title.textContent = locale.title;
  }

  if (subtitle) {
    subtitle.textContent = locale.subtitle;
  }

  if (label) {
    label.textContent = locale.inputLabel;
  }

  chatbotOpenButton.setAttribute("aria-label", locale.openAria);
  chatbotCloseButton?.setAttribute("aria-label", locale.closeAria);

  if (chatbotInput) {
    chatbotInput.placeholder = locale.placeholder;
  }

  if (chatbotSubmit) {
    chatbotSubmit.textContent = locale.send;
  }

  if (
    chatState.history.length === 1 &&
    chatState.history[0].kind === "greeting" &&
    chatState.history[0].role === "bot"
  ) {
    chatState.history[0].text = locale.intro;
    renderChatHistory();
  }

  renderChatSuggestions();
  seedChatConversation();
}

function getChatReply(message, lang) {
  const locale = chatbotCopy[lang] ?? chatbotCopy.en;
  const normalized = message.trim().toLowerCase();
  const includesAny = (keywords) => keywords.some((keyword) => normalized.includes(keyword));
  const isGreeting = includesAny(["hello", "hi", "hey", "good morning", "good afternoon", "你好", "嗨", "您好"]);
  const isThanks = includesAny(["thanks", "thank you", "appreciate", "谢谢", "多谢", "感谢"]);
  const isPricing = includesAny(["price", "pricing", "quote", "cost", "budget", "报价", "价格", "费用", "预算"]);
  const isTimeline = includesAny(["timeline", "how long", "launch", "delivery", "schedule", "多久", "周期", "上线", "时间"]);
  const isSecurity = includesAny(["security", "privacy", "permission", "permissions", "role", "compliance", "安全", "隐私", "权限", "合规"]);
  const isIntegration = includesAny(["integrate", "integration", "api", "crm", "system", "software", "tools", "对接", "集成", "接口", "系统"]);
  const isReviews = includesAny(["review", "reviews", "feedback", "google review", "rating", "评价", "评论", "反馈", "差评"]);
  const isApprovals = includesAny(["approval", "approvals", "approve", "leave", "budget request", "purchase", "onboarding", "审批", "签核", "请假", "采购", "入职"]);
  const isDashboards = includesAny(["dashboard", "dashboards", "report", "reporting", "analytics", "visibility", "看板", "报表", "数据", "可视化"]);
  const isPortals = includesAny(["portal", "portals", "form", "forms", "intake", "booking", "bookings", "client portal", "staff portal", "门户", "表单", "预约", "录入"]);
  const isAssistant = includesAny(["assistant", "chatbot", "bot", "support", "faq", "客服", "聊天", "机器人", "助手", "ai"]);
  const isHealthcare = includesAny(["clinic", "healthcare", "medical", "patient", "诊所", "医疗", "医院", "患者"]);
  const isRetail = includesAny(["retail", "shop", "store", "ecommerce", "order", "零售", "门店", "商店", "订单"]);
  const isEducation = includesAny(["education", "school", "student", "training", "learner", "教育", "学校", "学生", "培训"]);
  const isLogistics = includesAny(["logistics", "delivery", "warehouse", "dispatch", "field ops", "物流", "仓库", "配送", "调度"]);
  const isTeam = includesAny(["team", "staff", "employee", "employees", "department", "small business", "startup", "团队", "员工", "部门", "小团队"]);
  const isContact = includesAny(["contact", "consultation", "demo", "book", "email", "call", "phone", "联系", "预约", "咨询", "演示", "电话"]);
  const isAutomation = includesAny(["automate", "automation", "workflow", "process", "manual", "operations", "自动化", "流程", "人工", "业务"]);

  if (isGreeting) {
    return locale.replies.greeting;
  }

  if (isThanks) {
    return locale.replies.thanks;
  }

  if (isPricing && isTimeline) {
    return locale.replies.planning;
  }

  if (isSecurity) {
    return locale.replies.security;
  }

  if (isPricing) {
    return locale.replies.pricing;
  }

  if (isTimeline) {
    return locale.replies.timeline;
  }

  if (isIntegration) {
    return locale.replies.integration;
  }

  if (isReviews) {
    return locale.replies.reviews;
  }

  if (isApprovals) {
    return locale.replies.approvals;
  }

  if (isDashboards) {
    return locale.replies.dashboards;
  }

  if (isPortals) {
    return locale.replies.portals;
  }

  if (isAssistant) {
    return locale.replies.assistant;
  }

  if (isHealthcare) {
    return locale.replies.healthcare;
  }

  if (isRetail) {
    return locale.replies.retail;
  }

  if (isEducation) {
    return locale.replies.education;
  }

  if (isLogistics) {
    return locale.replies.logistics;
  }

  if (isTeam) {
    return locale.replies.team;
  }

  if (isContact) {
    return locale.replies.contact;
  }

  if (isAutomation) {
    return locale.replies.automation;
  }

  return locale.replies.fallback;
}

function openChatbot() {
  if (!chatbotShell || !chatbotPanel) {
    return;
  }

  chatbotShell.classList.add("is-open");
  chatbotOpenButton?.setAttribute("aria-expanded", "true");
  chatbotPanel.setAttribute("aria-hidden", "false");
  seedChatConversation();
  resetChatbotInactivityTimer();
  window.setTimeout(() => chatbotInput?.focus(), 120);
}

function closeChatbot() {
  if (!chatbotShell || !chatbotPanel) {
    return;
  }

  chatbotShell.classList.remove("is-open");
  chatbotOpenButton?.setAttribute("aria-expanded", "false");
  chatbotPanel.setAttribute("aria-hidden", "true");
  clearChatbotInactivityTimer();
}

function sendChatMessage(rawMessage) {
  const message = rawMessage.trim();
  if (!message || chatState.isTyping) {
    return;
  }

  addChatMessage({ role: "user", text: message });
  chatState.isTyping = true;
  renderChatHistory();
  resetChatbotInactivityTimer();

  const reply = getChatReply(message, currentLanguage);

  window.setTimeout(() => {
    chatState.isTyping = false;
    chatState.suggestionsExpanded = false;
    syncChatSuggestionsState();
    addChatMessage({
      role: "bot",
      text: reply.text,
      actionLabel: reply.actionLabel,
    });
    resetChatbotInactivityTimer();
  }, 520);
}

chatbotOpenButton?.addEventListener("click", () => {
  if (chatbotShell?.classList.contains("is-open")) {
    closeChatbot();
    return;
  }

  openChatbot();
});

chatbotCloseButton?.addEventListener("click", closeChatbot);

document.addEventListener("click", (event) => {
  if (!chatbotShell?.classList.contains("is-open")) {
    return;
  }

  if (chatbotShell.contains(event.target)) {
    return;
  }

  closeChatbot();
});

chatbotShell?.addEventListener("pointerdown", resetChatbotInactivityTimer);
chatbotShell?.addEventListener("focusin", resetChatbotInactivityTimer);
chatbotShell?.addEventListener("input", resetChatbotInactivityTimer);
chatbotShell?.addEventListener("keydown", resetChatbotInactivityTimer);

chatbotSuggestions?.addEventListener("mouseenter", () => {
  resetChatbotInactivityTimer();
  setChatSuggestionsExpanded(true);
});

chatbotSuggestions?.addEventListener("mouseleave", () => {
  setChatSuggestionsExpanded(false);
});

chatbotInput?.addEventListener("pointerdown", () => {
  setChatSuggestionsExpanded(true);
});

chatbotInput?.addEventListener("blur", () => {
  setChatSuggestionsExpanded(false);
});

chatbotForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = chatbotInput?.value ?? "";
  if (!value.trim()) {
    return;
  }

  openChatbot();
  sendChatMessage(value);

  if (chatbotInput) {
    chatbotInput.value = "";
  }
});

window.addEventListener("beforeunload", clearChatbotInactivityTimer);

const onScroll = () => {
  topbar?.classList.toggle("is-scrolled", window.scrollY > 16);
};

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

menuToggle?.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  nav?.classList.toggle("is-open", !expanded);
});

[...document.querySelectorAll('.nav a[href^="#"]')].forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.18 },
);

revealItems.forEach((item) => revealObserver.observe(item));

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const node = entry.target;
      const target = Number(node.dataset.counter ?? 0);
      const startTime = performance.now();
      const duration = 1400;

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        node.textContent = Math.floor(progress * target).toString();

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          node.textContent = String(target);
        }
      };

      requestAnimationFrame(tick);
      counterObserver.unobserve(node);
    });
  },
  { threshold: 0.7 },
);

counters.forEach((counter) => counterObserver.observe(counter));

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const key = tab.dataset.system;

    tabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });

    panes.forEach((pane) => {
      pane.classList.toggle("is-active", pane.dataset.pane === key);
    });
  });
});

const handlePointerMove = (event) => {
  if (!heroVisual) {
    return;
  }

  const { innerWidth, innerHeight } = window;
  const x = (event.clientX / innerWidth - 0.5) * 16;
  const y = (event.clientY / innerHeight - 0.5) * 16;
  heroVisual.style.setProperty("--tilt-x", `${y * -1}deg`);
  heroVisual.style.setProperty("--tilt-y", `${x}deg`);
};

window.addEventListener("pointermove", handlePointerMove, { passive: true });

const initParticles = () => {
  if (!canvas) {
    return;
  }

  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }

  let width = 0;
  let height = 0;
  let animationFrame = 0;
  let particles = [];

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

    const count = Math.max(28, Math.floor(width / 52));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      size: Math.random() * 1.8 + 0.6,
    }));
  };

  const draw = () => {
    context.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > width) {
        particle.vx *= -1;
      }

      if (particle.y < 0 || particle.y > height) {
        particle.vy *= -1;
      }

      context.beginPath();
      context.fillStyle = "rgba(114, 208, 255, 0.42)";
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fill();
    });

    for (let index = 0; index < particles.length; index += 1) {
      for (let inner = index + 1; inner < particles.length; inner += 1) {
        const a = particles[index];
        const b = particles[inner];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);

        if (distance > 120) {
          continue;
        }

        context.beginPath();
        context.strokeStyle = `rgba(94, 170, 255, ${0.1 - distance / 1400})`;
        context.lineWidth = 1;
        context.moveTo(a.x, a.y);
        context.lineTo(b.x, b.y);
        context.stroke();
      }
    }

    animationFrame = requestAnimationFrame(draw);
  };

  resize();
  draw();

  window.addEventListener("resize", resize);
  window.addEventListener("beforeunload", () => cancelAnimationFrame(animationFrame), { once: true });
};

initParticles();
