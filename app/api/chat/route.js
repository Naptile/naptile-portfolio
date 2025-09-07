import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", // Fast + cheap model
        messages: [
          { role: "system", content: "You are Naptile Peter’s portfolio assistant. Be helpful, professional, and concise." },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await response.json();
    return NextResponse.json({ reply: data.choices[0].message.content });
  } catch (error) {
    return NextResponse.json({ reply: "⚠️ Error connecting to AI. Try again later." });
  }
}
