import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import fetch from "node-fetch";
import FormData from "form-data";
import { File } from "formdata-node";
import { readFile } from "fs/promises";
import OpenAI from "openai";
export const config = {
    api: {
        bodyParser: false,
    },
};

type TranscriptionResponse = {
    text: string;
};

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;
        console.log(file);
        if (!file) {
            return new NextResponse("File not provided", { status: 400 });
        }

        // formData.append("file", fileBuffer, {
        //     filename: "recording.webm",
        //     contentType: "audio/webm",
        // });
        // formData.append("model", "whisper-1");
        console.log(process.env.OPENAI_API_KEY);
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
        // const transcriptionResponse = await fetch(
        //     "https://api.openai.com/v1/audio/transcriptions",
        //     {
        //         method: "POST",
        //         headers: {
        //             Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        //         },
        //         body: file,
        //     }
        // );
        const transcriptionResponse = await openai.audio.transcriptions.create({
            file: file,
            model: "whisper-1",
        });

        return NextResponse.json(transcriptionResponse);
    } catch (error) {
        console.log(error);
        return new NextResponse("Transcription error", { status: 500 });
    }
}
