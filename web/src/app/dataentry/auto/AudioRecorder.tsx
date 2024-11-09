import { useState, useRef } from "react";

type StructuredData = {
    [key: string]: string | number;
};
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
export default function AudioRecorder() {
    const [isRecording, setIsRecording] = useState(false);
    const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
    const [audioUrl, setAudioUrl] = useState<string>("");
    const [transcriptionResult, setTranscriptionResult] = useState<string>("");
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
        });
        mediaRecorderRef.current = new MediaRecorder(stream, {
            mimeType: "audio/webm",
        });

        mediaRecorderRef.current.ondataavailable = async (event: BlobEvent) => {
            console.log(event.data);

            setAudioChunks((prevChunks) => [...prevChunks, event.data]);
            console.log(audioChunks);
        };

        mediaRecorderRef.current.onstop = () => {
            console.log(audioChunks);
            const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
            setAudioUrl(URL.createObjectURL(audioBlob));
        };

        mediaRecorderRef.current.start();
        setIsRecording(true);
        setAudioChunks([]);
    };

    const stopRecording = () => {
        mediaRecorderRef.current?.stop();
        setIsRecording(false);
    };

    const exportAudio = () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
        const audioUrl = URL.createObjectURL(audioBlob);
        const downloadLink = document.createElement("a");
        downloadLink.href = audioUrl;
        downloadLink.download = "recording.webm";
        downloadLink.click();
    };

    const transcribeAudio = async () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
        const formData = new FormData();
        formData.append("file", audioBlob, "recording.webm");

        try {
            const transcriptionResponse = await fetch("/api/transcribe", {
                method: "POST",
                body: formData,
            });

            if (!transcriptionResponse.ok) {
                throw new Error(`Error: ${transcriptionResponse.statusText}`);
            }

            const transcriptionData = await transcriptionResponse.json();
            const transcriptionText = transcriptionData.text;

            const gptResponse = await fetch("/api/format", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ transcriptionText }),
            });

            if (!gptResponse.ok) {
                throw new Error(`Error from GPT-4: ${gptResponse.statusText}`);
            }

            const gptData = await gptResponse.json();
            setTranscriptionResult(gptData.choices[0].message.content);
        } catch (error) {
            console.error(
                "Error processing transcription or GPT request:",
                error
            );
            setTranscriptionResult("Action failed. Check console.");
        }
    };

    return (
        <div>
            <button onClick={startRecording} disabled={isRecording}>
                Start Recording
            </button>
            <button onClick={stopRecording} disabled={!isRecording}>
                Stop Recording
            </button>
            <button onClick={exportAudio} disabled={!audioUrl}>
                Export Audio
            </button>
            <button onClick={transcribeAudio} disabled={!audioUrl}>
                Transcribe Audio
            </button>

            {audioUrl && <audio src={audioUrl} controls />}
            <p>{transcriptionResult}</p>
        </div>
    );
}
