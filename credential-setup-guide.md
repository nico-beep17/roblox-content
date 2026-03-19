# 🔑 OAuth2 Credential Setup Guide
> Step-by-step instructions for creating every credential your n8n workflows need.

---

## 1. OpenAI API

| Field | Value |
|-------|-------|
| **Type** | OpenAI API |
| **API Key** | Get from [platform.openai.com/api-keys](https://platform.openai.com/api-keys) |

Just paste the key. No OAuth flow needed.

---

## 2. Google Drive & Google Sheets (OAuth2)

Both use the same Google Cloud project.

### Google Cloud Console Setup
1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project (e.g., `roblox-content-machine`)
3. **APIs & Services → Library** → Enable:
   - Google Drive API
   - Google Sheets API
4. **APIs & Services → Credentials → Create Credentials → OAuth Client ID**
   - Application type: **Web application**
   - Authorized redirect URI: `https://<your-n8n-domain>/rest/oauth2-credential/callback`
   - (n8n Cloud: `https://app.n8n.cloud/rest/oauth2-credential/callback`)
5. Copy the **Client ID** and **Client Secret**

### n8n Credential (Google Drive OAuth2)
| Field | Value |
|-------|-------|
| **Client ID** | From step 5 above |
| **Client Secret** | From step 5 above |
| **Scope** | `https://www.googleapis.com/auth/drive` |
→ Click **Connect my account** → authorize

### n8n Credential (Google Sheets OAuth2)
| Field | Value |
|-------|-------|
| Same as above | Same Client ID / Secret |
| **Scope** | `https://www.googleapis.com/auth/spreadsheets` |
→ Click **Connect my account** → authorize

---

## 3. YouTube (Generic OAuth2 API)

Uses the **same** Google Cloud project from above.

### Additional Google Cloud Setup
1. **APIs & Services → Library** → Enable: **YouTube Data API v3**
2. Use the same OAuth Client ID from the Google setup

### n8n Credential (Generic OAuth2 API → name it "Google / YouTube OAuth2")
| Field | Value |
|-------|-------|
| **Client ID** | Same as Google Drive |
| **Client Secret** | Same as Google Drive |
| **Authorization URL** | `https://accounts.google.com/o/oauth2/v2/auth` |
| **Access Token URL** | `https://oauth2.googleapis.com/token` |
| **Scope** | `https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtube` |
| **Auth URI Query Parameters** | `access_type=offline&prompt=consent` |
| **Authentication** | Header |
→ Click **Connect my account** → authorize with your YouTube channel's Google account

---

## 4. TikTok (Generic OAuth2 API)

### TikTok Developer Portal Setup
1. Go to [developers.tiktok.com](https://developers.tiktok.com)
2. Create a new app → select **Content Posting API**
3. Request scopes: `video.publish` (direct post) and/or `video.upload` (draft)
4. Set redirect URI to: `https://<your-n8n-domain>/rest/oauth2-credential/callback`
5. Submit for review (TikTok reviews the app — may take days)

### n8n Credential (Generic OAuth2 API → name it "TikTok OAuth2")
| Field | Value |
|-------|-------|
| **Client ID** | From TikTok Dev Portal |
| **Client Secret** | From TikTok Dev Portal |
| **Authorization URL** | `https://www.tiktok.com/v2/auth/authorize/` |
| **Access Token URL** | `https://open.tiktokapis.com/v2/oauth/token/` |
| **Scope** | `video.publish` |
| **Auth URI Query Parameters** | `response_type=code` |
| **Authentication** | Body |
→ Click **Connect my account** → log in with your TikTok creator account

> ⚠️ TikTok access tokens expire after 24 hours. n8n auto-refreshes via the refresh token, but users must re-authenticate annually.

---

## 5. Meta / Facebook + Instagram (Generic OAuth2 API)

### Meta Developer Portal Setup
1. Go to [developers.facebook.com](https://developers.facebook.com)
2. Create a new app → select **Business** type
3. Add products: **Facebook Login**, **Instagram Graph API**
4. **Settings → Basic** → copy App ID (= Client ID) and App Secret (= Client Secret)
5. **Facebook Login → Settings** → add redirect URI:
   `https://<your-n8n-domain>/rest/oauth2-credential/callback`
6. Request permissions (App Review or use your own admin account in dev mode):
   - `instagram_basic`
   - `instagram_content_publish`
   - `pages_read_engagement`
   - `pages_manage_posts`
   - `publish_video` (for FB Reels)

### n8n Credential (Generic OAuth2 API → name it "Meta / Facebook OAuth2")
| Field | Value |
|-------|-------|
| **Client ID** | App ID from Meta Dev Portal |
| **Client Secret** | App Secret from Meta Dev Portal |
| **Authorization URL** | `https://www.facebook.com/v21.0/dialog/oauth` |
| **Access Token URL** | `https://graph.facebook.com/v21.0/oauth/access_token` |
| **Scope** | `instagram_basic,instagram_content_publish,pages_read_engagement,pages_manage_posts,publish_video` |
| **Authentication** | Header |
→ Click **Connect my account** → authorize with your FB account that owns the Page + IG Business Account

> ⚠️ Meta tokens are short-lived (1 hour) by default. n8n will exchange for a long-lived token (60 days). Set a reminder to refresh bi-monthly, or use a System User Token (non-expiring) from Business Manager.

---

## 6. Telegram Bot

1. Open Telegram → search **@BotFather** → send `/newbot`
2. Follow the prompts → copy the **Bot Token**
3. Message **@userinfobot** → copy your **Chat ID**

### n8n Credential (Telegram Bot)
| Field | Value |
|-------|-------|
| **Bot Token** | From BotFather |

Then paste your Chat ID into the Telegram nodes in both workflows.

---

## Quick Checklist After Setup

- [ ] OpenAI API key added
- [ ] Google Drive OAuth2 connected (Drive + Sheets)
- [ ] YouTube OAuth2 connected (same Google project)
- [ ] TikTok OAuth2 connected (app approved)
- [ ] Meta OAuth2 connected (IG + FB permissions granted)
- [ ] Telegram Bot created + Chat ID noted
- [ ] All `YOUR_*` placeholders replaced in both workflow JSONs
- [ ] Google Sheet imported from `content-tracker-template.csv`
- [ ] Google Drive `Ready_To_Post` and `Archive` folders created
- [ ] n8n timezone set to `Asia/Manila`
- [ ] Both workflows activated
