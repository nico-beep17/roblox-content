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

### 2.1 — Performance Tracker Workflow
Build a **Workflow 4: "The Analyst"** that runs daily at 8 PM PHT:
- [ ] Pull last 24h stats from each platform API:
  - YouTube Analytics API → views, AVD, CTR
  - TikTok Research API → views, likes, shares, comments
  - Instagram Insights API → reach, plays, engagement
  - Facebook Insights API → reach, video views
- [ ] Write stats back to a new **"Analytics"** tab in the Content Tracker
- [ ] OpenAI node: analyze top vs. bottom performers → generate a 3-sentence "What Worked" insight
- [ ] Telegram: send daily performance digest with top video + AI insight

### 2.2 — Content Tracker Dashboard
- [ ] Add columns to the Tracker: `Views (24h)` | `Views (7d)` | `AVD%` | `Engagement Rate` | `Top Platform`
- [ ] Conditional formatting rules: green = viral (>100K views), yellow = decent (10K–100K), red = underperforming (<10K)

### 2.3 — AI Memory (Self-Improving Prompts)
- [ ] When generating the next day's concept, feed the Daily Director the **top 3 performing videos from the past 7 days** as context
- [ ] Prompt GPT to analyze *why* they worked and generate a concept that replicates those patterns
- [ ] Track prompt versions in a `Prompt Log` sheet tab for A/B testing

**Outcome:** The system learns from its own data. Concepts trend upward in quality over time.

---

## Phase 3: Scale & Diversify 📈
> *Go from 1 video/day to 3, and expand into adjacent niches.*

### 3.1 — Multi-Niche Expansion
- [ ] Create skill files for adjacent niches:
  - 🎮 **Fortnite Cinematic Edits** — same A.R.E.M. framework, different game
  - 🧱 **Minecraft Hyper-Realistic** — "What if Minecraft was real?"
  - 🏃 **Subway Surfers / Satisfying Gameplay** — pure retention content for bottom-of-funnel
- [ ] Each niche gets its own `File Code Name` prefix (e.g., `fn-`, `mc-`, `ss-`)
- [ ] Single Content Tracker sheet with a `Niche` column filter

### 3.2 — A/B Testing Pipeline
- [ ] For each concept, generate **2 variations** (different hooks / different Easter Eggs)
- [ ] Post Variation A to TikTok + IG, Variation B to YouTube + FB
- [ ] After 48h, compare metrics → log the winner
- [ ] Feed winners into the AI Memory system

### 3.3 — Batch Production Mode
- [ ] Modify Daily Director to generate **3 concepts per morning** instead of 1
- [ ] Create per-concept sub-folders in Google Drive: `Ready_To_Post/concept-name/`
- [ ] Publisher workflow processes each folder independently (parallel execution)

### 3.4 — Long-Form Repurposing
- [ ] Build a **Workflow 5: "The Compiler"** that:
  - Groups the week's top 5 performing Shorts
  - Concatenates them into a 3–5 minute compilation with transitions
  - Generates a long-form YouTube title, description, and 16:9 thumbnail
  - Publishes to the main YouTube channel as a regular video

**Outcome:** 3 videos/day across multiple niches. Weekly long-form compilations. A/B tested hooks.

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
Phase 2  ░░░░░░░░░░░░░░░░░░░░░░░  Apr 2026    ← YOU ARE HERE
Phase 3  ░░░░░░░░░░░░░░░░░░░░░░░  May–Jun 2026
Phase 4  ░░░░░░░░░░░░░░░░░░░░░░░  Jul–Aug 2026
Phase 5  ░░░░░░░░░░░░░░░░░░░░░░░  Q4 2026+
```

---

## Immediate Next Actions (This Week)

1. **Set up all OAuth2 credentials** → follow `credential-setup-guide.md`
2. **Import + activate** Workflow 1, Workflow 3, and Error Handler in n8n
3. **Run the check** → `check-placeholders.ps1`
4. **Do your first test run** — manually trigger Workflow 1, create a test video, drop into `Ready_To_Post`
5. **Post consistently for 14 days** before measuring results
6. **Start Phase 2.1** (Analytics workflow) once you have 14+ days of content data
