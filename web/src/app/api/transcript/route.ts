import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import fetch from "node-fetch";
import FormData from "form-data";
import { File } from "formdata-node";
import { readFile } from "fs/promises";

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
        const formData = new FormData();
        const file = req.body.get("file") as File;

        if (!file) {
            return new NextResponse("File not provided", { status: 400 });
        }

        const fileBuffer = await readFile(file.path);
        formData.append("file", fileBuffer, {
            filename: "recording.webm",
            contentType: "audio/webm",
        });
        formData.append("model", "whisper-1");

        const transcriptionResponse = await fetch(
            "https://api.openai.com/v1/audio/transcriptions",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                },
                body: formData as unknown as BodyInit,
            }
        );

        if (!transcriptionResponse.ok) {
            return new NextResponse(transcriptionResponse.statusText, {
                status: transcriptionResponse.status,
            });
        }

        const transcriptionResult: TranscriptionResponse =
            await transcriptionResponse.json();
        return NextResponse.json(transcriptionResult);
    } catch (error) {
        return new NextResponse("Transcription error", { status: 500 });
    }
}
