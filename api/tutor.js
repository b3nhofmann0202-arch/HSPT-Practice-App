// Vercel serverless function.
// Keeps the Gemini API key private on the server — never sent to the browser.
// Deployed automatically by Vercel because it lives in /api.

const GEMINI_MODEL = 'gemini-3.6-flash'; // free-tier model — check ai.google.dev for the current recommended free model name, this may change
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

const TUTOR_SYSTEM_PROMPT = `You are Merit's AI tutor, helping a student prepare for the HSPT (High School Placement Test).
Your teaching style is Socratic and patient:
- Explain a small piece of a concept, then ask a short comprehension-check question before moving on.
- Do not move to the next idea until the student demonstrates real understanding — if they say "I get it, just tell me the answer" without showing understanding, kindly hold the line and ask the check question again in a different way.
- Never be harsh. Be warm, encouraging, and patient, especially with repeated mistakes.
- Keep answers focused on the five HSPT sections: Verbal Skills, Quantitative Skills, Reading Comprehension, Mathematics, Language.
- Keep responses concise — a few sentences plus one question, not a lecture.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Use POST' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server is missing GEMINI_API_KEY. Add it in Vercel project settings.' });
  }

  const { message, history } = req.body || {};
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Missing "message" in request body.' });
  }

  // history: array of {role: 'user'|'model', text: string} from prior turns in this session
  const contents = [];
  if (Array.isArray(history)) {
    history.forEach(turn => {
      contents.push({ role: turn.role === 'tutor' ? 'model' : 'user', parts: [{ text: turn.text }] });
    });
  }
  contents.push({ role: 'user', parts: [{ text: message }] });

  try {
    const response = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: TUTOR_SYSTEM_PROMPT }] },
        contents,
        generationConfig: { temperature: 0.6, maxOutputTokens: 1024, thinkingConfig: { thinkingBudget: 0 } }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: `Gemini API error: ${errText}` });
    }

    const data = await response.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I didn't catch that — could you rephrase?";
    return res.status(200).json({ reply });
  } catch (err) {
    return res.status(500).json({ error: String(err) });
  }
}
