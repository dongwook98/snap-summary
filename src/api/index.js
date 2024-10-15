import axios from 'axios';

export async function fetchGeminiAI(content) {
  const res = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${
      import.meta.env.VITE_GEMINI_API_KEY
    }`,
    {
      contents: [
        {
          parts: [{ text: `다음 내용을 요약해줘 ${content}` }],
        },
      ],
    }
  );
  return res.data;
}
