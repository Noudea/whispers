"use client"
import styles from "./WhisperInput.module.css"
import {useEffect, useRef} from "react";
import {useAppContext} from "@/context/AppContext";

const WhisperInput = ({placeholder}:{placeholder: string}) => {

  const textareaRef = useRef(null);
  const { setWhisperHightlightData } = useAppContext();

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

  const init = () => {
    const textarea = textareaRef.current;
    textarea.focus()
    setHightlightPos()
  }

  const setHightlightPos = () => {
    const element = textareaRef.current;
    if (element) {
      const { top, left, height, width } = element.getBoundingClientRect();
      setWhisperHightlightData({top,left,height,width,visible: false})
    }
  }

  useEffect(() => {
    init()
    // Attach the event listener when the component mounts
    window.addEventListener("keydown", autoSize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", autoSize);
    };
  }, []);

  return (
    <>
      <textarea ref={textareaRef} placeholder={placeholder} className={`${styles.whisperInput} whisperInput`} type="text" />
    </>
  )
}

export default WhisperInput
