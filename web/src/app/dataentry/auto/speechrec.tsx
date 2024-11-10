import React, { useState } from "react";

const SpeechRecButton: React.FC = () => {
    const [isListening, setIsListening] = useState(false);

    const handleButtonClick = () => {
        setIsListening(!isListening);
        // Add speech recognition logic here
    };

    return (
        <button onClick={handleButtonClick}>
            {isListening ? "Stop Listening" : "Start Listening"}
        </button>
    );
};

export default SpeechRecButton;
