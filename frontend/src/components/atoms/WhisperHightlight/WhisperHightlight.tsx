"use client";
import styles from './WhisperHightlight.module.css'
import {useAppContext} from "@/context/AppContext";

const WhisperHightlight = () => {

  const { bgData } = useAppContext();


  return(
    <>
      <style jsx>{`
      .hightlight {
      height: ${bgData.height}px;
      width: ${bgData.width}px;
      opacity: ${bgData.visible ? 1 : 0};
       transform: translate3d(${bgData.left}px, ${bgData.top}px, 0px);
       will-change: transform,height,opacity;
      -webkit-transition-property: height,opacity;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-timing-function: ease-in-out;
      transition-timing-function: ease-in-out;
      transition-property:transform, height, opacity;
      }
`}</style>
      <div className={`${styles.whisperHightlight} hightlight`}>
      </div>
    </>
  )
}

export default WhisperHightlight
