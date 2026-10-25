/* ═══════════════════════════════════════════════════════════════════════════
   PORTFOLIO CONTENT — the only file you need to edit to change what the site says.
   Loaded with <script src>, so it works when opened locally and on GitHub Pages.

   Numbers come from:
     SR_Final_defense.pdf              thesis defence, June 2026
     Shajee_Raza_Research_Rep_Sem2.pdf Auto-RAG chunking, June 2025
     Shajee_Raza_Research_Report.pdf   NLP to MM-LLM review, January 2025
     RP_ShajeeRaza_Sem3.pdf            multi-agent MQA system, January 2026
   Check a number against its report before changing it.

   Lines marked TODO are places where a fact from you would make the page stronger.
   ═══════════════════════════════════════════════════════════════════════════ */

window.PORTFOLIO = {

  profile: {
    firstName: "Shajee",
    lastName: "Raza",
    initials: "SR",

    headline: "I build multi-agent LLM systems with LangGraph, RAG and Spark, and " +
              "I research how to stop them from hallucinating.",

    subhead: "I finished my MSc in Big Data and Machine Learning at ITMO University " +
             "in June 2026. My work covers agent design, retrieval, evaluation and " +
             "the data pipelines underneath. My thesis measured how a reviewer agent " +
             "changes the code a generator agent writes.",

    stack: ["Python", "LangGraph", "LangChain", "PyTorch", "Hugging Face",
            "FastAPI", "Apache Spark", "ChromaDB", "Pydantic", "OpenHands",
            "Docker", "GitLab CI/CD"],

    photo: "assets/headshot.jpg",        // square photo, About section
    avatar: "assets/face.jpg",           // small round avatar at the top
    photoFallback: "assets/avatar.jpg",  // used if headshot.jpg is missing
    cv: "assets/cv.pdf",
    available: "MSc graduate, June 2026 · Open to AI engineering roles and PhD positions",

    location: "Islamabad, Pakistan",
    cvName: "Shajee_Raza_CV_AI_Engineer.pdf",   // filename visitors get when downloading
    email: "shajee1938@gmail.com",
    github: "https://github.com/shajeeraza12",
    linkedin: "https://www.linkedin.com/in/shajeeraza/",
    scholar: null,   // TODO: Google Scholar URL, if you make one
    orcid: null
  },

  about: {
    heading: "From Islamabad to St. Petersburg",
    paragraphs: [
      "I studied Computer and Information Sciences at PIEAS in Islamabad. My final " +
      "year project was a chatbot that answered admission questions for the " +
      "university. During the degree I also interned as an ML engineer at Joyn " +
      "Digital, and after it I built AI automation tools at Headstart School.",

      "In 2024 I won a Russian Open Doors Scholarship and moved to St. Petersburg " +
      "for a master's in Big Data and Machine Learning at ITMO University. In the " +
      "university's Industrial AI Lab I wrote a review of multimodal " +
      "LLMs, designed a document chunking method for RAG systems, and wrote a " +
      "thesis on detecting hallucinations in code-writing agents. I graduated in " +
      "June 2026.",

      "During the master's I also worked as a backend Python developer at ITMO's " +
      "NCCR, where I built the shutdown handling for the lab's Spark pipelines."
    ]
  },

  /* Two "at a glance" panels near the top, for readers deciding quickly. */
  screening: {
    jobs: {
      title: "For hiring teams",
      lines: [
        ["Looking for", "AI and LLM engineering roles, especially agentic systems"],
        ["Builds with", "LangGraph, LangChain, PyTorch, FastAPI, Spark, ChromaDB, Docker"],
        ["Has shipped", "A seven-agent LangGraph assistant, Spark shutdown tooling at ITMO NCCR, internal copilots at Headstart"],
        ["Experience",  "3+ years across four roles, research and engineering"],
        ["Based in",    "Islamabad, Pakistan"],
        ["Available",   "Immediately"]
      ],
      jump: [["Projects","projects"],["Experience","experience"],["Skills","skills"]]
    },
    phd: {
      title: "For PhD committees",
      lines: [
        ["Interests",   "LLM evaluation, agent reliability, multimodal alignment"],
        ["Thesis",      "Hallucination detection for a reviewer agent in code generation, defended 2026"],
        ["Supervisor",  "Dr. Denis Nasonov, ITMO University"],
        ["Funding",     "Russian Open Doors Scholarship, 2024 (world rank 30)"],
        ["Records",     "Degrees, transcripts and European Diploma Supplement linked below"],
        ["References",  "Four letters, from ITMO and PIEAS"]
      ],
      jump: [["Research","research"],["Education","education"],["References","references"]]
    }
  },

  institutions: {
    itmo:      { name: "ITMO University",          short: "ITMO", color: "#1f6fd1", logo: null },
    pieas:     { name: "PIEAS University",         short: "PI",   color: "#1e8e5a", logo: null },
    bahria:    { name: "Bahria College Islamabad", short: "BC",   color: "#1b4f8a", logo: null },
    fazaia:    { name: "Fazaia Education System",  short: "FE",   color: "#3a6ea5", logo: null },
    headstart: { name: "Headstart School",         short: "HS",   color: "#c46a1c", logo: null },
    joyn:      { name: "Joyn Digital",             short: "JD",   color: "#d04848", logo: null }
  },

  now: [
    { label: "Publishing", status: "active",
      text: "Turning my thesis into a paper: an empirical study of how reviewer and " +
            "critic agents interact with code generators in a multi-agent setup, and " +
            "why the measured benefit depends on which model does the judging." },
    { label: "Building", status: "active",
      text: "Extending my multi-agent assistant so it can create new specialist agents " +
            "for multimodal question answering, instead of only routing to a fixed set." },
    { label: "Open to", status: "open",
      text: "AI engineering roles on agentic systems, and PhD positions in LLM " +
            "evaluation or agent reliability. I can start immediately." }
  ],

  timeline: [
    { year: "2015", label: "Secondary school",        place: "Fazaia, Islamabad" },
    { year: "2017", label: "Higher secondary",        place: "Bahria, Islamabad" },
    { year: "2019", label: "BS begins",               place: "PIEAS, Islamabad" },
    { year: "2022", label: "ML internship",           place: "Joyn Digital" },
    { year: "2023", label: "BS completed, AI automation work", place: "PIEAS · Headstart" },
    { year: "2024", label: "Open Doors scholarship, MSc begins", place: "ITMO, St. Petersburg" },
    { year: "2025", label: "Industrial AI Lab, NCCR backend", place: "ITMO" },
    { year: "2026", label: "Thesis defended, MSc awarded", place: "ITMO, June" }
  ],

  research: [
    {
      id: "hallucination", track: "research",
      tag: "Master's thesis",
      title: "A Lightweight Hallucination Detection Algorithm for the Reviewer Agent " +
             "in a Code-Generation Multi-Agent System",
      year: "2026",
      venue: "MSc thesis, ITMO University, Sep 2025 to Jun 2026. Supervisor: " +
             "Dr. Denis Nasonov. Scientific advisor: Aleksandr Voskresenskii.",
      status: "defended",
      lede: "A reviewer agent scores generated code on a five-part rubric and sends it " +
            "back for another attempt if the score is too low. It needs no fine-tuning, " +
            "no access to model internals and no unit tests, so it runs with any " +
            "open-weight model on local hardware.",
      gap: "Existing approaches each need something a small team running local models " +
           "may not have. Self-Edit needs executable unit tests. LeTI needs fine-tuning. " +
           "SWE-agent and OpenHands record agent actions but don't check them for " +
           "hallucinations. Copilot and Cursor need a cloud API.",

      charts: [
        { type: "delta", title: "Lowest score across instances",
          caption: "Round 1, threshold 0.85, 19 instances",
          from: 0.30, to: 0.85, min: 0.20, max: 1.0,
          fromLabel: "Without reviewer", toLabel: "With reviewer", better: "up" },
        { type: "delta", title: "Standard deviation",
          caption: "Round 1. Lower means more consistent output",
          from: 0.145, to: 0.044, min: 0, max: 0.18,
          fromLabel: "Without reviewer", toLabel: "With reviewer", better: "down" },
        { type: "delta", title: "Mean score",
          caption: "Round 1. 14 of 19 instances improved",
          from: 0.878, to: 0.926, min: 0.80, max: 1.0,
          fromLabel: "Without reviewer", toLabel: "With reviewer", better: "up" }
      ],
      charts2: [
        { type: "stats", title: "Round 2: paired replication",
          caption: "Generator qwen2.5-7b, judge qwen3-32b, threshold 0.85, 50 instances from 12 repositories",
          stats: [
            { v: "+0.105", l: "mean improvement", hi: true },
            { v: "2.27",   l: "paired t" },
            { v: "< 0.05", l: "p-value", hi: true },
            { v: "50",     l: "instances" }
          ] },
        { type: "bars", title: "The measured gain depends on the judge",
          caption: "Changing only the judging model changes how much improvement is reported",
          bars: [
            { label: "Mistral, qwen3 judge",   sub: "p < 0.001",          value: 0.199, display: "+0.199" },
            { label: "Mistral, gpt-oss judge", sub: "same outputs",       value: 0.041, display: "+0.041" },
            { label: "qwen2.5-7b generator",   sub: "weaker generator",   value: 0.114, display: "+0.114" },
            { label: "qwen3-32b generator",    sub: "same-family judge",  value: 0.003, display: "+0.003" }
          ], max: 0.21 }
      ],

      summary: [
        "Round 1: the lowest score rose from 0.30 to 0.85 and the spread of scores fell by about 70%.",
        "Round 2: an improvement of +0.105 on 50 new instances, statistically significant (p < 0.05).",
        "Round 3: positive in all six generator and judge combinations, but the size depends on the judge."
      ],
      points: [
        "Built the system as a LangGraph state machine: <code>router → code_helper → reviewer</code>, looping back up to three times while the score is under the threshold.",
        "Wrote a five-part rubric (correctness, edge cases, security, code quality, relevance). Pydantic validates every judge response, so a malformed score cannot get through.",
        "Compared three setups: <strong>A</strong>, a single attempt with no reviewer; <strong>B</strong>, the reviewer loop; <strong>C</strong>, the same loop around an OpenHands action agent.",
        "<strong>Round 1</strong> (19 SWE-bench Lite instances): the biggest single gain was sympy-16792, from 0.30 to 0.96.",
        "<strong>Round 2</strong> (50 instances, 12 repositories): mean score went from 0.639 to 0.744, paired t = 2.27, p &lt; 0.05.",
        "<strong>Round 3</strong> (six generator and judge pairs): a judge from the same model family as the generator reported +0.003, while a judge from a different family reported +0.039 on the same output.",
        "Added a <strong>Hallucination Bridge</strong> that checks OpenHands action and observation logs after a run, so a hallucinated step shows up before it reaches the final patch.",
        "Setup C split into two groups at threshold 0.85: 14 instances scored 0.86 to 1.00 and 5 scored 0.40 or lower. The low group traced back to the context growing to about 150K tokens by step 30, after which the judge began accepting contradictory traces."
      ],
      limits: "The score comes from a reviewer model, not from running SWE-bench's hidden " +
              "tests, so a higher score does not prove the patch is correct. In up to a " +
              "third of cases per setup the loop made the answer worse; pylint-6506 fell " +
              "from 0.92 to 0.20 after three rounds. Next step: compare rubric scores with " +
              "real test pass rates.",
      links: [
        { label: "Thesis report", url: "https://drive.google.com/file/d/1oGFL9PrzZ18lWPd06yw2v4uJPEUrvZvN/view?usp=sharing", kind: "pdf" },
        { label: "Code on GitHub", url: "https://github.com/shajeeraza12/Multi-Agent-Study-Coding-Assistant", kind: "code" }
      ]
    },

    {
      id: "autorag", track: "research",
      tag: "RAG · document chunking",
      title: "Automated Document Chunking for Auto-RAG Question Answering",
      year: "2025",
      venue: "ITMO Industrial AI Lab, Feb to Jun 2025",
      status: "complete",
      lede: "I compared five ways of splitting documents for retrieval. A hybrid method " +
            "kept the quality of semantic splitting and ran 30% faster.",
      gap: "",
      charts: [
        { type: "table", title: "Chunking methods compared",
          caption: "Throughput is in characters per second",
          cols: ["Method", "Coherence", "Retrieval", "Throughput"],
          rows: [
            { k: "Fixed size",     v: [0.43, 0.72], t: "46.6M", bar: 0.43 },
            { k: "Sentence based", v: [0.51, 0.68], t: "4.08M", bar: 0.51 },
            { k: "Text tiling",    v: [0.58, 0.79], t: "489K",  bar: 0.58 },
            { k: "Semantic",       v: [0.87, 0.85], t: "4,358", bar: 0.87 },
            { k: "Hybrid",         v: [0.87, 0.86], t: "5,711", bar: 0.87, best: true }
          ],
          note: "Hybrid matches semantic coherence (0.87) with 30% higher throughput." }
      ],
      charts2: [],
      summary: [
        "Semantic splitting doubled coherence over fixed-size (0.87 vs 0.43) but was about 10,000× slower.",
        "The hybrid method kept 0.87 coherence, reached 0.86 retrieval accuracy and ran 30% faster than semantic."
      ],
      points: [
        "Tested fixed-size, sentence-based, TextTiling, semantic and hybrid chunking on the same corpus, with fixed random seeds.",
        "Measured coherence, distinctiveness, retrieval accuracy and throughput for each method.",
        "Fixed-size splitting often cut sentences in half. Semantic and hybrid splitting kept whole topics together.",
        "Proposed choosing the chunking method per document type, so the speed and quality trade-off can change per request."
      ],
      limits: "",
      links: [
        { label: "Research report", url: "https://drive.google.com/file/d/1UMWBpW8FPlJv9yKVHFdQblIfNHxFhUEb/view", kind: "pdf" }
      ]
    },

    {
      id: "mmllm", track: "research",
      tag: "Literature review",
      title: "From Early NLP to Multimodal LLMs: An Analytical Review",
      year: "2025",
      venue: "ITMO Industrial AI Lab, Sep 2024 to Jan 2025",
      status: "complete",
      lede: "A review of how NLP developed from classical methods to transformers and " +
            "multimodal models, written to find an open research problem.",
      gap: "", charts: [], charts2: [],
      summary: [
        "Identified alignment between modalities as the main open problem, with scalability and interpretability close behind."
      ],
      points: [
        "Covered classical NLP tasks such as sentiment analysis and topic modelling, then BERT, GPT and multimodal architectures.",
        "Identified alignment between modalities as the main open problem: keeping accuracy and coherence when text, images and other inputs are combined.",
        "Noted scalability and interpretability as the other two main limits on multimodal models."
      ],
      limits: "",
      links: [
        { label: "Research report", url: "https://drive.google.com/file/d/1FCR07bMvz_vJLLBqG8ZQDm_5TYTi4btE/view", kind: "pdf" }
      ]
    }
  ],

  experience: [
    {
      id: "itmo-research", track: "research", institution: "itmo",
      role: "Research Intern", org: "ITMO University, Industrial AI Lab",
      period: "Oct 2024 – Jun 2026", place: "St. Petersburg, Russia", tag: "Research",
      summary: "Hallucination detection for code agents, RAG chunking research, and a review of multimodal LLMs.",
      points: [
        "Designed a five-part scoring rubric (correctness, edge cases, security, code quality, relevance) for a reviewer agent inside a LangGraph multi-agent code generation system, evaluated on SWE-bench Lite.",
        "Built a Hallucination Bridge that audits OpenHands ActionEvent and ObservationEvent traces, extending hallucination checks to tool-using agents without changing the base agent.",
        "Benchmarked document chunking strategies for an Auto-RAG question answering system and proposed a hybrid sentence-boundary and semantic-threshold method.",
        "Built a reproducible evaluation setup with LangGraph, LangChain, ChromaDB (all-MiniLM-L6-v2 embeddings) and Pydantic validation, so scoring runs can be repeated across SWE-bench Lite.",
        "Wrote an analytical review of NLP and multimodal LLMs and identified three open gaps: modality alignment, cross-modal scalability and interpretability."
      ],
      links: []
    },
    {
      id: "itmo-backend", track: "engineering", institution: "itmo",
      role: "Backend Python Developer & Data Analyst", org: "ITMO University, National Centre of Cognitive Research",
      period: "Feb – May 2025", place: "St. Petersburg, Russia", tag: "Engineering",
      summary: "Graceful shutdown for Apache Spark pipelines, adopted as the project-wide standard.",
      points: [
        "Built a graceful shutdown mechanism for Apache Spark applications covering normal exit, exceptions and OS signals, so resources are cleaned up on every path and no data is lost when a pipeline stops.",
        "Wrote the reusable <code>graceful_exiter</code> context manager and <code>GracefulExiter</code> class, adopted as the project standard and cutting shutdown boilerplate by about 60%.",
        "Refactored pipeline operator classes onto one initialise, finalise and exit interface.",
        "Shipped every change through Git feature branches and GitLab CI/CD."
      ],
      links: [
        { label: "Certificate", url: "https://drive.google.com/file/d/1_eUdLol4Yr_q0AHdQA3HZkr9oi8ZuTIj/view?usp=sharing", kind: "pdf" }
      ]
    },
    {
      id: "headstart", track: "engineering", institution: "headstart",
      role: "AI Workflow Automation Specialist", org: "Headstart School Pvt. Ltd.",
      period: "Oct – Dec 2023", place: "Islamabad, Pakistan", tag: "AI automation",
      summary: "AI automation and copilot tools for admissions, HR and procurement.",
      points: [
        "Designed and deployed Python automation for administrative work across admissions, HR and procurement.",
        "Built copilot tools that reduced manual effort across departments.",
        "Reviewed each department's workflows to find recurring inefficiencies and built AI tools for them."
        // TODO: one number (hours saved, staff using it) would make this much stronger.
      ],
      links: [
        { label: "Experience letter", url: "https://drive.google.com/file/d/1KrabPUIz223MIp7wH_QtZWe_3twuy0ba/view?usp=drive_link", kind: "pdf" }
      ]
    },
    {
      id: "joyn", track: "engineering", institution: "joyn",
      role: "ML / AI Intern", org: "Joyn Digital",
      period: "Jul – Sep 2022", place: "Islamabad, Pakistan", tag: "ML / AI",
      summary: "Data preprocessing and model development for AI projects.",
      points: [
        "Did data preprocessing and model development for AI projects with Python, TensorFlow and PyTorch.",
        "Worked from raw data cleaning through model training and evaluation."
      ],
      links: [
        { label: "Internship certificate", url: "https://drive.google.com/file/d/1KfKLnk6XujhHAo-pNJ8ntFv-svLag8sK/view?usp=sharing", kind: "pdf" }
      ]
    }
  ],

  projects: [
    {
      id: "multiagent", track: "both", featured: true, visual: "graph",
      tag: "LangGraph · LangChain · ChromaDB · FastAPI · Streamlit",
      period: "Oct 2025 – Jun 2026",
      title: "Multi-Agent Study & Coding Assistant",
      lede: "A seven-agent LangGraph system that routes each question to the right " +
            "workflow: research, coding or study help. I built it in phases across three " +
            "master's courses, and it became the base system for my thesis.",
      points: [
        "<strong>Seven agents:</strong> a router that classifies intent and answer depth, a supervisor that runs complex workflows, a researcher, a writer, a critiquer, a code helper and a quiz helper.",
        "<strong>Research workflow:</strong> the supervisor runs a research, write and critique loop, revising up to three times until the critiquer approves the answer.",
        "<strong>Tools:</strong> Tavily web search, sandboxed Python, C and C++ code execution, and retrieval over uploaded PDFs and notes.",
        "<strong>Memory:</strong> long-term memory in ChromaDB and the file system, short-term chat history in the shared LangGraph state.",
        "<strong>Interface:</strong> a FastAPI backend with <code>/chat</code> and <code>/upload_pdf</code> endpoints, and a Streamlit web app.",
        "<strong>Built in phases:</strong> the core system for Machine Learning for Industrial Data, the agent workflow for Advanced NLP, and automatic agent generation for multimodal question answering in my third-semester research internship. My thesis added the reviewer agent and hallucination detection on top."
      ],
      metrics: [
        { value: "7", label: "specialised agents" },
        { value: "3", label: "tools" },
        { value: "3", label: "courses + thesis" }
      ],
      links: [
        { label: "Code on GitHub", url: "https://github.com/shajeeraza12/Multi-Agent-Study-Coding-Assistant", kind: "code" },
        { label: "Demo video", url: "https://drive.google.com/file/d/1oicWSLwUlv9RuMbwbWc-MXA9B60gzzij/view?usp=drive_link", kind: "video" }
      ]
    },
    {
      id: "tmdb", track: "engineering", featured: true, visual: "scale",
      tag: "Apache Spark · MLlib · Parquet · Python",
      title: "TMDB Big Data Pipeline",
      lede: "An end-to-end pipeline that collected 400,000+ movie records from the TMDB " +
            "API, processed them in Spark and forecast genre popularity for 2026.",
      points: [
        "Built a multi-threaded, rate-limited downloader that fetched about 427,000 movie records from the TMDB API, with checkpointing so it could resume after interruptions.",
        "Saved the data in Parquet batches and combined them into one dataset of about 400,000 records.",
        "Cleaned and analysed it in Apache Spark: nested JSON fields, genres and cast exploded into rows, and ROI analysis on big-budget films.",
        "Trained a Random Forest regressor (50 trees) in Spark MLlib to predict genre popularity by year, with an RMSE of 3.63, and used it to forecast the top genres for 2026: Adventure, Action, Family, Mystery and Fantasy."
      ],
      metrics: [ { value: "400K+", label: "records" }, { value: "3.63", label: "RMSE" } ],
      links: [
        { label: "Code on GitHub", url: "https://github.com/shajeeraza12/TMDB-Movie-Analysis", kind: "code" }
      ]
    },
    { id: "research-agent", track: "both", featured: false,
      tag: "LangGraph · Pydantic · DeepSeek", period: "Autumn 2025",
      title: "LangGraph Research Assistant Agent",
      lede: "An agent that plans a literature search, queries arXiv and Crossref, writes a summary and reviews its own output.",
      points: [
        "A LangGraph pipeline with planner, ReAct decider, tool executor, writer and reviewer nodes.",
        "Tools for arXiv and Crossref search; Pydantic models define the data passed between nodes.",
        "A retry wrapper with exponential backoff for unreliable API calls.",
        "The reviewer scores the final report; the example run scored 83% and suggested follow-up research directions."
      ],
      metrics: [ { value: "5", label: "graph nodes" }, { value: "83%", label: "review score" } ],
      links: [] },
    { id: "timellm", track: "research", featured: false,
      tag: "LLMs · time series · PyTorch", period: "Autumn 2025",
      title: "Time-LLM: Forecasting with a Frozen LLM",
      lede: "Applied Time-LLM (Jin et al., ICLR 2024), which reprograms a frozen language model to forecast time series, to electricity prices and Bitcoin.",
      points: [
        "Studied the method's patch reprogramming and Prompt-as-Prefix mechanism, which let a frozen LLM read numeric series without fine-tuning.",
        "Ran it on hourly day-ahead electricity prices for several European markets (Belgium, Germany, France, Nord Pool) and on daily BTC/USD closing prices.",
        "Bitcoin forecast error rose from 1.77% MAPE at 7 days to 10.5% at 30 days, showing how errors build up over longer horizons."
      ],
      metrics: [ { value: "1.77%", label: "MAPE, 7 days" }, { value: "10.5%", label: "MAPE, 30 days" } ],
      links: [] },
    { id: "rl", track: "both", featured: false,
      tag: "Ray RLlib · Gymnasium · Stable-Baselines3", period: "Autumn 2025",
      title: "Deep Reinforcement Learning Agents",
      lede: "Trained PPO agents on Atari games with Ray RLlib, and a behaviour cloning agent for MuJoCo HalfCheetah.",
      points: [
        "PPO with Ray RLlib on Atari Space Invaders: average episode return rose from 179 to 419 over 1M environment steps.",
        "The same setup on Breakout over 600K steps, with frame skipping, grayscale and resizing wrappers.",
        "Behaviour cloning on HalfCheetah from a 1,000-episode expert dataset, using the imitation library."
      ],
      metrics: [ { value: "419", label: "Space Invaders return" }, { value: "1M", label: "env steps" } ],
      links: [] },
    { id: "titanic", track: "engineering", featured: false, tag: "ML · classification",
      title: "Titanic: ML from Disaster",
      lede: "Compared three classifiers on the Titanic passenger data.",
      points: [
        "Implemented Logistic Regression, Random Forest and Gradient Boosted Trees.",
        "Evaluated with accuracy, precision, recall, F1 and log loss."
      ],
      links: [ { label: "Colab notebook", url: "https://colab.research.google.com/drive/1p1p0m9B77hXrsk1v-EIduMXjXjzZ0bkK", kind: "code" } ] },
    { id: "pieas-chatbot", track: "both", featured: false, tag: "NLP · deep learning",
      title: "PIEAS FAQ Chatbot",
      lede: "A deep autoencoder chatbot that answers student admission and campus questions.",
      period: "Sep 2022 – Jun 2023",
      points: [ "Final year project for the BS in Computer and Information Sciences.",
                "Supervised by Dr. Asifullah Khan at PIEAS." ],
      links: [] },
    { id: "ocr", track: "engineering", featured: false, tag: "OCR · document AI",
      title: "OCR PDF to CSV",
      lede: "Extracts tables from badly scanned PDFs into CSV.",
      points: [ "Paid freelance project, done in the Machine Learning Lab.",
                "Focused on recovering document structure from noisy scans." ],
      links: [] },
    { id: "hec", track: "engineering", featured: false, tag: "Database · SQL",
      title: "HEC Grants Database",
      lede: "A database for managing research grants at PIEAS ORIC.",
      points: [ "Project started by the Higher Education Commission of Pakistan.",
                "Tracks and manages research funding." ],
      links: [] },
    { id: "amity", track: "engineering", featured: false, tag: "Web · education",
      title: "Amity Educational Portal",
      lede: "A website where students and teachers share books, papers, notes and projects.",
      points: [ "Built for sharing academic resources between students and staff." ],
      links: [] }
  ],

  education: [
    { id: "masters", institution: "itmo",
      degree: "MSc Big Data and Machine Learning", org: "ITMO University",
      period: "Sep 2024 – Jun 2026", place: "St. Petersburg, Russia",
      note: "EQF level 7. Funded by a Russian Open Doors Scholarship. Thesis on hallucination detection for a reviewer agent, supervised by Dr. Denis Nasonov.",
      coursework: "Reinforcement Learning, Advanced Machine Learning, Neural Networks for Deep Learning, Advanced NLP",
      documents: [
        { label: "Degree certificate",          lang: "Russian", url: "https://drive.google.com/file/d/1CbXAHriodK2KF80e_wqRhDrvmo_1Zm5s/view?usp=sharing" },
        { label: "Transcript",                  lang: "Russian", url: "https://drive.google.com/file/d/15zeJIung4_2iiap0QFUXKZ1HiV2dvw8c/view?usp=sharing" },
        { label: "European Diploma Supplement", lang: "English", url: "https://drive.google.com/file/d/1TWasoBv0GPfSDUhlhHqlHbOEMKt21ZT2/view?usp=sharing" }
      ] },
    { id: "bachelors", institution: "pieas",
      degree: "BSc Computer and Information Sciences", org: "Pakistan Institute of Engineering and Applied Sciences (PIEAS)",
      period: "Sep 2019 – Jun 2023", place: "Islamabad, Pakistan",
      note: "EQF level 6. Final year project: deep autoencoder chatbot for institutional FAQs.",
      coursework: "Computer Vision, Computational Intelligence",
      documents: [
        { label: "Degree certificate", lang: "English", url: "https://drive.google.com/file/d/1PjTisF0JyLLlr95PtWVanRu4aH0bcuZF/view?usp=sharing" },
        { label: "Transcript",         lang: "English", url: "https://drive.google.com/file/d/14o_QLwtMEkDFO18hQAgoYPFE9pjbqpR7/view?usp=sharing" }
      ] },
    { id: "hssc", institution: "bahria",
      degree: "Higher Secondary Certificate", org: "Bahria College Islamabad",
      period: "2017 – 2019", place: "Islamabad, Pakistan", note: "",
      documents: [
        { label: "HSSC certificate", lang: "English", url: "https://drive.google.com/file/d/1WIZF7nNPnfJnXnd_0EBfLxyuxHmuT4nu/view?usp=sharing" }
      ] },
    { id: "ssc", institution: "fazaia",
      degree: "Secondary School Certificate", org: "Fazaia Education School System",
      period: "2015 – 2017", place: "Islamabad, Pakistan", note: "",
      documents: [
        { label: "SSC certificate", lang: "English", url: "https://drive.google.com/file/d/1-fRc42wJfuLkorRmjMwnQNtxP74O6QR2/view?usp=sharing" }
      ] }
  ],

  /* NOTE: check the spelling and title of your ITMO recommender. The old site said
     "Dr. Aleksander Voskrenski"; the defence slides say "Voskresenskii Aleksandr". */
  letters: [
    { name: "Aleksandr Voskresenskii", org: "ITMO University, thesis advisor", url: "https://drive.google.com/file/d/1Pvdg0M9Th1XQPJ80vZYfO0ARVzwoTxEh/view?usp=drivesdk" },
    { name: "Dr. Asifullah Khan",      org: "PIEAS, final year project supervisor", url: "https://drive.google.com/file/d/1-Ry_qzFa0kwo6BHnB9WvXlm3rbdRMCiu/view?usp=drivesdk" },
    { name: "Dr. Ijaz Hussain",        org: "PIEAS University", url: "https://drive.google.com/file/d/1edxrxbRvLtiZkjv6Xlo_Fe-xrH95pk43/view?usp=drivesdk" },
    { name: "Dr. Abdul Majid",         org: "PIEAS University", url: "https://drive.google.com/file/d/1rlsBZKANteOaVUYMkUiJ3Qx-y6pNdIC2/view?usp=drivesdk" }
  ],

  honours: [
    { title: "Russian Open Doors Scholarship", year: "2024",
      text: "International merit scholarship in Big Data and Machine Learning, world rank 30. Funded the full MSc at ITMO University." }
  ],

  coursework: [
    { tag: "Neural Network Architectures", title: "LLM prompting and fine-tuning",
      text: "Qwen2.5-7B served with vLLM. Compared naive, few-shot, chain-of-thought and role prompting on BoolQ (chain-of-thought best, 0.61 accuracy vs 0.51 naive), then set up 4-bit LoRA fine-tuning with Unsloth." },
    { tag: "Neural Network Architectures · Advanced ML", title: "Generative models from scratch",
      text: "A diffusion text-to-image model with time embeddings and a U-Net, a DCGAN in PyTorch, and a convolutional VAE trained on the LFW faces dataset." },
    { tag: "Advanced ML", title: "Interpretable credit-risk model",
      text: "Logistic regression, random forest and XGBoost on the UCI credit-default data (XGBoost 0.76 ROC AUC), explained with SHAP, LIME and eli5." },
    { tag: "Advanced ML", title: "SARIMA vs LSTM demand forecasting",
      text: "Weekly store demand forecast over a 52-week horizon. SARIMA reached 7.88% MAPE and R² 0.78; a multi-step LSTM reached 14.6% and R² 0.12." },
    { tag: "Optimisation Methods", title: "Combinatorial and multi-objective optimisation",
      text: "0/1 knapsack with dynamic programming vs simulated annealing, and site selection with an exact ε-constraint method vs NSGA-II, without optimisation libraries." },
    { tag: "Neural Network Architectures", title: "CNN from scratch in NumPy",
      text: "Convolution and pooling layers with forward and backward passes, written without a deep learning framework." }
  ],

  skills: [
    { group: "LLMs and agents", primary: true,
      items: ["LangGraph","LangChain","LangSmith","Langfuse","OpenHands SDK","vLLM","Unsloth / LoRA","RAG","Auto-RAG","Multi-agent systems",
              "Agentic workflows","Hallucination detection","LLM evaluation","SWE-bench Lite",
              "Prompt engineering","Multimodal LLMs","Pydantic","ChromaDB","Pinecone","Embeddings"] },
    { group: "Machine learning", primary: true,
      items: ["Python","PyTorch","TensorFlow","Scikit-learn","Hugging Face Transformers","Deep learning",
              "NLP","Deep autoencoders","Computer vision","Document AI / OCR","Model evaluation","Feature engineering","SHAP / LIME","Reinforcement learning","Ray RLlib","Stable-Baselines3","Diffusion models","SARIMA / statsmodels"] },
    { group: "Distributed data", primary: false,
      items: ["Apache Spark","Spark MLlib","Hadoop","Parquet","Fault-tolerant pipelines","Pandas","NumPy"] },
    { group: "Backend and tools", primary: false,
      items: ["FastAPI","REST APIs","Streamlit","SQL","MySQL","Docker","Linux","Git","GitLab CI/CD","Jupyter","C","C++"] }
  ]
};
