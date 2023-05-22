"use client"
import styles from "./WhisperInput.module.css"
import {useEffect, useRef} from "react";
import {useAppContext} from "@/context/AppContext";

const WhisperInput = () => {
  const textareaRef = useRef(null);
  const { whisperHightlightData, setWhisperHightlightData } = useAppContext();

  const autoSize = (event) => {
    const textarea = textareaRef.current;
    // Handle the key press event here
    if(event.shiftKey && event.key === "Enter") {
      textarea.style.height = "auto"; // Reset the height to auto
      textarea.style.height = `${textarea.scrollHeight+24}px`; //
    }
    if(event.key === "Backspace") {
      textarea.style.height = "auto"; // Reset the height to auto
      textarea.style.height = `${textarea.scrollHeight-24}px`; //
    }
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
    }
  }

  useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener("keydown", autoSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", autoSize);
    };
  }, []);


  const onMouseEnter = () => {
    const element = textareaRef.current;
    if (element) {
      const { top, left, height, width } = element.getBoundingClientRect();
      setWhisperHightlightData({top,left,height,width,visible: true})
    }
  }

  const onMouseLeave = () => {
    setWhisperHightlightData({...whisperHightlightData,visible: false})
    console.log(whisperHightlightData)
  }

  return (
    <>
      <textarea onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ref={textareaRef} placeholder={`What's on your mind today ?`} className={`${styles.whisperInput} whisperInput`} type="text" />
    </>
  )
}


export default WhisperInput
