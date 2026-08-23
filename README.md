# Merit — setup guide

This is a real, deployable web app: a static frontend, Supabase for accounts and
the database, and one small serverless function that talks to Gemini so your
API key never touches the browser.

## 1. Create your Supabase project (free)
1. Go to supabase.com and create a new project.
2. Open the SQL editor and run everything in `supabase-schema.sql` (creates the
   `profiles` table and sets it up so each student can only see their own data).
3. Go to Project Settings > API. Copy the **Project URL** and the **anon public key**.
4. Open `index.html`, find the two lines near the top of the `<script>` block:
   ```js
   const SUPABASE_URL = 'YOUR_SUPABASE_PROJECT_URL';
   const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
   ```
   and paste in your values.

## 2. Get a free Gemini API key
1. Go to ai.google.dev (Google AI Studio) and generate an API key. No credit
   card needed for the free tier.
2. Keep this key private — don't paste it into `index.html`. It only goes into
   Vercel's environment variables (next step), never into frontend code.

## 3. Deploy to Vercel (free)
1. Push this folder to a new GitHub repository.
2. Go to vercel.com, "Add New Project," and import that repository.
3. Before deploying, add an environment variable:
   - Name: `GEMINI_API_KEY`
   - Value: the key from step 2
4. Deploy. Vercel automatically serves `index.html` and turns `api/tutor.js`
   into a live endpoint at `/api/tutor`.

That's it — no other build step. Every student who visits your Vercel URL can
sign up with just an email and password; the AI tutor talks to Gemini through
your server, so students never need their own Claude or Google API account.

## Notes for next passes
- The free Gemini tier has a shared rate limit across all students (roughly
  5–15 requests per minute total). If Merit outgrows that, the fix is turning
  on billing for the same Google AI Studio project — no code changes needed.
- `GEMINI_MODEL` in `api/tutor.js` is set to a current free-tier model name.
  Double check ai.google.dev before launch in case Google has renamed or
  retired it since this was written.
- Practice tests, skill builder, and lessons are still placeholders — those
  are the next build passes.
