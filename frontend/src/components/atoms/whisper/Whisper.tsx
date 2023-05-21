"use client";
import styles from './Whisper.module.css'
import {useEffect, useRef, useState} from "react";
import {useAppContext} from "@/context/AppContext";

const Whisper = ({
  content,
  date}:{
  content: string,
  date: string
}) => {
  const [editable,setEditable] = useState(false)
  const [isBlurred,setIsBlurred] = useState(true)
  const [isHover,setIsHover] = useState(false)

  const elementRef = useRef(null);
  const { bgData, setBgData } = useAppContext();


  const onMouseEnter = () => {
    const element = elementRef.current;
    if (element) {
      const { top, left, height, width } = element.getBoundingClientRect();
      setBgData({top,left,height,width,visible: true})
    }

    setIsBlurred(false)
    setIsHover(true)
  }

  const onMouseLeave = () => {
    setBgData({...bgData,visible: false})
    console.log(bgData)
    setIsBlurred(true)
    setIsHover(false)
  }

  return (
    <>
      <div  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={styles.whisper}>
        {isHover && (
          <div className={styles.date}>
            {date}
          </div>
        )}
        <div ref={elementRef}  className={`  ${isBlurred ? styles.blur : styles.unblur}`}>
          <div className={styles.content}>
            {content}
          </div>
        </div>
      </div>
    </>
  )
}

export default Whisper
