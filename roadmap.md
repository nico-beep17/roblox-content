# 🗺️ Roblox Content Machine – Roadmap

> **Current Date:** March 2026  
> **Status:** Phase 1 Complete ✅ — Core automation deployed  
> **Location:** Panabo, Philippines → US/Canada audience

---

## Phase 1: Core Automation ✅ *COMPLETE*
> *Ship the machine that creates, optimizes, and publishes while you sleep.*

- [x] Master blueprint (`roblox.md`)
- [x] Workflow 1: Daily Director (idea gen → Sheets → Telegram brief)
- [x] Workflow 3: The Publisher (SEO metadata → 4-platform publish → archive)
- [x] Error Handler (Telegram alert + Sheets error log)
- [x] All OAuth2 credential documentation
- [x] Git repo live on GitHub

**Outcome:** Drop a `.mp4` into Google Drive → system schedules to TikTok, YouTube Shorts, IG Reels, FB Reels at 3 PM EDT.

---

## Phase 2: Analytics & Feedback Loop 📊 *NEXT*
> *Measure what works, kill what doesn't, double down on winners.*

### 2.1 — Performance Tracker Workflow ✅
Built **Workflow 4: "The Analyst"** (`n8n-workflow-4-the-analyst.json`) — runs daily at 8 PM PHT:
- [x] Pull stats from each platform API (fan-out parallel):
  - YouTube Data API → search by title + /videos?part=statistics
  - TikTok Content API → /video/list/ (views, likes, shares, comments)
  - Instagram Graph API → /{ig_user_id}/media?insights (unified views metric)
  - Facebook Graph API → /{page_id}/video_reels?video_insights
- [x] Aggregate stats with performance tiers (🟢 VIRAL ≥100K / 🟡 DECENT ≥10K / 🔴 LOW)
- [x] Write stats to a new **"Analytics"** tab in the Content Tracker
- [x] Update main tracker Status: Scheduled → Published
- [x] OpenAI node: generate 3-sentence actionable insight
- [x] Telegram: send daily performance digest with per-platform breakdown + AI insight

### 2.2 — Content Tracker Dashboard ✅
- [x] Google Apps Script auto-creates Analytics, Error Log, and Prompt Log tabs with formatting
- [x] Conditional formatting: 🟢 green (≥100K views), 🟡 yellow (10K–100K), 🔴 red (<10K)
- [x] 6-hour auto-refresh trigger (re-sorts by date, re-applies formatting)
- [x] `getTopPerformers()` helper function for AI Memory integration

### 2.3 — AI Memory (Self-Improving Prompts) ✅
- [x] Daily Director v2 reads top 3 + bottom 3 performers from Analytics sheet
- [x] Performance context injected into GPT-4o system prompt (PERFORMANCE MEMORY section)
- [x] New output field: `memory_influence` explains how data shaped the concept
- [x] Prompt Log tab tracks prompt version, context fed, concept generated, and result tier
- [x] A/B testing ready: change `Prompt Version` field when experimenting with prompts

**Outcome:** The system learns from its own data. Concepts trend upward in quality over time.

---

## Phase 3: Scale & Diversify 📈
> *Go from 1 video/day to 3, and expand into adjacent niches.*

### 3.1 — Multi-Niche Expansion ✅
- [x] Niche config system (`niche-config.json`) with 4 gaming niches:
  - 🎮 **Roblox** (enabled) — core niche, UE5 hyper-realistic
  - 🎮 **Fortnite Cinematic Edits** — replay angles, skin reveals
  - 🧱 **Minecraft Hyper-Realistic** — "What if Minecraft was real?"
  - 🏃 **Subway Surfers / Satisfying** — pure retention, split-screen format
- [x] Each niche has: `prefix`, `games[]`, `audience`, `style`, `system_prompt_addon`
- [x] Enable/disable flag per niche

### 3.2 — A/B Testing Pipeline ⏳ *Deferred*
- [ ] Requires 14+ days of published content to generate meaningful test data
- [ ] For each concept, generate 2 variations (different hooks / different Easter Eggs)
- [ ] Post Variation A to TikTok + IG, Variation B to YouTube + FB
- [ ] After 48h, compare metrics → log the winner
- [ ] Feed winners into the AI Memory system

### 3.3 — Batch Production Mode ✅
- [x] Niche config supports `videos_per_day` setting (1 to 3+)
- [x] Per-niche prefix system for file naming (`rb-`, `fn-`, `mc-`, `ss-`)
- [x] Niche rotation logic documented for weighted distribution

