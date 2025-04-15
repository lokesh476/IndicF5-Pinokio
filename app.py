import gradio as gr
from indicTTS import TTS
import torch

# Load the TTS model (this will take time on first run)
model = TTS(language="hin", device="cpu")

def tts_generate(text):
    try:
        wav = model.tts(text)
        return (22050, wav)
    except Exception as e:
        return f"Error: {str(e)}"

iface = gr.Interface(
    fn=tts_generate,
    inputs=gr.Textbox(label="Enter Hindi Text"),
    outputs=gr.Audio(label="Generated Audio", type="numpy"),
    title="IndicF5 TTS (Hindi)",
    description="Convert Hindi text to speech using AI4Bharat IndicF5."
)

iface.launch()
