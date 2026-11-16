/**
 * MONALISA CLASSES – FRONTEND UI & CLIENT APPLICATION SCRIPT (index.js)
 * Autonomous College Front, Nayagarh, Odisha, India (CBSE Classes 1–12)
 *
 * Serves the complete Colorful Claymorphism HTML5, CSS3, and Vanilla JS
 * Single-Page Application (Public Website + Student Portal + 12-Module Admin Console).
 * Compatible with both Vercel Serverless (@vercel/node) and Express (admin.js).
 */

export function renderFrontendHTML() {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Monalisa Classes – CBSE Coaching (Classes 1–12)</title>
  <meta name="description" content="Full-stack educational platform for Monalisa Classes, Nayagarh, Odisha. Features CBSE Class 1–12 courses, admission enquiry system, student portal, and 12-module admin dashboard." />
  <meta property="og:title" content="Monalisa Classes – CBSE Coaching (Classes 1–12)" />
  <meta property="og:description" content="Full-stack educational platform for Monalisa Classes, Nayagarh, Odisha. Features CBSE Class 1–12 courses, admission enquiry system, student portal, and 12-module admin dashboard." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=JetBrains+Mono:wght@500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet" />
  <style>
    :root {
      --bg-canvas: #F7F5FF;
      --bg-soft: #EFEAFF;
      --ink-navy: #172554;
      --ink-slate: #334155;
      --ink-muted: #64748B;
      --clay-lavender: #A78BFA;
      --clay-lavender-soft: #EDE9FE;
      --clay-sky: #60A5FA;
      --clay-sky-soft: #DBEAFE;
      --clay-peach: #FDBA9A;
      --clay-peach-soft: #FFEDD5;
      --clay-pink: #F9A8D4;
      --clay-pink-soft: #FCE7F3;
      --clay-mint: #86EFAC;
      --clay-mint-soft: #DCFCE7;
      --clay-yellow: #FDE68A;
      --clay-yellow-soft: #FEF3C7;
      --clay-white: #FFFFFF;
      --shadow-clay-card:
        inset 0 3px 6px rgba(255, 255, 255, 0.92),
        inset 0 -4px 8px rgba(23, 37, 84, 0.06),
        0 14px 30px -8px rgba(23, 37, 84, 0.10),
        0 4px 10px -2px rgba(23, 37, 84, 0.05);
      --shadow-clay-hover:
        inset 0 4px 8px rgba(255, 255, 255, 0.96),
        inset 0 -5px 10px rgba(23, 37, 84, 0.08),
        0 22px 38px -10px rgba(23, 37, 84, 0.16),
        0 8px 16px -4px rgba(23, 37, 84, 0.08);
      --shadow-clay-btn:
        inset 0 3px 5px rgba(255, 255, 255, 0.65),
        inset 0 -4px 6px rgba(23, 37, 84, 0.18),
        0 10px 20px -6px rgba(23, 37, 84, 0.22);
      --shadow-clay-inset:
        inset 0 3px 6px rgba(23, 37, 84, 0.08),
        inset 0 -2px 4px rgba(255, 255, 255, 0.9);
      --radius-xl: 28px;
      --radius-lg: 22px;
      --radius-md: 16px;
      --radius-sm: 12px;
      --font-display: 'Plus Jakarta Sans', sans-serif;
      --font-body: 'DM Sans', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; overflow-x: hidden; }
    body {
      font-family: var(--font-body);
      background-color: var(--bg-canvas);
      background-image:
        radial-gradient(circle at 12% 8%, rgba(167, 139, 250, 0.18) 0%, transparent 28%),
        radial-gradient(circle at 88% 14%, rgba(96, 165, 250, 0.18) 0%, transparent 30%),
        radial-gradient(circle at 50% 55%, rgba(253, 186, 154, 0.14) 0%, transparent 35%),
        radial-gradient(circle at 85% 88%, rgba(134, 239, 172, 0.16) 0%, transparent 30%);
      color: var(--ink-navy);
      line-height: 1.6;
      overflow-x: hidden;
      min-height: 100vh;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: var(--font-display);
      color: var(--ink-navy);
      line-height: 1.2;
      letter-spacing: -0.02em;
      text-wrap: balance;
    }

    .tabular-nums { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }
    .container { width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 24px; }

    .clay-card {
      background: rgba(255, 255, 255, 0.92);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-clay-card);
      border: 2px solid rgba(255, 255, 255, 0.85);
      transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .clay-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-clay-hover); }
    .clay-card-static {
      background: rgba(255, 255, 255, 0.94);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-clay-card);
      border: 2px solid rgba(255, 255, 255, 0.88);
    }

    .clay-tint-lavender { background: linear-gradient(145deg, #FFFFFF 0%, #EDE9FE 100%); }
    .clay-tint-sky { background: linear-gradient(145deg, #FFFFFF 0%, #DBEAFE 100%); }
    .clay-tint-peach { background: linear-gradient(145deg, #FFFFFF 0%, #FFEDD5 100%); }
    .clay-tint-pink { background: linear-gradient(145deg, #FFFFFF 0%, #FCE7F3 100%); }
    .clay-tint-mint { background: linear-gradient(145deg, #FFFFFF 0%, #DCFCE7 100%); }
    .clay-tint-yellow { background: linear-gradient(145deg, #FFFFFF 0%, #FEF3C7 100%); }

    .clay-btn {
      position: relative;
      overflow: hidden;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 0.94rem;
      padding: 12px 22px;
      border-radius: 16px;
      border: none;
      cursor: pointer;
      white-space: nowrap;
      flex-shrink: 0;
      text-decoration: none;
      box-shadow: var(--shadow-clay-btn);
      transition: transform 0.16s cubic-bezier(0.16, 1, 0.3, 1), filter 0.16s ease;
    }
    .clay-btn:hover { transform: translateY(-2px); filter: brightness(1.03); }
    .clay-btn:active { transform: translateY(1px) scale(0.98); }
    .clay-btn-navy { background: linear-gradient(145deg, #253B80, #172554); color: #FFFFFF; }
    .clay-btn-lavender { background: linear-gradient(145deg, #C4B5FD, #8B5CF6); color: #FFFFFF; }
    .clay-btn-sky { background: linear-gradient(145deg, #93C5FD, #3B82F6); color: #FFFFFF; }
    .clay-btn-mint { background: linear-gradient(145deg, #86EFAC, #22C55E); color: #172554; }
    .clay-btn-peach { background: linear-gradient(145deg, #FDBA9A, #FB923C); color: #172554; }
    .clay-btn-yellow { background: linear-gradient(145deg, #FDE68A, #F59E0B); color: #172554; }
    .clay-btn-soft { background: #FFFFFF; color: var(--ink-navy); box-shadow: var(--shadow-clay-card); }
    .clay-btn-danger { background: linear-gradient(145deg, #FCA5A5, #EF4444); color: #FFFFFF; }
    .clay-btn-sm { padding: 8px 14px; font-size: 0.82rem; border-radius: 12px; }

    .clay-input, .clay-select, .clay-textarea {
      width: 100%;
      font-family: var(--font-body);
      font-size: 0.95rem;
      color: var(--ink-navy);
      background: #FFFFFF;
      border: 2px solid #E2E8F0;
      border-radius: 14px;
      padding: 12px 16px;
      box-shadow: var(--shadow-clay-inset);
      transition: border-color 0.16s ease, box-shadow 0.16s ease;
    }
    .clay-input:focus, .clay-select:focus, .clay-textarea:focus {
      outline: none;
      border-color: #8B5CF6;
      box-shadow: 0 0 0 4px rgba(167, 139, 250, 0.25), var(--shadow-clay-inset);
    }
    .form-label {
      display: block;
      font-family: var(--font-display);
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--ink-navy);
      margin-bottom: 6px;
    }

    .top-announcement {
      background: linear-gradient(90deg, #172554 0%, #312E81 50%, #1E3A8A 100%);
      color: #FFFFFF;
      font-size: 0.84rem;
      font-weight: 600;
      padding: 8px 16px;
      text-align: center;
    }
    .sticky-header { position: sticky; top: 10px; z-index: 100; padding: 0 16px; margin-top: 10px; }
    .navbar-glass {
      max-width: 1280px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.88);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-radius: 24px;
      padding: 12px 20px;
      box-shadow: var(--shadow-clay-card);
      border: 2px solid rgba(255, 255, 255, 0.92);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
    .brand-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; color: var(--ink-navy); white-space: nowrap; flex-shrink: 0; }
    .brand-icon {
      width: 44px; height: 44px; border-radius: 14px;
      background: linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%);
      box-shadow: var(--shadow-clay-btn);
      display: flex; align-items: center; justify-content: center; color: #FFFFFF; flex-shrink: 0;
    }
    .brand-name { font-family: var(--font-display); font-weight: 800; font-size: 1.22rem; letter-spacing: -0.03em; color: var(--ink-navy); }
    .nav-links { display: flex; align-items: center; gap: 18px; list-style: none; overflow-x: auto; }
    .nav-links a {
      text-decoration: none; color: var(--ink-slate); font-weight: 600; font-size: 0.9rem;
      white-space: nowrap; padding: 6px 2px; border-bottom: 2px solid transparent;
      transition: color 0.16s ease, border-color 0.16s ease;
    }
    .nav-links a:hover { color: var(--ink-navy); border-bottom-color: #8B5CF6; }
    .nav-actions { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
    .mobile-menu-btn {
      display: none; background: #FFFFFF; border: none; width: 42px; height: 42px;
      border-radius: 12px; box-shadow: var(--shadow-clay-card); cursor: pointer;
      align-items: center; justify-content: center; color: var(--ink-navy);
    }
    .mobile-drawer {
      display: none; max-width: 1280px; margin: 10px auto 0;
      background: rgba(255, 255, 255, 0.97); border-radius: 22px; padding: 20px;
      box-shadow: var(--shadow-clay-hover);
    }
    .mobile-drawer.open { display: block; }

    section { padding: 76px 0; position: relative; }
    .section-header { max-width: 720px; margin: 0 auto 48px; text-align: center; }
    .section-kicker { display: inline-block; font-family: var(--font-display); font-size: 0.82rem; font-weight: 700; color: #6D28D9; margin-bottom: 10px; letter-spacing: 0.02em; }
    .section-title { font-size: clamp(1.85rem, 3.2vw, 2.65rem); font-weight: 800; margin-bottom: 14px; }
    .section-subtitle { font-size: 1.04rem; color: var(--ink-slate); }

    .hero-section { padding: 52px 0 72px; }
    .hero-grid { display: grid; grid-template-columns: 1.12fr 0.88fr; gap: 44px; align-items: center; }
    .hero-headline { font-size: clamp(2.25rem, 4vw, 3.65rem); font-weight: 800; line-height: 1.1; margin-bottom: 20px; color: var(--ink-navy); }
    .hero-highlight { background: linear-gradient(120deg, #7C3AED 0%, #2563EB 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .hero-sub { font-size: 1.12rem; color: var(--ink-slate); margin-bottom: 28px; max-width: 60ch; }
    .hero-cta-row { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 34px; }
    .clay-scene { position: relative; min-height: 440px; display: flex; align-items: center; justify-content: center; }

    @keyframes floatSlow {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-12px) rotate(2deg); }
    }
    .float-item-1 { animation: floatSlow 5.5s ease-in-out infinite; }

    .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
    .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }
    .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }

    .filter-bar { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 36px; }
    .filter-btn {
      font-family: var(--font-display); font-weight: 700; font-size: 0.88rem;
      padding: 10px 18px; border-radius: 14px; border: none; cursor: pointer;
      background: #FFFFFF; color: var(--ink-slate); box-shadow: var(--shadow-clay-card);
      transition: transform 0.15s ease, background 0.15s ease, color 0.15s ease;
    }
    .filter-btn.active { background: var(--ink-navy); color: #FFFFFF; box-shadow: var(--shadow-clay-btn); }

    .stream-tabs { display: flex; gap: 6px; background: #F1F5F9; padding: 5px; border-radius: 12px; margin: 12px 0; }
    .stream-tab {
      flex: 1; border: none; background: transparent; font-family: var(--font-display);
      font-size: 0.78rem; font-weight: 700; padding: 6px 8px; border-radius: 9px;
      cursor: pointer; color: var(--ink-slate); transition: all 0.15s ease;
    }
    .stream-tab.active { background: #FFFFFF; color: var(--ink-navy); box-shadow: 0 2px 6px rgba(23, 37, 84, 0.12); }

    .app-view { display: none; }
    .app-view.active-view { display: block; }

    .dashboard-shell {
      display: grid; grid-template-columns: 270px 1fr; gap: 26px;
      max-width: 1400px; margin: 24px auto 64px; padding: 0 20px; align-items: start;
    }
    .dashboard-sidebar { position: sticky; top: 92px; padding: 20px; max-height: calc(100vh - 110px); overflow-y: auto; }
    .sidebar-nav-btn {
      width: 100%; display: flex; align-items: center; justify-content: space-between;
      gap: 10px; padding: 11px 14px; border-radius: 14px; border: none;
      background: transparent; color: var(--ink-slate); font-family: var(--font-display);
      font-weight: 700; font-size: 0.88rem; text-align: left; cursor: pointer;
      margin-bottom: 6px; transition: background 0.15s ease, color 0.15s ease;
    }
    .sidebar-nav-btn:hover { background: var(--clay-lavender-soft); color: var(--ink-navy); }
    .sidebar-nav-btn.active { background: linear-gradient(135deg, #253B80, #172554); color: #FFFFFF; box-shadow: var(--shadow-clay-btn); }

    .table-responsive { width: 100%; overflow-x: auto; border-radius: 18px; }
    .clay-table { width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem; }
    .clay-table th {
      font-family: var(--font-display); font-weight: 700; font-size: 0.8rem;
      color: var(--ink-slate); background: #F8FAFC; padding: 14px 16px;
      border-bottom: 2px solid #E2E8F0; white-space: nowrap;
    }
    .clay-table td { padding: 13px 16px; border-bottom: 1px solid #F1F5F9; vertical-align: middle; }
    .clay-table tr:hover td { background: rgba(237, 233, 254, 0.32); }

    .modal-backdrop {
      position: fixed; inset: 0; background: rgba(23, 37, 84, 0.55);
      backdrop-filter: blur(6px); z-index: 900; display: none;
      align-items: center; justify-content: center; padding: 20px; overflow-y: auto;
    }
    .modal-backdrop.open { display: flex; }
    .modal-content { width: 100%; max-width: 680px; max-height: 90vh; overflow-y: auto; padding: 32px; position: relative; }

    .toast-stack { position: fixed; bottom: 24px; right: 24px; z-index: 1000; display: flex; flex-direction: column; gap: 10px; max-width: 380px; }
    .toast-item {
      padding: 14px 18px; border-radius: 18px; background: #172554; color: #FFFFFF;
      font-weight: 600; font-size: 0.9rem; box-shadow: var(--shadow-clay-hover);
      animation: slideInUp 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes slideInUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
    .ripple-circle { position: absolute; border-radius: 50%; background: rgba(255, 255, 255, 0.45); transform: scale(0); animation: rippleAnim 0.5s linear; pointer-events: none; }
    @keyframes rippleAnim { to { transform: scale(3.5); opacity: 0; } }

    @media (max-width: 1080px) {
      .hero-grid { grid-template-columns: 1fr; }
      .grid-4, .grid-3 { grid-template-columns: repeat(2, 1fr); }
      .dashboard-shell { grid-template-columns: 1fr; }
      .dashboard-sidebar { position: static; max-height: none; }
      .nav-links { display: none; }
      .mobile-menu-btn { display: inline-flex; }
    }
    @media (max-width: 680px) {
      .grid-4, .grid-3, .grid-2 { grid-template-columns: 1fr; }
      section { padding: 52px 0; }
      .navbar-glass { padding: 10px 14px; }
      .nav-actions .hide-mobile { display: none; }
    }
  </style>
</head>
<body>
  <div class="top-announcement" id="topAnnouncementBar">
    Admissions Open for Academic Session 2026–27 (CBSE Classes 1 to 12) • Autonomous College Front, Nayagarh, Odisha
  </div>

  <header class="sticky-header">
    <nav class="navbar-glass" aria-label="Main Navigation">
      <a href="#home" class="brand-logo" onclick="switchView('public')">
        <div class="brand-icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        </div>
        <span class="brand-name" id="navInstituteName">Monalisa Classes</span>
      </a>

      <ul class="nav-links" id="publicNavLinks">
        <li><a href="#home" onclick="switchView('public')">Home</a></li>
        <li><a href="#about" onclick="switchView('public')">About Us</a></li>
        <li><a href="#courses" onclick="switchView('public')">Courses</a></li>
        <li><a href="#faculty" onclick="switchView('public')">Faculty</a></li>
        <li><a href="#results" onclick="switchView('public')">Results</a></li>
        <li><a href="#gallery" onclick="switchView('public')">Gallery</a></li>
        <li><a href="#notices" onclick="switchView('public')">Notice Board</a></li>
        <li><a href="#contact" onclick="switchView('public')">Contact</a></li>
      </ul>

      <div class="nav-actions">
        <button type="button" class="clay-btn clay-btn-soft clay-btn-sm" onclick="openPortalView('student')">Student Login</button>
        <button type="button" class="clay-btn clay-btn-peach clay-btn-sm hide-mobile" onclick="openPortalView('admin')">Admin Dashboard</button>
        <a href="#admission-enquiry" class="clay-btn clay-btn-navy clay-btn-sm hide-mobile" onclick="switchView('public')">Admission</a>
        <button type="button" class="mobile-menu-btn" aria-label="Toggle Menu" onclick="toggleMobileDrawer()">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </nav>

    <div class="mobile-drawer" id="mobileDrawer">
      <div style="display:flex; flex-direction:column; gap:10px;">
        <a href="#home" onclick="switchView('public'); toggleMobileDrawer()" style="font-weight:700; color:var(--ink-navy); text-decoration:none; padding:6px 0;">Home</a>
        <a href="#about" onclick="switchView('public'); toggleMobileDrawer()" style="font-weight:700; color:var(--ink-navy); text-decoration:none; padding:6px 0;">About Us</a>
        <a href="#courses" onclick="switchView('public'); toggleMobileDrawer()" style="font-weight:700; color:var(--ink-navy); text-decoration:none; padding:6px 0;">Courses (CBSE 1–12)</a>
        <a href="#faculty" onclick="switchView('public'); toggleMobileDrawer()" style="font-weight:700; color:var(--ink-navy); text-decoration:none; padding:6px 0;">Our Faculty</a>
        <a href="#results" onclick="switchView('public'); toggleMobileDrawer()" style="font-weight:700; color:var(--ink-navy); text-decoration:none; padding:6px 0;">Results & Achievements</a>
        <a href="#gallery" onclick="switchView('public'); toggleMobileDrawer()" style="font-weight:700; color:var(--ink-navy); text-decoration:none; padding:6px 0;">Photo Gallery</a>
        <a href="#notices" onclick="switchView('public'); toggleMobileDrawer()" style="font-weight:700; color:var(--ink-navy); text-decoration:none; padding:6px 0;">Notice Board</a>
        <a href="#contact" onclick="switchView('public'); toggleMobileDrawer()" style="font-weight:700; color:var(--ink-navy); text-decoration:none; padding:6px 0;">Contact Us</a>
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:8px;">
          <button type="button" class="clay-btn clay-btn-lavender clay-btn-sm" onclick="openPortalView('student'); toggleMobileDrawer()">Student Portal</button>
          <button type="button" class="clay-btn clay-btn-peach clay-btn-sm" onclick="openPortalView('admin'); toggleMobileDrawer()">Admin Login</button>
          <a href="#admission-enquiry" class="clay-btn clay-btn-navy clay-btn-sm" onclick="switchView('public'); toggleMobileDrawer()">Enquire Now</a>
        </div>
      </div>
    </div>
  </header>

  <main id="view-public" class="app-view active-view">
    <section id="home" class="hero-section">
      <div class="container">
        <div class="hero-grid">
          <div>
            <div style="margin-bottom:14px; font-weight:700; font-size:0.88rem; color:#5B21B6;">
              CBSE Classes 1 to 12 · Autonomous College Front, Nayagarh, Odisha
            </div>
            <h1 class="hero-headline">
              BUILD YOUR FUTURE WITH <span class="hero-highlight">MONALISA CLASSES</span>
            </h1>
            <p class="hero-sub" id="heroTagline">
              Quality Education, Personal Attention and Academic Excellence for Every Student.
            </p>
            <div class="hero-cta-row">
              <a href="#courses" class="clay-btn clay-btn-navy">Explore Courses (Class 1–12)</a>
              <a href="#admission-enquiry" class="clay-btn clay-btn-lavender">Enquire Now</a>
            </div>
            <div class="grid-3" style="gap:16px;">
              <div class="clay-card clay-tint-lavender" style="padding:18px 20px;">
                <div class="tabular-nums" style="font-size:1.65rem; font-weight:800; color:var(--ink-navy);">Classes 1–12</div>
                <div style="font-size:0.84rem; color:var(--ink-slate); font-weight:600;">Complete CBSE Academic Wings</div>
              </div>
              <div class="clay-card clay-tint-mint" style="padding:18px 20px;">
                <div class="tabular-nums" style="font-size:1.65rem; font-weight:800; color:var(--ink-navy);">25 : 1</div>
                <div style="font-size:0.84rem; color:var(--ink-slate); font-weight:600;">Small Batch Individual Care</div>
              </div>
              <div class="clay-card clay-tint-yellow" style="padding:18px 20px;">
                <div class="tabular-nums" style="font-size:1.65rem; font-weight:800; color:var(--ink-navy);">100% NCERT</div>
                <div style="font-size:0.84rem; color:var(--ink-slate); font-weight:600;">Concept + Weekly Testing</div>
              </div>
            </div>
          </div>

          <div class="clay-scene">
            <div class="clay-card clay-tint-sky float-item-1" style="width:100%; max-width:500px; padding:28px; position:relative;">
              <svg viewBox="0 0 460 350" width="100%" height="auto" role="img" aria-label="3D Educational Illustration">
                <defs>
                  <linearGradient id="gradLavender" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#C4B5FD"/><stop offset="100%" stop-color="#7C3AED"/></linearGradient>
                  <linearGradient id="gradSky" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#93C5FD"/><stop offset="100%" stop-color="#2563EB"/></linearGradient>
                  <linearGradient id="gradPeach" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FDBA9A"/><stop offset="100%" stop-color="#F97316"/></linearGradient>
                  <linearGradient id="gradMint" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#A7F3D0"/><stop offset="100%" stop-color="#10B981"/></linearGradient>
                  <filter id="soft3d" x="-15%" y="-15%" width="130%" height="130%">
                    <feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="#172554" flood-opacity="0.18"/>
                  </filter>
                </defs>
                <circle cx="230" cy="175" r="145" fill="#FFFFFF" opacity="0.65"/>
                <circle cx="95" cy="80" r="34" fill="#FDE68A" filter="url(#soft3d)"/>
                <circle cx="380" cy="275" r="28" fill="#F9A8D4" filter="url(#soft3d)"/>
                <g filter="url(#soft3d)">
                  <rect x="90" y="225" width="280" height="46" rx="16" fill="url(#gradLavender)"/>
                  <rect x="104" y="235" width="245" height="26" rx="8" fill="#FFFFFF" opacity="0.92"/>
                  <rect x="105" y="178" width="250" height="46" rx="16" fill="url(#gradSky)"/>
                  <rect x="120" y="188" width="215" height="26" rx="8" fill="#FFFFFF" opacity="0.92"/>
                  <rect x="125" y="132" width="210" height="46" rx="16" fill="url(#gradPeach)"/>
                  <rect x="140" y="142" width="180" height="26" rx="8" fill="#FFFFFF" opacity="0.92"/>
                </g>
                <g filter="url(#soft3d)">
                  <polygon points="230,45 340,90 230,132 120,90" fill="#172554"/>
                  <rect x="175" y="112" width="110" height="30" rx="12" fill="#1E3A8A"/>
                  <path d="M315 98 L335 155" stroke="#FDE68A" stroke-width="6" stroke-linecap="round"/>
                  <circle cx="335" cy="158" r="9" fill="#F59E0B"/>
                </g>
                <g filter="url(#soft3d)" transform="rotate(-18 355 120)">
                  <rect x="340" y="65" width="26" height="110" rx="10" fill="#FDE68A"/>
                  <rect x="340" y="50" width="26" height="20" rx="6" fill="#F9A8D4"/>
                  <polygon points="340,175 366,175 353,202" fill="#FDBA9A"/>
                  <polygon points="348,191 358,191 353,202" fill="#172554"/>
                </g>
                <g filter="url(#soft3d)">
                  <rect x="52" y="128" width="64" height="64" rx="20" fill="url(#gradMint)"/>
                  <text x="84" y="168" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="22" fill="#172554">A+</text>
                </g>
              </svg>
              <div class="clay-card-static" style="padding:14px 18px; margin-top:8px; display:flex; align-items:center; justify-content:space-between; gap:12px;">
                <div>
                  <div style="font-family:var(--font-display); font-weight:800; font-size:0.95rem;">Autonomous College Front, Nayagarh</div>
                  <div style="font-size:0.82rem; color:var(--ink-slate);">Primary (1–5) · Middle (6–8) · Board & Senior (9–12)</div>
                </div>
                <a href="#admission-enquiry" class="clay-btn clay-btn-mint clay-btn-sm">Join Batch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" style="background: rgba(255,255,255,0.5);">
      <div class="container">
        <div class="section-header">
          <span class="section-kicker">ABOUT OUR INSTITUTION</span>
          <h2 class="section-title">Nurturing Confident Learners from Class 1 to Class 12</h2>
          <p class="section-subtitle">
            Located right opposite Autonomous College in Nayagarh, Odisha, Monalisa Classes combines structured CBSE curriculum mastery with warm, personal mentorship.
          </p>
        </div>
        <div class="grid-3">
          <div class="clay-card clay-tint-lavender" style="padding:28px;">
            <h3 style="font-size:1.25rem; margin-bottom:10px;">01. Institute Introduction & Environment</h3>
            <p style="color:var(--ink-slate); font-size:0.95rem;">
              Monalisa Classes was founded to provide Nayagarh students with a disciplined, distraction-free, and encouraging academic space where every child receives direct teacher interaction.
            </p>
          </div>
          <div class="clay-card clay-tint-peach" style="padding:28px;">
            <h3 style="font-size:1.25rem; margin-bottom:10px;">02. Teaching Philosophy</h3>
            <p style="color:var(--ink-slate); font-size:0.95rem;">
              We believe strong fundamentals precede high marks. Every chapter begins with real-life intuition and NCERT line-by-line decoding, followed by graded worksheets and weekly evaluations.
            </p>
          </div>
          <div class="clay-card clay-tint-mint" style="padding:28px;">
            <h3 style="font-size:1.25rem; margin-bottom:10px;">03. Mission, Vision & Core Values</h3>
            <p style="color:var(--ink-slate); font-size:0.95rem;">
              Our mission is to empower CBSE students from Class 1 through Class 12 (Science, Commerce & Arts) with conceptual clarity, academic discipline, and transparent parent communication.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="courses">
      <div class="container">
        <div class="section-header">
          <span class="section-kicker">CBSE ACADEMIC PROGRAMS</span>
          <h2 class="section-title">Structured Courses for CBSE Classes 1 to 12</h2>
          <p class="section-subtitle">
            Select your child's academic stage below. For Senior Secondary (Classes 11 & 12), explore Science, Commerce, and Arts stream combinations.
          </p>
        </div>
        <div class="filter-bar" role="tablist" aria-label="Course Wing Filter">
          <button type="button" class="filter-btn active" onclick="filterCourses('all', this)">All Classes (1–12)</button>
          <button type="button" class="filter-btn" onclick="filterCourses('primary', this)">Primary Wing (Class 1–5)</button>
          <button type="button" class="filter-btn" onclick="filterCourses('middle', this)">Middle Wing (Class 6–8)</button>
          <button type="button" class="filter-btn" onclick="filterCourses('secondary', this)">Secondary Board (Class 9–10)</button>
          <button type="button" class="filter-btn" onclick="filterCourses('senior', this)">Senior Secondary (Class 11–12)</button>
        </div>
        <div class="grid-3" id="coursesGrid"></div>
      </div>
    </section>

    <section id="why-us" style="background: rgba(255,255,255,0.55);">
      <div class="container">
        <div class="section-header">
          <span class="section-kicker">THE MONALISA ADVANTAGE</span>
          <h2 class="section-title">Why Parents & Students in Nayagarh Choose Us</h2>
          <p class="section-subtitle">An end-to-end academic support system built around consistency, testing rigor, and approachable mentors.</p>
        </div>
        <div class="grid-4">
          <div class="clay-card clay-tint-lavender" style="padding:24px;"><h3 style="font-size:1.08rem; margin-bottom:8px;">01. Experienced Teachers</h3><p style="font-size:0.9rem; color:var(--ink-slate);">Subject specialists with deep familiarity in CBSE marking schemes and foundational pedagogy.</p></div>
          <div class="clay-card clay-tint-sky" style="padding:24px;"><h3 style="font-size:1.08rem; margin-bottom:8px;">02. Individual Attention</h3><p style="font-size:0.9rem; color:var(--ink-slate);">Capped batch strength ensures teachers review every student's classwork notebook personally.</p></div>
          <div class="clay-card clay-tint-peach" style="padding:24px;"><h3 style="font-size:1.08rem; margin-bottom:8px;">03. Regular Tests</h3><p style="font-size:0.9rem; color:var(--ink-slate);">Chapter-wise weekend quizzes, cumulative unit exams, and full 3-hour pre-board simulations.</p></div>
          <div class="clay-card clay-tint-mint" style="padding:24px;"><h3 style="font-size:1.08rem; margin-bottom:8px;">04. Doubt-Clearing Sessions</h3><p style="font-size:0.9rem; color:var(--ink-slate);">Dedicated daily post-class counters where hesitant students resolve numerical and conceptual gaps.</p></div>
          <div class="clay-card clay-tint-yellow" style="padding:24px;"><h3 style="font-size:1.08rem; margin-bottom:8px;">05. Study Materials</h3><p style="font-size:0.9rem; color:var(--ink-slate);">Curated NCERT summaries, formula handbooks, competency banks, and solved sample papers.</p></div>
          <div class="clay-card clay-tint-pink" style="padding:24px;"><h3 style="font-size:1.08rem; margin-bottom:8px;">06. Progress Tracking</h3><p style="font-size:0.9rem; color:var(--ink-slate);">Digital student portal tracking attendance logs, subject-wise marks, and homework completion.</p></div>
          <div class="clay-card clay-tint-sky" style="padding:24px;"><h3 style="font-size:1.08rem; margin-bottom:8px;">07. Exam Preparation</h3><p style="font-size:0.9rem; color:var(--ink-slate);">Step-marking presentation clinics, time-management drills, and previous 10-year CBSE analysis.</p></div>
          <div class="clay-card clay-tint-lavender" style="padding:24px;"><h3 style="font-size:1.08rem; margin-bottom:8px;">08. Parent Communication</h3><p style="font-size:0.9rem; color:var(--ink-slate);">Monthly parent-teacher academic briefings and instant SMS/WhatsApp attendance updates.</p></div>
        </div>
      </div>
    </section>

    <section id="faculty">
      <div class="container">
        <div class="section-header">
          <span class="section-kicker">DEDICATED MENTORS (DEMO PROFILES)</span>
          <h2 class="section-title">Meet Our Academic Faculty</h2>
          <p class="section-subtitle">Experienced educators committed to making every subject engaging and clear. <em>(Sample demonstration profiles shown below.)</em></p>
        </div>
        <div class="grid-3" id="facultyGrid"></div>
      </div>
    </section>

    <section id="results" style="background: rgba(255,255,255,0.55);">
      <div class="container">
        <div class="section-header">
          <span class="section-kicker">SAMPLE / DEMONSTRATION RESULTS</span>
          <h2 class="section-title">Academic Performance & Student Milestones</h2>
          <p class="section-subtitle">Preview how student examination achievements and subject-wise scorecards are showcased. <em>(Clearly labelled demonstration data.)</em></p>
        </div>
        <div class="grid-3" id="resultsGrid"></div>
      </div>
    </section>

    <section id="gallery">
      <div class="container">
        <div class="section-header">
          <span class="section-kicker">CAMPUS LIFE & EVENTS</span>
          <h2 class="section-title">Interactive Campus Gallery</h2>
          <p class="section-subtitle">Explore our classrooms, science demonstrations, felicitation ceremonies, and study environment.</p>
        </div>
        <div class="filter-bar">
          <button type="button" class="filter-btn active" onclick="filterGallery('All', this)">All Photos</button>
          <button type="button" class="filter-btn" onclick="filterGallery('Classroom', this)">Classrooms</button>
          <button type="button" class="filter-btn" onclick="filterGallery('Student Activities', this)">Student Activities</button>
          <button type="button" class="filter-btn" onclick="filterGallery('Awards', this)">Awards</button>
          <button type="button" class="filter-btn" onclick="filterGallery('Celebrations', this)">Celebrations</button>
          <button type="button" class="filter-btn" onclick="filterGallery('Institute Environment', this)">Campus</button>
        </div>
        <div class="grid-3" id="galleryGrid"></div>
      </div>
    </section>

    <section id="notices" style="background: rgba(255,255,255,0.55);">
      <div class="container">
        <div class="section-header">
          <span class="section-kicker">OFFICIAL UPDATES</span>
          <h2 class="section-title">Institute Notice Board</h2>
          <p class="section-subtitle">Stay updated with admission schedules, upcoming examination dates, holiday notifications, and parent meetings.</p>
        </div>
        <div class="grid-2" id="noticesGrid"></div>
      </div>
    </section>

    <section id="testimonials">
      <div class="container">
        <div class="section-header">
          <span class="section-kicker">COMMUNITY VOICES (DEMO CONTENT)</span>
          <h2 class="section-title">What Parents & Students Say</h2>
          <p class="section-subtitle">Demonstration testimonials illustrating parent and student feedback on our mentoring approach.</p>
        </div>
        <div class="grid-3">
          <div class="clay-card clay-tint-lavender" style="padding:26px;">
            <div style="color:#D97706; font-size:1.05rem; margin-bottom:10px;">★★★★★</div>
            <p style="font-size:0.95rem; color:var(--ink-slate); margin-bottom:18px;">"The small batch size made a huge difference for my son in Class 10 Mathematics. Weekly test evaluation and regular parent feedback helped him overcome his fear of trigonometry."</p>
            <div style="display:flex; align-items:center; gap:12px;">
              <div class="brand-icon" style="width:40px; height:40px; font-weight:800; font-size:0.85rem;">SM</div>
              <div><div style="font-family:var(--font-display); font-weight:800; font-size:0.92rem;">Sri Sanjay Mohapatra (Demo)</div><div style="font-size:0.8rem; color:var(--ink-muted);">Parent of Class 10 Student · Nayagarh</div></div>
            </div>
          </div>
          <div class="clay-card clay-tint-mint" style="padding:26px;">
            <div style="color:#D97706; font-size:1.05rem; margin-bottom:10px;">★★★★★</div>
            <p style="font-size:0.95rem; color:var(--ink-slate); margin-bottom:18px;">"For Class 12 Science, the Physics numerical sheets and Organic Chemistry reaction flowcharts provided at Monalisa Classes are super clear and aligned with CBSE board exams."</p>
            <div style="display:flex; align-items:center; gap:12px;">
              <div class="brand-icon" style="width:40px; height:40px; font-weight:800; font-size:0.85rem; background:linear-gradient(135deg,#34D399,#059669);">AP</div>
              <div><div style="font-family:var(--font-display); font-weight:800; font-size:0.92rem;">Ananya Priyadarshini (Demo)</div><div style="font-size:0.8rem; color:var(--ink-muted);">CBSE Class 12 Science Student</div></div>
            </div>
          </div>
          <div class="clay-card clay-tint-peach" style="padding:26px;">
            <div style="color:#D97706; font-size:1.05rem; margin-bottom:10px;">★★★★★</div>
            <p style="font-size:0.95rem; color:var(--ink-slate); margin-bottom:18px;">"Being located right in front of Autonomous College makes pick-up and drop very convenient. The teachers genuinely care about foundational reading and writing for junior classes."</p>
            <div style="display:flex; align-items:center; gap:12px;">
              <div class="brand-icon" style="width:40px; height:40px; font-weight:800; font-size:0.85rem; background:linear-gradient(135deg,#FDBA9A,#EA580C);">PS</div>
              <div><div style="font-family:var(--font-display); font-weight:800; font-size:0.92rem;">Smt. Pallavi Swain (Demo)</div><div style="font-size:0.8rem; color:var(--ink-muted);">Parent of Class 5 Student · Nayagarh</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="admission-enquiry" style="background: rgba(255,255,255,0.6);">
      <div class="container">
        <div class="section-header">
          <span class="section-kicker">ADMISSIONS 2026–2027</span>
          <h2 class="section-title">Online Admission Enquiry Form</h2>
          <p class="section-subtitle">Submit your details below to receive a callback from our Academic Counselor and schedule a free diagnostic interaction.</p>
        </div>

        <div class="grid-2" id="contact" style="align-items: start;">
          <div class="clay-card-static" style="padding:32px;">
            <h3 style="font-size:1.35rem; margin-bottom:6px;">Student Admission Enquiry</h3>
            <p style="font-size:0.88rem; color:var(--ink-slate); margin-bottom:22px;">All submissions generate an instant Reference ID and are stored directly in our admissions desk.</p>
            <form id="enquiryForm" onsubmit="submitAdmissionEnquiry(event)">
              <div class="grid-2" style="gap:16px; margin-bottom:16px;">
                <div><label class="form-label" for="enqStudentName">Student Full Name *</label><input class="clay-input" id="enqStudentName" name="studentName" required placeholder="e.g., Siddharth Mishra" /></div>
                <div><label class="form-label" for="enqDob">Date of Birth *</label><input class="clay-input" type="date" id="enqDob" name="dob" required value="2012-06-15" /></div>
              </div>
              <div class="grid-2" style="gap:16px; margin-bottom:16px;">
                <div><label class="form-label" for="enqFatherName">Father's Name *</label><input class="clay-input" id="enqFatherName" name="fatherName" required placeholder="Father's Full Name" /></div>
                <div><label class="form-label" for="enqMotherName">Mother's Name *</label><input class="clay-input" id="enqMotherName" name="motherName" required placeholder="Mother's Full Name" /></div>
              </div>
              <div class="grid-3" style="gap:14px; margin-bottom:16px;">
                <div>
                  <label class="form-label" for="enqGender">Gender *</label>
                  <select class="clay-select" id="enqGender" name="gender" required><option value="Male">Male</option><option value="Female">Female</option><option value="Other">Other</option></select>
                </div>
                <div>
                  <label class="form-label" for="enqClass">Class Applying For *</label>
                  <select class="clay-select" id="enqClass" name="classApplyingFor" required onchange="toggleEnquiryStream(this.value)">
                    <option value="Class 1">CBSE Class 1</option><option value="Class 2">CBSE Class 2</option><option value="Class 3">CBSE Class 3</option>
                    <option value="Class 4">CBSE Class 4</option><option value="Class 5">CBSE Class 5</option><option value="Class 6">CBSE Class 6</option>
                    <option value="Class 7">CBSE Class 7</option><option value="Class 8">CBSE Class 8</option><option value="Class 9">CBSE Class 9</option>
                    <option value="Class 10" selected>CBSE Class 10</option><option value="Class 11">CBSE Class 11</option><option value="Class 12">CBSE Class 12</option>
                  </select>
                </div>
                <div>
                  <label class="form-label" for="enqSession">Academic Session *</label>
                  <select class="clay-select" id="enqSession" name="academicSession" required><option value="2026-2027">2026-2027</option><option value="2027-2028">2027-2028</option></select>
                </div>
              </div>
              <div id="enqStreamWrapper" style="display:none; margin-bottom:16px;">
                <label class="form-label" for="enqStream">Preferred Stream (For Classes 11 & 12)</label>
                <select class="clay-select" id="enqStream" name="streamPreference">
                  <option value="Science">Science (Physics, Chemistry, Maths / Biology)</option>
                  <option value="Commerce">Commerce (Accountancy, Business Studies, Economics)</option>
                  <option value="Arts">Arts / Humanities (History, Pol. Science, Geography, Economics)</option>
                </select>
              </div>
              <div class="grid-2" style="gap:16px; margin-bottom:16px;">
                <div><label class="form-label" for="enqMobile">Student / Primary Mobile *</label><input class="clay-input" type="tel" id="enqMobile" name="mobile" required placeholder="10-digit mobile number" pattern="[0-9+\\-\\s]{10,15}" /></div>
                <div><label class="form-label" for="enqParentMobile">Parent / Guardian Mobile *</label><input class="clay-input" type="tel" id="enqParentMobile" name="parentMobile" required placeholder="Parent 10-digit mobile" pattern="[0-9+\\-\\s]{10,15}" /></div>
              </div>
              <div class="grid-2" style="gap:16px; margin-bottom:16px;">
                <div><label class="form-label" for="enqEmail">Email Address *</label><input class="clay-input" type="email" id="enqEmail" name="email" required placeholder="parent@example.com" /></div>
                <div><label class="form-label" for="enqSchool">Previous / Current School *</label><input class="clay-input" id="enqSchool" name="previousSchool" required placeholder="e.g., DAV / KV / St. Xavier's" /></div>
              </div>
              <div style="margin-bottom:16px;"><label class="form-label" for="enqAddress">Residential Address *</label><input class="clay-input" id="enqAddress" name="address" required placeholder="House / Street / Locality, Nayagarh, Odisha" /></div>
              <div style="margin-bottom:20px;"><label class="form-label" for="enqMessage">Specific Academic Requirement / Message</label><textarea class="clay-textarea" id="enqMessage" name="message" rows="3" placeholder="Mention preferred batch timing or subjects..."></textarea></div>
              <button type="submit" class="clay-btn clay-btn-navy" style="width:100%; padding:14px;" id="enquirySubmitBtn">Submit Admission Enquiry</button>
            </form>
            <div id="enquiryConfirmationBox" class="clay-card clay-tint-mint" style="display:none; padding:20px; margin-top:20px;">
              <h4 style="font-size:1.1rem; margin-bottom:6px;" id="enquiryConfirmTitle">Enquiry Submitted!</h4>
              <p style="font-size:0.9rem; color:var(--ink-slate);" id="enquiryConfirmText"></p>
            </div>
          </div>

          <div style="display:flex; flex-direction:column; gap:24px;">
            <div class="clay-card clay-tint-lavender" style="padding:30px;">
              <h3 style="font-size:1.35rem; margin-bottom:14px;">Visit Monalisa Classes Campus</h3>
              <p style="color:var(--ink-slate); margin-bottom:20px;">Walk-in academic counseling open Monday to Saturday (7:00 AM – 12:00 PM & 4:00 PM – 8:00 PM).</p>
              <div style="display:flex; flex-direction:column; gap:14px; font-size:0.95rem;">
                <div><strong style="display:block; font-family:var(--font-display);">Campus Address:</strong><span id="contactAddressText">Autonomous College Front, Nayagarh, Odisha, India – 752069</span></div>
                <div><strong style="display:block; font-family:var(--font-display);">Admissions Helpline:</strong><span class="tabular-nums" id="contactPhoneText">+91 98765 43210</span></div>
                <div><strong style="display:block; font-family:var(--font-display);">Official Email:</strong><span id="contactEmailText">info@monalisaclasses.example</span></div>
              </div>
              <div style="display:flex; flex-wrap:wrap; gap:12px; margin-top:24px;">
                <button type="button" class="clay-btn clay-btn-mint" onclick="triggerWhatsAppEnquiry()">WhatsApp Enquiry Desk</button>
                <button type="button" class="clay-btn clay-btn-soft" onclick="openPortalView('student')">Open Student Portal</button>
              </div>
            </div>

            <div class="clay-card clay-tint-sky" style="padding:26px;">
              <h4 style="font-size:1.1rem; margin-bottom:8px;">Campus Location Landmark</h4>
              <p style="font-size:0.88rem; color:var(--ink-slate); margin-bottom:14px;">Situated directly opposite Nayagarh Autonomous College Main Gate on State Highway 21.</p>
              <div style="border-radius:18px; overflow:hidden; background:#DBEAFE; border:2px solid #FFFFFF; padding:22px; text-align:center;">
                <svg viewBox="0 0 500 220" width="100%" height="180" role="img" aria-label="Campus Map">
                  <rect width="500" height="220" rx="14" fill="#EFF6FF"/>
                  <path d="M0 115 L500 115" stroke="#93C5FD" stroke-width="26"/>
                  <path d="M0 115 L500 115" stroke="#FFFFFF" stroke-width="3" stroke-dasharray="12 10"/>
                  <path d="M240 0 L240 220" stroke="#BFDBFE" stroke-width="18"/>
                  <rect x="275" y="25" width="190" height="65" rx="12" fill="#EDE9FE" stroke="#8B5CF6" stroke-width="2"/>
                  <text x="370" y="55" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="13" fill="#172554">MONALISA CLASSES</text>
                  <text x="370" y="74" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="11" fill="#475569">College Front, Nayagarh</text>
                  <circle cx="370" cy="115" r="10" fill="#EF4444"/>
                  <rect x="45" y="142" width="175" height="55" rx="12" fill="#DCFCE7" stroke="#22C55E" stroke-width="2"/>
                  <text x="132" y="173" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="12" fill="#172554">Autonomous College Gate</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer style="background:#172554; color:#F8FAFC; padding:64px 0 36px; margin-top:40px;">
      <div class="container">
        <div class="grid-4" style="gap:32px; margin-bottom:44px;">
          <div>
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:14px;">
              <div class="brand-icon" style="width:40px; height:40px;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <span style="font-family:var(--font-display); font-weight:800; font-size:1.2rem; color:#FFFFFF;">Monalisa Classes</span>
            </div>
            <p style="font-size:0.9rem; color:#CBD5E1; margin-bottom:16px;">Premier CBSE Coaching Institute in Nayagarh, Odisha providing structured foundation and board preparation for Classes 1 to 12.</p>
            <div style="font-size:0.82rem; color:#94A3B8;">Autonomous College Front, Nayagarh, Odisha – 752069</div>
          </div>
          <div>
            <h4 style="color:#FFFFFF; font-size:1rem; margin-bottom:14px;">Quick Navigation</h4>
            <ul style="list-style:none; display:flex; flex-direction:column; gap:8px; font-size:0.9rem;">
              <li><a href="#about" style="color:#CBD5E1; text-decoration:none;">About Monalisa Classes</a></li>
              <li><a href="#courses" style="color:#CBD5E1; text-decoration:none;">Academic Courses</a></li>
              <li><a href="#faculty" style="color:#CBD5E1; text-decoration:none;">Our Faculty</a></li>
              <li><a href="#results" style="color:#CBD5E1; text-decoration:none;">Sample Results</a></li>
              <li><a href="#notices" style="color:#CBD5E1; text-decoration:none;">Notice Board</a></li>
              <li><a href="#admission-enquiry" style="color:#CBD5E1; text-decoration:none;">Admission Enquiry</a></li>
            </ul>
          </div>
          <div>
            <h4 style="color:#FFFFFF; font-size:1rem; margin-bottom:14px;">CBSE Academic Wings</h4>
            <ul style="list-style:none; display:flex; flex-direction:column; gap:8px; font-size:0.9rem; color:#CBD5E1;">
              <li>Primary Foundation (Classes 1 – 5)</li>
              <li>Middle School Wing (Classes 6 – 8)</li>
              <li>Secondary Board Target (Classes 9 – 10)</li>
              <li>Class 11 & 12 Science (PCMB)</li>
              <li>Class 11 & 12 Commerce & Arts</li>
            </ul>
          </div>
          <div>
            <h4 style="color:#FFFFFF; font-size:1rem; margin-bottom:14px;">Portals & Contact</h4>
            <p style="font-size:0.9rem; color:#CBD5E1; margin-bottom:8px;" id="footerPhone">+91 98765 43210</p>
            <p style="font-size:0.9rem; color:#CBD5E1; margin-bottom:16px;" id="footerEmail">info@monalisaclasses.example</p>
            <div style="display:flex; gap:10px; flex-wrap:wrap;">
              <button type="button" class="clay-btn clay-btn-lavender clay-btn-sm" onclick="openPortalView('student')">Student Login</button>
              <button type="button" class="clay-btn clay-btn-peach clay-btn-sm" onclick="openPortalView('admin')">Admin Portal</button>
            </div>
          </div>
        </div>
        <div style="border-top:1px solid rgba(255,255,255,0.14); padding-top:24px; display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:14px; font-size:0.84rem; color:#94A3B8;">
          <div>© 2026 Monalisa Classes, Nayagarh, Odisha. All rights reserved.</div>
          <div style="display:flex; gap:18px;">
            <button type="button" onclick="openPolicyModal('privacy')" style="background:none; border:none; color:#CBD5E1; cursor:pointer; font-size:0.84rem;">Privacy Policy</button>
            <button type="button" onclick="openPolicyModal('terms')" style="background:none; border:none; color:#CBD5E1; cursor:pointer; font-size:0.84rem;">Terms & Conditions</button>
          </div>
        </div>
      </div>
    </footer>
  </main>

  <section id="view-student" class="app-view" style="padding:40px 0 80px;">
    <div class="container">
      <div id="studentLoginBox" class="clay-card-static" style="max-width:480px; margin:24px auto; padding:36px;">
        <div style="text-align:center; margin-bottom:24px;">
          <span class="section-kicker">ROLE-BASED STUDENT PORTAL</span>
          <h2 style="font-size:1.75rem; margin-bottom:8px;">Student Portal Login</h2>
          <p style="font-size:0.9rem; color:var(--ink-slate);">Sign in with your assigned Student ID to access your private attendance, exam results, study materials, homework, and fee receipts.</p>
        </div>
        <form onsubmit="handleStudentLogin(event)">
          <div style="margin-bottom:16px;"><label class="form-label" for="stuLoginId">Student ID / Email / Mobile *</label><input class="clay-input" id="stuLoginId" required value="MC-2026-101" /></div>
          <div style="margin-bottom:20px;"><label class="form-label" for="stuLoginPass">Password *</label><input class="clay-input" type="password" id="stuLoginPass" required value="Student@123" /></div>
          <button type="submit" class="clay-btn clay-btn-navy" style="width:100%; margin-bottom:12px;">Sign In to Student Dashboard</button>
        </form>
        <div class="clay-card clay-tint-lavender" style="padding:14px 16px; margin-top:16px; font-size:0.84rem;">
          <div style="font-weight:700; margin-bottom:6px;">Quick Demo Student Accounts:</div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button type="button" class="clay-btn clay-btn-soft clay-btn-sm" onclick="fillStudentDemo('MC-2026-101')">Class 10: MC-2026-101</button>
            <button type="button" class="clay-btn clay-btn-soft clay-btn-sm" onclick="fillStudentDemo('MC-2026-102')">Class 12: MC-2026-102</button>
            <button type="button" class="clay-btn clay-btn-soft clay-btn-sm" onclick="fillStudentDemo('MC-2026-103')">Class 8: MC-2026-103</button>
          </div>
        </div>
      </div>

      <div id="studentDashboardContent" style="display:none;">
        <div class="clay-card clay-tint-lavender" style="padding:26px 30px; margin-bottom:28px; display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:18px;">
          <div>
            <div style="font-size:0.84rem; font-weight:700; color:#5B21B6;" id="stuPortalSession">ACADEMIC SESSION 2026-2027</div>
            <h2 style="font-size:1.85rem; margin-bottom:4px;" id="stuPortalWelcome">Welcome, Student</h2>
            <div style="font-size:0.94rem; color:var(--ink-slate);" id="stuPortalSubline">Student ID · Class · Roll No</div>
          </div>
          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <button type="button" class="clay-btn clay-btn-soft clay-btn-sm" onclick="switchView('public')">Back to Website</button>
            <button type="button" class="clay-btn clay-btn-danger clay-btn-sm" onclick="logoutStudent()">Sign Out</button>
          </div>
        </div>
        <div class="grid-4" style="margin-bottom:28px;" id="stuKpiStrip"></div>
        <div class="grid-2" style="margin-bottom:28px;">
          <div class="clay-card-static" style="padding:26px;" id="stuProfileCard"></div>
          <div class="clay-card-static" style="padding:26px;" id="stuPerformanceCard"></div>
        </div>
        <div class="clay-card-static" style="padding:26px; margin-bottom:28px;">
          <h3 style="font-size:1.3rem; margin-bottom:16px;">Examination Results & Subject-Wise Marks</h3>
          <div id="stuResultsContainer"></div>
        </div>
        <div class="grid-2" style="margin-bottom:28px;">
          <div class="clay-card-static" style="padding:26px;"><h3 style="font-size:1.25rem; margin-bottom:14px;">Class Study Materials & PDFs</h3><div id="stuMaterialsContainer"></div></div>
          <div class="clay-card-static" style="padding:26px;"><h3 style="font-size:1.25rem; margin-bottom:14px;">Assigned Homework & Deadlines</h3><div id="stuHomeworkContainer"></div></div>
        </div>
        <div class="grid-2">
          <div class="clay-card-static" style="padding:26px;"><h3 style="font-size:1.25rem; margin-bottom:14px;">Attendance Summary & Recent Logs</h3><div id="stuAttendanceContainer"></div></div>
          <div class="clay-card-static" style="padding:26px;"><h3 style="font-size:1.25rem; margin-bottom:14px;">Fee Status & Payment Receipts</h3><div id="stuFeesContainer"></div></div>
        </div>
      </div>
    </div>
  </section>

  <section id="view-admin" class="app-view" style="padding:24px 0 80px;">
    <div class="container" id="adminLoginBox">
      <div class="clay-card-static" style="max-width:480px; margin:32px auto; padding:36px;">
        <div style="text-align:center; margin-bottom:24px;">
          <span class="section-kicker">INSTITUTE ADMINISTRATION</span>
          <h2 style="font-size:1.75rem; margin-bottom:8px;">Admin Dashboard Login</h2>
          <p style="font-size:0.9rem; color:var(--ink-slate);">Authorized personnel login to manage students, enquiries, faculty, courses, attendance, exams, fees, and website settings.</p>
        </div>
        <form onsubmit="handleAdminLogin(event)">
          <div style="margin-bottom:16px;"><label class="form-label" for="admEmail">Administrator Email *</label><input class="clay-input" type="email" id="admEmail" required value="admin@monalisaclasses.example" /></div>
          <div style="margin-bottom:20px;"><label class="form-label" for="admPass">Password *</label><input class="clay-input" type="password" id="admPass" required value="Admin@123" /></div>
          <button type="submit" class="clay-btn clay-btn-navy" style="width:100%;">Access Admin Console</button>
        </form>
        <div class="clay-card clay-tint-peach" style="padding:14px 16px; margin-top:18px; font-size:0.84rem;">
          <strong>Demo Admin Credentials Pre-Filled:</strong><br/>
          Email: <span class="tabular-nums">admin@monalisaclasses.example</span> · Password: <span class="tabular-nums">Admin@123</span>
        </div>
      </div>
    </div>

    <div id="adminWorkspace" style="display:none;">
      <div class="dashboard-shell">
        <aside class="clay-card-static dashboard-sidebar" aria-label="Admin Modules">
          <div style="padding:6px 8px 16px; border-bottom:1px solid #E2E8F0; margin-bottom:14px;">
            <div style="font-family:var(--font-display); font-weight:800; font-size:1.05rem;">Admin Control Center</div>
            <div style="font-size:0.78rem; color:var(--ink-muted);">Monalisa Classes · Nayagarh</div>
          </div>
          <button type="button" class="sidebar-nav-btn active" onclick="switchAdminTab('overview', this)"><span>00. Dashboard Overview</span></button>
          <button type="button" class="sidebar-nav-btn" onclick="switchAdminTab('students', this)"><span>01. Student Management</span></button>
          <button type="button" class="sidebar-nav-btn" onclick="switchAdminTab('enquiries', this)"><span>02. Admission Enquiries</span></button>
          <button type="button" class="sidebar-nav-btn" onclick="switchAdminTab('teachers', this)"><span>03. Teacher Management</span></button>
          <button type="button" class="sidebar-nav-btn" onclick="switchAdminTab('courses', this)"><span>04. Course Management</span></button>
          <button type="button" class="sidebar-nav-btn" onclick="switchAdminTab('attendance', this)"><span>05. Attendance Tracker</span></button>
          <button type="button" class="sidebar-nav-btn" onclick="switchAdminTab('exams', this)"><span>06. Exams & Results</span></button>
          <button type="button" class="sidebar-nav-btn" onclick="switchAdminTab('materials', this)"><span>07. Study Materials</span></button>
          <button type="button" class="sidebar-nav-btn" onclick="switchAdminTab('homework', this)"><span>08. Homework Manager</span></button>
          <button type="button" class="sidebar-nav-btn" onclick="switchAdminTab('notices', this)"><span>09. Notice Board</span></button>
          <button type="button" class="sidebar-nav-btn" onclick="switchAdminTab('gallery', this)"><span>10. Gallery Manager</span></button>
          <button type="button" class="sidebar-nav-btn" onclick="switchAdminTab('fees', this)"><span>11. Fee & Receipts</span></button>
          <button type="button" class="sidebar-nav-btn" onclick="switchAdminTab('settings', this)"><span>12. Website Settings</span></button>
          <div style="margin-top:16px; padding-top:14px; border-top:1px solid #E2E8F0; display:flex; flex-direction:column; gap:8px;">
            <button type="button" class="clay-btn clay-btn-soft clay-btn-sm" onclick="switchView('public')">View Public Site</button>
            <button type="button" class="clay-btn clay-btn-danger clay-btn-sm" onclick="logoutAdmin()">Sign Out Admin</button>
          </div>
        </aside>
        <div id="adminMainPanel"></div>
      </div>
    </div>
  </section>

  <div class="modal-backdrop" id="appModal" onclick="if(event.target===this) closeAppModal()">
    <div class="clay-card-static modal-content" id="appModalBody"></div>
  </div>
  <div class="toast-stack" id="toastStack" aria-live="polite"></div>

  <script>
    const AppState = {
      publicData: { settings: {}, courses: [], subjects: [], teachers: [], notices: [], gallery: [], sampleResults: [] },
      courseFilter: 'all',
      galleryFilter: 'All',
      selectedStreams: { 11: 'Science', 12: 'Science' },
      studentToken: localStorage.getItem('mc_student_token') || '',
      studentPortalData: null,
      adminToken: localStorage.getItem('mc_admin_token') || '',
      adminData: null,
      activeAdminTab: 'overview',
      studentSearchQuery: '',
      studentClassFilter: 'All',
      enquirySearchQuery: '',
      enquiryStatusFilter: 'All',
      attendanceClassFilter: 'All'
    };

    document.addEventListener('click', function (e) {
      const btn = e.target.closest('.clay-btn');
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const circle = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      circle.style.width = circle.style.height = size + 'px';
      circle.style.left = (e.clientX - rect.left - size / 2) + 'px';
      circle.style.top = (e.clientY - rect.top - size / 2) + 'px';
      circle.className = 'ripple-circle';
      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 520);
    });

    function showToast(message) {
      const stack = document.getElementById('toastStack');
      const item = document.createElement('div');
      item.className = 'toast-item';
      item.textContent = message;
      stack.appendChild(item);
      setTimeout(() => item.remove(), 3800);
    }

    function openAppModal(htmlContent) {
      document.getElementById('appModalBody').innerHTML = htmlContent;
      document.getElementById('appModal').classList.add('open');
    }
    function closeAppModal() { document.getElementById('appModal').classList.remove('open'); }
    function toggleMobileDrawer() { document.getElementById('mobileDrawer').classList.toggle('open'); }

    function switchView(viewName) {
      document.querySelectorAll('.app-view').forEach(el => el.classList.remove('active-view'));
      const target = document.getElementById('view-' + viewName);
      if (target) target.classList.add('active-view');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function openPortalView(portalType) {
      if (portalType === 'student') {
        switchView('student');
        if (AppState.studentToken) loadStudentPortalData();
      } else if (portalType === 'admin') {
        switchView('admin');
        if (AppState.adminToken) loadAdminOverview();
      }
    }

    function escapeHtml(str) {
      return String(str ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    async function loadPublicBootstrap() {
      try {
        const res = await fetch('/api/public/bootstrap');
        const json = await res.json();
        if (json.success && json.data) {
          AppState.publicData = json.data;
          renderPublicWebsite();
        }
      } catch (err) { console.error(err); }
    }

    function renderPublicWebsite() {
      const { settings, courses, teachers, notices, gallery, sampleResults } = AppState.publicData;
      if (settings) {
        document.getElementById('topAnnouncementBar').textContent = settings.admissionAnnouncement || 'Admissions Open for Academic Session 2026–27';
        document.getElementById('navInstituteName').textContent = settings.instituteName || 'Monalisa Classes';
        document.getElementById('heroTagline').textContent = settings.tagline || '';
        document.getElementById('contactAddressText').textContent = settings.address || '';
        document.getElementById('contactPhoneText').textContent = settings.phone || '';
        document.getElementById('contactEmailText').textContent = settings.email || '';
        document.getElementById('footerPhone').textContent = settings.phone || '';
        document.getElementById('footerEmail').textContent = settings.email || '';
      }
      renderCoursesSection(courses || []);
      renderFacultySection(teachers || []);
      renderResultsSection(sampleResults || []);
      renderGallerySection(gallery || []);
      renderNoticesSection(notices || []);
    }

    function getThemeClass(colorName, idx = 0) {
      const map = { lavender: 'clay-tint-lavender', sky: 'clay-tint-sky', peach: 'clay-tint-peach', pink: 'clay-tint-pink', mint: 'clay-tint-mint', yellow: 'clay-tint-yellow' };
      if (map[colorName]) return map[colorName];
      const cycle = ['clay-tint-lavender', 'clay-tint-sky', 'clay-tint-peach', 'clay-tint-mint', 'clay-tint-yellow', 'clay-tint-pink'];
      return cycle[idx % cycle.length];
    }

    function filterCourses(wing, btnEl) {
      AppState.courseFilter = wing;
      document.querySelectorAll('#courses .filter-btn').forEach(b => b.classList.remove('active'));
      if (btnEl) btnEl.classList.add('active');
      renderCoursesSection(AppState.publicData.courses || []);
    }

    function selectCourseStream(classNum, streamName) {
      AppState.selectedStreams[classNum] = streamName;
      renderCoursesSection(AppState.publicData.courses || []);
    }

    function renderCoursesSection(courses) {
      const grid = document.getElementById('coursesGrid');
      const filtered = courses.filter(c => {
        const n = Number(c.classNumber);
        if (AppState.courseFilter === 'primary') return n >= 1 && n <= 5;
        if (AppState.courseFilter === 'middle') return n >= 6 && n <= 8;
        if (AppState.courseFilter === 'secondary') return n >= 9 && n <= 10;
        if (AppState.courseFilter === 'senior') return n >= 11 && n <= 12;
        return true;
      });

      grid.innerHTML = filtered.map((c, idx) => {
        const n = Number(c.classNumber);
        const isSenior = n === 11 || n === 12;
        const activeStream = AppState.selectedStreams[n] || 'Science';
        const streamSubjects = isSenior && c.streamOptions && Array.isArray(c.streamOptions[activeStream]) && c.streamOptions[activeStream].length > 0
          ? c.streamOptions[activeStream] : (c.subjects || []);
        const streamTabsHtml = isSenior ? '<div class="stream-tabs">' + ['Science', 'Commerce', 'Arts'].map(st =>
          '<button type="button" class="stream-tab ' + (activeStream === st ? 'active' : '') + '" onclick="selectCourseStream(' + n + ', \\'' + st + '\\')">' + st + '</button>'
        ).join('') + '</div>' : '';

        return '<article class="clay-card ' + getThemeClass(c.themeColor, idx) + '" style="padding:26px; display:flex; flex-direction:column; justify-content:space-between;">' +
          '<div><div style="display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:14px;">' +
          '<div style="display:flex; align-items:center; gap:12px;"><div class="brand-icon tabular-nums" style="width:46px; height:46px; font-weight:800; font-size:1.1rem;">C' + n + '</div>' +
          '<div><div style="font-size:0.78rem; color:var(--ink-muted); font-weight:700;">' + escapeHtml(c.category || 'CBSE Curriculum') + '</div><h3 style="font-size:1.22rem;">' + escapeHtml(c.title) + '</h3></div></div>' +
          '<div class="tabular-nums" style="font-weight:800; font-size:0.95rem;">₹' + Number(c.monthlyFee || 1200).toLocaleString('en-IN') + '/mo</div></div>' +
          '<p style="font-size:0.9rem; color:var(--ink-slate); margin-bottom:12px;">' + escapeHtml(c.description) + '</p>' + streamTabsHtml +
          '<div style="margin-bottom:16px;"><div style="font-size:0.78rem; font-weight:700; margin-bottom:6px;">' + (isSenior ? activeStream + ' Stream Subjects:' : 'Subjects Covered:') + '</div>' +
          '<div style="font-size:0.86rem; color:var(--ink-slate);">' + streamSubjects.map(escapeHtml).join(' · ') + '</div></div></div>' +
          '<div style="padding-top:14px; border-top:1px solid rgba(23,37,84,0.08); display:flex; align-items:center; justify-content:space-between; gap:10px;">' +
          '<span style="font-size:0.8rem; color:var(--ink-muted); font-weight:600;">' + escapeHtml(c.batchTiming || 'Morning & Evening') + '</span>' +
          '<button type="button" class="clay-btn clay-btn-navy clay-btn-sm" onclick="prefillEnquiryForClass(\\'Class ' + n + '\\', \\'' + (isSenior ? activeStream : 'None') + '\\')">Enquire Now</button></div></article>';
      }).join('');
    }

    function prefillEnquiryForClass(classLevel, stream) {
      switchView('public');
      const sel = document.getElementById('enqClass');
      if (sel) { sel.value = classLevel; toggleEnquiryStream(classLevel); }
      if (stream && stream !== 'None') {
        const stSel = document.getElementById('enqStream');
        if (stSel) stSel.value = stream;
      }
      document.getElementById('admission-enquiry')?.scrollIntoView({ behavior: 'smooth' });
      showToast('Selected ' + classLevel + ' in Admission Enquiry Form');
    }

    function toggleEnquiryStream(classVal) {
      const wrap = document.getElementById('enqStreamWrapper');
      if (wrap) wrap.style.display = (classVal === 'Class 11' || classVal === 'Class 12') ? 'block' : 'none';
    }

    function renderFacultySection(teachers) {
      document.getElementById('facultyGrid').innerHTML = teachers.map((t, idx) =>
        '<article class="clay-card ' + getThemeClass('', idx) + '" style="padding:26px;">' +
        '<div style="display:flex; align-items:center; gap:16px; margin-bottom:16px;">' +
        '<img src="' + escapeHtml(t.photoUrl) + '" alt="' + escapeHtml(t.name) + '" referrerPolicy="no-referrer" style="width:68px; height:68px; border-radius:20px; object-fit:cover; background:#FFF;" />' +
        '<div><h3 style="font-size:1.12rem; margin-bottom:3px;">' + escapeHtml(t.name) + '</h3>' +
        '<div style="font-size:0.84rem; font-weight:700; color:#5B21B6;">' + escapeHtml(t.qualification) + '</div>' +
        '<div style="font-size:0.8rem; color:var(--ink-muted);">' + escapeHtml(t.specialization) + ' · ' + escapeHtml(t.experience) + '</div></div></div>' +
        '<p style="font-size:0.9rem; color:var(--ink-slate); margin-bottom:14px;">' + escapeHtml(t.bio) + '</p>' +
        '<div style="font-size:0.8rem; font-weight:600;">Classes: ' + ((t.assignedClasses || []).map(escapeHtml).join(' · ') || 'CBSE 1–12') + '</div></article>'
      ).join('');
    }

    function renderResultsSection(results) {
      document.getElementById('resultsGrid').innerHTML = results.map((r, idx) =>
        '<article class="clay-card ' + getThemeClass('', idx + 1) + '" style="padding:26px; display:flex; flex-direction:column; justify-content:space-between;">' +
        '<div><div style="font-size:0.78rem; font-weight:700; color:#6D28D9; margin-bottom:6px;">SAMPLE DEMO SCORECARD · ' + escapeHtml(r.classLevel) + '</div>' +
        '<div style="display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:12px;">' +
        '<div><h3 style="font-size:1.22rem;">' + escapeHtml(r.studentName) + '</h3><div style="font-size:0.82rem; color:var(--ink-muted);" class="tabular-nums">ID: ' + escapeHtml(r.studentId) + ' · ' + escapeHtml(r.examTitle) + '</div></div>' +
        '<div class="brand-icon tabular-nums" style="width:58px; height:58px; font-weight:800; font-size:1.05rem;">' + escapeHtml(r.percentage) + '%</div></div>' +
        '<div style="background:rgba(255,255,255,0.75); border-radius:14px; padding:12px; margin-bottom:16px;">' +
        (r.subjectMarks || []).map(m => '<div style="display:flex; justify-content:space-between; font-size:0.84rem; padding:3px 0;"><span>' + escapeHtml(m.subject) + '</span><strong class="tabular-nums">' + m.marksObtained + ' / ' + m.maxMarks + '</strong></div>').join('') +
        '</div></div><div style="display:flex; align-items:center; justify-content:space-between; font-size:0.84rem; font-weight:700;">' +
        '<span class="tabular-nums">Total: ' + r.totalMarks + '/' + r.maxTotalMarks + ' (Grade ' + escapeHtml(r.grade) + ')</span></div></article>'
      ).join('');
    }

    function filterGallery(cat, btnEl) {
      AppState.galleryFilter = cat;
      document.querySelectorAll('#gallery .filter-btn').forEach(b => b.classList.remove('active'));
      if (btnEl) btnEl.classList.add('active');
      renderGallerySection(AppState.publicData.gallery || []);
    }

    function renderGallerySection(galleryItems) {
      const filtered = galleryItems.filter(g => AppState.galleryFilter === 'All' || g.category === AppState.galleryFilter);
      document.getElementById('galleryGrid').innerHTML = filtered.map(g =>
        '<article class="clay-card" style="padding:16px;">' +
        '<img src="' + escapeHtml(g.imageUrl) + '" alt="' + escapeHtml(g.title) + '" referrerPolicy="no-referrer" style="width:100%; height:210px; object-fit:cover; border-radius:18px; margin-bottom:12px; background:#EDE9FE;" />' +
        '<div style="padding:0 6px;"><div style="font-size:0.76rem; font-weight:700; color:#6D28D9;">' + escapeHtml(g.category) + ' · ' + escapeHtml(g.eventDate || '2026') + '</div>' +
        '<h3 style="font-size:1.08rem; margin-bottom:4px;">' + escapeHtml(g.title) + '</h3><p style="font-size:0.86rem; color:var(--ink-slate);">' + escapeHtml(g.caption) + '</p></div></article>'
      ).join('');
    }

    function renderNoticesSection(notices) {
      document.getElementById('noticesGrid').innerHTML = notices.map((n, idx) =>
        '<article class="clay-card ' + getThemeClass('', idx) + '" style="padding:24px;">' +
        '<div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.8rem; font-weight:700; color:#5B21B6;">' +
        '<span>' + escapeHtml(n.category) + ' · Priority: ' + escapeHtml(n.priority) + '</span><span class="tabular-nums">' + escapeHtml(n.publishDate) + '</span></div>' +
        '<h3 style="font-size:1.15rem; margin-bottom:8px;">' + escapeHtml(n.title) + '</h3><p style="font-size:0.92rem; color:var(--ink-slate); margin-bottom:12px;">' + escapeHtml(n.content) + '</p>' +
        '<div style="font-size:0.8rem; color:var(--ink-muted); font-weight:600;">Target Audience: ' + escapeHtml(n.targetAudience || 'All Students & Parents') + '</div></article>'
      ).join('');
    }

    async function submitAdmissionEnquiry(e) {
      e.preventDefault();
      const form = e.target;
      const submitBtn = document.getElementById('enquirySubmitBtn');
      const formData = Object.fromEntries(new FormData(form).entries());
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting Enquiry...';
      try {
        const res = await fetch('/api/public/enquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
        const json = await res.json();
        if (json.success) {
          showToast(json.message);
          const box = document.getElementById('enquiryConfirmationBox');
          document.getElementById('enquiryConfirmTitle').textContent = 'Enquiry Registered! ID: ' + json.data.enquiryId;
          document.getElementById('enquiryConfirmText').textContent = 'Thank you, ' + json.data.studentName + '. Keep your Reference ID ' + json.data.enquiryId + ' for admission status tracking.';
          box.style.display = 'block';
          form.reset();
        } else { showToast(json.message || 'Check form fields.'); }
      } catch (_err) { showToast('Network error.'); }
      finally { submitBtn.disabled = false; submitBtn.textContent = 'Submit Admission Enquiry'; }
    }

    function triggerWhatsAppEnquiry() {
      const phone = (AppState.publicData.settings?.whatsapp || '+91 98765 43210');
      openAppModal('<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;"><h3 style="font-size:1.35rem;">WhatsApp Admission Desk</h3><button type="button" class="clay-btn clay-btn-soft clay-btn-sm" onclick="closeAppModal()">Close</button></div><p style="color:var(--ink-slate);">Connect with Monalisa Classes on WhatsApp at <strong class="tabular-nums">' + escapeHtml(phone) + '</strong></p>');
    }

    function openPolicyModal(type) {
      openAppModal('<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;"><h3 style="font-size:1.35rem;">' + (type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions') + '</h3><button type="button" class="clay-btn clay-btn-soft clay-btn-sm" onclick="closeAppModal()">Close</button></div><p style="color:var(--ink-slate);">Monalisa Classes, Nayagarh safeguards all student and parent academic records with role-based authentication.</p>');
    }

    function fillStudentDemo(studentId) {
      document.getElementById('stuLoginId').value = studentId;
      document.getElementById('stuLoginPass').value = 'Student@123';
      showToast('Filled Demo Student ID: ' + studentId);
    }

    async function handleStudentLogin(e) {
      e.preventDefault();
      const identifier = document.getElementById('stuLoginId').value.trim();
      const password = document.getElementById('stuLoginPass').value;
      const res = await fetch('/api/auth/student/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ identifier, password }) });
      const json = await res.json();
      if (json.success && json.token) {
        AppState.studentToken = json.token;
        localStorage.setItem('mc_student_token', json.token);
        showToast(json.message);
        await loadStudentPortalData();
      } else { showToast(json.message || 'Invalid credentials'); }
    }

    function logoutStudent() {
      AppState.studentToken = '';
      localStorage.removeItem('mc_student_token');
      document.getElementById('studentLoginBox').style.display = 'block';
      document.getElementById('studentDashboardContent').style.display = 'none';
    }

    async function loadStudentPortalData() {
      if (!AppState.studentToken) return;
      const res = await fetch('/api/student/portal', { headers: { 'Authorization': 'Bearer ' + AppState.studentToken } });
      const json = await res.json();
      if (!json.success) { logoutStudent(); return; }
      AppState.studentPortalData = json.data;
      document.getElementById('studentLoginBox').style.display = 'none';
      document.getElementById('studentDashboardContent').style.display = 'block';
      renderStudentPortal();
    }

    function renderStudentPortal() {
      const d = AppState.studentPortalData;
      if (!d) return;
      const p = d.profile;
      const att = d.attendanceSummary;
      const latestResult = (d.results && d.results[0]) || null;
      const totalPendingFee = (d.fees || []).reduce((acc, f) => acc + Number(f.pendingAmount || 0), 0);

      document.getElementById('stuPortalWelcome').textContent = 'Welcome, ' + p.name;
      document.getElementById('stuPortalSubline').textContent = 'Student ID: ' + p.studentId + ' · Enrolled: ' + p.classLevel + ' · Roll No: ' + p.rollNo;
      document.getElementById('stuKpiStrip').innerHTML =
        '<div class="clay-card clay-tint-mint" style="padding:20px;"><div>Attendance Rate</div><div class="tabular-nums" style="font-size:1.75rem; font-weight:800;">' + att.percentage + '%</div></div>' +
        '<div class="clay-card clay-tint-lavender" style="padding:20px;"><div>Latest Exam Score</div><div class="tabular-nums" style="font-size:1.75rem; font-weight:800;">' + (latestResult ? latestResult.percentage + '%' : '94%') + '</div></div>' +
        '<div class="clay-card clay-tint-sky" style="padding:20px;"><div>Study Materials</div><div class="tabular-nums" style="font-size:1.75rem; font-weight:800;">' + (d.studyMaterials || []).length + '</div></div>' +
        '<div class="clay-card clay-tint-peach" style="padding:20px;"><div>Pending Fee</div><div class="tabular-nums" style="font-size:1.75rem; font-weight:800;">₹' + totalPendingFee.toLocaleString('en-IN') + '</div></div>';

      document.getElementById('stuProfileCard').innerHTML = '<h3 style="margin-bottom:12px;">Student Profile</h3><div><strong>Name:</strong> ' + escapeHtml(p.name) + ' (' + escapeHtml(p.studentId) + ')<br/><strong>Father:</strong> ' + escapeHtml(p.fatherName) + '<br/><strong>Class:</strong> ' + escapeHtml(p.classLevel) + '<br/><strong>Address:</strong> ' + escapeHtml(p.address) + '</div>';
      document.getElementById('stuPerformanceCard').innerHTML = '<h3 style="margin-bottom:12px;">Subject Marks</h3>' + (latestResult ? latestResult.subjectMarks.map(m => '<div style="display:flex; justify-content:space-between; padding:4px 0;"><span>' + escapeHtml(m.subject) + '</span><strong class="tabular-nums">' + m.marksObtained + '/' + m.maxMarks + '</strong></div>').join('') : '');
      document.getElementById('stuResultsContainer').innerHTML = (d.results || []).map(r => '<div style="padding:10px 0; border-bottom:1px solid #E2E8F0;"><strong>' + escapeHtml(r.examTitle) + '</strong> — ' + r.totalMarks + '/' + r.maxTotalMarks + ' (' + r.percentage + '% · Grade ' + escapeHtml(r.grade) + ')</div>').join('');
      document.getElementById('stuMaterialsContainer').innerHTML = (d.studyMaterials || []).map(m => '<div style="padding:8px 0; border-bottom:1px solid #E2E8F0;"><strong>' + escapeHtml(m.title) + '</strong> (' + escapeHtml(m.subject) + ')</div>').join('');
      document.getElementById('stuHomeworkContainer').innerHTML = (d.homework || []).map(h => '<div style="padding:8px 0; border-bottom:1px solid #E2E8F0;"><strong>' + escapeHtml(h.title) + '</strong> · Due: ' + escapeHtml(h.dueDate) + '</div>').join('');
      document.getElementById('stuAttendanceContainer').innerHTML = (att.records || []).map(a => '<div style="padding:6px 0; border-bottom:1px solid #E2E8F0;">' + escapeHtml(a.date) + ': <strong>' + escapeHtml(a.status) + '</strong></div>').join('');
      document.getElementById('stuFeesContainer').innerHTML = (d.fees || []).map(f => '<div style="padding:6px 0;"><strong>' + escapeHtml(f.feeTitle) + '</strong> · Paid: ₹' + f.paidAmount + ' · Pending: ₹' + f.pendingAmount + '</div>').join('');
    }

    async function handleAdminLogin(e) {
      e.preventDefault();
      const email = document.getElementById('admEmail').value.trim();
      const password = document.getElementById('admPass').value;
      const res = await fetch('/api/auth/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
      const json = await res.json();
      if (json.success && json.token) {
        AppState.adminToken = json.token;
        localStorage.setItem('mc_admin_token', json.token);
        showToast(json.message);
        await loadAdminOverview();
      } else { showToast(json.message || 'Invalid login'); }
    }

    function logoutAdmin() {
      AppState.adminToken = '';
      localStorage.removeItem('mc_admin_token');
      document.getElementById('adminLoginBox').style.display = 'block';
      document.getElementById('adminWorkspace').style.display = 'none';
    }

    async function adminApiFetch(url, options = {}) {
      const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + AppState.adminToken, ...(options.headers || {}) };
      const res = await fetch(url, { ...options, headers });
      return res.json();
    }

    async function loadAdminOverview() {
      if (!AppState.adminToken) return;
      const json = await adminApiFetch('/api/admin/overview');
      if (!json.success) { logoutAdmin(); return; }
      AppState.adminData = json.data;
      document.getElementById('adminLoginBox').style.display = 'none';
      document.getElementById('adminWorkspace').style.display = 'block';
      renderActiveAdminModule();
      loadPublicBootstrap();
    }

    function switchAdminTab(tabName, btnEl) {
      AppState.activeAdminTab = tabName;
      document.querySelectorAll('.sidebar-nav-btn').forEach(b => b.classList.remove('active'));
      if (btnEl) btnEl.classList.add('active');
      renderActiveAdminModule();
    }

    function renderActiveAdminModule() {
      const panel = document.getElementById('adminMainPanel');
      const d = AppState.adminData;
      if (!panel || !d) return;
      const tab = AppState.activeAdminTab;
      const m = d.metrics;

      if (tab === 'overview') {
        panel.innerHTML = '<div class="grid-3" style="margin-bottom:24px;">' +
          '<div class="clay-card clay-tint-sky" style="padding:22px;"><div>Total Students</div><div class="tabular-nums" style="font-size:2rem; font-weight:800;">' + m.totalStudents + '</div></div>' +
          '<div class="clay-card clay-tint-peach" style="padding:22px;"><div>Total Enquiries</div><div class="tabular-nums" style="font-size:2rem; font-weight:800;">' + m.totalEnquiries + '</div></div>' +
          '<div class="clay-card clay-tint-mint" style="padding:22px;"><div>Today Attendance</div><div class="tabular-nums" style="font-size:2rem; font-weight:800;">' + m.todaysAttendanceRate + '%</div></div>' +
          '<div class="clay-card clay-tint-yellow" style="padding:22px;"><div>Total Teachers</div><div class="tabular-nums" style="font-size:2rem; font-weight:800;">' + m.totalTeachers + '</div></div>' +
          '<div class="clay-card clay-tint-pink" style="padding:22px;"><div>Total Courses</div><div class="tabular-nums" style="font-size:2rem; font-weight:800;">' + m.totalCourses + '</div></div>' +
          '<div class="clay-card clay-tint-lavender" style="padding:22px;"><div>Pending Fees</div><div class="tabular-nums" style="font-size:2rem; font-weight:800;">₹' + Number(m.totalPendingFeeAmount).toLocaleString('en-IN') + '</div></div></div>';
        return;
      }
      if (tab === 'students') {
        panel.innerHTML = '<div class="clay-card-static" style="padding:24px; margin-bottom:20px;"><h3>01. Student Management</h3>' +
          '<form onsubmit="adminCreateItem(event, \\'/api/admin/students\\')" class="grid-3" style="gap:12px; margin-top:12px;">' +
          '<input class="clay-input" name="name" required placeholder="Student Name" />' +
          '<input class="clay-input" name="fatherName" required placeholder="Father Name" />' +
          '<input class="clay-input" name="classLevel" required value="Class 10" />' +
          '<input class="clay-input" name="mobile" required placeholder="Mobile" />' +
          '<input class="clay-input" name="email" required placeholder="Email" />' +
          '<input class="clay-input" name="address" required placeholder="Address" />' +
          '<button type="submit" class="clay-btn clay-btn-navy">+ Add Student</button></form></div>' +
          '<div class="clay-card-static" style="padding:24px;"><table class="clay-table"><thead><tr><th>ID</th><th>Name</th><th>Class</th><th>Action</th></tr></thead><tbody>' +
          (d.students || []).map(s => '<tr><td class="tabular-nums">' + escapeHtml(s.studentId) + '</td><td>' + escapeHtml(s.name) + '</td><td>' + escapeHtml(s.classLevel) + '</td><td><button class="clay-btn clay-btn-danger clay-btn-sm" onclick="adminDeleteItem(\\'/api/admin/students/' + s._id + '\\')">Delete</button></td></tr>').join('') +
          '</tbody></table></div>';
        return;
      }
      if (tab === 'enquiries') {
        panel.innerHTML = '<div class="clay-card-static" style="padding:24px;"><h3>02. Admission Enquiries</h3><table class="clay-table"><thead><tr><th>ID</th><th>Student</th><th>Class</th><th>Status</th><th>Actions</th></tr></thead><tbody>' +
          (d.enquiries || []).map(e => '<tr><td class="tabular-nums">' + escapeHtml(e.enquiryId) + '</td><td>' + escapeHtml(e.studentName) + '</td><td>' + escapeHtml(e.classApplyingFor) + '</td><td>' + escapeHtml(e.status) + '</td><td><button class="clay-btn clay-btn-mint clay-btn-sm" onclick="adminConvertEnquiry(\\'' + e._id + '\\')">Convert to Student</button> <button class="clay-btn clay-btn-danger clay-btn-sm" onclick="adminDeleteItem(\\'/api/admin/enquiries/' + e._id + '\\')">Delete</button></td></tr>').join('') +
          '</tbody></table></div>';
        return;
      }
      if (tab === 'teachers') {
        panel.innerHTML = '<div class="clay-card-static" style="padding:24px; margin-bottom:20px;"><h3>03. Teacher Management</h3>' +
          '<form onsubmit="adminCreateItem(event, \\'/api/admin/teachers\\')" class="grid-3" style="gap:12px; margin-top:12px;">' +
          '<input class="clay-input" name="name" required placeholder="Teacher Name" />' +
          '<input class="clay-input" name="qualification" required placeholder="Qualification" />' +
          '<input class="clay-input" name="specialization" required placeholder="Specialization" />' +
          '<input class="clay-input" name="experience" required placeholder="Experience" />' +
          '<input class="clay-input" name="bio" required placeholder="Short Bio" />' +
          '<button type="submit" class="clay-btn clay-btn-navy">+ Add Teacher</button></form></div>' +
          '<div class="clay-card-static" style="padding:24px;"><table class="clay-table"><thead><tr><th>Name</th><th>Specialization</th><th>Action</th></tr></thead><tbody>' +
          (d.teachers || []).map(t => '<tr><td>' + escapeHtml(t.name) + '</td><td>' + escapeHtml(t.specialization) + '</td><td><button class="clay-btn clay-btn-danger clay-btn-sm" onclick="adminDeleteItem(\\'/api/admin/teachers/' + t._id + '\\')">Delete</button></td></tr>').join('') +
          '</tbody></table></div>';
        return;
      }
      if (tab === 'courses') {
        panel.innerHTML = '<div class="clay-card-static" style="padding:24px;"><h3>04. Course Management</h3><table class="clay-table"><thead><tr><th>Class</th><th>Title</th><th>Fee</th><th>Action</th></tr></thead><tbody>' +
          (d.courses || []).map(c => '<tr><td>Class ' + c.classNumber + '</td><td>' + escapeHtml(c.title) + '</td><td>₹' + c.monthlyFee + '</td><td><button class="clay-btn clay-btn-danger clay-btn-sm" onclick="adminDeleteItem(\\'/api/admin/courses/' + c._id + '\\')">Delete</button></td></tr>').join('') +
          '</tbody></table></div>';
        return;
      }
      if (tab === 'attendance') {
        panel.innerHTML = '<div class="clay-card-static" style="padding:24px;"><h3>05. Attendance Logs</h3><table class="clay-table"><thead><tr><th>Date</th><th>Student</th><th>Status</th><th>Action</th></tr></thead><tbody>' +
          (d.attendance || []).map(a => '<tr><td>' + escapeHtml(a.date) + '</td><td>' + escapeHtml(a.studentName) + '</td><td>' + escapeHtml(a.status) + '</td><td><button class="clay-btn clay-btn-danger clay-btn-sm" onclick="adminDeleteItem(\\'/api/admin/attendance/' + a._id + '\\')">Delete</button></td></tr>').join('') +
          '</tbody></table></div>';
        return;
      }
      if (tab === 'exams') {
        panel.innerHTML = '<div class="clay-card-static" style="padding:24px;"><h3>06. Examinations & Results</h3><table class="clay-table"><thead><tr><th>Student</th><th>Exam</th><th>Percentage</th><th>Grade</th></tr></thead><tbody>' +
          (d.results || []).map(r => '<tr><td>' + escapeHtml(r.studentName) + '</td><td>' + escapeHtml(r.examTitle) + '</td><td>' + r.percentage + '%</td><td>' + escapeHtml(r.grade) + '</td></tr>').join('') +
          '</tbody></table></div>';
        return;
      }
      if (tab === 'materials') {
        panel.innerHTML = '<div class="clay-card-static" style="padding:24px;"><h3>07. Study Materials</h3><table class="clay-table"><thead><tr><th>Title</th><th>Class</th><th>Subject</th><th>Action</th></tr></thead><tbody>' +
          (d.materials || []).map(m => '<tr><td>' + escapeHtml(m.title) + '</td><td>' + escapeHtml(m.classLevel) + '</td><td>' + escapeHtml(m.subject) + '</td><td><button class="clay-btn clay-btn-danger clay-btn-sm" onclick="adminDeleteItem(\\'/api/admin/materials/' + m._id + '\\')">Delete</button></td></tr>').join('') +
          '</tbody></table></div>';
        return;
      }
      if (tab === 'homework') {
        panel.innerHTML = '<div class="clay-card-static" style="padding:24px;"><h3>08. Homework Manager</h3><table class="clay-table"><thead><tr><th>Title</th><th>Class</th><th>Due Date</th><th>Action</th></tr></thead><tbody>' +
          (d.homework || []).map(h => '<tr><td>' + escapeHtml(h.title) + '</td><td>' + escapeHtml(h.classLevel) + '</td><td>' + escapeHtml(h.dueDate) + '</td><td><button class="clay-btn clay-btn-danger clay-btn-sm" onclick="adminDeleteItem(\\'/api/admin/homework/' + h._id + '\\')">Delete</button></td></tr>').join('') +
          '</tbody></table></div>';
        return;
      }
      if (tab === 'notices') {
        panel.innerHTML = '<div class="clay-card-static" style="padding:24px;"><h3>09. Notice Board</h3><table class="clay-table"><thead><tr><th>Date</th><th>Title</th><th>Category</th><th>Action</th></tr></thead><tbody>' +
          (d.notices || []).map(n => '<tr><td>' + escapeHtml(n.publishDate) + '</td><td>' + escapeHtml(n.title) + '</td><td>' + escapeHtml(n.category) + '</td><td><button class="clay-btn clay-btn-danger clay-btn-sm" onclick="adminDeleteItem(\\'/api/admin/notices/' + n._id + '\\')">Delete</button></td></tr>').join('') +
          '</tbody></table></div>';
        return;
      }
      if (tab === 'gallery') {
        panel.innerHTML = '<div class="clay-card-static" style="padding:24px;"><h3>10. Gallery Manager</h3><table class="clay-table"><thead><tr><th>Title</th><th>Category</th><th>Action</th></tr></thead><tbody>' +
          (d.gallery || []).map(g => '<tr><td>' + escapeHtml(g.title) + '</td><td>' + escapeHtml(g.category) + '</td><td><button class="clay-btn clay-btn-danger clay-btn-sm" onclick="adminDeleteItem(\\'/api/admin/gallery/' + g._id + '\\')">Delete</button></td></tr>').join('') +
          '</tbody></table></div>';
        return;
      }
      if (tab === 'fees') {
        panel.innerHTML = '<div class="clay-card-static" style="padding:24px;"><h3>11. Fee & Payment Receipts</h3><table class="clay-table"><thead><tr><th>Fee ID</th><th>Student</th><th>Total</th><th>Paid</th><th>Pending</th></tr></thead><tbody>' +
          (d.fees || []).map(f => '<tr><td>' + escapeHtml(f.feeId) + '</td><td>' + escapeHtml(f.studentName) + '</td><td>₹' + f.totalAmount + '</td><td>₹' + f.paidAmount + '</td><td>₹' + f.pendingAmount + '</td></tr>').join('') +
          '</tbody></table></div>';
        return;
      }
      if (tab === 'settings') {
        const s = d.settings || {};
        panel.innerHTML = '<div class="clay-card-static" style="padding:24px;"><h3>12. Website Settings</h3>' +
          '<form onsubmit="adminSaveSettings(event)" class="grid-2" style="gap:12px; margin-top:12px;">' +
          '<input class="clay-input" name="instituteName" required value="' + escapeHtml(s.instituteName || 'Monalisa Classes') + '" />' +
          '<input class="clay-input" name="phone" required value="' + escapeHtml(s.phone || '+91 98765 43210') + '" />' +
          '<input class="clay-input" name="email" required value="' + escapeHtml(s.email || 'info@monalisaclasses.example') + '" />' +
          '<input class="clay-input" name="address" required value="' + escapeHtml(s.address || 'Autonomous College Front, Nayagarh, Odisha') + '" />' +
          '<button type="submit" class="clay-btn clay-btn-navy">Save Settings</button></form></div>';
      }
    }

    async function adminCreateItem(e, endpoint) {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target).entries());
      const json = await adminApiFetch(endpoint, { method: 'POST', body: JSON.stringify(data) });
      showToast(json.message || 'Saved');
      if (json.success) await loadAdminOverview();
    }

    async function adminDeleteItem(endpoint) {
      const json = await adminApiFetch(endpoint, { method: 'DELETE' });
      showToast(json.message || 'Deleted');
      await loadAdminOverview();
    }

    async function adminConvertEnquiry(id) {
      const json = await adminApiFetch('/api/admin/enquiries/' + id + '/convert', { method: 'POST' });
      showToast(json.message);
      await loadAdminOverview();
    }

    async function adminSaveSettings(e) {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target).entries());
      const json = await adminApiFetch('/api/admin/settings', { method: 'PUT', body: JSON.stringify(data) });
      showToast(json.message);
      if (json.success) await loadAdminOverview();
    }

    window.addEventListener('DOMContentLoaded', () => { loadPublicBootstrap(); });
  </script>
</body>
</html>`;
}

// Default Vercel Serverless Function Handler for index.js
export default function handler(_req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(renderFrontendHTML());
}
