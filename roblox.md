# 🚀 The Ultimate AI Roblox Content Machine: Master Blueprint

**Project:** Hyper-Viral Short-Form Video Automation & Creation
**Niche:** Roblox Gaming (Cinematic Lore & Hyper-Realistic Edits)
**Target Audience:** US & Canada (Gen Alpha, Gen Z, Young Adults)
**Platforms:** YouTube Shorts, TikTok, Instagram Reels, Facebook Reels
**Base Location:** Panabo, Philippines (PHT)
**Target Timezone:** US Eastern Time (EDT/EST)

---

## 📊 Section 1: Logistics & Specifications

### 1. The Content Format
Standard Roblox screen-recordings are highly saturated. Your competitive advantage is using cutting-edge 2026 AI tools to create **"Cinematic Roblox Lore"**. You will take familiar, blocky games (*Blox Fruits, DOORS, Brookhaven, Dress to Impress*) and turn them into hyper-realistic, high-stakes 3D cinematic shorts that look like Unreal Engine 5 masterpieces.

### 2. The Golden Duration
*   **Length:** 15 to 35 seconds.
*   **Why:** This is the mathematical sweet spot. It is long enough to tell a micro-story but short enough to achieve the **75%+ Average View Duration (AVD)** required by TikTok and YouTube Shorts to push the video to the broader algorithm.
*   **Format:** Native 9:16 Vertical (No cropping needed).

### 3. Posting Schedule & Frequency
To dominate the North American market, you must post when they are awake, out of school, or off work.
*   **Frequency:** 1 to 2 times per day, consistently. 
*   **Target Time (US/Canada):** 3:00 PM to 6:00 PM EDT (Catches the East Coast kids getting out of school and the West Coast on lunch break).
*   **Your Time (Panabo, PHT):** Because PHT is exactly 12 hours ahead of EDT, 3:00 PM in New York is **3:00 AM in Panabo**. *This timezone reality is exactly why the n8n automation pipeline is mandatory.* You will build the videos manually during your day, and the system will post them while you sleep.

---

## 🧠 Section 2: The Psychological Content Formula (A.R.E.M.)

To force the algorithm to push your videos to millions of viewers, every single video must be engineered using this exact psychological framework:

### 1. Attract (The 3-Second Pattern Interrupt)
*   **The Goal:** Stop the scroll instantly. If they leave before 3 seconds, the video dies.
*   **The Execution:** Open with a jarring visual. Gamers expect low-poly Roblox graphics. Hit them with a hyper-realistic **Nano Banana 2** render of a terrifying *DOORS* monster or a glowing, cinematic *Blox Fruit*. 
*   **The Audio:** Use **Veo 3.1** to generate a massive sound effect (bass drop, glass breaking, monster roar) that hits *exactly on frame 1*.
*   **The Text:** Use a "Curiosity Gap" text hook on screen (e.g., *"POV: You just awakened the most illegal fruit..."*).

### 2. Retain (The 2.5-Second Pacing Rule)
*   **The Goal:** Do not let their brain get bored. The eye must be restimulated every 2.5 seconds.
*   **The Execution:** Never use one static 15-second AI clip. Generate 3 to 4 different camera angles of the same scene using Veo 3.1. Cut between them rapidly in your editing software. 
*   **Captions:** Add bold, single-word-at-a-time animated captions in the direct center of the screen. Color-code important words (e.g., Red for "DANGER", Gold for "SECRET") to lock their eyes to the middle of the phone.

### 3. Engage (The Comment Trap)
*   **The Goal:** Force viewers to comment and share without begging them to.
*   **The Execution (Visual):** Use Nano Banana 2 to hide an "Easter Egg" in the background (e.g., a "Guest 666" shadow in a window, or an ultra-rare pet on a shelf). **Do not mention it in the voiceover.** Viewers will spot it and rush to the comments: *"Wait, who else saw Guest 666 at 0:04?!"*
*   **The Execution (Audio):** Have your AI voiceover make a slightly controversial statement about a game's meta (e.g., *"Everyone knows the Kitsune fruit takes zero skill..."*). Angry players will flood the comments to debate you. 

### 4. Multiply (The Seamless Loop)
*   **The Goal:** Achieve a Watch Rate of over 100%.
*   **The Execution:** Write the script so the final sentence connects perfectly into the first sentence. 
    *   *End of video:* "...and that is the real reason you should never trust..."
    *   *Start of video:* "...the new Brookhaven update! Because..."
*   When the video loops automatically, it sounds like one continuous sentence. The viewer watches an extra 3-4 seconds before realizing the video restarted.

---

## 🛠️ Section 3: The Tool Stack & Setup

