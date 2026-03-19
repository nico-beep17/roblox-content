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

### 4.1 — YouTube Partner Program (YPP) 🎯 *Milestone*
- [ ] Hit 1,000 subscribers + 10 million Shorts views in 90 days
- [ ] Enable Shorts monetization (45% ad revenue share)
- [ ] Track estimated revenue in the Analytics sheet

### 4.2 — TikTok Creator Rewards Program 🎯 *Milestone*
- [ ] Hit 10,000 followers + 100,000 views in 30 days
- [ ] Enable Creator Rewards (requires videos >1 min — consider extending to 50–59s)
- [ ] Track TikTok earnings separately

### 4.3 — Brand Deal Pipeline ✅
Built **Workflow 6: "The Dealmaker"** (`n8n-workflow-6-the-dealmaker.json`) — 10 nodes:
- [x] Monday 9 AM trigger (weekly cadence)
- [x] Auto-computes media kit from lifetime analytics (views, engagement, viral rate, 30-day stats)
- [x] Reads pending brand leads from `Brand Leads` sheet tab
- [x] GPT-4o generates personalized pitch email with real creator stats
- [x] **Human-in-the-loop** — draft sent to Telegram for review (NOT auto-emailed)
- [x] Updates lead status + contact date in tracker
- [x] Graceful skip if no analytics data yet

### 4.4 — Affiliate & Merch ⏳ *Deferred*
- [ ] Add UTM-tracked merch/affiliate links to video descriptions (after first brand deals close)
- [ ] Use unique UTM links per platform to track conversion source
- [ ] Affiliate Roblox gift cards via Amazon Associates

**Outcome:** Brand outreach automated with HITL guardrail. YPP/Creator Rewards are growth milestones to hit organically.

---

## Phase 5: Advanced AI & Autonomy 🤖
> *Remove yourself from the loop entirely.*

### 5.1 — Full Visual Autonomy ⏳ *Blocked on API availability*
- [ ] Nano Banana 2 API, Veo 3.1 API — waiting for programmatic access
- [ ] Auto-assemble via FFmpeg script (cuts, captions, voiceover, loop)
- [ ] Skip the human Step 2 entirely

### 5.2 — Trend Detection ✅
Built **Workflow 7: "The Scout"** (`n8n-workflow-7-the-scout.json`) — 10 nodes:
- [x] 6 AM PHT trigger (2 hours before Daily Director)
- [x] Fan-out to 3 sources: Reddit r/roblox, game-specific subs, YouTube Shorts trending
- [x] Aggregate signals with keyword frequency analysis
- [x] GPT-4o identifies hot games, emerging topics, content angles with urgency, topics to avoid
- [x] Log to Trend Log sheet tab
- [x] Telegram trend report at 6 AM

### 5.3 — Comment Engagement Bot ✅
Built **Workflow 8: "The Engager"** (`n8n-workflow-8-the-engager.json`) — 7 nodes:
- [x] Every-4-hours trigger (6 times/day)
- [x] Fan-out to YouTube CommentThreads API + Instagram comments
- [x] Merge all comments into unified list
- [x] GPT-4o classifies: `reply-worthy` | `ignore` | `flag-for-human`
- [x] Generates witty, on-brand replies for reply-worthy comments
- [x] **Human-in-the-loop** — replies sent to Telegram for review (NOT auto-posted)
- [x] Flagged comments highlighted for manual moderation

### 5.4 — Multi-Language Expansion ⏳ *Deferred*
- [ ] Dub voiceovers into Spanish, Portuguese, and Filipino
- [ ] Generate translated captions and hashtags
- [ ] Publish to region-specific accounts

**Outcome:** Trend-informed content. AI-drafted community engagement. Full visual autonomy awaiting API access.

---

## Timeline Estimate

```
Phase 1  ████████████████████████  Mar 2026    ✅ DONE
Phase 2  ████████████████████████  Mar 2026    ✅ DONE
Phase 3  ████████████████████████  Mar 2026    ✅ DONE (A/B defer)
Phase 4  ████████████████████████  Mar 2026    ✅ DONE (milestones pending)
Phase 5  ████████████████████████  Mar 2026    ✅ DONE (visual autonomy deferred)
```

---

## Immediate Next Actions (This Week)

1. **Set up all OAuth2 credentials** → follow `credential-setup-guide.md`
2. **Import + activate** Workflow 1, Workflow 3, and Error Handler in n8n
3. **Run the check** → `check-placeholders.ps1`
4. **Do your first test run** — manually trigger Workflow 1, create a test video, drop into `Ready_To_Post`
5. **Post consistently for 14 days** before measuring results
6. **Start Phase 2.1** (Analytics workflow) once you have 14+ days of content data
