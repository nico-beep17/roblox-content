# 🚀 Roblox Content Machine

**An AI-powered, fully automated short-form video pipeline for Roblox gaming content.**

Produces hyper-realistic, cinematic Roblox shorts and publishes them across **TikTok, YouTube Shorts, Instagram Reels, and Facebook Reels** — all while you sleep.

---

## 📁 File Map

| File | Purpose |
|------|---------|
| **`roblox.md`** | Master blueprint — strategy, psychology, SOPs, prompt library |
| **`n8n-workflow-1-daily-director.json`** | n8n workflow: AI idea generation → Sheets → Telegram brief |
| **`n8n-workflow-3-the-publisher.json`** | n8n workflow: auto SEO → 4-platform publish → archive → notify |
| **`n8n-workflow-error-handler.json`** | n8n workflow: catches errors → Telegram alert + Sheets error log |
| **`n8n-social-upload-nodes.json`** | Standalone HTTP Request nodes for manual testing |
| **`credential-setup-guide.md`** | Step-by-step OAuth2 setup for all 6 services |
| **`n8n-env-variables.env`** | Environment variable reference with setup instructions |
| **`content-tracker-template.csv`** | Import into Google Sheets for the content tracker |
| **`check-placeholders.ps1`** | Validates all `YOUR_*` placeholders are replaced |

---

## ⚡ Quick Start

### Prerequisites
- n8n Cloud or self-hosted instance
- Google account (Drive, Sheets, YouTube)
- TikTok Developer app (with `video.publish` scope approved)
- Meta Developer app (IG Business + FB Page)
- Telegram bot
- OpenAI API key

### Setup Steps
1. **Read** `credential-setup-guide.md` and create all OAuth2 credentials
2. **Import** `content-tracker-template.csv` into Google Sheets
3. **Create** `Ready_To_Post` and `Archive` folders in Google Drive
4. **Import** all 3 workflow JSONs into n8n (**Workflows → Import from File**)
5. **Replace** all `YOUR_*` placeholders using `n8n-env-variables.env` as reference
6. **Link** the Error Handler: open each workflow → **Settings → Error Workflow** → select `Roblox – Error Handler`
7. **Validate**: run `check-placeholders.ps1` in PowerShell
8. **Activate** all 3 workflows

### Add an "Error Log" tab to your Google Sheet
In the same Roblox Content Tracker spreadsheet, create a new sheet tab called **Error Log** with these columns:
```
Timestamp | Workflow | Failed Node | Error Message | Execution URL
```

---

## 🔄 Daily Flow

```
8:00 AM PHT  →  Workflow 1 fires → AI generates concept → logs to Sheets → Telegram brief
Your Workday →  You create visuals (Nano Banana 2 + Veo 3.1) → edit in CapCut → export as File Code Name.mp4
Any Time     →  Drop .mp4 into Ready_To_Post folder
Instantly    →  Workflow 3 fires → SEO metadata → schedules to 4 platforms for 3 PM EDT
3:00 AM PHT  →  Posts go live across TikTok, YouTube, IG, and FB (3 PM in New York)
If Error     →  Error Handler fires → Telegram alert + error logged to Sheets
```

---

## 🛠️ Architecture

```
┌─────────────────┐     ┌──────────────────────────┐     ┌─────────────────┐
│  Workflow 1      │     │  Your Manual Work         │     │  Workflow 3      │
│  Daily Director  │────▶│  Nano Banana → Veo → Cut  │────▶│  The Publisher   │
│  (8 AM PHT)      │     │  Export to Ready_To_Post   │     │  (Auto-trigger)  │
└─────────────────┘     └──────────────────────────┘     └────────┬────────┘
                                                                  │
                            ┌─────────────────────────────────────┼─────────┐
                            │              Fan-Out                 │         │
                      ┌─────┴─────┐  ┌──────┴──────┐  ┌────┴────┐  ┌───┴───┐
                      │  TikTok   │  │  IG Reels   │  │ YT Short│  │FB Reel│
                      └─────┬─────┘  └──────┬──────┘  └────┬────┘  └───┬───┘
                            └────────────────┴──────────────┴──────────┘
                                             │
                                   ┌─────────┴─────────┐
                                   │  Archive + Track   │
                                   │  + Telegram ✅     │
                                   └───────────────────┘
```

---

## 📋 Prompt Library

All creation prompts (Nano Banana 2, Veo 3.1, OpenAI system prompts) are documented in **`roblox.md` → Section 5**.

---

## ⚠️ Known Limitations

| Platform | Limitation | Workaround |
|----------|-----------|------------|
| TikTok | No native scheduling API | n8n executes at the target time (3 AM PHT) |
| YouTube | 10,000 quota units/day (~6 uploads) | Sufficient for 1-2 daily posts |
| Meta | Short-lived tokens (60 days) | Set bi-monthly refresh reminder |
| TikTok | App review can take days | Apply for `video.publish` scope early |

---

*Built with [n8n](https://n8n.io) + [OpenAI](https://openai.com) + Google Antigravity*