You are operating a "Human-in-the-Loop" (HITL) system. Automation does the thinking and publishing; you act as the Creative Director.

### The Tools
1.  **Nano Banana 2 (Base Image Generation):** Perfect character consistency. You will upload reference images of your custom Roblox avatar and prompt it to place that exact character in hyper-realistic environments.
2.  **Veo 3.1 (Cinematic Motion & Audio):** "Ingredients to Video" and native audio generation. Upload your Nano Banana 2 image as an ingredient and prompt for dynamic camera movement and perfectly synced audio (footsteps, explosions) at the same time.
3.  **n8n (The Studio Manager):** Automates your idea generation, SEO, metadata, and cross-platform publishing.
4.  **Google Antigravity (The Developer):** An AI agent used specifically to write the complex JSON code required to connect n8n to social media APIs (TikTok, Meta) without you having to read documentation.
5.  **CapCut / Premiere Pro (Assembly):** Your manual editing bay for rapid cuts, AI voiceovers, and center-screen captions.

### The Prerequisites (Set this up first)
1. **Google Drive:** Create a main folder. Inside, create two sub-folders: `Ready_To_Post` and `Archive`.
2. **Google Sheets:** Create a "Roblox Content Tracker" sheet with the following exact columns: 
   * `Date` | `File Code Name` | `Title Concept` | `Hook` | `Script` | `Status`

---

## ⚙️ Section 4: The n8n Automation Architecture

Because an automation flow cannot "pause" for hours while you manually edit a video, the system is split into two separate workflows, connected by your Google Sheet "Brain".

### 🌅 Workflow 1: "The Daily Director" (Idea Generation)
*This runs autonomously every morning so you wake up to a production brief.*
1.  **Schedule Trigger Node:** Set to fire at **8:00 AM PHT** daily.
2.  **OpenAI Node:** Sends the *Daily Director System Prompt* (see Section 6) to generate a viral Roblox concept, hooks, Veo/Banana prompts, and a unique `File Code Name` (e.g., `bloxfruits-dragon-glitch`).
3.  **Google Sheets Node (Append Row):** Logs the generated concept and the `File Code Name` into your "Roblox Content Tracker" spreadsheet. Sets Status to "Pending".
4.  **Telegram/Discord Node:** Sends the formatted brief directly to your phone. 

### 👨‍🎨 Phase 2: Your Daily SOP (Manual Creation)
*This is your actual workday in Panabo. You handle the creative heavy lifting.*
1.  **Review the Brief:** Read the Telegram message over breakfast.
2.  **Base Generation (Nano Banana 2):** Paste the provided image prompts. Upload your character reference images. Tweak and regenerate until you have 3-4 perfect, consistent 9:16 base images of the scene. Make sure your "Easter Egg" is subtle.
3.  **Motion Generation (Veo 3.1):** Use "Ingredients to Video." Upload your Nano Banana 2 images. Paste the Veo 3.1 motion and audio prompts. Generate the clips.
4.  **Assembly (CapCut):** Import clips. Trim so a cut happens every 2-3 seconds. Add your AI voiceover (US accent), center-screen captions, and ensure the audio loops perfectly.
5.  **Export & Hand-off:** Save the video strictly as the **File Code Name** (e.g., `bloxfruits-dragon-glitch.mp4`). Drag and drop the file into your Google Drive `Ready_To_Post` folder. **You are done for the day.**

### 🌃 Workflow 3: "The Publisher" (Automated SEO & Distribution)
*This triggers the moment you upload your finished file. It handles all metadata and schedules the post for 3:00 AM PHT (3:00 PM EDT).*
1.  **Google Drive Trigger Node:** Listens to the `Ready_To_Post` folder. Fires instantly when a new `.mp4` is uploaded.
2.  **String Manipulation Node:** Strips the `.mp4` from the filename to extract the exact `File Code Name`.
3.  **Google Sheets Node (Lookup Row):** Searches the Tracker spreadsheet for that `File Code Name` to recall the specific context of the video.
4.  **OpenAI Node (Metadata Gen):** Reads the spreadsheet data and generates: 
    *   A clickbait YouTube Title & SEO Description.
    *   Engaging TikTok/IG Captions with US Gen-Z slang.
    *   5-7 trending US hashtags.
