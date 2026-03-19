# 🎬 Roblox Content Machine

> Fully automated AI pipeline for creating, publishing, and optimizing Roblox short-form videos across TikTok, YouTube Shorts, Instagram Reels, and Facebook Reels.

## 🏗 System Architecture

```
6 AM  → The Scout        → trend detection (Reddit + YouTube)
8 AM  → Daily Director   → AI concept generation (with memory + trends)
        → YOU create visuals (Nano Banana 2 + Veo 3.1 + CapCut)
        → Drop .mp4 into Google Drive → Ready_To_Post
Auto  → The Publisher    → SEO metadata → 4-platform publish at 3 PM EDT
4h    → The Engager      → comment classification + reply drafts
8 PM  → The Analyst      → 4-platform stats + AI insight
Sun   → The Compiler     → weekly long-form compilation
Mon   → The Dealmaker    → brand outreach + media kit
Error → Error Handler    → Telegram alert + Sheets error log
```

## 📁 File Map

### n8n Workflows (import into n8n)
| File | Workflow | Trigger |
|------|----------|---------|
| `n8n-workflow-1-daily-director.json` | Daily Director v2 (AI Memory) | 8 AM daily |
| `n8n-workflow-3-the-publisher.json` | The Publisher | Drive file upload |
| `n8n-workflow-4-the-analyst.json` | The Analyst | 8 PM daily |
| `n8n-workflow-5-the-compiler.json` | The Compiler | Sunday 10 AM |
| `n8n-workflow-6-the-dealmaker.json` | The Dealmaker | Monday 9 AM |
| `n8n-workflow-7-the-scout.json` | The Scout | 6 AM daily |
| `n8n-workflow-8-the-engager.json` | The Engager | Every 4 hours |
| `n8n-workflow-error-handler.json` | Error Handler | On error |
| `n8n-social-upload-nodes.json` | Standalone upload nodes | Manual |

### Configuration & Setup
| File | Purpose |
|------|---------|
| `niche-config.json` | Multi-niche settings (Roblox, Fortnite, Minecraft, Subway Surfers) |
| `credential-setup-guide.md` | Step-by-step OAuth2 setup for all APIs |
| `n8n-env-variables.env` | All environment variables reference |
| `content-tracker-template.csv` | Google Sheets template |
| `google-apps-script-dashboard.js` | Auto-format Analytics dashboard |
| `check-placeholders.ps1` | Verify all `YOUR_*` placeholders are replaced |

### Documentation
| File | Purpose |
|------|---------|
| `roblox.md` | Original blueprint & strategy |
| `roadmap.md` | 5-phase roadmap (all complete) |
| `README.md` | This file |

## 🚀 Quick Start

### 1. Set up credentials
Follow [credential-setup-guide.md](credential-setup-guide.md) for OAuth2 setup.

### 2. Import workflows
In n8n: **Settings → Import** → upload each JSON file.

### 3. Configure environment
Copy values from `n8n-env-variables.env` into **n8n → Settings → Environment Variables**.

### 4. Set up Google Sheets
- Import `content-tracker-template.csv` as a new Google Sheet
- Open **Extensions → Apps Script** → paste `google-apps-script-dashboard.js` → Run `setupDashboard`
- This auto-creates: Analytics, Error Log, Prompt Log tabs
- Manually create: **Brand Leads** tab and **Trend Log** tab

### 5. Create Google Drive folders
- `Ready_To_Post` — drop finished videos here
- `Archive` — Publisher auto-moves processed files here

### 6. Verify setup
```powershell
.\check-placeholders.ps1
```

### 7. Activate & go
Activate all 8 workflows in n8n. The Scout fires first at 6 AM, followed by the Daily Director at 8 AM.

## 📊 Google Sheets Tabs

| Tab | Created By | Purpose |
|-----|-----------|---------|
| Sheet1 | Manual (CSV) | Main content tracker |
| Analytics | Apps Script | Per-video performance data |
| Error Log | Apps Script | Workflow error tracking |
| Prompt Log | Apps Script | AI prompt A/B testing |
| Trend Log | Manual | Daily trend reports |
| Brand Leads | Manual | Sponsor pipeline |

## 🧠 AI Memory System

The Daily Director reads your analytics to improve concepts over time:
- **Top 3 performers** → GPT replicates winning patterns
- **Bottom 3 underperformers** → GPT avoids failing patterns
- **memory_influence** → GPT explains its creative decisions
- **Prompt Log** → tracks which context produced which results

## 🎮 Multi-Niche Support

`niche-config.json` defines 4 niches (enable/disable per niche):

| Niche | Prefix | Style |
|-------|--------|-------|
| Roblox | `rb-` | UE5 hyper-realistic |
| Fortnite | `fn-` | Cinematic replay angles |
| Minecraft | `mc-` | "What if it was real?" |
| Subway Surfers | `ss-` | Split-screen retention |

## ⚡ Daily Timeline (PHT)

| Time | What Happens |
|------|-------------|
| 6:00 AM | 🔍 Scout scans Reddit + YouTube for trends → Telegram report |
| 8:00 AM | 🧠 Director generates today's concept (informed by trends + memory) → Telegram brief |
| *You* | 🎨 Create visuals, edit in CapCut, drop `.mp4` into Drive |
| Auto | 📡 Publisher SEO-optimizes and schedules to 4 platforms at 3 PM EDT |
| Every 4h | 💬 Engager scans comments, classifies, drafts replies → Telegram |
| 8:00 PM | 📊 Analyst pulls stats from 4 platforms → AI insight → Telegram digest |
| Sunday | 🎬 Compiler creates weekly compilation brief → Telegram |
| Monday | 🤝 Dealmaker generates brand pitch emails → Telegram HITL review |

## 🔐 Required API Credentials

- OpenAI API (GPT-4o)
- Google OAuth2 (Sheets, Drive, YouTube)
- TikTok Content Posting API v2
- Meta Graph API v21.0 (Instagram + Facebook)
- Telegram Bot API

## 📜 License

Private project — not for redistribution.
