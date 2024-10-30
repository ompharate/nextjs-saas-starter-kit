import { askGeminiAI } from "@/utils/gemini";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { word } = await req.json();

  if (!word) {
    return NextResponse.json({
      success: false,
      message: "word not found",
    });
  }

  try {
    const response = await askGeminiAI(word);

    return NextResponse.json({
      success: true,
      data: response,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "something went wrong",
    });
  }
}