5.  **Date/Time Node:** Calculates the timestamp for the upcoming **3:00 PM EDT** and converts it into standard Epoch time for API scheduling.
6.  **Social Media Publishing Nodes:** Connects to YouTube Shorts API, TikTok Content API, and Meta Graph API (IG/FB Reels). It passes the `.mp4`, the AI captions, and the scheduled timestamp. *(Use Google Antigravity to build these nodes).*
7.  **Google Drive Node (Move File):** Moves the video from `Ready_To_Post` to the `Archive` folder to prevent duplicate posting.
8.  **Google Sheets Node (Update Row):** Changes Status to "Scheduled".
9.  **Telegram/Discord Node:** Sends you a success message: *"✅ [File Code Name] successfully SEO-optimized and scheduled across 4 platforms for 3 PM US Time!"*

---

## 📋 Section 5: The Master Prompt Library

### 1. n8n "Daily Director" Prompt (For OpenAI Node in Workflow 1)
*Paste this into the n8n OpenAI node to generate your daily script briefs.*

> Act as an elite short-form video strategist for the North American Gen Z/Alpha Roblox market. Your goal is maximum retention, engagement, and virality. Generate a script for a 20-second cinematic, hyper-realistic Roblox video based on current trends (DOORS, Blox Fruits, Dress to Impress, Brookhaven, etc.).
> 
> Output strictly in this exact format:
> 
> **File Code Name:** [Generate 2-3 words separated by dashes, e.g., doors-figure-chase]
> **The Hook (0-3s):** [Provide a bold on-screen text hook and a disruptive Nano Banana 2 visual prompt designed to interrupt scrolling.]
> **The Pacing (3-15s):** [Provide the US-slang voiceover script. Provide 3 distinct Veo 3.1 motion/camera prompts for rapid cutting. Specify intense audio sound effects for Veo 3.1 to generate natively.]
> **The Engagement Trap:** [Specify one hidden 'Easter Egg' to put in the background of the images OR a controversial debate statement for the voiceover to drive comments.]
> **The Infinite Loop:** [Ensure the last word of the voiceover script connects seamlessly grammatically into the first word of the hook.]

### 2. Nano Banana 2 Scene Prompt Template
*Use this when generating your initial still frames.*

> A hyper-realistic, cinematic 3D render of a blocky Roblox character in a [Describe Setting: e.g., dark, neon-lit trading hub]. The character is looking [Emotion/Action]. 
> Visual Style: Unreal Engine 5 aesthetic, volumetric fog, dramatic rim lighting, highly detailed 8k textures. 
> Easter Egg: In the heavily blurred background out of focus, place a subtle [Insert hidden object/text]. 
> Format: Native 9:16 vertical aspect ratio. 
> [Note: Attach Character Reference Images for Consistency]

### 3. Veo 3.1 Cinematic Motion & Audio Prompt Template
*Use this when converting your Nano Banana 2 image into a video clip.*

> [Upload Nano Banana 2 Image as 'Ingredient']
> Visual Prompt: Dynamic, fast-paced [Camera Movement: e.g., drone push-in / shaky handheld follow-shot] of the Roblox character [Action: e.g., sprinting away from a glowing explosion]. Photorealistic physics, cinematic motion blur, dramatic lighting shift. Native 9:16 aspect ratio. Keep the visual fidelity identical to the ingredient image.
> Audio Prompt: [Describe Sound exactly synchronized with frame 1: e.g., Heavy frantic footsteps on metal grates, a sudden cinematic bass drop, and a distant monster screeching echoing through the hall].

### 4. YouTube Long-Form / Wide Thumbnail Prompt (If Needed)
*If you ever need a 16:9 thumbnail for long-form or Facebook.*

> A highly clickable, high-contrast YouTube thumbnail. A 3D hyper-realistic Roblox avatar with an exaggerated shocked expression looking at a [Focal Point: e.g., massive glowing treasure chest or terrifying monster]. MrBeast-style rim lighting (bright magenta and cyan), vibrant colors, heavily blurred background. Ensure the main subject is massive and takes up 60% of the frame so the image pops cleanly on mobile screens. Aspect ratio 16:9.

### 5. Google Antigravity Code-Gen Prompt
*Do not waste hours reading API documentation. Open Google Antigravity's Agent Manager and paste this prompt. It will write the exact n8n HTTP Request node code for you to paste into your workflow canvas.*

> I am building an automated publishing pipeline in n8n. I need to bypass the standard nodes and use HTTP Request nodes. 
> 
> Task: Write the complete JSON for an HTTP Request Node in n8n that authenticates via OAuth2 and uploads a vertical video (.mp4) from Google Drive to the [Insert Platform: TikTok Content API / Meta Graph API for Instagram Reels / YouTube Data API v3 for Shorts]. 
> 
> Requirements: Ensure the code structure includes the payload to attach a text caption array, apply hashtags, and schedule the post for a future timestamp using epoch time. Output the raw n8n node JSON code block ONLY so I can copy it and paste it directly onto my blank n8n canvas.