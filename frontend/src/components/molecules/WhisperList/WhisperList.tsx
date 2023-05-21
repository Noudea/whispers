"use client";
import Whisper from "@/components/atoms/whisper/Whisper";


const WhisperList = ({ whispers }) => {
  return (
    <div>
      {whispers.map((whisper) => (
        <Whisper
          key={whisper.id}
          content={whisper.content}
          date={whisper.date}
        />
      ))}
    </div>
  )
}

export default WhisperList
