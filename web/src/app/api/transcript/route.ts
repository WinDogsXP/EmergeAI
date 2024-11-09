// app/api/transcribe/route.ts
import { NextRequest, NextResponse } from "next/server";
import formidable from "formidable";
import fs from "fs";
import fetch from "node-fetch";

export const config = {
    api: {
        bodyParser: false,
    },
};

type TranscriptionResponse = {
    text: string;
};

export async function POST(req: NextRequest) {
    const form = new formidable.IncomingForm();

    return new Promise((resolve, reject) => {
        form.parse(req, async (err, fields, files) => {
            if (err) {
                return reject(
                    new NextResponse("Form parsing error", { status: 500 })
                );
            }

            const filePath = (files.file as formidable.File).filepath;
            const fileStream = fs.createReadStream(filePath);
            const formData = new FormData();
            formData.append("file", fileStream, "recording.webm");
            formData.append("model", "whisper-1");

            try {
                const transcriptionResponse = await fetch(
                    "https://api.openai.com/v1/audio/transcriptions",
                    {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                        },
                        body: formData,
                    }
                );

                if (!transcriptionResponse.ok) {
                    return resolve(
                        new NextResponse(transcriptionResponse.statusText, {
                            status: transcriptionResponse.status,
                        })
                    );
                }

                const transcriptionResult: TranscriptionResponse =
                    await transcriptionResponse.json();
                resolve(NextResponse.json(transcriptionResult));
            } catch (error) {
                resolve(
                    new NextResponse("Transcription error", { status: 500 })
                );
            }
        });
    });
}