### 3.4 — Long-Form Repurposing ✅
Built **Workflow 5: "The Compiler"** (`n8n-workflow-5-the-compiler.json`) — 10 nodes:
- [x] Weekly trigger (Sunday 10 AM PHT)
- [x] Read Analytics → filter last 7 days → top 5 by views
- [x] Guard: skip compilation if <3 videos (sends skip notification)
- [x] GPT-4o generates long-form YouTube metadata: title, description, tags, thumbnail prompt, video ordering, transition style
- [x] Prepares FFmpeg concat file and auto-generated timestamps
- [x] Telegram brief with full compilation instructions (video order, FFmpeg command, thumbnail prompt)
- [x] Logs compilation to Content Tracker

**Outcome:** Multi-niche config ready. Weekly compilations automated. A/B testing postponed until sufficient data.

---

## Phase 4: Monetization Engine 💰
> *Turn views into revenue streams.*

### 4.1 — YouTube Partner Program (YPP)
- [ ] Hit 1,000 subscribers + 10 million Shorts views in 90 days
- [ ] Enable Shorts monetization (45% ad revenue share)
- [ ] Track estimated revenue in the Analytics sheet

### 4.2 — TikTok Creator Rewards Program
- [ ] Hit 10,000 followers + 100,000 views in 30 days
- [ ] Enable Creator Rewards (requires videos >1 min — consider extending to 50–59s)
- [ ] Track TikTok earnings separately

### 4.3 — Brand Deal Pipeline
- [ ] Build a **Workflow 6: "The Dealmaker"**:
  - Scrape brand/gaming sponsor leads from SparkToro, Upfluence, or manual lists
  - GPT generates a personalized outreach email based on the brand + your analytics
  - Sends via Gmail API with follow-up reminders
- [ ] Media kit auto-generated from your Analytics sheet (total views, average engagement, demographics)

### 4.4 — Affiliate & Merch
- [ ] Drop Roblox-themed merch links (Spring, Printful) in all video descriptions
- [ ] Use unique UTM links per platform to track conversion source
- [ ] Affiliate Roblox gift cards via Amazon Associates

**Outcome:** Multiple revenue streams — ad revenue, creator funds, brand deals, merch/affiliate.

---

## Phase 5: Advanced AI & Autonomy 🤖
> *Remove yourself from the loop entirely.*

### 5.1 — Full Visual Autonomy
- [ ] When AI image/video generation quality reaches the point where it can produce consistent, high-quality clips without manual review:
  - Auto-run Nano Banana 2 via API (when available)
  - Auto-run Veo 3.1 via API
  - Auto-assemble via FFmpeg script (cuts, captions, voiceover, loop)
  - Skip the human Step 2 entirely

### 5.2 — Trend Detection
- [ ] Build a **Workflow 7: "The Scout"**:
  - Scrape TikTok trending sounds, YouTube Gaming trending tab, Reddit r/Roblox
  - Feed into GPT to identify emerging trends BEFORE they peak
  - Prioritize the Daily Director's concepts based on real-time trend data

### 5.3 — Comment Engagement Bot
- [ ] Build a **Workflow 8: "The Engager"**:
  - Pull new comments from all platforms via API
  - GPT classifies: `reply-worthy` | `ignore` | `flag-for-human`
  - Auto-replies to reply-worthy comments with witty, on-brand responses
  - Flags hate/spam for manual review

### 5.4 — Multi-Language Expansion
- [ ] Dub voiceovers into Spanish, Portuguese, and Filipino using AI TTS
- [ ] Generate translated captions and hashtags
- [ ] Publish to region-specific accounts (separate TikTok/IG accounts per language)

**Outcome:** A fully autonomous content empire. You become the strategist, not the operator.

---

## Timeline Estimate

```
Phase 1  ████████████████████████  Mar 2026    ✅ DONE
Phase 2  ████████████████████████  Mar 2026    ✅ DONE
Phase 3  ████████████████████████  Mar 2026    ✅ DONE (A/B defer)
Phase 4  ░░░░░░░░░░░░░░░░░░░░░░░  Apr–May     ← NEXT
Phase 5  ░░░░░░░░░░░░░░░░░░░░░░░  Q3 2026+
```

---

## Immediate Next Actions (This Week)

1. **Set up all OAuth2 credentials** → follow `credential-setup-guide.md`
2. **Import + activate** Workflow 1, Workflow 3, and Error Handler in n8n
3. **Run the check** → `check-placeholders.ps1`
4. **Do your first test run** — manually trigger Workflow 1, create a test video, drop into `Ready_To_Post`
5. **Post consistently for 14 days** before measuring results
6. **Start Phase 2.1** (Analytics workflow) once you have 14+ days of content data
