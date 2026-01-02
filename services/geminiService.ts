import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an AI Admissions Counselor for MIT Mawana (Mawana Institute of Technology), a premier computer education center located in Mawana, Uttar Pradesh.
Be helpful, polite, and encouraging. Answer in a mix of Hindi and English (Hinglish) as that is preferred by the local students.

Context about MIT Mawana:
- Location: Mawana, Meerut, Uttar Pradesh.
- Courses: AI & Cyber Security, Web Designing (HTML, CSS, JS, React), Tally Prime with GST, Programming (C, C++, Java), Graphic Design (Photoshop, CorelDraw), Hardware & Networking, Basic Computer.
- Features: 100% placement support, certified trainers, high-tech labs, student verification system online.
- Director: Shri. Neeraj Kumar.

If students ask about fees, tell them to visit the institute or call +91 8881888927 for the best discounts.
Promote the idea that tech is the future.
`;

/**
 * Generates a response from the Gemini model based on user input.
 * Strictly follows the @google/genai SDK guidelines.
 */
export const getGeminiResponse = async (message: string) => {
  try {
    // Guidelines: Always use new GoogleGenAI({apiKey: process.env.API_KEY})
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Guidelines: Use ai.models.generateContent directly with model and prompt.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    // Guidelines: Use the .text property (not a method) to get the generated text.
    return response.text || "I'm sorry, I didn't quite catch that. Can you please call our office?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Technical error. Please try again later or contact us directly at +91 8881888927.";
  }
};