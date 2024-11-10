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

type PredictionResponse = {
    text: string;
};

export async function POST(req: NextRequest) {
    try {
        const formData = new FormData();
        const req_json = await req.json();
        const text = req_json.text;

        if (!text) {
            return new NextResponse("Text not provided", { status: 400 });
        }

        formData.append("text", text);

        const transcriptionResponse = await fetch(
            "https://0b10-185-53-198-10.ngrok-free.app/predict",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: formData as unknown as BodyInit | null | undefined,
            }
        );

        if (!transcriptionResponse.ok) {
            return new NextResponse(transcriptionResponse.statusText, {
                status: transcriptionResponse.status,
            });
        }

        const predictionResult: PredictionResponse =
            await transcriptionResponse.json();
        return NextResponse.json(predictionResult);
    } catch (error) {
        return new NextResponse("Prediction error", { status: 500 });
    }
}
