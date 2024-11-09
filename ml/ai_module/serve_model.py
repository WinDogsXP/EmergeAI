import requests

def get_gpt_response(transcription_text,app):
    url = "https://api.openai.com/v1/chat/completions"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {app.config['SECRET_OPEN_AI_KEY']}"
    }
    data = {
        "model": "gpt-4",
        "messages": [
            {
                "role": "system",
                "content": (
                    'You are a helpful assistant that extracts data from a text and converts it into a JSON format suitable for filling an emergency form. Here\'s an example of what I expect: { "id112": "12345", "priority": 1, "status": "In Progress", "case": "Emergency Case", "description": "Person unconscious", "county": "County Name", "municipality": "Municipality", "street": "Street Name", "block": "Block", "floor": "Floor", "intercom": "Intercom", "location": "Reference Location", "age": 45, "ageUnit": "years", "gender": "male", "cnp": "1234567890123", "phone": "5551234567" }. DO NOT INCLUDE ANYTHING ELSE OTHER THAN THE JSON'
                )
            },
            {
                "role": "user",
                "content": f"Transcription: {transcription_text}. Format the details into a JSON that can be used to fill the form fields."
            }
        ]
    }
    response = requests.post(url, headers=headers, json=data)
    response.raise_for_status()
    return response.json()


def serve_openai():
    return "SERVE MODEL"